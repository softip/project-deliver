import { useEffect, useState } from "react";
import { fetchProducts } from "./api";
import OrderLocation from "./OrderLocation";
import ProductList from "./ProdutsList";
import StepsHeader from "./StepsHeader";
import "./styles.css";
import { OrderLocationData, Product } from "./types";

function Orders(){

    const [producs, setProducts] = useState<Product[]>([]);
    const [orderLocation, setOrderLocation] = useState<OrderLocationData>();

    useEffect(()=>{
        fetchProducts()
        .then(response => setProducts(response.data))
        .catch(error => console.log(error));
    },[]);
    
   return (
        <div className="orders-container">
            <StepsHeader/>
            <ProductList products={producs}/>
            <OrderLocation onChangeLocation={(location) => setOrderLocation(location)}/>
        </div>
   );
}

export default Orders;