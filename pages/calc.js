import Head from "next/head";
import Form from "../components/form";
import LeftMenu from "../components/left_menu";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center py-2">
      <Head>
        <title>計算ドリルジェネレータ</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div class="container mx-auto flex flex-col lg:flex-row mt-2 text-sm leading-normal">
        <div class="w-full lg:w-1/6 pl-4 lg:pl-1 pr-4 mt-8 mb-4">
          <LeftMenu />
        </div>

        <div class="w-full lg:w-5/6 bg-white mb-4 pr-6">
          <Form></Form>
        </div>
      </div>
    </div>
  );
}
