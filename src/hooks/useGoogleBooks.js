// src/hooks/useGoogleBooks.js
import { useEffect, useState } from 'react';

export function useGoogleBooks(query) {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!query) {
      setBooks([]);
      return;
    }

    const fetchBooks = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}&maxResults=12`
        );
        const data = await response.json();

        const formatted = data.items?.map((item) => ({
          id: item.id,
          title: item.volumeInfo.title,
          author: item.volumeInfo.authors?.join(', ') || 'Autor desconocido',
          image: item.volumeInfo.imageLinks?.thumbnail || '',
          description: item.volumeInfo.description || 'Sin descripción disponible'
        })) || [];

        setBooks(formatted);
      } catch (err) {
        console.error('Error al cargar libros:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, [query]);

  return { books, loading };
}
