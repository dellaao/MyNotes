import React from 'react';
import {
    Button,
    Row,
    Col,
    Navbar,
    Nav,
    Container,
    NavDropdown,
    Form,
    FormControl,
} from "react-bootstrap";
import { useNavigate } from "react-router";

const Navigationbar = () => {
    let navigate = useNavigate();
    function handleClickHome() {
      navigate("/src/screen/home/index.tsx");
    }
    function handleClickFavorite() {
      navigate("/src/screen/favorite/index.tsx");
    }
    return (
      <div>
        <Navbar bg="light" expand="lg">
          <Container fluid>
            <Navbar.Brand onClick={handleClickHome}>My Note</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link onClick={handleClickHome}>Home</Nav.Link>
                <Nav.Link onClick={handleClickFavorite}>Favorite</Nav.Link>
                {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                    Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                    Something else here
                    </NavDropdown.Item>
                </NavDropdown> */}
                {/* <Nav.Link href="#" disabled>
                    Note Design
                </Nav.Link> */}
              </Nav>
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
}

export default Navigationbar