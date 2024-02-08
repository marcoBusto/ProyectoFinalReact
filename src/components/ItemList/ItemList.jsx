import React from 'react'
import Item from '../Item/Item'

const ItemList = ({ Prod, Cat }) => {
   if (Cat === 'Inicio') {
     return (
       <div>
         {Prod.map(prod => (
           <Item key={prod.id} prod={prod} />
         ))}
       </div>
     );
   } else {
     const productosFiltrados = Prod.filter(producto => producto.categoria === Cat);
     return (
       <div>
         {productosFiltrados.map(prod => (
           <Item key={prod.id} prod={prod} />
         ))}
       </div>
     );
   }
 };
 
 export default ItemList;

