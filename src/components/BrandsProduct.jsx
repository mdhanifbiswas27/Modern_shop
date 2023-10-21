import { Link, useLoaderData } from "react-router-dom";


const BrandsProduct = () => {
    const {brand,name} = useLoaderData();
    console.log('true is it?',brand);
    return (
        <div>
            <h1>This is brands product{brand}</h1>
            <p>{name}</p>
            <Link to='/update'><button>Details</button></Link>
        </div>
    );
};

export default BrandsProduct;