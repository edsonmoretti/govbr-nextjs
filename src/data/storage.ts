import { deleteCookie, getCookie, getCookies, setCookie } from 'cookies-next'

export const storage = {
  getCookies: getCookies,
  setCookie: setCookie,
  getCookie: getCookie,
  deleteCookie: deleteCookie,
  getToken: () => {
    return getCookie('access_token')
  },
  getIdToken: () => {
    return getCookie('id_token')
  },
  clearTokens: () => {
    setCookie('access_token', '', { maxAge: -1 })
    setCookie('id_token', '', { maxAge: -1 })
  },
}
