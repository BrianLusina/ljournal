/**
 * Wrapper of Mocked App for testing
 */
import { FunctionComponent, ReactChildren, ReactNode } from 'react';
import MockAppWithRouter from './MockAppWithRouter';
import MockAppWithGqlProvider, { MockAppWithGqlProviderProps } from './MockAppWithGqlProvider';

type MockAppProps = { children?: ReactNode | ReactChildren } & MockAppWithGqlProviderProps;

/**
 * Returns a Mock application wrapped in Mocked GraphQl Provider only
 * @param {MockAppProps} props to pass in
 * @returns Application with Mock GraphQl Provider
 */
const MockApp: FunctionComponent<MockAppProps> = ({ mocks, children }: MockAppProps) => {
  return (
    <MockAppWithGqlProvider mocks={mocks}>
      <MockAppWithRouter>{children}</MockAppWithRouter>
    </MockAppWithGqlProvider>
  );
};

export default MockApp;
