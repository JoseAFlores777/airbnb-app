import type { Metadata } from 'next';
 
// These styles apply to every route in the application
import { Nunito } from 'next/font/google';
import RegisterModal from './components/modals/RegisterModal';
import Navbar from './components/navbar/Navbar';
import './globals.css';
import ToasterProvider from './providers/ToasterProvider';

const font = Nunito(
  {
    subsets: ['latin']
  }
);

export const metadata : Metadata = {
  title: 'My Own Airbnb',
  description: 'This is a airbnb clone app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider />
        <RegisterModal />
        <Navbar />
        {children}</body>
    </html>
  )
}
