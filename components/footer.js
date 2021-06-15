export default function Footer({ token }) {
  return (
    <footer className="flex items-center justify-center border-t">
      <img
        src={
          "https://chart.apis.google.com/chart?cht=qr&chs=150x150&chl=" +
          window.location.hostname +
          "/drill?token=" +
          token
        }
      />
      Powered by{" "}
      <span className="pl-1 font-sans text-base text-purple-700">
        計算ドリルジェネレータ
      </span>
    </footer>
  );
}
