import React, { useState, useEffect } from 'react';
import { getFetch } from '../Productos';
import ItemList from '../ItemList/ItemList';
console.log(getFetch);

const ItemListContainer = () => {
    const [Productos,setProductos] = useState([])
    const [loading, SetLoading] = useState(true)
    useEffect(() => {
      getFetch
      .then((resolve) => setProductos(resolve))
      .catch(err => console.error(err))
      .finally(() => SetLoading(false))
    },[])

    return ( 
      <div>
        { loading
         ?
       <h1>Cargando...</h1>
         :
         <div>
            <h1>Catalogo</h1>
              <div>
                <ItemList Prod={Productos}/>
              </div>
         </div>
        }
      </div>  
      )
}

export default ItemListContainer

