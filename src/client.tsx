import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Loadable from 'react-loadable';
import { ThemeProvider } from '@material-ui/styles';
import theme from 'theme';
import RootStore from 'stores';
import { BrandEnum } from 'common/enumerations/BrandEnum';
import ThemeManager from 'utilities/ThemeManager';
import ConfigurationManager from 'common/Manager/ConfigurationManager';
import _ from 'lodash'
import { createBroswerContext } from 'utilities/useSSE';

const themes = ThemeManager.setupTheme(BrandEnum.TTC);
import App from './App';
import InitializeManager from 'common/Manager/InitializeManager';
const isProduction = process.env.NODE_ENV == 'production';

if (typeof window !== 'undefined' && isProduction === false) {
  require('assets/fonts/font.css');
}

const root = document.getElementById('root');

const data = _.get(window, '__STATE');
InitializeManager.default.rehydrate(data);
// document.getElementById('__STATE')?.remove()
// delete window.__STATE;

window.document.onreadystatechange = (ev: Event) => {
  render(App);
};

if (module.hot) {
  module.hot.accept('./App', () => {
    const NewApp = require('./App').default;
    render(NewApp);
  });
}

function render(Root: any) {
  const BroswerDataContext = createBroswerContext();

  Loadable.preloadReady().then(() => {
    RootStore.create();
    RootStore.default.setThemeStore(themes);
    hydrate(
      <BroswerDataContext>
        <BrowserRouter >
          <ThemeProvider theme={theme}>
            <Root />
          </ThemeProvider>
        </BrowserRouter>
      </BroswerDataContext>,
      root
    );
  });
}

// import * as OfflinePluginRuntime from 'offline-plugin/runtime';

// OfflinePluginRuntime.install();