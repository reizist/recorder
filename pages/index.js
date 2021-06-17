import Head from "next/head";
import LeftMenu from "../components/left_menu";
import Tweets from "../components/tweets";
import Form from "../components/form";
import Footer from "../components/footer";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center py-2">
      <Head>
        <title>ドリルジェネレータ</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container mx-auto flex flex-col lg:flex-row mt-2 text-sm leading-normal">
        <div className="w-full lg:w-2/6 pl-4 lg:pl-1 pr-4 mt-8 mb-4">
          <LeftMenu />
        </div>

        <div className="w-full lg:w-3/6 bg-white mb-4 pr-6">
          <Form></Form>
        </div>

        <div className="w-full lg:w-1/6 bg-white mb-4 pr-6">
          <Tweets></Tweets>
        </div>
      </div>
    </div>
  );
}
