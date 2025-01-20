import { ApolloLink } from '@apollo/client';
import api from '@apiConfig';

const authMiddleware = new ApolloLink((operation, forward) => {
  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
      Authorization: `Bearer ${api.cms.apiKey}`,
    },
  }));

  return forward(operation);
});

export default authMiddleware;
