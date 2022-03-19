import React, { useState } from 'react';
import { Button, Col, Modal, Row} from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router";

const CardNote = () => {
    let navigate = useNavigate();
    function handleClickDetail() {
        navigate('/src/screen/detail/index.tsx')
    }
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
      <div>
        <Row>
          <Col sm style={{ marginTop: 25, marginLeft: 10, marginRight: 10 }}>
            <Card>
              <Card.Header as="h5">Title</Card.Header>
              <Card.Body>
                <Card.Title>Special title treatment</Card.Title>
                {/* <Card.Text>
                  With supporting text below as a natural lead-in to additional
                  content.
                </Card.Text> */}
                <div>
                  <Button
                    style={{ marginRight: 10 }}
                    variant="primary"
                    onClick={handleClickDetail}
                  >
                    Detail
                  </Button>
                  <Button
                    style={{ marginRight: 10 }}
                    variant="secondary"
                    onClick={handleShow}
                  >
                    Edit
                  </Button>
                  <Button style={{ marginRight: 10 }} variant="danger">
                    Delete
                  </Button>
                </div>
                <Modal show={show} onHide={handleClose} animation={false}>
                  <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Card.Title>Special title treatment</Card.Title>
                    Woohoo, you're reading this text in a modal!
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                      Save Changes
                    </Button>
                  </Modal.Footer>
                </Modal>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    );
}

export default CardNote