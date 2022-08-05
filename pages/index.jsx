import Head from "next/head";
import { Navbar } from "../components";

export default function Home() {
  return (
    <div className=''>
      <Head>
        <title>Lucas S Dias</title>
        <meta name='description' content='Dev portfolio' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Navbar />
    </div>
  );
}
