import { PropTypes } from "prop-types";

const CartItem = ({ item, removeFromCart }) => {
  return (
    <div className="flex items-center justify-between border-b py-4">
      <div className="flex items-center">
        <img
          src={item.image}
          alt={item.title}
          className="h-12 w-12 object-contain mr-4"
        />
        <div>
          <h3 className="text-xs lg:text-xl font-semibold">{item.title}</h3>
          <p className="text-gray-600">${item.price}</p>
        </div>
      </div>
      <button
        onClick={() => removeFromCart(item.id)}
        className="bg-red-500 hover:bg-red-700 text-white font-bold text-xs lg:text-lg py-2 px-3 rounded"
      >
        Remove
      </button>
    </div>
  );
};

CartItem.propTypes = {
  item: PropTypes.number.isRequired,
  removeFromCart: PropTypes.func.isRequired,
};

export default CartItem;


