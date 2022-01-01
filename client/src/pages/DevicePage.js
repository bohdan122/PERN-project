import React, {useEffect, useState} from 'react'
import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";
import bigStar from '../assets/kisspng-hollywood-walk-of-fame-hollywood-boulevard-movie-s-big-star-pictures-5a8861551710f5.0958698315188872530945.png'
import {useParams} from 'react-router-dom'
import {fetchOneDevice} from "../http/deviceAPI";
const DevicePage = () => {
    const [device, setDevice] = useState({info: []});
    const {id} = useParams();
    useEffect(() =>
    {
    fetchOneDevice(id).then(data => setDevice(data))
    },[]);
    return(
        <Container className="mt-3">
            <Row>
            <Col md = {4} className="d-flex justify-content-center">
              <Image width={300} height={300}  src={process.env.REACT_APP_API_URL + device.img} style={{marginRight: 10}}/>
            </Col>

            <Col md = {4} className="mt-2">
                <Row className="d-flex flex-column align-items-center">
                    <h2 className="text-center">{device.name}</h2>
                    <div  className="d-flex align-items-center justify-content-center"
                         style={{background: `url(${bigStar}) no-repeat center center`, width:240, height: 240, backgroundSize: 'cover', fontSize:64}}>
                        {device.rating}
                    </div>
                </Row>
            </Col>

            <Col md = {4} className="mt-2 d-flex justify-content-center">
                <Card  className="d-flex flex-column align-items-center justify-content-around"
                       style={{width: 300, height: 300, fontSize: 32, border: '3px solid black'}}
                >

            <h3>Від: {device.price} грн</h3>
                <Button variant={"outline-dark"}>Додати в кошик</Button>
                </Card>
            </Col>
            </Row>
            <Row className="d-flex flex-column m-3 align-items-center">
                {device.info.map((info, index) =>
                <Row key = {info.id} style = {{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10}}>
                    {info.title}: {info.description}
                </Row>
                )}
            </Row>
        </Container>
    )
}

export default DevicePage