export class Service {
  protected apiUrl: string | undefined
  constructor() {
    this.apiUrl = process.env.NEXT_PUBLIC_API_URL
  }
}
