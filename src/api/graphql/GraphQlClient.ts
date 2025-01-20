import { ApolloClient, HttpLink, from } from '@apollo/client';
import api from '@apiConfig';
import { authMiddleware, retryMiddleware, errorMiddleware } from './middleware';
import Cache from './Cache';

const {
  cms: { graphQlUrl, spaceId, environment },
} = api;

const httpLink = new HttpLink({
  uri: `${graphQlUrl}/content/v1/spaces/${spaceId}/environments/${environment}`,
});

const client = new ApolloClient({
  link: from([authMiddleware, retryMiddleware, errorMiddleware, httpLink]),
  cache: Cache,
});

export default client;
