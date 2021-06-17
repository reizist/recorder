import { useState } from "react";
import { useRouter } from "next/router";

export default function Form() {
  const router = useRouter();

  const decideActualOperand = (operand) => {
    let operands = [];
    switch (operand) {
      case "a":
        return "a";
      case "s":
        return "s";
      case "m":
        return "m";
      case "d":
        return "d";
      case "A":
        operands = ["a", "s"];
        return operands[Math.floor(Math.random() * operands.length)];
      case "M":
        operands = ["m", "d"];
        return operands[Math.floor(Math.random() * operands.length)];
      case "r":
        operands = ["a", "s", "m", "d"];
        return operands[Math.floor(Math.random() * operands.length)];
      default:
        console.error("Unexpected operand", operand);
        return "a";
    }
  };

  const decideNum = (difficulty, operand) => {
    let min;
    let max;

    if (difficulty === "1") {
      min = 0;
      max = 9;
    } else if (difficulty === "2") {
      min = 10;
      max = 99;
    } else if (difficulty === "3") {
      min = 100;
      max = 999;
    } else {
      min = 0;
      max = 9;
    }

    if (operand === "d") {
      min = 1;
    }

    const num = Math.floor(Math.random() * (max + 1 - min)) + min;
    return num;
  };

  const choiceDividable = (num) => {
    let results = [];
    const weight = 5;

    for (let i = 1; i <= num; i++) {
      if (num % i === 0) {
        // 1 と 自身の数 の出現頻度を下げるための重み付け
        if (i !== 1 && i !== num) {
          [...Array(weight)].forEach((_) => results.push(i));
        } else {
          results.push(i);
        }
      }
    }
    let value = results[Math.floor(Math.random() * results.length)];
    return value;
  };

  const generateQuiz = (difficulty, operand) => {
    let before = decideNum(difficulty, operand);
    let after;
    const op = decideActualOperand(operand);

    if (difficulty === "0" && op === "a") {
      after = decideNum(difficulty, op);
      while (before + after >= 10) {
        before = decideNum(difficulty, op);
        after = decideNum(difficulty, op);
      }
    } else {
      if (op === "s") {
        after = decideNum(difficulty, op);

        if (before < after) {
          let tmp = before;
          before = after;
          after = tmp;
        }
      } else if (op === "d") {
        after = choiceDividable(before);
      } else {
        after = decideNum(difficulty, op);
      }
    }

    const str = before.toString() + op + after.toString();
    return str;
  };

  const generateToken = (num, difficulty, operand) => {
    let quizes = [];
    while (quizes.length < num) {
      let quiz = generateQuiz(difficulty, operand);
      if (!quizes.includes(quiz)) {
        quizes.push(quiz);
      }
    }

    return quizes.join(":");
  };

  const handleClick = (e) => {
    e.preventDefault();
    const token = generateToken(state.num, state.difficulty, state.operand);
    router.push("/drill?token=" + token);
  };

  const [state, setState] = useState({
    num: "10",
    difficulty: "0",
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
            {[10, 20].map((num) => (
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
            <option value="0">ちょうかんたん(繰り上がりなし)</option>
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

            <option value="A">たしざん+ひきざん</option>
            <option value="M">かけざん+わりざん</option>
            <option value="r">ぜんぶ</option>
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
