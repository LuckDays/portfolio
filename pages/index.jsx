import Head from "next/head";
import { Layout } from "../components";

export default function Home() {
  return (
    <div className=''>
      <Head>
        <title>Lucas S Dias</title>
        <meta name='description' content='Dev portfolio' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Layout>
        <Greetings />
      </Layout>
    </div>
  );
}
