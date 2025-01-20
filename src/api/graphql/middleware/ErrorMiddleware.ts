import { onError } from '@apollo/client/link/error';
import { captureException, captureScope, Levels } from '@services/monitoring';

// Log any GraphQL errors or network error that occurred
const errorMiddleware = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) => {
      const scope = captureScope(
        {
          type: 'graphql',
          level: 'error' as Levels,
          category: 'graphql',
          data: {
            message,
            locations,
            path,
          },
          message,
          timestamp: Date.now(),
        },
        'error' as Levels,
      );
      captureException(
        Error(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`),
        scope,
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
      );
    });
  if (networkError) {
    captureException(Error(`[Network Error]: : ${networkError}`));
  }
});

export default errorMiddleware;
