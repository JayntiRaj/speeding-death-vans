import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { blueGrey } from '@material-ui/core/colors';

import App from './components/App';

const mountNode = document.getElementById('root');

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    primary: blueGrey,
  },
});


ReactDOM.render(
  <Suspense fallback={<div>Error! Please refresh the page</div>}>
    <MuiThemeProvider theme={theme}>
          <App />
    </MuiThemeProvider>
  </Suspense>,
  mountNode
);
