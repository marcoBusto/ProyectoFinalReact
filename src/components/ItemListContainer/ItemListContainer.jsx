import React, { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { getFirestore, collection, getDocs } from "firebase/firestore";

const ItemListContainer = () => {
  const { categoria } = useParams();
  const [Productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProductos = async () => {
      const db = getFirestore();
      const productoRef = collection(db, "productos");
      
      try {
        const querySnapshot = await getDocs(productoRef);
        const productosData = querySnapshot.docs.map(doc => doc.data());
        setProductos(productosData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching productos:", error);
        setLoading(false);
      }
    };
    fetchProductos();
  }, []);

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


