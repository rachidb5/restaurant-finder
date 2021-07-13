import React from 'react';
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components';

import store from './redux/store'
import theme from './theme';
import Home from './pages/home/index'

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
