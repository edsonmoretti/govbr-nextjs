import { Service } from '@/govbr/cadsia/services'

export class ApiService extends Service {
  getToken(code: string): Promise<Response> {
    return fetch(`${this.apiUrl}/auth/token?code=${code}`)
  }
}
