export default function Footer({ token }) {
  let qrCodeUrl;
  if (typeof window !== "undefined") {
    qrCodeUrl =
      "https://chart.apis.google.com/chart?cht=qr&chs=150x150&chl=" +
      window.location.hostname +
      "/drill?token=" +
      token;
  } else {
    qrCodeUrl =
      "https://chart.apis.google.com/chart?cht=qr&chs=150x150&chl=" +
      "https://recorder-delta.vercel.app/drill?token=" +
      token;
  }
  return (
    <footer className="flex items-center justify-center border-t mt-4">
      <img src={qrCodeUrl} />
      Powered by{" "}
      <span className="pl-1 text-base text-purple-700">
        計算ドリルジェネレータ
      </span>
    </footer>
  );
}
