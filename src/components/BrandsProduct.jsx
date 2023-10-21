import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import OneProduct from "./OneProduct";


const BrandsProduct = () => {
    const { id } = useParams();

    const LoadedProduct = useLoaderData();

    const [product, setProduct] = useState([]);

    useEffect(() => {
        const findProduct = LoadedProduct.filter(product => product.brand.toLowerCase() == id.toLowerCase());
        setProduct(findProduct);
    }, [id, LoadedProduct])

    return (
        <div>
            <div className="carousel w-full h-[500px]">
                <div id="item1" className="carousel-item w-full">
                    <img src="https://i.ibb.co/6RtjT8p/another-advertis.gif" className="w-full" />
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img src="https://i.ibb.co/7VWQ8dY/images.jpg" className="w-full" />
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img src="https://i.ibb.co/svkdFMq/nargo-adverise.jpg" className="w-full" />
                </div>
                <div id="item4" className="carousel-item w-full">
                    <img src="https://i.ibb.co/6RLdYXt/head.webp" className="w-full" />
                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
                <a href="#item4" className="btn btn-xs">4</a>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
                {
                    product.map(singleProduct => <OneProduct key={singleProduct._id} props={singleProduct}>

                    </OneProduct>)
                }
            </div>


        </div>
    );
};

export default BrandsProduct;