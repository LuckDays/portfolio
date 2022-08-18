import Head from "next/head";
import { Greetings, Skills, Projects } from "../components/";

export default function Home() {
  return (
    <>
      <Head>
        <title>Lucas S Dias</title>
        <meta name='description' content='Dev portfolio' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='flex flex-col snap-y'>
        <Greetings />
        <Skills />
        <Projects />
      </main>
    </>
  );
}
