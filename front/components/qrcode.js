export default function QrCODE({ path, size }) {
  let qrCodeUrl;
  if (path) {
    qrCodeUrl = `https://chart.apis.google.com/chart?cht=qr&chs=${size}x${size}&chl=https://drill-generator.com/${path}`;
  }

  return <img src={qrCodeUrl} className="mt-2" />;
}
