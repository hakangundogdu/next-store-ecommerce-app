import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import ProductList from '../components/ProductList';

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center ">
        <ProductList />{' '}
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-2"
          href="https://github.com/hakangundogdu"
          target="_blank"
          rel="noopener noreferrer"
        >
          by Hakan Gundogdu
        </a>
      </footer>
    </div>
  );
};

export default Home;
