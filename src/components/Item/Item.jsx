import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

 
const Item = ({prod}) => {
 
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
          <Button variant="primary"  size="sm" style={{marginLeft:5}} onClick={alert()}>Ver más</Button>
        </div>
      </Card.Body>
    </Card>
    </>
  )
}

export default Item

