import { useState } from "react";
import QRCode from "react-qr-code";
import './style.css'

export default function QRCodeGenerator() {
  const [qrcode, setQrcode] = useState("");
  const [input, setInput] = useState("");

  const handleGenerateQrCode = () => {
    setQrcode(input);
    setInput("");
  };

  return (
    <div>
      <h1 className='hey'>QR Code Generator</h1>
      <div>
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          name="qr-code"
          value={input}
          placeholder="Enter your value here"
        />
        <button
          disabled={input && input.trim() !== "" ? false : true}
          onClick={handleGenerateQrCode} className='button-hash'
        >
          Generate
        </button>
      </div>
      <div>
        <QRCode id="qe-code-value" value={qrcode} size={400} bgColor="#fff" />
      </div>
    </div>
  );
}
