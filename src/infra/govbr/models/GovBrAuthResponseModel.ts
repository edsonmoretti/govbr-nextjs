export type GovBrAuthResponseModel = {
  access_token: string
  expires_in: number
  id_token: string
  scope: string
  token_type: string
  claims: GovBrUserClaimsResponseModel
  user: GovBrUserClaimsResponseModel
}

export type GovBrUserClaimsResponseModel = {
  amr: string[]
  aud: string
  auth_time: number
  email: string
  email_verified: boolean
  exp: number
  iat: number
  iss: string
  jti: string
  kid: string
  name: string
  phone_number: string
  phone_number_verified: boolean
  picture: string
  getPictureData: () => Promise<string>
  preferred_username: string
  profile: string
  scope: string[]
  sub: string
  cpf: () => string
  cpfFormatted: () => string
}
