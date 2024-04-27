import React, { useState } from 'react';
import { Button, Container } from "react-bootstrap";
import CreateBrand from "../components/modals/CreateBrand";
import CreateDevice from "../components/modals/CreateDevice";
import CreateType from "../components/modals/CreateType";

const Admin = () => {
    const [isBrandModalVisible, setBrandModalVisible] = useState(false);
    const [isTypeModalVisible, setTypeModalVisible] = useState(false);
    const [isDeviceModalVisible, setDeviceModalVisible] = useState(false);

    const handleBrandModalClose = () => setBrandModalVisible(false);
    const handleTypeModalClose = () => setTypeModalVisible(false);
    const handleDeviceModalClose = () => setDeviceModalVisible(false);

    return (
        <Container className="d-flex flex-column">
            <Button
                variant="outline-dark"
                className="mt-4 p-2"
                onClick={() => setTypeModalVisible(true)}
            >
                Додати тип
            </Button>
            <Button
                variant="outline-dark"
                className="mt-4 p-2"
                onClick={() => setBrandModalVisible(true)}
            >
                Додати бренд
            </Button>
            <Button
                variant="outline-dark"
                className="mt-4 p-2"
                onClick={() => setDeviceModalVisible(true)}
            >
                Додати пристрій
            </Button>
            <CreateBrand show={isBrandModalVisible} onHide={handleBrandModalClose}/>
            <CreateDevice show={isDeviceModalVisible} onHide={handleDeviceModalClose}/>
            <CreateType show={isTypeModalVisible} onHide={handleTypeModalClose}/>
        </Container>
    );
};

export default Admin;
