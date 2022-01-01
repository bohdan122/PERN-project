import React, {useState} from 'react'
import {Button, Container} from "react-bootstrap";
import CreateType from "../components/modals/CreateType";
import CreateBrand from "../components/modals/CreateBrand";
import CreateDevice from "../components/modals/CreateDevice";

const Admin = () => {
    const [brandVisible, setBrandVisible] = useState(false);
    const [typeVisible, setTypeVisible] = useState(false);
    const [deviceVisible, setDeviceVisible] = useState(false);

    return(
        <Container className="d-flex flex-column">
            <Button variant={"outline-dark"} className="mt-3" onClick={() => setTypeVisible(true)}>Добавити тип</Button>
            <Button variant={"outline-dark"}  className="mt-3" onClick={() => setDeviceVisible(true)}>Добавити пристрій</Button>
            <Button variant={"outline-dark"}  className="mt-3" onClick={() => setBrandVisible(true)}>Добавити бренд</Button>
            <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)}/>
            <CreateDevice show={deviceVisible} onHide={() => setDeviceVisible(false)}/>
            <CreateType show={typeVisible} onHide={() => setTypeVisible(false)}/>
        </Container>
    )
}
export default Admin
