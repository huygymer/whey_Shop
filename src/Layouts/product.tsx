import { addToCart } from "../services/cart.service";
import React, {useState} from "react";
const Product = ({
  id,
  image,
  price,
  type,
  name,
  description,
  onAddToCart,
}: any) => {

  const [ isFlip, setIsFlip ] = useState(false);

  const handleClick = () => {
    setIsFlip(!isFlip);
  };



  return (
    <div className={`sup ${isFlip ? "flipped" : ""}`} 
    key={id} onClick={handleClick}>
      <div className="front-card">
        <img src={image} alt="mass" className="whey" />
        <div className="item">
          <span className="sup-type"> {type} </span>
          <span className="sup-item"> {name} </span>
          <span className="sup-price"> {price.toLocaleString("de-DE")}đ </span>
        </div>
      </div>
      {/* {isFlip ? */}
        <div className="back-card">
        <ul className="status">
          <li dangerouslySetInnerHTML={{ __html: description }}></li>
        </ul>
        <div className="btn" onClick={onAddToCart}>
          {" "}
          Bỏ giỏ hàng{" "}
        </div>
      </div> 
      {/* :null } */}
    </div>
  );
};

export default Product;
