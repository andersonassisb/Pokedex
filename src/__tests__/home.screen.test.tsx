import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { render } from '@testing-library/react';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from '../screens/home.screen';

let mockItems: Record<string, any> = {};
jest.mock('@react-native-async-storage/async-storage', () => ({
  setItem: jest.fn((key: string, item: string) => {
    mockItems[key] = item;
  }),
  getItem: jest.fn(async (key: string) => {
    return Promise.resolve(mockItems[key] ?? null);
  }),
  removeItem: jest.fn((key: string) => {
    delete mockItems[key];
  }),
  getAllKeys: jest.fn(() => {
    return Promise.resolve(Object.keys(mockItems));
  }),
  multiGet: jest.fn(() => {
    const result = Object.keys(mockItems).map((key) => [key, mockItems[key]]);
    return Promise.resolve(result);
  }),
}));

const mockStore = configureStore([]);
const store = mockStore({
  pokemons: {
    data: [],
    offset: 0,
    status: 'idle',
  },
});

store.dispatch = jest.fn();

jest.useFakeTimers({
  legacyFakeTimers: true,
});

describe.skip('Home Screen', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  afterAll(() => {
    jest.resetAllMocks();
  });

  it('should render the Home screen correctly', () => {
    render(<HomeScreen />, {
      wrapper: ({ children }) => (
        <NavigationContainer>
          <Provider store={store}>{children}</Provider>
        </NavigationContainer>
      ),
    });
  });
});
