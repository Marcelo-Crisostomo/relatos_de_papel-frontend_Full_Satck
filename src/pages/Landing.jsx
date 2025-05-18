import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Landing = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/home');
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-[url('/assets/library-bg.jpg')] bg-cover bg-center bg-no-repeat text-white">
      <div className="text-center animate-fade-in">
        <h1 className="text-5xl font-extrabold tracking-wide mb-4">
          Relatos de Papel
        </h1>
        <p className="text-lg text-neutral-300 mb-8">
          Tu nueva librería digital, donde cada historia encuentra su lector.
        </p>
        <div className="flex justify-center">
          <span className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin"></span>
        </div>
        <p className="mt-6 text-sm text-neutral-400 italic">
          Cargando catálogo...
        </p>
      </div>
    </div>
  );
};

export default Landing;

