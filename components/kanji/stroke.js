import { element_1_kanjis } from "./define";
import Link from "next/link";
export default function Stroke() {
  return (
    <>
      <div className="mt-8">
        <div className="grid grid-cols-5 grid-flow-row gap-2 auto-rows-max md:auto-rows-min">
          {element_1_kanjis.map((kanji) => (
            <Link href={"/kanji/detail?s=" + kanji}>
              <div className="text-center justify-center items-center">
                <span className="text-2xl">{kanji}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
