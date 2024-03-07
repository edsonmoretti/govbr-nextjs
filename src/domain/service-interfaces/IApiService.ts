import { IEntity } from '@/govbr/domain/entities/IEntity'

export interface IApiService {
  getToken(code: string): Promise<IEntity>
}
