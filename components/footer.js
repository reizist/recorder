export default function Footer({ token }) {
  let qrCodeUrl;
  if (token) {
    qrCodeUrl =
      "https://chart.apis.google.com/chart?cht=qr&chs=150x150&chl=" +
      "https://recorder-reizist.vercel.app/drill?token=" +
      token;
  }

  return (
    <footer className="flex items-center justify-center border-t mt-4">
      <div className="flex-box">
        <div className="flex items-center justify-center">
          <img src={qrCodeUrl} className="mt-2" />
          Powered by{" "}
          <span className="pl-1 text-base text-purple-700">
            <a href="https://recorder-reizist.vercel.app/">
              ドリルジェネレータ
            </a>
          </span>
        </div>
        <div className="flex without-print mb-2 text-center items-center justify-center">
          <span className="text-base">
            改善/機能追加依頼は
            <a
              href="https://forms.gle/UxUsnTzAXKxYFg7q6"
              target="_blank"
              className="text-purple-700"
            >
              コチラ
            </a>
            にお願いします。
          </span>
        </div>
      </div>
    </footer>
  );
}
