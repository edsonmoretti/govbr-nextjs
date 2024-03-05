import base64 from 'base-64'
import { ConfigObjectModel } from '@/govbr/cadsia/govbr/models/ConfigObject.model'
import { jwtDecode } from 'jwt-decode'
import { GovBrAuthResponseModel } from '@/govbr/cadsia/govbr/models/GovBrAuthResponseModel'

const generalConfig = {
  RESPONSE_TYPE: 'code',
  GRANT_TYPE: 'authorization_code',
}

const invalidConfig = (config: ConfigObjectModel) => {
  if (
    config &&
    config.REDIRECT_URI &&
    config.CLIENT_ID &&
    config.SECRET &&
    config.URL_PROVIDER &&
    config.URL_SERVICE &&
    config.SCOPES
  ) {
    return false
  }
  return true
}

export const authorizeURL = () => {
  const config = getConfiguration()
  if (invalidConfig(config)) {
    console.error(
      `Erro: authorize - Os parâmetros REDIRECT_URI, CLIENT_ID e SECRET, são obrigatórios`,
    )
    return false
  }
  return `${config.URL_PROVIDER}/authorize?response_type=${generalConfig.RESPONSE_TYPE}&client_id=${config.CLIENT_ID}&scope=${config.SCOPES}&redirect_uri=${config.REDIRECT_URI}`
}

export const logoutURL = () => {
  //https://sso.staging.acesso.gov.br/logout?post_logout_redirect_uri=https://www.minha-aplicacao.gov.br/retorno.html");
  const config = getConfiguration()
  if (invalidConfig(config)) {
    console.error(
      `Erro: authorize - Os parâmetros REDIRECT_URI, CLIENT_ID e SECRET, são obrigatórios`,
    )
    return false
  }
  return `${config.URL_PROVIDER}/logout?post_logout_redirect_uri=${config.REDIRECT_URI}`
}

export const getToken = async (
  code: string,
  redirect_uri?: string,
): Promise<GovBrAuthResponseModel | false> => {
  // Valida a configuração de entrada
  const config = getConfiguration()
  if (invalidConfig(config)) {
    console.error(
      `Erro: authorize - Os parâmetros REDIRECT_URI, CLIENT_ID e SECRET, são obrigatórios`,
    )
    return false
  }
  if (!code) {
    console.error(`Erro: authorize - O parametro code é obrigatório`)
    return false
  }

  const url = `${config.URL_PROVIDER}/token?grant_type=${
    generalConfig.GRANT_TYPE
  }&code=${code}&redirect_uri=${redirect_uri || config.REDIRECT_URI}`

  try {
    const res = await fetch(url, {
      method: 'post',
      headers: {
        Authorization: `Basic ${base64.encode(
          config.CLIENT_ID + ':' + config.SECRET,
        )}`,
      },
    })
    return await res.json()
  } catch (e) {
    console.error(e)
    return false
  }
}

export const getCredentialType = async (accessToken: string) => {
  // Valida a configuração de entrada
  const config = getConfiguration()
  if (invalidConfig(config)) {
    console.error(
      `Erro: authorize - Os parâmetros REDIRECT_URI, CLIENT_ID e SECRET, são obrigatórios`,
    )
    return false
  }
  if (!accessToken) {
    console.error(`Erro: authorize - O parametro accessToken é obrigatório`)
    return false
  }
  const url = `${config.URL_SERVICE}/api/info/usuario/selo`

  try {
    const result = await fetch(url, {
      method: 'get',
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    const data = await result.json()
    return data
  } catch (e) {
    console.error(e)
    return false
  }
}

export const getCompanies = async (accessToken: string) => {
  // Valida a configuração de entrada
  const config = getConfiguration()
  if (invalidConfig(config)) {
    console.error(
      `Erro: authorize - Os parâmetros REDIRECT_URI, CLIENT_ID e SECRET, são obrigatórios`,
    )
    return false
  }
  if (!accessToken) {
    console.error(`Erro: authorize - O parametro accessToken é obrigatório`)
    return false
  }
  const token: any = jwtDecode(accessToken)
  const url = `${config.URL_SERVICE}/empresas/v2/empresas?filtrar-por-participante=${token.sub}`

  try {
    const result = await fetch(url, {
      method: 'get',
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    const data = await result.json()
    return data
  } catch (e) {
    console.error(e)
    return false
  }
}

const getConfiguration = (): ConfigObjectModel => {
  return {
    URL_PROVIDER: process.env.NEXT_PUBLIC_GOVBR_URL_PROVIDER,
    URL_SERVICE: process.env.GOVBR_URL_SERVICE,
    REDIRECT_URI: process.env.GOVBR_REDIRECT_URI,
    SCOPES: process.env.GOVBR_SCOPES,
    CLIENT_ID: process.env.GOVBR_CLIENT_ID,
    SECRET: process.env.GOVBR_SECRET,
  } as ConfigObjectModel
}
