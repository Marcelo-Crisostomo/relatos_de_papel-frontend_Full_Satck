import { useState } from 'react';
import Navbar from '../components/Navbar';
import BookCard from '../components/BookCard';
import Cart from '../components/Cart';
import { useGoogleBooks } from '../hooks/useGoogleBooks';

const Home = () => {
  const [search, setSearch] = useState('');
  const { books, loading } = useGoogleBooks(search);

  return (
    <div className="min-h-[100dvh] bg-slate-100 bg-gradient-to-b from-slate-100 to-slate-200 text-gray-800 pb-10">
      <Navbar />

      <header className="text-center py-12 px-4">
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-800 mb-3 flex justify-center items-center gap-3">
          <i className="fas fa-book-open text-slate-700"></i>
          Catálogo de Libros
        </h1>
        <p className="text-lg text-slate-600 max-w-xl mx-auto">
          Explora miles de títulos, descubre nuevas historias y encuentra tu próxima lectura favorita.
        </p>
      </header>

      <main className="max-w-6xl mx-auto px-4">
        <div className="mb-8 relative">
          <input
            type="text"
            placeholder="Buscar por título, autor o palabra clave..."
            className="w-full p-4 pl-12 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <i className="fas fa-search absolute top-4 left-4 text-gray-400"></i>
        </div>

        {loading ? (
          <p className="text-center text-gray-500 text-lg">Cargando libros...</p>
        ) : (
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {books.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        )}

        <div className="mt-12">
          <Cart />
        </div>
      </main>
    </div>
  );
};

export default Home;
