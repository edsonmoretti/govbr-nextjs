import { jwtDecode } from 'jwt-decode'
import {
  GovBrAuthResponseModel,
  GovBrUserClaimsResponseModel,
} from '@/govbr/cadsia/govbr/models/GovBrAuthResponseModel'
import { getCookie } from 'cookies-next'

const getUserPicture = async (
  user: GovBrAuthResponseModel,
): Promise<string | false> => {
  const url = user.claims.picture
  try {
    let response = await fetch(url, {
      method: 'get',
      headers: {
        Authorization: `Bearer ${user.access_token}`,
      },
    })
    const blob = await response?.blob()
    return URL.createObjectURL(blob)
  } catch (e) {
    console.error(e)
    return false
  }
}

export const getLocalAuthUser = (): GovBrUserClaimsResponseModel | false => {
  let localAuth = getLocalAuth()
  if (!localAuth) {
    return false
  }
  return localAuth.user || localAuth.claims || false
}

export const getLocalAuth = (): GovBrAuthResponseModel | false => {
  const accessToken = getCookie('access_token', {}) as string
  const idToken = getCookie('id_token', {}) as string
  if (!accessToken || !idToken) {
    return false
  }
  const auth = jwtDecode(accessToken) as GovBrAuthResponseModel
  if (!auth) {
    return false
  }
  auth.id_token = idToken
  auth.access_token = accessToken
  auth.claims = decodeClaims(auth)
  auth.user = auth.claims
  if (!auth) {
    return false
  }
  return auth
}

const decodeClaims = (
  data: GovBrAuthResponseModel,
): GovBrUserClaimsResponseModel => {
  const claims = jwtDecode(data.id_token) as any
  claims.getPictureData = async (): Promise<string> => {
    let image = await getUserPicture(data)
    if (!image) {
      image = ''
    }
    return image
  }
  return claims
}
