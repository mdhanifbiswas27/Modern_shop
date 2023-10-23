import { useEffect, useState } from "react";
import Brand from "./Brand";




const OurBrands = () => {

    const [brands, setBrands] = useState([]);



    useEffect(() => {
        fetch('./Brands.json')
            .then(res => res.json())
            .then(data => setBrands(data))
    }, []);

    return (
        <div>
            <div>
                
                <h2 className="text-5xl font-extrabold my-9">Our  Brands</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">

                    {
                        brands.map((brand, index) => <Brand key={index} brand={brand}> </Brand>)
                    }
                </div>
                
               
            </div>
        </div>
    );
};

export default OurBrands;