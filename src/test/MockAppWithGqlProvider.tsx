/**
 * Wrapper of MockedProvider from GraphQl to wrap components in a mocked version of GraphQl to
 * easily allow for testing component that makes GraphQlqueries
 * Ref: https://www.apollographql.com/docs/react/api/react/testing/
 * Ref: https://www.apollographql.com/docs/react/development-testing/testing/
 */
import { FunctionComponent, ReactChildren, ReactNode } from 'react';
import { MockedProvider, MockedResponse } from '@apollo/client/testing';

export type MockedResponseType = MockedResponse<Record<string, unknown>>;

export type MockAppWithGqlProviderProps = {
  children?: ReactNode | ReactChildren;
  mocks?: MockedResponse<Record<string, unknown>>[];
};

/**
 * Returns a Mock application wrapped in Mocked GraphQl Provider only
 * @param {MockAppWithGqlProviderProps} props to pass in
 * @returns Application with Mock GraphQl Provider
 */
const MockAppWithGqlProvider: FunctionComponent<MockAppWithGqlProviderProps> = ({
  mocks = [],
  children,
}: MockAppWithGqlProviderProps) => {
  return (
    <MockedProvider mocks={mocks} addTypename={false}>
      {children}
    </MockedProvider>
  );
};

export default MockAppWithGqlProvider;
