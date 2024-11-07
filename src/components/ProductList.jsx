import { PropTypes } from "prop-types";
import ProductItem from "./ProductItem";

const ProductList = ({ products, addToCart }) => {
  return (
    <div className="grid grid-cols-1 lg:px-16 sm:grid-cols-2  font-poppins  lg:grid-cols-4 gap-6 p-6">
      {products.map((product) => (
        <ProductItem key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
};

ProductList.propTypes = {
  products: PropTypes.number.isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default ProductList;
