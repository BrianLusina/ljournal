import { mockApiSuccessResponse } from '@testUtils/MockApiUtils';
import faker from 'faker';
import config from '@config';
import apiConfig from '@apiConfig';
import emailJsApi from './EmailApi';

const { title } = config;
const {
  emailJs: { baseUrl, serviceId, templateId, userId },
} = apiConfig;

describe('EmailJsApi', () => {
  afterEach(() => jest.resetAllMocks());

  describe('Send email', () => {
    const email = faker.internet.email();
    const name = faker.name.firstName();
    const message = faker.lorem.sentences();

    const payload: SendEmailRequest = {
      email,
      name,
      message,
    };

    it('should send email with valid parameters successfully', async () => {
      const expectedResponse = {
        ...mockApiSuccessResponse,
      };

      const expectedPayload = {
        serviceId,
        templateId,
        userId,
        templateParams: {
          ...payload,
          site: title,
          reply_to: payload.email,
        },
      };

      const restClientSpy = jest
        .spyOn(emailJsApi.restClient, 'post')
        .mockResolvedValue(expectedResponse);

      await emailJsApi.send(payload);

      expect(restClientSpy).toHaveBeenCalledTimes(1);
      expect(restClientSpy).toHaveBeenCalledWith(`${baseUrl}/send`, expectedPayload);
    });

    it('should throw exception when there is a failure sending email', async () => {
      const error = new Error('Failed request');
      const expectedPayload = {
        serviceId,
        templateId,
        userId,
        templateParams: {
          ...payload,
          site: title,
          reply_to: payload.email,
        },
      };
      const restClientSpy = jest.spyOn(emailJsApi.restClient, 'post').mockRejectedValue(error);

      const expectedErrMsg = `Failed to send email`;

      await expect(emailJsApi.send(payload)).rejects.toThrow(expectedErrMsg);

      expect(restClientSpy).toHaveBeenCalledTimes(1);
      expect(restClientSpy).toHaveBeenCalledWith(`${baseUrl}/send`, expectedPayload);
    });
  });
});
