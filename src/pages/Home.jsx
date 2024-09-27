import { useEffect, useState } from "react";
import Spinner from '../components/Spinner'
import Product from "../components/Product";
import './Home.css'


const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";

  const [items,setItems] = useState([]);
  const [loading,setLoading] = useState(false);
  
  async function fetchItems() {
    setLoading(true);

    try{
    const res = await fetch(API_URL);
    const data = await res.json();

    setItems(data);
    }
    catch(error){

      console.log("Error aaya hai kuch gadbad hai...");
      setItems([]);

    }
    setLoading(false);
  }

  useEffect(()=>{
    fetchItems();
  },[])
   

  return (
      <div className="home-items">
        {
          loading? (<Spinner/>) : 
          ( items.length > 0 ?
             (
             <div className="item-container">
              {
                items.map((item)=>(
                  <Product key={item.id} item={item} />
                ))
              }
             </div>


             ) :
         ( <p>No Items Found</p> ) ) 
        }

      </div>
  )
};

export default Home;
