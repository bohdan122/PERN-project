import React, { useState } from 'react';
import Modal from "react-bootstrap/Modal";
import { Button, Form } from "react-bootstrap";
import { createBrand } from "../../http/deviceAPI";

const CreateBrand = ({ show, onHide }) => {
    const [value, setValue] = useState('');

    const addBrand = () => {
        createBrand({ name: value }).then(() => {
            setValue('');
            onHide();
        });
    };

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
        >
            <Modal.Header>
                <Modal.Title style={{color: "#333", fontWeight: "bold"}}>Додати новий бренд</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group>
                        <Form.Label>Назва бренду</Form.Label>
                        <Form.Control
                            value={value}
                            onChange={handleChange}
                            placeholder="Введіть назву бренду"
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>Відмінити</Button>
                <Button variant="primary" onClick={addBrand} disabled={!value}>Додати</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateBrand;
