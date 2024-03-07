import { Service } from '@/govbr/services'
import { IApiService } from '@/govbr/domain/service-interfaces/IApiService'

export class ApiService extends Service implements IApiService {
  getToken(code: string): Promise<Response> {
    return fetch(`${this.apiUrl}/auth/token?code=${code}`)
  }
}
