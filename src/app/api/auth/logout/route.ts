import govbrOauth from '@/govbr/infra/govbr/oauth'

type ResponseData = {
  message: string
}

export async function GET(request: Request): Promise<Response> {
  const url = govbrOauth.logoutURL()
  return Response.redirect(url as string)
}
