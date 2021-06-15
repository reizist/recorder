import { useState } from "react";
import { useRouter } from "next/router";

export default function Form() {
  const router = useRouter();

  const decideNum = (difficulty) => {
    let min;
    let max;

    if (difficulty === "1") {
      min = 0;
      max = 9;
    } else if (difficulty === "2") {
      console.log("dff: 2");
      min = 10;
      max = 99;
    } else if (difficulty === "3") {
      min = 100;
      max = 999;
    } else {
      min = 0;
      max = 9;
    }

    return Math.floor(Math.random() * (max + 1 - min)) + min;
  };

  const generateQuiz = (difficulty, operand) => {
    const before = decideNum(difficulty);
    const after = decideNum(difficulty);
    return before.toString() + operand + after.toString();
  };

  const generateToken = (num, difficulty, operand) => {
    let quizes = [];
    [...Array(parseInt(num, 10))].forEach(() =>
      quizes.push(generateQuiz(difficulty, operand))
    );

    return quizes.join(":");
  };

  const handleClick = (e) => {
    e.preventDefault();
    const token = generateToken(state.num, state.difficulty, state.operand);
    router.push("/drill?token=" + token);
  };

  const [state, setState] = useState({
    num: "10",
    difficulty: "1",
    operand: "a",
  });

  function handleChangeNum(event) {
    setState({ ...state, num: event.target.value });
  }

  function handleChangeDifficulty(event) {
    setState({ ...state, difficulty: event.target.value });
  }

  function handleChangeOperand(event) {
    setState({ ...state, operand: event.target.value });
  }

  return (
    <div>
      <div className="mt-8 mx-auto max-w-lg">
        <div className="mb-8 block">
          <label htmlFor="num" className="text-sm block">
            つくるかず
          </label>
          <select
            onChange={handleChangeNum}
            className="block w-full mt-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          >
            {[10, 20, 30].map((num) => (
              <option value={num}>{num}</option>
            ))}
            )
          </select>
        </div>

        <div className="mb-8 block">
          <label htmlFor="difficulty" className="text-sm block">
            むずかしさ
          </label>
          <select
            onChange={handleChangeDifficulty}
            className="block w-full mt-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          >
            <option value="1">かんたん(ひとけた)</option>
            <option value="2">ふつう(ふたけた)</option>
            <option value="3">むずかしい(さんけた)</option>
          </select>
        </div>

        <div className="mb-8 block">
          <label htmlFor="difficulty" className="text-sm block">
            けいさん
          </label>
          <select
            onChange={handleChangeOperand}
            className="block w-full mt-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          >
            <option value="a">たしざん</option>
            <option value="s">ひきざん</option>
            <option value="m">かけざん</option>
            <option value="d">わりざん</option>
          </select>
        </div>

        <div className="mb-8 block">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleClick}
          >
            問題作成
          </button>
        </div>
      </div>
    </div>
  );
}
