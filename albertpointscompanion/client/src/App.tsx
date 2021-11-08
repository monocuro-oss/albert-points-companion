import React, { FC } from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { styledComponentTheme, GlobalStyle } from '@/theme';
import { home, pages } from '@/pages';

const App: FC = () => {
  return (
    <Switch>
      {[...pages, home].map((page, index) => (
        <Route path={page.path} key={index}>
          {page.component}
        </Route>
      ))}
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
