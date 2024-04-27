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
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Додати бренд
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        value={value}
                        onChange={handleChange}
                        placeholder={"Введіть назву бренду"}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрити</Button>
                <Button variant="outline-success" onClick={addBrand}>Додати</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateBrand;
