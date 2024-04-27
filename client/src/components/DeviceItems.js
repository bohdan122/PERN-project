import React from 'react';
import { Card, Col, Image } from "react-bootstrap";
import star from '../assets/star.png';
import { useHistory } from 'react-router-dom';
import { DEVICE_ROUTE } from '../utils/consts';

const DeviceItems = ({ device }) => {
  const history = useHistory();

  const handleCardClick = () => {
    history.push(`${DEVICE_ROUTE}/${device.id}`);
  };

  return (
    <Col md={3} style={{ marginTop: 10 }} onClick={handleCardClick}>
      <Card style={{ width: 150, cursor: 'pointer' }} border="light">
        <Image width={180} height={150} src={process.env.REACT_APP_API_URL + device.img} />
        <div className="d-flex justify-content-between align-items-center mt-1">
          <div>{device.name}</div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ marginLeft: 5 }}>{device.rating}</div>
            <Image src={star} width={18} height={18} style={{ marginLeft: 5 }} />
          </div>
        </div>
      </Card>
    </Col>
  );
};

export default DeviceItems;
