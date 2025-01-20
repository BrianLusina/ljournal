export default class BaseApiException extends Error {
  constructor(message: string) {
    super(message);
    this.message = message;
  }
}
