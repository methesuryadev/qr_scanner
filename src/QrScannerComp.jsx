// import React,{useRef} from 'react'
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import Form from 'react-bootstrap/Form';
// import InputGroup from 'react-bootstrap/InputGroup';
// import { useState } from 'react';
// import QRCode from 'react-qr-code';
// import QrScanner from 'qr-scanner';

// export default function QrScannerComp() {

//     const [qrmsg, setQrmsg]=useState();
//     const [qrCodeText, setQrCodeText]=useState();
//     const [back,setBack]=useState("#FFF");
//     const [fore,setFore]=useState("#000");
//     const [size,setSize]=useState(256);
//     const [data, setData] = useState('No result');
//     const [decode, setDecode]=useState("")

//     // generate QR code
//     const generateQRCode = () => {
//         setQrCodeText(qrmsg);
//       }
    
//       const onImageCownload = () => {
//         const svg = document.getElementById("QrImage");
//         const svgData = new XMLSerializer().serializeToString(svg);
//         const canvas = document.createElement("canvas");
//         const ctx = canvas.getContext("2d");
//         const img = new Image();
//         img.onload = () => {
//           canvas.width = img.width;
//           canvas.height = img.height;
//           ctx.drawImage(img, 0, 0);
//           const pngFile = canvas.toDataURL("image/png");
//           const downloadLink = document.createElement("a");
//           downloadLink.download = "QRCode";
//           downloadLink.href = `${pngFile}`;
//           downloadLink.click();
//         };
//         img.src = `data:image/svg+xml;base64,${btoa(svgData)}`;
//       };

//       const readQRCode= (e) =>{
//         const file = e.target.files[0];
//         if (!file) {
//             return;
//         }
//         QrScanner.scanImage(file, { returnDetailedScanResult: true })
//             .then(result => setDecode(result.data))
//             .catch(e => console.log(e));
//       }
    

//   return (
//     <>
//     <Navbar variant="dark" bg="dark" expand="lg">
//       <Container fluid>
//         <Navbar.Brand href="javascript:void(0)">Surya QR Scanner</Navbar.Brand>
//         <Navbar.Toggle aria-controls="navbar-dark-example" />
//         <Navbar.Collapse id="navbar-dark-example">
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
   
    

//     </>
//   )
// }
