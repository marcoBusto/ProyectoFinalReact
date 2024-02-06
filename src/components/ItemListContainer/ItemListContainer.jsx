import React, { useState, useEffect } from 'react';
import { getFetch } from '../Productos';
import ItemList from '../ItemList/ItemList';


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
         <div id='spinner'>
          <h1>Cargando...</h1>
          <img src={'spinner.gif'} alt="loading..." />
         </div>
         :
         <div>
            <h1>Mates y Accesorios</h1>
              <div>
                <ItemList Prod={Productos}/>
              </div>
         </div>
        }
      </div>  
      )
}

export default ItemListContainer

