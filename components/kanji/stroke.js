import { useState } from "react";
import { element_1_kanjis, element_2_kanjis } from "./define";
import Link from "next/link";
import { AccordionHeader, Accordion } from "./accordion";

export default function Stroke() {
  const [activeItem, setActiveItem] = useState("");
  const toggleActiveItem = (id) => () => {
    setActiveItem((prevState) => (prevState !== id ? id : ""));
  };
  const kanji_lists = [
    { level: 1, label: "小学一年生", list: element_1_kanjis },
    { level: 2, label: "小学二年生", list: element_1_kanjis },
    { level: 3, label: "小学三年生", list: [] },
    { level: 4, label: "小学四年生", list: [] },
    { level: 5, label: "小学五年生", list: [] },
    { level: 6, label: "小学六年生", list: [] },
  ];

  return (
    <>
      <div className="mt-8">
        <div>
          {kanji_lists.map((kanji) => (
            <>
              <AccordionHeader
                id={"element-" + kanji["level"]}
                activeItem={activeItem}
                onClick={toggleActiveItem("element-" + kanji["level"])}
              >
                {kanji["label"]}
              </AccordionHeader>
              <Accordion id={"element-" + kanji["level"]} isOpen={activeItem}>
                <div className="grid grid-cols-5 grid-flow-row gap-2 auto-rows-max md:auto-rows-min">
                  {kanji["list"].length > 0 &&
                    kanji["list"].map((kanji) => (
                      <Link href={"/kanji/detail?s=" + kanji}>
                        <div className="text-center justify-center items-center">
                          <span className="text-2xl">{kanji}</span>
                        </div>
                      </Link>
                    ))}

                  {kanji["list"].length <= 0 && <span>準備中..</span>}
                </div>
              </Accordion>
            </>
          ))}
        </div>
      </div>
    </>
  );
}
