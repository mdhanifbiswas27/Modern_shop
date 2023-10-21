import { useLoaderData } from "react-router-dom";


const Update = () => {
    const loadProduct = useLoaderData();
    console.log('update',loadProduct._id)
    const handleUpdateProduct = event =>{
        event.preventDefault();
    }
    return (
        <div className="max-w-[900px] bg-white p-14 mx-auto">
            <form onSubmit={handleUpdateProduct}>
                <div className="flex justify-between my-5">
                    <input className="text-lg font-medium rounded-md w-[330px] outline-0 py-3 px-5 border-2 border-[#E76D66]" type="text" name="name" placeholder="Product Name" id="" />
                    <input className="text-lg font-medium rounded-md w-[330px] outline-0 py-3 px-5 border-2 border-[#E76D66]" type="text" name="price" placeholder="Give product price" id="" />

                </div>
                <div className="flex justify-between my-5">
                    <input className="text-lg font-medium rounded-md w-[330px] outline-0 py-3 px-5 border-2 border-[#E76D66]" type="text" name="brand" placeholder="Give Brand Name" id="" />
                    <input className="text-lg font-medium rounded-md w-[330px] outline-0 py-3 px-5 border-2 border-[#E76D66]" type="text" name="type" placeholder="Give Product Type" id="" />
                </div>
                <div className="flex justify-between my-5">



                    <input className="text-lg font-medium rounded-md w-[630px] outline-0 py-3 px-5 border-2 border-[#E76D66]" type="text" name="photo" placeholder="Give Product photo url" id="" />

                    
                    <select name="rating" className="w-[100px] border-2 border-[#E76D66] rounded-md">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
                
                <input className="btn mt-5 bg-[#E76D66] text-white hover:text-black" type="submit" value="Update Product" />
            </form>

           
        </div>
    );
};

export default Update;