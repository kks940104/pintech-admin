import StyledComponentsRegistry from './registry'
import Header from './global/ui/outlines/Header'
import { CommonProvider } from './global/contexts/CommonContext'
import { Metadata } from 'next'
import { getUserInfo } from './member/services/actions'
import { UserProvider } from './global/contexts/UserContext'
import './globals.css'
import 'react-datepicker/dist/react-datepicker.css'

export const metadata: Metadata = {
  title: 'CIS 관리자',
  description: '설명..',
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const userInfo = await getUserInfo()
  // console.log('userInfo', userInfo)
  return (
    <html lang="ko">
      <body>
        <StyledComponentsRegistry>
          <UserProvider _userInfo={userInfo}>
            <Header />
            <main className="main-centent">
              <CommonProvider>
                <section>{children}</section>
              </CommonProvider>
            </main>
          </UserProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
