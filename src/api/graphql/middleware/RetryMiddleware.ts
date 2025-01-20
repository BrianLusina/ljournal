import { RetryLink } from '@apollo/client/link/retry';

const retryLink = new RetryLink();

export default retryLink;
