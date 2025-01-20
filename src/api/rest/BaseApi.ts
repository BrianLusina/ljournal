import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { camelCaseObjectKeys, snakeCaseObjectKeys } from '@utils';
import {
  BAD_REQUEST_STATUS_CODE,
  INTERNAL_SERVER_ERROR_STATUS_CODE,
  NOT_FOUND_STATUS_CODE,
  UNAUTHORIZED_ERROR_MESSAGE,
  UNAUTHORIZED_STATUS_CODE,
} from './constants';
import RestClient from './RestClient';
import { BaseApiException, UnauthorizedException } from './exceptions';

abstract class BaseApi {
  readonly restClient: RestClient;

  baseUrl: string;

  public constructor(baseUrl: string, restClient?: RestClient) {
    this.baseUrl = baseUrl;
    if (restClient) {
      this.restClient = restClient;
    }
    this.restClient = new RestClient(baseUrl);

    this.initializeResponseInterceptor();
    this.initializeRequestInterceptor();
  }

  protected initializeResponseInterceptor = (): void => {
    this.restClient.axiosInstance.interceptors.response.use(this.handleResponse, this.handleError);
  };

  protected initializeRequestInterceptor = (): void => {
    this.restClient.axiosInstance.interceptors.request.use(this.handleRequest, this.handleError);
  };

  protected handleRequest = (axiosConfig: AxiosRequestConfig): AxiosRequestConfig => {
    const { data } = axiosConfig;

    const transformedData = snakeCaseObjectKeys(data);

    return {
      ...axiosConfig,
      data: transformedData,
    };
  };

  protected handleResponse = (response: AxiosResponse): AxiosResponse => {
    const { data } = response;

    let transformedData;

    if (Array.isArray(data)) {
      transformedData = data.map((item) => camelCaseObjectKeys(item));
    } else {
      transformedData = camelCaseObjectKeys(data);
    }

    return {
      ...response,
      data: transformedData,
    };
  };

  protected handleError = (err: Error): Promise<BaseApiException> => {
    if (axios.isAxiosError(err)) {
      const { response } = err;
      if (response) {
        const { status, statusText, data } = response;

        let errorMessage = statusText;
        if (data) {
          const { error: dataError = 'Failed Request' } = data;
          errorMessage = dataError;
        }

        switch (status) {
          case UNAUTHORIZED_STATUS_CODE:
            return Promise.reject(new UnauthorizedException(UNAUTHORIZED_ERROR_MESSAGE));
          case INTERNAL_SERVER_ERROR_STATUS_CODE:
            return Promise.reject(new BaseApiException(`Internal Server Error. Data: ${data}`));
          case NOT_FOUND_STATUS_CODE:
            return Promise.reject(new BaseApiException(errorMessage));
          case BAD_REQUEST_STATUS_CODE:
            return Promise.reject(new BaseApiException(errorMessage));
          default:
            return Promise.reject(new BaseApiException(errorMessage));
        }
      }
    }
    return Promise.reject(err);
  };
}

export default BaseApi;
