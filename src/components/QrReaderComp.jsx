import React,{useState} from 'react'
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import QrScanner from 'qr-scanner';

export default function QrReaderComp() {
    const [decode, setDecode]=useState("")

    const readQRCode= (e) =>{
        const file = e.target.files[0];
        if (!file) {
            return;
        }
        QrScanner.scanImage(file, { returnDetailedScanResult: true })
            .then(result => setDecode(result.data))
            .catch(e => console.log(e));
      }

  return (
    <Card  style={{ width: '90%',margin:'2% 5%' }}>
    <Card.Header>QR Upload</Card.Header>
      <Card.Body>
        <Row>
        <p>Result is <b>{decode}</b></p>
        </Row>
      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Upload QR file for decode message</Form.Label>
        <Form.Control type="file" onChange={(e)=>{readQRCode(e)}}/>
      </Form.Group>
      
      <Button variant="primary">Upload</Button>
      </Card.Body>
    </Card>
  )
}
