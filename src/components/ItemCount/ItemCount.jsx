import {React, useState} from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const ItemCount = () => {
    const [cantidad, setCantidad] = useState(1);
  const incrementarCantidad = () => {
    setCantidad(cantidad + 1);
  };
  const decrementarCantidad = () => {
    if (cantidad > 0) {
      setCantidad(cantidad - 1);
    }
  };
  return (
    <div>
        <div style={{display:'flex',flexDirection:'row',alignItems:'strench'}}>
          <Button variant="primary"  size="sm" style={{marginLeft:5,}} onClick={decrementarCantidad}>-</Button>
          <Card.Text style={{marginLeft:5}}>{cantidad}</Card.Text>
          <Button variant="primary"  size="sm" style={{marginLeft:5}} onClick={incrementarCantidad}>+</Button>
          <Button variant="primary"  size="sm" style={{marginLeft:5}}>Agregar al carrito</Button>
        </div>    
    </div>
  )
}

export default ItemCount
