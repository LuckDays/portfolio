import Head from "next/head";
import Greetings from "../components/greetings";

export default function Home() {
  return (
    <>
      <Head>
        <title>Lucas S Dias</title>
        <meta name='description' content='Dev portfolio' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='flex flex-col items-center snap-y'>
        <Greetings />
      </main>
    </>
  );
}
