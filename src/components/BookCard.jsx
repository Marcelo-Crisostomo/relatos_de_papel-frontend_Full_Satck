import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const BookCard = ({ book }) => {
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-xl flex flex-col">
      <Link to={`/book/${book.id}`} className="flex-1 flex flex-col">
        {book.image && (
          <img
            src={book.image}
            alt={book.title}
            className="w-full h-60 object-cover rounded-t-xl"
          />
        )}
        <div className="p-4 flex-1 flex flex-col">
          <h2 className="text-lg font-semibold text-gray-800 line-clamp-2 mb-1">
            {book.title}
          </h2>
          <p className="text-sm text-gray-500 italic mb-4">
            por {book.author}
          </p>
          <p className="text-sm text-gray-600 line-clamp-3">
            {book.description || 'Sin descripción disponible'}
          </p>
        </div>
      </Link>
      <div className="p-4 border-t">
      <button
      onClick={() => addToCart(book)}
      className="w-full bg-gradient-to-r from-slate-700 to-slate-900 text-white py-2 px-4 rounded-md font-medium shadow-sm hover:shadow-md hover:scale-105 transition-transform duration-200 flex items-center justify-center gap-2"
    >
      <i className="fas fa-cart-plus text-white"></i>
      Añadir al carrito
    </button>

      </div>
    </div>
  );
};

export default BookCard;
