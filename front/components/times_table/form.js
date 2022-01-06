import { useState } from "react";
import { useRouter } from "next/router";

export default function Form() {
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    router.push("/times_table/drill?num=" + state.num);
  };

  const [state, setState] = useState({
    num: "10",
  });

  function handleChangeNum(event) {
    setState({ ...state, num: event.target.value });
  }

  return (
    <div>
      <div className="mt-8 mx-auto max-w-lg">
        <div className="mb-8 block">
          <label htmlFor="difficulty" className="text-sm block">
            いくつまでの表を作る？
          </label>
          <input
            type="number"
            onChange={handleChangeNum}
            className="block w-full mt-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            value={state.num}
          />
        </div>

        <div className="mb-8 block">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleClick}
          >
            作成
          </button>
        </div>
      </div>
    </div>
  );
}
