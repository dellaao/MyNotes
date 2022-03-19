import React from 'react';
import Navigationbar from '../../component/navigation';
import { Button, Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";

const Detail = () => {
  return (
    <div>
      <Navigationbar />
      <Card style={{ marginTop: 25, marginLeft: 10, marginRight: 10 }}>
        <Card.Header as="h5">Title</Card.Header>
        <Card.Body>
          <Card.Title>Special title treatment</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional
            content.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Detail