export async function getServerSideProps(context) {
  const { num } = context.query;
  return { props: { num: num } };
}

function range(end) {
  // return [...Array(end).keys()].map((i) => ++i);
  return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
}

export default function Drill({ num }) {
  return (
    <>
      <div>{range(num)}</div>
      <div className="h-screen">
        <main className="container max-w-6xl mx-auto items-center justify-center text-center mt-8 mb-8 h-auto">
          <div className="mb-4">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded without-print"
              onClick={() => window.print()}
            >
              プリントする
            </button>
          </div>

          <div className="w-full mx-auto">
            <div className="table">
              <div className="table-row-group">
                {range(num).map((n) => (
                  <div className="table-row">
                    {range(num).map((m) => {
                      return (
                        <div
                          className="table-cell bg-green-100 text-align align-middle border-solid border-2 border-green-800"
                          style={{
                            height: `${15 * n}px`,
                            width: `${15 * m}px`,
                            fontSize: `${
                              m != 1 && n != 1 ? 15 + (n - 1) * 2 : 12
                            }px`,
                            fontFamily: "ヒラギノ角ゴ ProN W3",
                          }}
                        >
                          {m * n}
                        </div>
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
