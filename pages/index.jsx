import Head from "next/head";
import Greetings from "../components/greetings";

export default function Home() {
  return (
    <div className=''>
      <Head>
        <title>Lucas S Dias</title>
        <meta name='description' content='Dev portfolio' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='flex flex-col justify-center'>
        <Greetings />
      </main>
    </div>
  );
}
