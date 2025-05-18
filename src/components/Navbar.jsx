import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const { cartItems } = useCart();

  return (
    <header className="bg-white border-b border-slate-200 shadow-sm">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link
          to="/home"
          className="flex items-center text-xl font-bold text-slate-800 hover:text-blue-700 transition"
        >
          <i className="fas fa-book-reader text-blue-700"></i>
          <span className="ml-2">Relatos de Papel</span>
        </Link>

        <Link
          to="/checkout"
          className="relative flex items-center gap-2 text-slate-700 hover:text-blue-700 transition font-medium"
        >
          <i className="fas fa-shopping-cart text-xl"></i>
          {cartItems.length > 0 && (
            <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              {cartItems.length}
            </span>
          )}
          <span></span>
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
