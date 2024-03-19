'use client'
import React, { useEffect } from 'react'
import { BrButton } from '@govbr-ds/react-components'
import govbrOauth from '@/govbr/oauth'
import { useRouter, useSearchParams } from 'next/navigation'
import { GovBrUserClaimsResponseModel } from '@/govbr/models/GovBrAuthResponseModel'
import { setCookie } from 'cookies-next'
import Link from 'next/link'
import { ApiService } from '@/services'
import Image from 'next/image'

type BrHeaderProps = {}

const HeaderLogin = (props: BrHeaderProps) => {
  const apiService = new ApiService()
  const searchParams = useSearchParams()
  const router = useRouter()
  const [user, setUser] = React.useState<GovBrUserClaimsResponseModel>()
  const [userImage, setUserImage] = React.useState<string>('')
  const [userMenuVisible, setUserMenuVisible] = React.useState(false)
  const [loggingOut, setLoggingOut] = React.useState(false)
  const authInGovBr = () => {
    void router.push('/api/auth/login')
  }
  const logoutGovBr = async () => {
    setLoggingOut(true)
    setUser(undefined)
    setUserCookies({ access_token: '', id_token: '' })
    setUserImageProfile()
    router.push('/api/auth/logout')
  }

  const setUserCookies = (data: any) => {
    setCookie('access_token', data.access_token, {
      maxAge: data.expires_in ?? 3600,
      path: '/',
    })
    setCookie('id_token', data.id_token, {
      maxAge: data.expires_in ?? 3600,
      path: '/',
    })
  }

  const setUserImageProfile = () => {
    const user = govbrOauth.getLocalAuthUser()
    if (user) {
      setUser(user)
      user
        ?.getPictureData()
        .then((res: string) => {
          if (res) {
            setUserImage(res)
          }
        })
        .catch((err: any) => {
          setUserImage('')
          console.error(err)
        })
    } else {
      setUserImage('')
    }
  }

  // ---------- EFFECTS ------------
  // run only if url has code
  useEffect(() => {
    if (searchParams.get('code')) {
      apiService.getToken(searchParams.get('code') as string).then(res => {
        res
          .json()
          .then(data => {
            if (data.error) {
              throw new Error(data.error + ': ' + data.error_description)
            }
            setUserCookies(data)
            const localAuthUser = govbrOauth.getLocalAuthUser()
            if (localAuthUser) {
              setUser(localAuthUser as GovBrUserClaimsResponseModel)
              setUserImageProfile()
            }
          })
          .catch(err => {
            setUser(undefined)
            setUserImage('')
            console.error(err)
          })
          .finally(() => {
            router.push('/')
          })
      })
    }
  }, [searchParams])

  useEffect(() => {
    setUserImageProfile()
  }, [])

  const LoggedComponent = () => {
    return (
      <div>
        <BrButton
          className="br-sign-in"
          type="button"
          id="avatar-dropdown-trigger"
          data-toggle="dropdown"
          data-target="avatar-menu"
          aria-label={'Olá, ' + user?.name.split(' ')[0]}
          onClick={() => setUserMenuVisible(true)}
        >
          <span className="br-avatar" title="Fulano da Silva">
            {/*<span className="content bg-orange-vivid-30 text-pure-0">E</span>*/}
            {userImage && (
              <Image
                src={userImage}
                alt="gov.br"
                style={{
                  borderRadius: '50%',
                  minHeight: '30px',
                  objectFit: 'cover',
                }}
              />
            )}
            {!userImage && (
              <span className="content bg-orange-vivid-30 text-pure-0">
                {user?.name[0]}
              </span>
            )}
          </span>
          <span className="ml-2 text-gray-80 text-weight-regular">
            Olá,{' '}
            <span className="text-weight-semi-bold">
              {user?.name.split(' ')[0]}
            </span>
          </span>
          <i className="fas fa-caret-down" aria-hidden="true"></i>
        </BrButton>
        <div
          style={{ zIndex: 1000 }}
          className="br-list"
          id="avatar-menu"
          hidden={!userMenuVisible}
          role="menu"
          onMouseLeave={() => setUserMenuVisible(false)}
          aria-labelledby="avatar-dropdown-trigger"
        >
          <Link className="br-item" href={'/perfil'} role="menuitem">
            Dados pessoais
          </Link>
          <a className="br-item" href="#" role="menuitem">
            Privacidade
          </a>
          <a className="br-item" href="#" role="menuitem">
            Notificações
          </a>
          <a className="br-item" href="#" role="menuitem">
            Perguntas frequentes
          </a>
          <a className="br-item" href="#" onClick={logoutGovBr} role="menuitem">
            Sair
          </a>
        </div>
      </div>
    )
  }

  return (
    <div className="header-login">
      {user ? (
        <LoggedComponent />
      ) : (
        <>
          <div className="header-sign-in">
            <BrButton
              className="br-sign-in small mt-3 mt-sm-0 ml-sm-3"
              type="button"
              data-trigger="login"
              onClick={authInGovBr}
            >
              {!loggingOut && (
                <>
                  Entrar com&nbsp;
                  <Image
                    src="https://www.gov.br/++theme++padrao_govbr/img/govbr-colorido-b.png"
                    alt="gov.br"
                  />{' '}
                </>
              )}
              {loggingOut && <>Saindo...</>}
            </BrButton>
          </div>
          <div className="header-avatar"></div>
        </>
      )}
    </div>
  )
}

export default HeaderLogin
