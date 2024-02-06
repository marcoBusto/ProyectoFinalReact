import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React, { useState } from 'react';
 
const Item = ({prod}) => {
  const [cantidad, setCantidad] = useState(0);
  const incrementarCantidad = () => {
    setCantidad(cantidad + 1);
  };
  const decrementarCantidad = () => {
    if (cantidad > 0) {
      setCantidad(cantidad - 1);
    }
  };
  return (
    <>
    <Card id="card">
      <Card.Img  src= {prod.img}  style={{width:150 , height:150, alignSelf: 'center',paddingTop:10 }}/>
      <Card.Body>
        <Card.Title>{prod.nombre}</Card.Title>
        <Card.Text>
          {prod.detalle}
        </Card.Text>
        <Card.Text>
          ${prod.precio}  
        </Card.Text>
        <div style={{display:'flex',flexDirection:'row',alignItems:'strench'}}>
          <Button variant="primary"  size="sm" style={{marginLeft:5,}} onClick={decrementarCantidad}>-</Button>
          <Card.Text style={{marginLeft:5}}>{cantidad}</Card.Text>
          <Button variant="primary"  size="sm" style={{marginLeft:5}} onClick={incrementarCantidad}>+</Button>
          <Button variant="primary"  size="sm" style={{marginLeft:5}}>Agregar al carrito</Button>
        </div>  
      </Card.Body>
    </Card>
    </>
  )
}

export default Item

