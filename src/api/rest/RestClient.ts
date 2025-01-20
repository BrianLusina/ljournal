import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

class RestClient {
  readonly axiosInstance: AxiosInstance;

  public constructor(baseURL: string) {
    this.axiosInstance = axios.create({
      baseURL,
      responseType: 'json',
    });
  }

  async get<T>(path: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    const response = await this.axiosInstance.get<T>(path, config);
    return response;
  }

  async post<T>(
    path: string,
    data?: unknown,
    config?: AxiosRequestConfig,
  ): Promise<AxiosResponse<T>> {
    const response = await this.axiosInstance.post<T>(path, data, config);
    return response;
  }

  async put<T>(
    path: string,
    data?: unknown,
    config?: AxiosRequestConfig,
  ): Promise<AxiosResponse<T>> {
    const response = await this.axiosInstance.put<T>(path, data, config);
    return response;
  }

  async patch<T>(
    path: string,
    data?: unknown,
    config?: AxiosRequestConfig,
  ): Promise<AxiosResponse<T>> {
    const response = await this.axiosInstance.patch<T>(path, data, config);
    return response;
  }

  async all<T>(requests: (T | Promise<T>)[]): Promise<T[]> {
    const responses = Promise.all(requests);
    return responses;
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  async allSettled<T>(requests: (T | Promise<T>)[]) {
    const responses = Promise.allSettled(requests);
    return responses;
  }
}

export default RestClient;
