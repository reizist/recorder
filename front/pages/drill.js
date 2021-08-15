import Footer from "../components/footer";
import QrCODE from "../components/qrcode";

export async function getServerSideProps(context) {
  const { token } = context.query;
  const quizes = parseToken(token);
  return { props: { quizes: quizes, token: token } };
}

function parseToken(token) {
  let quizes = [];
  try {
    if (token.indexOf(":") === -1) {
      return quizes;
    } else {
      let elements = token.split(":");
      elements.forEach((element) => {
        quizes.push(element);
      });
    }
  } catch (error) {
    return quizes;
  }
  return quizes;
}

function calcQuiz(quiz) {
  const pattern = /\D/;
  let str = quiz.split(pattern);
  let before = str[0];
  const op = quiz.match(pattern)[0];
  let after = str[1];

  let answer;
  let operand;
  if (op === "a") {
    operand = "＋";
    answer = parseInt(before, 10) + parseInt(after, 10);
  } else if (op === "s") {
    operand = "−";
    if (parseInt(before, 10) < parseInt(after, 10)) {
      let tmp = before;
      before = after;
      after = tmp;
    }
    answer = parseInt(before, 10) - parseInt(after, 10);
  } else if (op === "m") {
    operand = "×";
    answer = parseInt(before, 10) * parseInt(after, 10);
  } else if (op === "d") {
    operand = "÷";
    answer = parseInt(before, 10) / parseInt(after, 10);
  }
  const obj = { b: before, o: operand, a: after, ans: answer };
  return obj;
}

export default function Drill({ token, quizes }) {
  return (
    <>
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

          <div className="name-box grid grid-cols-5 gap-3 mb-4">
            <div className="flex-box col-span-2">
              <div className="flex items-center justify-center m-auto">
                <QrCODE path={"/drill?token=" + token} size={100} />
                Powered by{" "}
                <span className="pl-1 text-base text-purple-700">
                  <a href="/">ドリルジェネレータ</a>
                </span>
              </div>
            </div>

            <div className="name-label text-3xl mr-4 text-right m-auto">
              <span className="align-middle">なまえ: </span>
            </div>
            <div className="border rounded-sm  border-gray-600 text-4xl mr-4 h-14 col-span-2 my-auto"></div>
          </div>

          {["quiz_", "ans_"].map((prefix) => (
            <div
              key={prefix}
              className={`doc grid gap-10 mt-10 ${
                quizes.length === 30 ? "grid-cols-3" : "grid-cols-2"
              } ${prefix === "quiz_" ? "page" : ""} ${
                prefix === "ans_" ? "with-print" : ""
              }
              `}
            >
              {quizes.map((q, index) => {
                let quiz = calcQuiz(q);
                return (
                  <>
                    <div
                      key={prefix + index + q}
                      className="text-3xl block mb-2"
                    >
                      <span>
                        {quiz["b"]} {quiz["o"]} {quiz["a"]} ={" "}
                      </span>
                      {prefix === "quiz_" && (
                        <span
                          key={prefix + index + q}
                          className="answer ml-2"
                          style={{ display: "none" }}
                        >
                          {quiz["ans"]}
                        </span>
                      )}
                      {prefix === "ans_" && (
                        <span key={prefix + index + q} className="answer ml-2">
                          {quiz["ans"]}
                        </span>
                      )}
                    </div>
                  </>
                );
              })}
            </div>
          ))}
        </main>
      </div>
    </>
  );
}
