import type { Metadata } from 'next';
 
// These styles apply to every route in the application
import { Nunito } from 'next/font/google';
import RegisterModal from './components/modals/RegisterModal';
import Navbar from './components/navbar/Navbar';
import './globals.css';
import ToasterProvider from './providers/ToasterProvider';
import LoginModal from './components/modals/LoginModal';
import getCurrentUser from './actions/getCurrentUser';

const font = Nunito(
  {
    subsets: ['latin']
  }
);

export const metadata : Metadata = {
  title: 'My Own Airbnb',
  description: 'This is a airbnb clone app',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
  }) {
  const currentUser = await getCurrentUser();
  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider />
        <LoginModal />
        <RegisterModal />
        <Navbar currentUser={ currentUser } />
        {children}</body>
    </html>
  )
}
