import React, {useState} from 'react';
import {Modal, Button, Form} from "react-bootstrap";
import {createBrand} from "../../http/deviceAPI";


const CreateBrand = ({show, onHide}) => {
    const [value, setValue] = useState('');
    const addBrand = () => {
        createBrand({name: value}).then(data => {
            setValue('')
            onHide()
        })
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
        >
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавити бренд
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        value = {value}
                        onChange={e => setValue(e.target.value)}
                        placeholder={"Введіть назву типа"}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={onHide} variant="outline-danger">Закрити</Button>
                <Button onClick={addBrand} variant= "outline-success">Добавити</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateBrand;