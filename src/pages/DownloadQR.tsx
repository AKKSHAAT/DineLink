import { useEffect, useRef, useState } from "react";
import QRCode from "qrcode";

export const DownloadQR = () => {
  const [qrUrl, setQrUrl] = useState("");
  const canvasRef = useRef(null);
  const downloadUrl = "https://dinelink.onrender.com/menu";

  useEffect(() => {
    generateQR();
  }, []);

  const generateQR = async () => {
    try {
      const url = await QRCode.toDataURL(downloadUrl);
      setQrUrl(url);
    } catch (err) {
      console.error("Error generating QR code", err);
    }
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = qrUrl;
    link.download = "menu-qr-code.png";
    link.click();
  };

  return (
    <div className="flex flex-col items-center mt-20 min-h-screen">
      <h2 className="text-2xl font-bold mb-2">Download Your Menu QR Code</h2>
      <p className="text-lg font-thin mb-4">Customers can scan this to view and order form your Menu 🔥</p>
      <div className="bg-white p-4 rounded-lg shadow-lg flex flex-col ">
        {qrUrl && <img src={qrUrl} alt="Menu QR Code" className="mb-4 w-48 h-48" />}
        <button
          onClick={handleDownload}
          className="bg-pink-500 text-white py-2 px-4  rounded-lg hover:bg-pink-600 transition-transform transform hover:scale-105"
        >
          Download QR Code
        </button>
      </div>
    </div>
  );
};
