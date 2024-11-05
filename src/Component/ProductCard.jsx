import { MdDelete } from "react-icons/md";
const ProductCard = ({ product, onRemove }) => {
    const { product_title, product_image, price, description } = product;

    return (
        <div className="flex justify-between rounded-xl items-start mx-10 mt-6 bg-base-200">
            <figure>
                <img className="w-[20rem] p-5" src={product_image} alt="Product" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{product_title}</h2>
                <p>{description}</p>
                <p className="text-xl font-semibold">Price: ${price}</p>
                
            </div>
            <div >
            <button className=" mt-2 mr-2 text-3xl  text-purple-500 " onClick={onRemove}><MdDelete /></button>
            </div>

        </div>
    );
};

export default ProductCard;
