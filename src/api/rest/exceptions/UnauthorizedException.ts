import { UNAUTHORIZED_ERROR_MESSAGE } from '../constants';

export default class UnauthorizedException extends Error {
  constructor(message: string) {
    super(message);
    this.message = message || UNAUTHORIZED_ERROR_MESSAGE;
  }
}
