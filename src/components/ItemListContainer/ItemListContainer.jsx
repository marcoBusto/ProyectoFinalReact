import React, { useState, useEffect } from 'react';
import { getFetch } from '../Productos';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';


const ItemListContainer = () => {
    const {categoria} = useParams();  
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
              <div>
                <ItemList Prod={Productos} Cat={categoria}/>
              </div>
         </div>
        }
      </div>  
      )
}

export default ItemListContainer

