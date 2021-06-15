export async function getServerSideProps(context) {
  const { token } = context.query;
  const quizes = parseToken(token);
  return { props: { quizes: quizes } };
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
    operand = "+";
    answer = parseInt(before, 10) + parseInt(after, 10);
  } else if (op === "s") {
    operand = "-";
    if (before < after) {
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

export default function Drill({ quizes }) {
  return (
    <main className="container max-w-6xl mx-auto items-center justify-center text-center mt-8 h-auto">
      <div id="doc" className="doc grid grid-cols-2 gap-12">
        {quizes.map((q, index) => {
          let quiz = calcQuiz(q);
          if ((index + 1) % 10 === 0) {
            return (
              <>
                <div className="text-3xl footnotes block">
                  {quiz["b"]} {quiz["o"]} {quiz["a"]} =
                  <span className="answer"> {quiz["ans"]}</span>
                </div>
              </>
            );
          } else {
            return (
              <>
                <div className="text-3xl block">
                  {quiz["b"]} {quiz["o"]} {quiz["a"]} =
                  <span className="answer"> {quiz["ans"]}</span>
                </div>
              </>
            );
          }
        })}
      </div>
    </main>
  );
}
