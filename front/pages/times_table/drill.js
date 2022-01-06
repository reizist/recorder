export async function getServerSideProps(context) {
  const { num } = context.query;
  return { props: { num: num } };
}

function range(num) {
  return [...Array(parseInt(num, 10)).keys()].map((i) => ++i);
}

function fontColor(m, n) {
  if (m == n) {
    return "red";
  } else if (m == 1) {
    return "green";
  } else if (n == 1) {
    return "blue";
  } else {
    ("");
  }
}

export default function Drill({ num }) {
  return (
    <>
      <style jsx media="all">{`
        @media all {
          .grid {
            border: solid 1px green;
            background-size: 1em 1em;
            background-image: linear-gradient(
                0deg,
                transparent calc(1em - 1px),
                gray 1em
              ),
              linear-gradient(90deg, transparent calc(1em - 1px), gray 1em);

            height: ${((1 + parseInt(num, 10)) * num) / 2}em;
            width: ${((1 + parseInt(num, 10)) * num) / 2}em;
            display: grid;
            grid-template-rows: ${range(parseInt(num, 10))
              .map((i) => i + "em")
              .join(" ")};
            grid-template-columns: ${range(parseInt(num, 10))
              .map((i) => i + "em")
              .join(" ")};
          }

          .grid > div {
            border: solid 1px green;
            font-size: 2em;
            font-family: "Rubik";

            display: flex;
            justify-content: center;
            align-items: center;
          }
        }
      `}</style>

      <div className="h-screen">
        <main className="container max-w-6xl mx-auto items-center justify-center text-center mt-8 mb-8 h-auto">
          <div className="mb-4">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded without-print"
              onClick={() => window.print()}
            >
              プリントする
            </button>
            <div className="mb-4 without-print">
              Chromeの場合、詳細設定|>オプション|>背景のグラフィックをONによりグリッド付きで印刷できます
            </div>
          </div>

          <div className="w-full">
            <div className="grid mx-auto">
              {range(num).map((n) => {
                return (
                  <>
                    {range(num).map((m) => {
                      return (
                        <div
                          style={{
                            color: fontColor(m, n),
                            fontSize: `${
                              m != 1 && n != 1 ? 1 + 0.3 * Math.min(m, n) : 1
                            }em`,
                          }}
                        >
                          {m * n}
                        </div>
                      );
                    })}
                  </>
                );
              })}
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
