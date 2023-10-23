import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Brand = ({ brand }) => {
    const {id,   name, image_url } = brand;
    
    return (
       <Link to={`/brand/${id}`}>
        
           <div className="mt-10">
            <div className="card  bg-base-100 shadow-xl">
                <figure><img className=" bg-[#F5F6F7] h-[205px] w-full" src={image_url} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    
                </div>
            </div>
            
        </div>
       </Link>
    );
};

export default Brand;
Brand.propTypes= {
    brand: PropTypes.node
}
