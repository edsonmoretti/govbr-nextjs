export interface IApiService {
  getToken(code: string): Promise<any>
}
