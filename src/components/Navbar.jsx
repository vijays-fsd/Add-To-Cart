
import { PropTypes } from 'prop-types'
const Navbar = ({ cartCount, openCart }) => {
  return (
    <nav className="bg-black p-4 flex justify-around items-center ">
      <h1 className="text-white text-lg md:text-2xl lg:text-4xl font-bold tracking-widest font-orbitron">Bowies</h1>
      <div className="relative">
        <button
          onClick={openCart}
          className=" text-white border-2 font-poppins font-bold  py-2 px-4 rounded hover:transition hover:bg-white hover:text-black transition hover:scale-90 hover:border-2 hover:border-white"
        >
          Cart ({cartCount})
        </button>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
    cartCount: PropTypes.number.isRequired,
    openCart: PropTypes.func.isRequired,
  }


export default Navbar;
