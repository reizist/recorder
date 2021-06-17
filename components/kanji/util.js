function toCode(kanji) {
  return kanji.charCodeAt(0).toString(16);
}

export default function svgPath(kanji) {
  return "/kanji/0" + toCode(kanji) + ".svg";
}
