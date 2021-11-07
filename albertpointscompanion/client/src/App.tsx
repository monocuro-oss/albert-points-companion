import React, { FC } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useRouteMatch,
} from 'react-router-dom';

import { styledComponentTheme, GlobalStyle } from '@/theme';

const App: FC = () => {
  return (
    <Switch>
      <Route path="/commands">Commands</Route>
      <Route path="/">Home</Route>
    </Switch>
  );
};

const AppWrapper: FC = () => {
  return (
    <Router>
      <ThemeProvider theme={styledComponentTheme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </Router>
  );
};

export default AppWrapper;
