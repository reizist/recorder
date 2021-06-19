import useSWR from "swr";
import { toCode } from "../../components/kanji/util";

import { renderSVG } from "../../components/kanji/util";

import QrCODE from "../../components/qrcode";

export async function getServerSideProps(context) {
  const { token } = context.query;
  const kanjis = token.split(":");
  return { props: { kanjis: kanjis, token: token } };
}

const MAX_RENDERABLE_NUM = 7;

const eachSlice = (arr, n = 2) => {
  let dup = [...arr];
  let result = [];
  let length = dup.length;

  while (0 < length) {
    result.push(dup.splice(0, n));
    length = dup.length;
  }

  return result;
};

export default function KanjiDrill({ token, kanjis }) {
  const style = `
    @page { size:landscape; }
  `;

  const codes = kanjis.map((kanji) => "0" + toCode(kanji));
  const { data } = useSWR(
    codes != "" ? `/api/kanji/meta?codes=${codes.join(",")}` : null
  );

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

        {eachSlice(kanjis, MAX_RENDERABLE_NUM).map((kanji_parts) => (
          <main className="kanji container px-4 text-center">
            {" "}
            <div className="name-box grid grid-cols-4 gap-4 m-4">
              {" "}
              <div className="qr-code">
                {" "}
                <QrCODE path={"kanji_drill?token=" + token} size={100} />{" "}
              </div>{" "}
              <div className="text-3xl justify-center align-center">
                なまえ:
              </div>{" "}
              <div className="border m-3 rounded-sm border-gray-600 col-span-2"></div>{" "}
            </div>{" "}
            <div className="mt-1">
              {kanji_parts.length > 0 &&
                kanji_parts.map((kanji) => (
                  <div className="grid grid-cols-6 grid-flow-row gap-1 auto-cols-max auto-rows-max md:auto-rows-min page">
                    <div className="pb-full relative">
                      <div className="absolute inset-0 h-full w-full">
                        {renderSVG(
                          kanji,
                          "h-full w-full object-cover object-center w-8/12 h-8/12"
                        )}
                      </div>
                    </div>
                    <div className="text-center border m-1 align-middle items-center">
                      {data !== undefined && (
                        <div className="grid grid-cols-3">
                          <div>
                            {
                              data.meta.filter((d) => d.literal === kanji)[0]
                                .on_yomi
                            }
                          </div>
                          <div>
                            {
                              data.meta.filter((d) => d.literal === kanji)[0]
                                .kun_yomi
                            }
                          </div>
                          <div style={{ "text-combine-upright": "all" }}>
                            {
                              data.meta.filter((d) => d.literal === kanji)[0]
                                .stroke_count
                            }
                          </div>
                        </div>
                      )}
                    </div>
                    {[2, 3, 4, 4].map((index) => (
                      <div className="text-center border m-1 align-middle items-center">
                        {renderSVG(
                          kanji,
                          `h-full w-full object-cover object-center opacity-${
                            100 - Math.min(30 * index, 100)
                          }`
                        )}
                      </div>
                    ))}
                  </div>
                ))}
            </div>
          </main>
        ))}
      </div>
    </>
  );
}
