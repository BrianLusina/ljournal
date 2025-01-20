/* eslint-disable @typescript-eslint/no-explicit-any */
import { InMemoryCache } from '@apollo/client';

const inMemoryCache = new InMemoryCache({
  typePolicies: {
    User: {
      keyFields: ['login', 'avatarUrl'],
      fields: {
        repositories: {
          keyArgs: false,
          merge(existing: any, incoming: any, { mergeObjects }) {
            return mergeObjects(existing, incoming);
          },
        },
      },
    },
    RepositoryConnection: {
      keyFields: ['pageInfo', 'nodes'],
      fields: {
        nodes: {
          merge(existing: any = [], incoming: any) {
            return [...existing, ...incoming];
          },
        },
      },
    },
  },
});

export default inMemoryCache;
