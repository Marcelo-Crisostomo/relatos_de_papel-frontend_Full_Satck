import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useCart } from '../context/CartContext';
import Navbar from '../components/Navbar';

const BookDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const res = await fetch(`https://www.googleapis.com/books/v1/volumes/${id}`);
        const data = await res.json();

        const info = data.volumeInfo;
        const sale = data.saleInfo;

        const formatted = {
          id: data.id,
          title: info.title || 'Título desconocido',
          subtitle: info.subtitle || '',
          author: info.authors?.join(', ') || 'Autor desconocido',
          publisher: info.publisher || 'Editorial no disponible',
          publishedDate: info.publishedDate || 'Fecha no disponible',
          description: info.description || 'Sin descripción disponible',
          pageCount: info.pageCount || 'N/D',
          categories: info.categories?.join(', ') || 'Sin categoría',
          language: info.language?.toUpperCase() || 'N/D',
          rating: info.averageRating || null,
          ratingsCount: info.ratingsCount || null,
          isbn: info.industryIdentifiers?.map(id => `${id.type}: ${id.identifier}`).join(', ') || 'N/D',
          image: info.imageLinks?.thumbnail || '',
          infoLink: info.infoLink || '',
          isEbook: sale?.isEbook || false
        };

        setBook(formatted);
      } catch (err) {
        console.error('Error al cargar el libro:', err);
        navigate('/home');
      } finally {
        setLoading(false);
      }
    };

    fetchBook();
  }, [id]);

  const handleAddToCart = () => {
    addToCart(book);
    alert(`📚 "${book.title}" agregado al carrito.`);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-100">
        <p className="text-gray-600 text-lg">Cargando libro...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100 text-gray-800">
      <Navbar />
      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="bg-white shadow-lg rounded-xl grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-10 p-10">
          {/* Imagen del libro */}
          <div className="flex justify-center items-center h-full">
            {book.image ? (
              <img
                src={book.image}
                alt={book.title}
                className="w-full max-w-sm max-h-[1000px] object-cover rounded-lg shadow-lg"
              />
            ) : (
              <div className="w-full max-w-sm aspect-[2/3] bg-slate-200 rounded-lg flex items-center justify-center text-slate-500 text-sm italic">
                Imagen no disponible
              </div>
            )}
          </div>



          {/* Detalles del libro */}
          <div className="flex flex-col justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-1">{book.title}</h1>
              {book.subtitle && <h2 className="text-lg text-slate-600 mb-2 italic">{book.subtitle}</h2>}
              <p className="text-slate-600 mb-1 italic">por {book.author}</p>
              <p className="text-sm text-slate-500 mb-4">
                {book.publisher} · {book.publishedDate}
              </p>

              {/* Métricas tipo Google Books */}
              <div className="flex flex-wrap items-center gap-6 text-sm text-slate-700 mb-6">
                {book.rating && (
                  <div className="flex items-center gap-1">
                    <span className="font-semibold">{book.rating.toFixed(1)}</span>
                    <i className="fas fa-star text-yellow-400"></i>
                    {book.ratingsCount && (
                      <span className="text-slate-500">({book.ratingsCount} reseña{book.ratingsCount > 1 ? 's' : ''})</span>
                    )}
                  </div>
                )}

                <div className="flex items-center gap-2 border-l pl-4 border-slate-300">
                  <i className="fas fa-tablet-alt"></i>
                  <span>{book.isEbook ? 'eBook' : 'Físico'}</span>
                </div>

                <div className="flex items-center gap-2 border-l pl-4 border-slate-300">
                  <i className="fas fa-file-alt"></i>
                  <span>{book.pageCount} páginas</span>
                </div>
              </div>

              {/* Descripción */}
              <div
                className="prose max-w-none text-gray-700 mb-6"
                dangerouslySetInnerHTML={{ __html: book.description }}
              ></div>

              {/* Ficha técnica */}
              <div className="grid grid-cols-1 gap-4 text-sm text-slate-700 bg-slate-50 p-4 rounded-lg border border-slate-200 mb-6">
                <div><strong>Categorías:</strong> {book.categories}</div>
                <div><strong>Idioma:</strong> {book.language}</div>
                <div><strong>ISBN:</strong> {book.isbn}</div>
              </div>
            </div>

            {/* Acciones */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleAddToCart}
                className="flex-1 flex items-center justify-center gap-2 bg-black text-white py-3 px-6 rounded-md font-medium hover:bg-slate-900 transition-transform"
              >
                <i className="fas fa-cart-plus text-white"></i>
                Añadir al carrito
              </button>
              {book.infoLink && (
                <a
                  href={book.infoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center border border-slate-300 text-slate-700 py-3 px-6 rounded-md font-medium hover:bg-slate-100 transition"
                >
                  Ver en Google Books
                </a>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BookDetail;
