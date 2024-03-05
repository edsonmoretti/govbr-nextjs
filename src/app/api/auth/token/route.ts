import govbrOauth from '@/govbr/cadsia/govbr/oauth'

type ResponseData = {
  message: string
}

export async function GET(request: Request): Promise<Response> {
  // get code from url query
  const code = new URL(request.url).searchParams.get('code')
  console.log('code', code)
  if (!code) {
    return new Response(JSON.stringify({ message: 'Invalid code' }), {
      status: 400,
      headers: {
        'Content-Type': 'application/json',
      },
    })
  }
  return Response.json(await govbrOauth.getToken(code))
}
