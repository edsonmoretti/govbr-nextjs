import {
  authorizeURL,
  getCompanies,
  getCredentialType,
  getToken,
  logoutURL,
} from '@/govbr/oauth/govbr-oauth-server-side'
import {
  getLocalAuth,
  getLocalAuthUser,
} from '@/govbr/oauth/govbr-oauth-client-side'

const govbrOauth = {
  authorize: authorizeURL,
  logoutURL: logoutURL,
  getToken: getToken,
  getCredentialType: getCredentialType,
  getCompanies: getCompanies,
  getLocalAuth: getLocalAuth,
  getLocalAuthUser: getLocalAuthUser,
}

export default govbrOauth
