'use client';

import { usePathname } from 'next/navigation';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const isSignInPage = pathname === '/signin';
  const isSignupPage = pathname === '/signup';

  return (
    <>
      {!isSignInPage && !isSignupPage && <Header />}
      {children}
      {!isSignInPage && !isSignupPage && <Footer />}
    </>
  );
};

export default ClientLayout;
