import React from 'react'
import ItemCount from '../ItemCount/ItemCount';
import Card from 'react-bootstrap/Card';

const ItemDetail = () => {

  return (
    <div>
        <h1>Entro a item detail</h1>
        <Card id="card">
      <Card.Img    style={{width:150 , height:150, alignSelf: 'center',paddingTop:10 }}/>
      <Card.Body>
        <Card.Title></Card.Title>
      </Card.Body>
      <ItemCount></ItemCount>
    </Card>
        
    </div>
  )
}

export default ItemDetail
