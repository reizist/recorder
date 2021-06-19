import "../../components/kanji/util";
import { svgPath } from "../../components/kanji/util";

export async function getServerSideProps(context) {
  const { s } = context.query;
  return { props: { kanji: s } };
}

export default function Detail({ kanji }) {
  return (
    <>
      <div className="mt-8">
        <div className="grid grid-cols-5 grid-flow-row gap-2 auto-rows-max md:auto-rows-min">
          <div className="text-center justify-center items-center">
            <img src={svgPath(kanji)} />
          </div>
        </div>
      </div>
    </>
  );
}
