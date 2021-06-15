import "../styles/globals.css";
import Head from "next/head";
import Layout from "../components/layout";

function Recorder({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>計算ドリルジェネレータ</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default Recorder;
