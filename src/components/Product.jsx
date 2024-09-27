import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import { add, remove } from "../redux/Slices/CartSlice";
import './Product.css'

const Product = ({ item }) => {
  const { cart } = useSelector((state) => state);
  console.log(cart);
  const dispatch = useDispatch();

  function addtoCart() {
    dispatch(add(item));
    toast.success("Item added to Cart");
  }

  function removefromCart() {
    dispatch(remove(item.id));
    toast.error("Remove from Cart");
  }

  return (
    <div className="product-container">
      
      <div className="product-title">
        <h2 className="truncate-title">{item.title.split(" ").slice(0,3).join(" ")+"..."}</h2>
      </div>

      <div>
        <p className="product-description">{item.description.split(" ").slice(0,10).join(" ")}</p>
      </div>

      <div className="product-image">
        <img src={item.image} alt={"hello"} />
      </div>


      <div className="product-footer">

        <div className="product-price">
          <p>${item.price}</p>
        </div>

        {cart.some((p) => p.id === item.id) ? (
          <button className="remove-button" onClick={removefromCart}>Remove Item</button>
        ) : (
          <button className="add-button" onClick={addtoCart}>Add to Cart</button>
        )}
      </div>
    </div>
  );
};
export default Product;
