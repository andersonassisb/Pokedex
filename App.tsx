import React from 'react';
import { Provider } from 'react-redux';
import store from './app/store/store';
import StackNavigator from './app/navigation';
import { StatusBar } from 'expo-status-bar';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <StatusBar style="auto" />
      <StackNavigator />
    </Provider>
  );
};

export default App;