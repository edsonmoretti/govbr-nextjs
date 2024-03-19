import { IApiService } from '@/domain/service-interfaces/IApiService'
import { Service } from '@/services/Service'

export class ApiService extends Service implements IApiService {
  getToken(code: string): Promise<Response> {
    return fetch(`${this.apiUrl}/auth/token?code=${code}`)
  }
}
