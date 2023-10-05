import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardWidget from '../cardWidget/cardWidget';
import styles from './styles.module.css';

const NavBar = () =>   {
  return (
    <Navbar expand="xxl" className={styles.Navbar}>
      <Container className={styles.container}>
        <Navbar.Brand className={styles.menuNav} href="#home">TIENDA</Navbar.Brand>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className={styles.nav}>
                    <Nav.Link className={styles.menuNav} href="#home">Home</Nav.Link>
                    <Nav.Link className={styles.menuNav} href="#link">Contacto</Nav.Link>
                        <NavDropdown title="PRODUCTOS" id="basic-nav-dropdown">
                            <NavDropdown.Item className={styles.menuNav} href="#action/3.1">Jordan</NavDropdown.Item>
                            <NavDropdown.Item className={styles.menuNav} href="#action/3.2">Gorras</NavDropdown.Item>
                            <NavDropdown.Item className={styles.menuNav} href="#action/3.3">Poleras</NavDropdown.Item>
                        </NavDropdown>
                </Nav>
            </Navbar.Collapse>
            <Form inline>
              <Row>
                <Col xs="auto">
                  <Form.Control
                    type="text"
                    placeholder="Busca tu Producto"
                    className=" mr-sm-2"
                  />
                  </Col>
                  <Col xs="auto">
                  <Button type="submit">Buscar</Button>
                </Col>
              </Row>
            </Form>
            <CardWidget/>
      </Container>
    </Navbar>
  );
}

export default NavBar;