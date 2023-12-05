//import Image from 'next/image';
//import { Inter } from 'next/font/google';
//const inter = Inter({ subsets: ['latin'] });

import { NavBar } from '@/components/navBar';
import { ItemListContainer } from '@/components/itemListContainer';

export default function Home() {

  return (
    <>
      <NavBar />
      <main className="px-20 pt-20 h-screen">
      <h1 className="text-3xl pb-4">Todos os Jogos</h1>
        <ItemListContainer />
      </main>
    </>
  );
}
