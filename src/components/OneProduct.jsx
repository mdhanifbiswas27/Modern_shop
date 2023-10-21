import { Link } from "react-router-dom";

const OneProduct = ({ props }) => {
    const { _id, name, photo, brand, type, price, rating } = props;
    return (
        <div>
            <div>
                <div className="card  bg-base-100 shadow-xl">
                    <figure><img className="h-[280px]" src={photo} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title ">
                            {name}
                           
                        </h2>
                        <div className="badge badge-secondary">Brand: {brand}</div>

                        <div className="flex">
                            <p className="text-lg font-medium">Type: {type}</p>
                            <p className="text-lg font-medium">Price:{price}</p>
                        </div>
                        <p className="text-lg font-medium">Rating:{rating}/<span>5</span></p>

                        <div className="card-actions justify-end">
                            <Link to={`/update/${_id}`} ><button className="btn bg-[#E76D66] text-white">Update</button></Link>
                            <Link to={`/details/${_id}`}><button className="btn bg-[#E76D66] text-white">Details</button></Link>
                           
                        </div>
                    </div>
                </div>
            </div>

            

        </div>
    );
};

export default OneProduct;