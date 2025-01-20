import Bugsnag from '@bugsnag/js';
import BugsnagPluginReact from '@bugsnag/plugin-react';
import config from '@config';

const {
  title,
  bugsnag: { apiKey },
  env: { nodeEnv: NODE_ENV, env: ENV },
} = config;

export const initializeBugSnag = (): void => {
  if (NODE_ENV === 'production' || ENV === 'production') {
    Bugsnag.start({
      apiKey,
      plugins: [new BugsnagPluginReact()],
      onError: (event) => {
        event.addMetadata(title, {
          environment: ENV,
        });
      },
    });
  }
};

export const captureBugSnagError = (error: Error): void => {
  if (NODE_ENV === 'production' || ENV === 'production') {
    Bugsnag.notify(error);
  }
};
