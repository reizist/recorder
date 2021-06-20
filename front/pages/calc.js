import Head from "next/head";
import Form from "../components/form";
import LeftMenu from "../components/left_menu";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Head>
        <title>計算ドリルジェネレータ</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container mx-auto flex flex-col lg:flex-row mt-2 text-sm leading-normal text-center">
        <div className="w-full lg:w-3/12 my-4 mx-4">
          <LeftMenu />
        </div>

        <div className="w-full lg:w-9/12 bg-white mb-4 px-4 text-center">
          <Form></Form>
        </div>
      </div>
    </div>
  );
}
