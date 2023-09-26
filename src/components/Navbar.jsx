import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavButton from './Buttons';

export default function NavbarHeader() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home" className='fs-1 fw-bold'>Simple Cal 🧘🏽‍♂️</Navbar.Brand>
        <Nav className="ms-auto">
            {/* <Nav.Link href="#home" className='fs-5'>Set Daily Limit</Nav.Link> */}
            <NavButton>Set Daily Limit</NavButton>
            <NavButton btnType="btn-danger">Reset</NavButton>
            {/* <Nav.Link href="#link" className='fs-5'>Reset</Nav.Link> */}
          </Nav>
      </Container>
    </Navbar>
  );
}