import Head from "next/head";
import LeftMenu from "../components/left_menu";
import Tweets from "../components/tweets";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center py-2">
      <Head>
        <title>ドリルジェネレータ</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container mx-auto flex flex-col lg:flex-row mt-2 text-sm leading-normal text-center">
        <div className="w-full lg:w-3/12 my-8 mx-4">
          <LeftMenu />
        </div>

        <div className="w-full lg:w-7/12 bg-white mb-4 px-4 text-center">
          <main className="my-6">
            αバージョンでは、 PC上のChromeブラウザからの動作のみを保証しています。
          </main>
        </div>

        <div className="w-full lg:w-2/12  md:w-4/6 xs:w-4/6 bg-white mb-4 px-4 text-center">
          <Tweets></Tweets>
        </div>
      </div>
    </div>
  );
}
