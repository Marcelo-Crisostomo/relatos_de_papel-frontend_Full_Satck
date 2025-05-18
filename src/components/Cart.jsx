import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cartItems, removeFromCart } = useCart();

  return (
    <aside className="bg-white rounded-xl shadow-lg p-6 max-w-lg mx-auto mt-12 border border-slate-200">
      <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2 mb-4">
        <i className="fas fa-shopping-cart text-slate-700"></i>
        Carrito
      </h3>

      {cartItems.length === 0 ? (
        <p className="text-gray-500 italic">El carrito está vacío.</p>
      ) : (
        <ul className="divide-y divide-slate-200 mb-6">
          {cartItems.map((item) => (
            <li key={item.id} className="flex items-center justify-between py-4 gap-4">
              {/* Mini imagen + info */}
              <div className="flex items-start gap-3 flex-1">
                {item.image && (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-12 h-18 object-cover rounded shadow-sm"
                  />
                )}
                <div>
                  <p className="text-sm font-medium text-slate-700 line-clamp-2">
                    {item.title}
                  </p>
                  <p className="text-xs text-slate-500 italic">{item.author}</p>
                </div>
              </div>

              {/* Botón quitar */}
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-xs text-red-600 hover:text-red-800 font-semibold transition"
              >
                Quitar
              </button>
            </li>
          ))}
        </ul>
      )}

      {cartItems.length > 0 && (
        <Link
          to="/checkout"
          className="block w-full text-center bg-black text-white py-3 rounded-md font-medium hover:bg-slate-900 transition flex items-center justify-center gap-2"
        >
          <i className="fas fa-credit-card"></i>
          Ir al Checkout
        </Link>
      )}
    </aside>
  );
};

export default Cart;
