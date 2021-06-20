import { useState } from "react";
import { useRouter } from "next/router";
import { element_1_kanjis, element_2_kanjis } from "./define";
import { AccordionHeader, Accordion } from "./accordion";
import License from "./license";

export default function Stroke() {
  const [activeItem, setActiveItem] = useState("");
  const toggleActiveItem = (id) => () => {
    setActiveItem((prevState) => (prevState !== id ? id : ""));
  };

  const kanjiLists = [
    { level: 1, label: "小学一年生", list: element_1_kanjis },
    { level: 2, label: "小学二年生", list: element_2_kanjis },
    { level: 3, label: "小学三年生", list: [] },
    { level: 4, label: "小学四年生", list: [] },
    { level: 5, label: "小学五年生", list: [] },
    { level: 6, label: "小学六年生", list: [] },
  ];

  let allKanjiList = [];
  let initState = {};

  kanjiLists.map((kanjiList) => {
    allKanjiList = allKanjiList.concat(kanjiList["list"]);
  });

  allKanjiList.map((kanji) => {
    initState[kanji] = false;
  });

  const [kanjiState, setKanjiState] = useState(initState);

  const router = useRouter();

  const handleKanjiClick = (e) => {
    let kanji = e.currentTarget.innerText;
    setKanjiState({ ...kanjiState, [kanji]: !kanjiState[kanji] });
  };

  const handleClick = (e) => {
    e.preventDefault();

    const token = generateToken(activeKanjiList());
    router.push("/kanji/drill?token=" + token);
  };

  const activeKanjiList = () => {
    let activeList = [];
    for (let key in kanjiState) {
      if (kanjiState[key] === true) {
        activeList.push(key);
      }
    }

    return activeList;
  };

  const generateToken = (list) => {
    return list.join(":");
  };

  return (
    <>
      <div className="mt-8">
        <div>
          <div className="mb-8 block text-center text-xl">
            <span className="text my-2 text-base">
              問題にしたい漢字を一覧から選択してください。
            </span>
          </div>
          {kanjiLists.map((kanji) => (
            <>
              <AccordionHeader
                key={"element-" + kanji["level"]}
                id={"element-" + kanji["level"]}
                activeItem={activeItem}
                onClick={toggleActiveItem("element-" + kanji["level"])}
              >
                {kanji["label"]}
              </AccordionHeader>
              <Accordion id={"element-" + kanji["level"]} isOpen={activeItem}>
                <div
                  key={"element-" + kanji["level"]}
                  className="grid grid-cols-5 grid-flow-row gap-4 auto-rows-max md:auto-rows-min"
                >
                  {kanji["list"].length > 0 &&
                    kanji["list"].map((kanji) => (
                      <div
                        key={kanji}
                        className={`text-center justify-center items-center ${
                          kanjiState[kanji] === true ? "bg-blue-500" : ""
                        }`}
                        onClick={handleKanjiClick}
                      >
                        <span
                          className={`text-2xl ${
                            kanjiState[kanji] == true ? "text-white" : ""
                          }`}
                        >
                          {kanji}
                        </span>
                      </div>
                    ))}

                  {kanji["list"].length <= 0 && <span>準備中..</span>}
                </div>
              </Accordion>
            </>
          ))}

          <div className="mb-8 block text-center text-xl">
            <label htmlFor="list" className="text-sm block">
              選択されている漢字
            </label>
            <input
              type="textfield"
              className="list m-1 p-1 border w-5/6"
              value={activeKanjiList().join(",")}
              disabled
            />
          </div>

          <div className="mb-8 block text-center">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={handleClick}
            >
              問題作成
            </button>
          </div>

          <div className="mb-8 block text-center">
            <License />
          </div>
        </div>
      </div>
    </>
  );
}
