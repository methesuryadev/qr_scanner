import './App.css';
import ThemeProvider from 'react-bootstrap/ThemeProvider'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import QrGeneratorComp from './components/QrGeneratorComp';
import QrReaderComp from './components/QrReaderComp';

function App() {
  return (
    <div className="App">
    <ThemeProvider
      breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
      minBreakpoint="xxs">
        <Navbar variant="dark" bg="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="javascript:void(0)">Surya QR Scanner</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-dark-example" />
        <Navbar.Collapse id="navbar-dark-example">
        </Navbar.Collapse> 
      </Container>
    </Navbar>
    <QrGeneratorComp/>
        <QrReaderComp/>
  </ThemeProvider>;
    </div>
  );
}

export default App;
