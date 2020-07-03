import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from "@material-ui/styles";
import { CssBaseline } from "@material-ui/core";
import themes from './themes';
import App from "./components/App";
import * as serviceWorker from './serviceWorker';
import { LayoutProvider } from "./context/LayoutContext";
import { UserProvider } from "./context/UserContext";
ReactDOM.render(
  <LayoutProvider>
    <UserProvider>
      <React.StrictMode>
        <ThemeProvider theme={themes.default}>
          <CssBaseline />
          <App />
        </ThemeProvider>
      </React.StrictMode>
    </UserProvider>
  </LayoutProvider>,
  document.getElementById('root')
);
serviceWorker.unregister();
