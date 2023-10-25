import Swal from 'sweetalert2'

const AddProduct = () => {
    const handleAddProduct = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const brand = e.target.brand.value;
        const type = e.target.type.value;
        const price = e.target.price.value;
        const rating = e.target.rating.value;
        const description = e.target.description.value;
        const newProduct = { name, photo, brand, type, price, rating, description }

        // send data to server
        fetch('https://my-assainment-tenth-assainment-server-site-gq2ncmvw7.vercel.app/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {

                    if (data.insertedId) {
                        Swal.fire({
                            title: 'success',
                            text: 'Product added successfully!',
                            icon: 'success',
                            confirmButtonText: 'OK'
                        })
                    }
                }
            })
    }
    return (
        <div className="max-w-[900px] bg-white p-14 mx-auto">
            <form onSubmit={handleAddProduct}>
                <div className="sm:block md:flex lg:flex justify-between my-5">
                    {/* <div className="grid grid-cols-2 my-5"> */}
                    <input className="text-lg font-medium rounded-md w-[330px] outline-0 py-3 mb-3 px-5 border-2 border-[#E76D66]" type="text" name="name" placeholder="Product Name" id="" />
                    <input className="text-lg font-medium rounded-md w-[330px] outline-0 py-3 px-5 border-2 border-[#E76D66]" type="text" name="price" placeholder="Give product price" id="" />

                </div>
                <div className="sm:block md:flex lg:flex justify-between my-5">
                    <input className="text-lg font-medium rounded-md w-[330px] outline-0 py-3 mb-3 px-5 border-2 border-[#E76D66]" type="text" name="brand" placeholder="Give Brand Name" id="" />
                    <input className="text-lg font-medium rounded-md w-[330px] outline-0 py-3 px-5 border-2 border-[#E76D66]" type="text" name="type" placeholder="Give Product Type" id="" />
                </div>
                <div className="flex justify-between my-5">



                    
                        <input className="text-lg font-medium rounded-md mr-2  sm:w-[300px] lg:w-[630px] outline-0 py-3 px-5 border-2 border-[#E76D66]" type="text" name="photo" placeholder="Give Product photo url" id="" />
                    


                    
                        <select name="rating" className="w-[100px] border-2 border-[#E76D66] rounded-md">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    
                </div>
                <div>
                    <h1 className="text-lg font-medium">Write product description</h1>
                    <textarea name="description" className="w-full h-[150px] border-2 border-[#E76D66] outline-0 rounded-md"></textarea>
                </div>
                <input className="btn mt-5 bg-[#E76D66] text-white hover:text-black" type="submit" value="Add Product" />
            </form>


        </div>
    );
};

export default AddProduct;