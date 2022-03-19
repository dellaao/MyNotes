import React from 'react';
import { Button } from 'react-bootstrap';
import Form from "react-bootstrap/Form";
import Navigationbar from '../navigation';

const CreateNote = () => {
        return (
        <div>
            <Navigationbar />
            <Form style={{ marginTop: 25, marginLeft: 10, marginRight: 10 }}>
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" placeholder="Title" />
            <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Masukkan File</Form.Label>
                <Form.Control type="file" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <div className="d-grid gap-2">
                <Button variant="primary" size="lg">
                Save Changes
                </Button>
            </div>
            </Form>
        </div>
        );
}

export default CreateNote;