import type { Metadata } from 'next'
import { Work_Sans } from 'next/font/google'
import './styles/globals.scss'

const worksans = Work_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'FAQ-ACCORDIAN',
  description: 'This project is created by Shahzaib Saleem, who is the full stack developer working as a mern stack developer. this project is just for some question and answer and the design is given by Front end mentor website.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={worksans.className}>{children}</body>
    </html>
  )
}
