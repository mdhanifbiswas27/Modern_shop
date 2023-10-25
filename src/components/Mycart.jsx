import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { authContext } from "./AuthProvider";
import CartProduct from "./CartProduct";


const Mycart = () => {
    const {user} = useContext(authContext);
    const cartProduct = useLoaderData();
    const [cart, setCart] = useState([]);


    useEffect(()=>{
        const LoadedProduct = cartProduct.filter(product => product.email === user.email);
        setCart(LoadedProduct);
    },[])
    
    return (
        <div>
          <h2 className="text-2xl font-bold text-blue-600/60 ">Your selected products:</h2>
            
            {
                cart.map(product =><CartProduct key={product._id} cart={product}></CartProduct>)
            }
        </div>
    );
};

export default Mycart;