import React, { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { getFirestore,doc, getDoc } from 'firebase/firestore';

const ItemListContainer = () => {
    const {categoria} = useParams();  
    const [Productos,setProductos] = useState([])
    const [loading, SetLoading] = useState(true)
    
    useEffect(() => {
      const db = getFirestore();
      const productoRef = doc(db,"productos","F3NplRCxPFwgy3kSy4Yo")
      getDoc(productoRef).then(documento => {
        if(documento.exists()){
          console.log(documento.data())
        }
      })
      }, []) 
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



