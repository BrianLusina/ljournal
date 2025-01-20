import { AxiosRequestConfig } from 'axios';

export type MockExpectedApiResponse = {
  status: number;
  statusText: string;
  headers: unknown;
  config: AxiosRequestConfig;
  data: unknown;
};

export const mockApiSuccessResponse: MockExpectedApiResponse = {
  status: 200,
  statusText: 'OK',
  headers: {},
  config: {},
  data: {},
};
