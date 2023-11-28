//import Image from 'next/image';
//import { Inter } from 'next/font/google';
//const inter = Inter({ subsets: ['latin'] });

import { NavBar } from '@/components/navBar';
import { ItemListContainer } from '@/components/itemListContainer';

export default function Home() {

  return (
    <>
      <NavBar/>
      <main className="px-20 pt-20 h-screen">
        <ItemListContainer/>
      </main>
    </>
  );
}
