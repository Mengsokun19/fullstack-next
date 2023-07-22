import './globals.css'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Flexible',
  description: 'Showcase and discover remarkable develop projects',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <main>
          <NavBar />
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
