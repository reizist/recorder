export default function Tweets() {
  return (
    <div>
      <div className="">
        <span className="text-gray-500 text-lg">お知らせ</span>
      </div>
      <div className="tweets container mx-auto justify-center items-center">
        <a
          className="twitter-timeline"
          data-lang="ja"
          data-height="800"
          data-link-color="#6b46c1"
          data-theme="light"
          data-show-replies="false"
          data-chrome="noheader nofooter noborders noscrollbar"
          href="https://twitter.com/DrillGen?ref_src=twsrc%5Etfw"
        ></a>
        <script
          async
          src="https://platform.twitter.com/widgets.js"
          charSet="utf-8"
        ></script>
      </div>
    </div>
  );
}
