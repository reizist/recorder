import Head from "next/head";
import LeftMenu from "../components/left_menu";
import Stroke from "../components/kanji/stroke";

export default function Kanji() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Head>
        <title>漢字ドリルジェネレータ</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container mx-auto flex flex-col lg:flex-row mt-2 text-sm leading-normal">
        <div className="w-full lg:w-3/12 my-4 mx-4">
          <LeftMenu />
        </div>

        <div className="w-full lg:w-9/12 bg-white mb-4 px-4 text-center">
          <Stroke />
        </div>
      </div>
    </div>
  );
}
