import { FunctionComponent, ReactChildren, ReactNode } from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory, History } from 'history';

export const memoryHistory = createMemoryHistory();

type MockAppRouterProps = {
  children?: ReactNode | ReactChildren;
  history?: History;
};

/**
 * Returns a Mock application wrapped in Router only
 * @param {MockAppProps} props to pass in
 * @returns Router Application
 */
const MockAppWithRouter: FunctionComponent<MockAppRouterProps> = ({
  children,
  history = memoryHistory,
}: MockAppRouterProps) => {
  return <Router history={history}>{children}</Router>;
};

export default MockAppWithRouter;
