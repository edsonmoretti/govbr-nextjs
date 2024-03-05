'use client'
type BrCookieBarProps = {
  title: string
  text: string
  linkText: string
  link: string
  acceptText: string
  cookieName: string
}

const BrCookieBar = (/*props: BrCookieBarProps*/) => {
  return <div className="br-cookiebar default d-none" tabIndex={-1}></div>
}

export default BrCookieBar
