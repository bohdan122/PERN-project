import React, {useContext} from 'react';
import {observer} from 'mobx-react-lite'
import {Context} from '../index'
import {ListGroup} from 'react-bootstrap/ListGroup'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'


const BrandBar = observer(() =>{
  const {device} = useContext(Context)
  return(
    <Row style = {{display: 'flex'}}>
    {device.brands.map(brand =>
      <Card
      key = {brand.id}
      style = {{padding: 10, width: 100, textAlign: 'center', cursor: 'pointer'}}
      onClick = {() => device.setSelectedBrand(brand)}
      border = {brand.id === device.selectedBrand.id ? 'danger' : 'light'}
      >
      {brand.name}
      </Card>
    )}
    </Row>
  );
});

export default BrandBar;
