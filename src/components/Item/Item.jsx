import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from 'react'

const Item = ({prod}) => {
  return (
    <>
    <Card style={{ width: '15rem',float:'left' }}>
      <Card.Img variant="top" src= {prod.img} />
      <Card.Body>
        <Card.Title>{prod.nombre}</Card.Title>
        <Card.Text>
          {prod.detalle}
        </Card.Text>
        <Card.Text>
          ${prod.precio}  
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </>
  )
}

export default Item

