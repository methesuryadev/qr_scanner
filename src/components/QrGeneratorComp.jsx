import React from "react";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { useState } from "react";
import QRCode from "react-qr-code";
export default function QrGeneratorComp() {
  const [qrmsg, setQrmsg] = useState();
  const [qrCodeText, setQrCodeText] = useState();
  const [back, setBack] = useState("#FFF");
  const [fore, setFore] = useState("#000");
  const [size, setSize] = useState(256);

  // generate QR code
  const generateQRCode = () => {
    setQrCodeText(qrmsg);
  };


  // download QR code
  const onImageCownload = () => {
    const svg = document.getElementById("QrImage");
    const svgData = new XMLSerializer().serializeToString(svg);
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const img = new Image();
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
      const pngFile = canvas.toDataURL("image/png");
      const downloadLink = document.createElement("a");
      downloadLink.download = "QRCode";
      downloadLink.href = `${pngFile}`;
      downloadLink.click();
    };
    img.src = `data:image/svg+xml;base64,${btoa(svgData)}`;
  };


  
  return (
    <Card style={{ width: "90%", margin: "2% 5%" }}>
      <Card.Header>Generate QR</Card.Header>
      <Card.Body>
        <Row>
          {qrCodeText && (
            <QRCode
              id="QrImage"
              title="QRCreator"
              value={qrCodeText}
              bgColor={back}
              fgColor={fore}
              size={size === "" ? 0 : size}
            />
          )}
        </Row>

        <Form.Label htmlFor="basic-url">
          Enter Message for Encode in QR Code
        </Form.Label>
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="Username"
            aria-label="Username"
            aria-describedby="basic-addon1"
            onChange={(e) => {
              console.log(e.target.value);
              setQrmsg(e.target.value);
            }}
          />
        </InputGroup>

        <Button variant="success" className="mx-2" onClick={generateQRCode}>
          Generate QR
        </Button>
        <Button
          variant="primary"
          disabled={!qrCodeText}
          onClick={onImageCownload}
        >
          Download Generate QR
        </Button>
      </Card.Body>
    </Card>
  );
}
