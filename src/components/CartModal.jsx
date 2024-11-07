import { PropTypes } from "prop-types";
import CartItem from "./CartItem";
import { FaDeleteLeft } from "react-icons/fa6";

const CartModal = ({ cart, closeModal, removeFromCart }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg w-3/4 lg:w-1/2">
        <button
          onClick={closeModal}
          className=" hover:text-red-600  text-black font-bold text-2xl rounded float-right"
        >
          <FaDeleteLeft />
        </button>
        <h2 className="lg:text-2xl font-bold mb-4">Your Cart</h2>
        {cart.length === 0 ? (
          <p className="text-gray-600">Your cart is empty.</p>
        ) : (
          <div className="space-y-4 lg:space-y-0 ">
            {cart.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                removeFromCart={removeFromCart}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

CartModal.propTypes = {
  cart: PropTypes.number.isRequired,
  closeModal: PropTypes.func.isRequired,
  removeFromCart: PropTypes.func.isRequired,
};

export default CartModal;
