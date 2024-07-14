import { useState } from "react";
import QRCode from "react-qr-code";

export default function QRCodeGenerator() {
  const [qrcode, setQrcode] = useState("");
  const [input, setInput] = useState("");

  const handleGenerateQrCode = () => {
    setQrcode(input);
  };

  return (
    <div>
      <h1>QR Code Generator</h1>
      <div>
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          name="qr-code"
          placeholder="Enter your value here"
        />
        <button
          disabled={input && input.trim() !== "" ? false : true}
          onClick={handleGenerateQrCode}
        >
          Generate
        </button>
      </div>
      <div>
        <QRCode id="qe-code-value" value={qrcode} size={400} bgColor='#fff' />
      </div>
    </div>
  );
}
