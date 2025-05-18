import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Checkout = () => {
  const { cartItems, removeFromCart, clearCart } = useCart();
  const navigate = useNavigate();

  const handleConfirmPurchase = () => {
    alert('✅ ¡Compra realizada con éxito!');
    clearCart();
    navigate('/home');
  };

  const total = cartItems.length;

  return (
    <div className="min-h-screen bg-slate-100 text-gray-800">
      <Navbar />
      <main className="max-w-3xl mx-auto px-6 py-12">
        <div className="bg-white rounded-xl shadow-md p-8">
          <h1 className="text-3xl font-bold mb-6 text-slate-800">
            Resumen de la compra
          </h1>

          {cartItems.length === 0 ? (
            <p className="text-gray-500 italic">Tu carrito está vacío.</p>
          ) : (
            <>
              <ul className="divide-y divide-gray-200 mb-6">
                {cartItems.map((item) => (
                  <li key={item.id} className="flex items-start justify-between gap-4 py-4">
                    {/* Imagen + datos */}
                    <div className="flex gap-3 flex-1">
                      {item.image && (
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-12 h-18 object-cover rounded shadow-sm"
                        />
                      )}
                      <div>
                        <p className="text-base font-medium text-slate-700">
                          {item.title}
                        </p>
                        <p className="text-sm text-slate-500 italic">
                          por {item.author}
                        </p>
                      </div>
                    </div>

                    {/* Botón eliminar */}
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-xs text-red-600 hover:text-red-800 font-semibold transition flex items-center gap-1"
                    >
                      <i className="fas fa-trash-alt"></i> Quitar
                    </button>
                  </li>
                ))}
              </ul>

              <p className="text-lg font-semibold text-slate-700 mb-4">
                Total de libros: <span className="font-bold">{total}</span>
              </p>

              <button
                onClick={handleConfirmPurchase}
                className="w-full flex items-center justify-center gap-2 bg-black text-white py-3 px-6 rounded-md font-medium hover:bg-slate-900 transition-transform"
              >
                <i className="fas fa-credit-card text-white"></i>
                Confirmar compra
              </button>
            </>
          )}
        </div>
      </main>
    </div>
  );
};

export default Checkout;
