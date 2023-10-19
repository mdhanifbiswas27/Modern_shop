import PropTypes from 'prop-types';

const Brand = ({ brand }) => {
    const { name, image_url } = brand;
    return (
        <div className="mt-10">
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img className=" bg-[#F5F6F7] h-[205px] w-full" src={image_url} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    
                </div>
            </div>
            {/* <img src={image_url} alt="" />
            <h2>{name}</h2> */}
        </div>
    );
};

export default Brand;
Brand.propTypes= {
    brand: PropTypes.node
}