import Head from "next/head";
import Form from "../components/form";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center py-2">
      <Head>
        <title>計算ドリルジェネレータ</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center text-center">
        <Form></Form>
      </main>
    </div>
  );
}
