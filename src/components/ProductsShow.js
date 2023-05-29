import { Link } from "react-router-dom";
import star from "../assets/star-on-2.png";
import half_star from "../assets//star-half-2.png";
import { BsHeart } from "react-icons/bs";
import { SlBasket } from "react-icons/sl";

export const ProductsShow = ({ product, handleClick, addItem }) => {
  return (
    <div className="card my-4 text-center card-hover pointer">
      <Link
        to={`/products/${product.id}`}
        className="text-dark text-decoration-none"
        onClick={() => handleClick(product)}
      >
        <img
          src={product.image}
          className="my-3"
          alt="..."
          height="150px"
          width="100px"
        />
        <div className="card-body py-1">
          <div className="cart-title">
            <div className="d-flex justify-content-between">
              <div>
                <img src={star} alt="..." />
                <img src={star} alt="..." />
                <img src={star} alt="..." />
                <img src={star} alt="..." />
                <img src={half_star} alt="..." />
              </div>
              <span className="card-text">${product.price}</span>
            </div>
            <h6 className="card-title my-2 text-left">{product.title}</h6>
          </div>
        </div>
      </Link>
      <div className=" mb-0">
        <div className="d-flex justify-content-center align-items-center py-2 wishlist">
          <BsHeart />
          <p className="mb-0 ml-2 ">WishList</p>
        </div>
        <button
          onClick={() => addItem(product)}
          className="btn btn-primary d-flex justify-content-center align-items-center w-100 added"
        >
          <SlBasket className="mr-1"/> Add to Cart
        </button>
        
      </div>
    </div>
  );
};
