export function toCode(kanji) {
  return kanji.charCodeAt(0).toString(16);
}

export function svgPath(kanji) {
  return "/kanji/0" + toCode(kanji) + ".svg";
}

export function renderSVG(kanji, classes) {
  return <img src={svgPath(kanji)} className={classes} />;
}

export function renderSVGAsObject(kanji, classes) {
  let dom = (
    <object
      id={toCode(kanji)}
      type="image/svg+xml"
      data={svgPath(kanji)}
      className={classes}
    ></object>
  );

  return dom;
}
