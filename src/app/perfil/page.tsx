'use client'
import React from 'react'
import {
  GovBrAuthResponseModel,
  GovBrUserClaimsResponseModel,
} from '@/govbr/models/GovBrAuthResponseModel'
import { useRouter } from 'next/navigation'
import { FaCheck, FaTimes } from '@/govbr/components/icons/fa'
import Link from 'next/link'
import { Image } from '@chakra-ui/react'
import govbrOauth from '@/govbr/oauth'
import { storage as storage } from '@/data/storage'

export default function UserProfile() {
  const [user, setUser] = React.useState<GovBrUserClaimsResponseModel>()
  const [auth, setAuth] = React.useState<GovBrAuthResponseModel>()
  const [userImage, setUserImage] = React.useState<string>('')
  const router = useRouter()
  React.useEffect(() => {
    const a = govbrOauth.getLocalAuth()
    if (a) {
      a.id_token =
        a.id_token.replace(/(.{50}).+/, '$1...') +
        ' -> Veja o resto em localstorage'
      a.access_token =
        a.access_token.replace(/(.{50}).+/, '$1...') +
        ' -> Veja o resto em localstorage'
      setAuth(a)
    }
    const u = govbrOauth.getLocalAuthUser()
    if (u) {
      setUser(u)
      u.getPictureData().then((res: string) => {
        if (res) {
          setUserImage(res)
        }
      })
    } else {
      storage.clearTokens()
      router.push('/')
    }
  }, [router])

  return (
    <>
      {user && (
        <div className="profile-container">
          <div className="row">
            <div className="col-sm">
              <div className="profile-image">
                <Image src={userImage} alt={user.name} />
              </div>
            </div>
            <div className="col-sm">
              <div className="profile-info">
                <h3>{user.name}</h3>
                <p>
                  {user.email}
                  <span
                    title={
                      user.email_verified ? 'Verificado' : 'Não verificado'
                    }
                    className="check"
                  >
                    {user.email_verified ? FaCheck() : FaTimes()}
                  </span>
                </p>
                <p>
                  {user.phone_number}
                  <span
                    title={
                      user.phone_number_verified
                        ? 'Verificado'
                        : 'Não verificado'
                    }
                    className="check"
                  >
                    {user.phone_number_verified ? FaCheck() : FaTimes()}
                  </span>
                </p>
                <p>{user.cpfFormatted()} </p>
              </div>
              <div className="profile-actions">
                Logado em: {new Date(user.auth_time * 1000).toLocaleString()}
              </div>
              <div className="profile-actions">
                <p>
                  <Link href="/api/auth/logout">Sair</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className={'row'}>
        {user && (
          <div>
            <h3>User JSON</h3>
            <pre>{JSON.stringify(user, null, 2)}</pre>
          </div>
        )}
        {auth && (
          <div>
            <h3>Auth JSON</h3>
            <pre>{JSON.stringify(auth, null, 2)}</pre>
          </div>
        )}
      </div>
    </>
  )
}
