import fs from "fs";
async function getFromLocal(codes) {
  let metas = [];
  codes.split(",").map((code) => {
    let data;
    try {
      data = JSON.parse(fs.readFileSync(`./public/kanji/meta/${code}.json`));
      metas.push(data);
    } catch {}
  });
  return metas;
}

export default async (req, res) => {
  let codes = req.query.codes;
  let meta = await getFromLocal(codes);

  res.status(200).json({ meta: meta });
};
