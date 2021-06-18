export default function QrCODE({ token, size }) {
  let qrCodeUrl;
  if (token) {
    qrCodeUrl = `https://chart.apis.google.com/chart?cht=qr&chs=${size}x${size}&chl=
      https://recorder-reizist.vercel.app/drill?token=${token}`;
  }
  console.log(qrCodeUrl);

  return <img src={qrCodeUrl} className="mt-2" />;
}
