import React from 'react';
import { Provider } from 'react-redux';
import { StatusBar } from 'expo-status-bar';

import store from './src/store/store';
import StackNavigator from './src/navigation';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <StatusBar style="auto" />
      <StackNavigator />
    </Provider>
  );
};

export default App;