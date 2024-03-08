import { IService } from '@/govbr/domain/service-interfaces/IService'

export class Service implements IService {
  apiUrl: string | undefined

  constructor() {
    this.apiUrl = process.env.NEXT_PUBLIC_API_URL
  }
}
