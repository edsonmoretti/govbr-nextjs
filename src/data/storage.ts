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
  saveToLocalStorage: (key: string, value: any) => {
    if (typeof window !== 'undefined') {
      if (typeof value === 'string') {
        localStorage.setItem(key, value)
      } else {
        localStorage.setItem(key, JSON.stringify(value))
      }
    }
  },
  getFromLocalStorage: (key: string) => {
    if (typeof window !== 'undefined') {
      const item = localStorage.getItem(key)
      if (item) {
        try {
          return JSON.parse(item)
        } catch (e) {
          return item
        }
      }
    }
  },
}
