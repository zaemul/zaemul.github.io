import ReactGA from 'react-ga';

const TRACKING_ID = 'UA-189639962-1';

function init() {
  // Enable debug mode on the local development environment
  const isDev = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';
  ReactGA.initialize(TRACKING_ID, {
    // debug: isDev,
    debug: false,
    gaOptions: {
      siteSpeedSampleRate: 100,
    },
  });
}

function sendEvent(payload) {
  ReactGA.event(payload);
}

function sendPageview(path) {
  ReactGA.set({ page: path });
  ReactGA.pageview(path);
}

export default {
  init,
  sendEvent,
  sendPageview,
};
