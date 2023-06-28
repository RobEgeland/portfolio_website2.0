
import './globals.css'
import { Inter } from 'next/font/google'
import NavBar from './Components/NavBar'
import Image from 'next/image'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Rob Egeland | Full Stack Developer',
  description: 'My Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}> 
        <NavBar />
        {children}
      </body>
    </html>
  )
}
