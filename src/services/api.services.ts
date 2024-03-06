import { Service } from '@/govbr/services'

export class ApiService extends Service {
  getToken(code: string): Promise<Response> {
    return fetch(`${this.apiUrl}/auth/token?code=${code}`)
  }
}
