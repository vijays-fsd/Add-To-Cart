import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import CartModal from "./components/CartModal";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

 
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data); 
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const addToCart = (product) => {
    if (cart.some((item) => item.id === product.id)) {
      alert("Item already added to the cart");
    } else {
      setCart([...cart, product]);
    }
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  return (
    <div>
      <Navbar cartCount={cart.length} openCart={() => setIsModalOpen(true)} />
      <ProductList products={products} addToCart={addToCart} />
      {isModalOpen && (
        <CartModal
          cart={cart}
          closeModal={() => setIsModalOpen(false)}
          removeFromCart={removeFromCart}
        />
      )}
    </div>
  );
};

export default App;
