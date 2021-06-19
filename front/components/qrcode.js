export default function QrCODE({ path, size }) {
  let qrCodeUrl;
  if (path) {
    qrCodeUrl = `https://chart.apis.google.com/chart?cht=qr&chs=${size}x${size}&chl=https://recorder-reizist.vercel.app/${path}`;
  }
  console.log(qrCodeUrl);

  return <img src={qrCodeUrl} className="mt-2" />;
}
