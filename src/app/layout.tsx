import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@govbr-ds/core/dist/core.min.css'
import './globals.css'
import Footer from '@/govbr/infra/govbr/components/Footer'
import Header from '@/govbr/infra/govbr/components/Header'
import Nav from '@/govbr/infra/govbr/components/Nav'
import Script from 'next/script'
import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css'
import Sidebar from '@/govbr/infra/govbr/components/Sidebar'
import BrCookieBar from '@/govbr/infra/govbr/components/BrCookieBar'
import BrBreadcrumb from '@/govbr/infra/govbr/components/BrBreadcrumb'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'GovBR NextJS',
  description: 'Projeto GovBR com NextJS (https://www.gov.br/ds)',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
  session: any
}>) {
  return (
    <html lang="br">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <title>Gov.BR</title>
        <link rel="stylesheet" href="/css/rawline.css" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Raleway:300,400,500,600,700,800,900&amp;display=swap"
        />
        <link rel="icon" href="/favicon.svg" />
      </head>
      <body className={inter.className}>
        <>
          <div className="template-base">
            <Nav />
            <Header />
            <Sidebar />
            <div className="container-fluid d-flex" style={{ marginTop: -20 }}>
              <BrBreadcrumb />
            </div>
            <main className="d-flex flex-fill mb-5" id="main">
              <div
                className="container-fluid d-flex"
                style={{ marginTop: -10 }}
              >
                {children}
              </div>
            </main>
            <Footer />
            <BrCookieBar />
          </div>
          <Script src="/core-init.js" />
        </>
      </body>
    </html>
  )
}
