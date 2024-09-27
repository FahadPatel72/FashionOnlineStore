import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";
import "./CartItem.css";

const CartItem = ({ item, itemIndex }) => {
  const dispatch = useDispatch();

  function removefromCart() {
    dispatch(remove(item.id));
    toast.error("Remove from Cart");
  }

  return (
    <div className="cart-item">
      <div className="cart-item-content">
        <div className="cart-item-image">
          <img src={item.image} alt={"yahu"} />
        </div>

        <div className="cart-item-details">
          <h1 className="cart-item-title">{item.title}</h1>
          <h1 className="cart-item-description">{item.description}</h1>

          <div className="cart-item-footer">
            <p className="cart-item-price">${item.price}</p>
            <button className="cart-item-delete" onClick={removefromCart}>
              <MdDelete />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
