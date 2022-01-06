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

            width: 55em;
            height: 55em;
            display: grid;
            grid:
              ". . . . . . . . ." 1em
              ". . . . . . . . ." 2em
              ". . . . . . . . ." 3em
              ". . . . . . . . ." 4em
              ". . . . . . . . ." 5em
              ". . . . . . . . ." 6em
              ". . . . . . . . ." 7em
              ". . . . . . . . ." 8em
              ". . . . . . . . ." 9em
              ". . . . . . . . ." 10em
              / 1em 2em 3em 4em 5em 6em 7em 8em 9em 10em;
          }

          .grid > div {
            border: solid 1px green;
            font-size: 2em;

            display: flex;
            justify-content: center;
            align-items: center;
          }

          .grid > div:nth-child(2),
          .grid > div:nth-child(3),
          .grid > div:nth-child(4),
          .grid > div:nth-child(5),
          .grid > div:nth-child(6),
          .grid > div:nth-child(7),
          .grid > div:nth-child(8),
          .grid > div:nth-child(9),
          .grid > div:nth-child(10),
          .grid > div:nth-child(10n + 1) {
            font-size: inherit;
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
          </div>

          <div className="w-full mx-auto">
            <div className="grid">
              {range(num).map((n) => {
                return (
                  <>
                    {range(num).map((m) => {
                      return (
                        <div
                          style={{
                            color: `${m == n ? "red" : ""}`,
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
