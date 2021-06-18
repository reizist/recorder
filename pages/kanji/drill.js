import { svgPath, renderSVG } from "../../components/kanji/util";

import QrCODE from "../../components/qrcode";

export async function getServerSideProps(context) {
  const { token } = context.query;
  const kanjis = token.split(":");
  return { props: { kanjis: kanjis, token: token } };
}

export default function KanjiDrill({ token, kanjis }) {
  const style = `
    @page { size:landscape; }
  `;
  return (
    <>
      <style>{style}</style>

      <div className="text-center mt-4 without-print">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => window.print()}
        >
          プリントする
        </button>
      </div>

      <div className="text-center h-screen w-screen">
        <div className="text-center">
          <span className="text-xs">©ドリルジェネレータ</span>
        </div>

        <main className="kanji container px-4 text-center">
          <div className="name-box grid grid-cols-4 gap-4 m-4">
            <div className="qr-code">
              <QrCODE token={token} size={100} />
            </div>
            <div className="text-3xl justify-center align-center">なまえ:</div>
            <div className="border m-3 rounded-sm border-gray-600 col-span-2"></div>
          </div>

          <div className="mt-1">
            {kanjis.length > 0 &&
              kanjis.map((kanji) => (
                <div className="grid grid-cols-5 grid-flow-row gap-1 auto-rows-max md:auto-rows-min">
                  <div class="pb-full relative">
                    <div class="absolute inset-0 h-full w-full">
                      {renderSVG(
                        kanji,
                        "h-full w-full object-cover object-center w-11/12 h-11/12"
                      )}
                    </div>
                  </div>
                  {[1, 2, 3, 4].map((index) => (
                    <div className="text-center border m-1 align-middle items-center">
                      {renderSVG(
                        kanji,
                        `h-full w-full object-cover object-center w-11/12 h-11/12 opacity-${
                          100 - Math.min(25 * index, 100)
                        }`
                      )}
                    </div>
                  ))}
                </div>
              ))}
          </div>
        </main>
      </div>
    </>
  );
}
