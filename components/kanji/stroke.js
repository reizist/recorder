import { useState } from "react";
import { element_1_kanjis, element_2_kanjis } from "./define";
import Link from "next/link";
import { AccordionHeader, Accordion } from "./accordion";

export default function Stroke() {
  const [activeItem, setActiveItem] = useState("");
  const toggleActiveItem = (id) => () => {
    setActiveItem((prevState) => (prevState !== id ? id : ""));
  };

  return (
    <>
      <div className="mt-8">
        <div>
          <AccordionHeader
            id="element-1"
            activeItem={activeItem}
            onClick={toggleActiveItem("element-1")}
          >
            小学一年生
          </AccordionHeader>
          <Accordion id="element-1" isOpen={activeItem}>
            <div className="grid grid-cols-5 grid-flow-row gap-2 auto-rows-max md:auto-rows-min">
              {element_1_kanjis.map((kanji) => (
                <Link href={"/kanji/detail?s=" + kanji}>
                  <div className="text-center justify-center items-center">
                    <span className="text-2xl">{kanji}</span>
                  </div>
                </Link>
              ))}
            </div>
          </Accordion>

          <AccordionHeader
            id="element-2"
            activeItem={activeItem}
            onClick={toggleActiveItem("element-2")}
          >
            小学二年生
          </AccordionHeader>
          <Accordion id="element-2" isOpen={activeItem}>
            <div className="grid grid-cols-5 grid-flow-row gap-2 auto-rows-max md:auto-rows-min">
              {element_2_kanjis.map((kanji) => (
                <Link href={"/kanji/detail?s=" + kanji}>
                  <div className="text-center justify-center items-center">
                    <span className="text-2xl">{kanji}</span>
                  </div>
                </Link>
              ))}
            </div>
          </Accordion>
        </div>
      </div>
    </>
  );
}
