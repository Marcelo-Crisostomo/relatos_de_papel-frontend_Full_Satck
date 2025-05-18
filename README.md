# 📚 Relatos de Papel – Frontend

Aplicación web desarrollada como parte del proyecto transversal del Máster en Ingeniería de Software. Este repositorio contiene el **frontend del proyecto**, construido con **React**, utilizando buenas prácticas en componentes, rutas, hooks, diseño responsive y despliegue profesional.

---

## 🚀 Objetivo del Proyecto

Desarrollar una tienda web de libros inspirada en el proyecto "Relatos de Papel", aplicando:

* HTML5, CSS3, JavaScript moderno (ES6+)
* Librería React con enfoque en componentes funcionales
* Uso de React Router y Hooks (useState, useEffect, custom)
* Estilos con CSS, BEM, Tailwind o SCSS
* Arquitectura escalable para futura integración con backend en microservicios
* Despliegue profesional en plataformas como **Vercel**
* Integración de API pública: **Google Books API**

---

## 🧩 Estructura del Proyecto

```
relatos-de-papel-frontend/
│
├── public/                 # Archivos estáticos
├── src/
│   ├── components/         # Componentes reutilizables (BookCard, Navbar, Cart, etc.)
│   ├── context/            # Contexto global para carrito de compras
│   ├── hooks/              # Custom hooks (ej: useGoogleBooks)
│   ├── pages/              # Vistas principales (Landing, Home, BookDetail, Checkout)
│   ├── styles/             # Archivos de estilo con Tailwind y CSS BEM
│   ├── App.jsx             # Enrutador principal (React Router)
│   └── main.jsx            # Entrada principal de React
├── .gitignore              # Archivos a excluir del control de versiones
├── README.md               # Documentación del proyecto
├── package.json            # Configuración de dependencias
└── vite.config.js          # Configuración de Vite
```

---

## 🛠️ Instalación local

Para clonar y ejecutar este proyecto en tu entorno local:

```bash
git clone https://github.com/Marcelo-Crisostomo/relatos_de_papel-frontend_Full_Satck.git
cd relatos_de_papel-frontend_Full_Satck
npm install
npm run dev
```

Abrir en navegador: `http://localhost:5173`

---

## 👥 Equipo de Desarrollo

| Nombre                          | Rol                                            |
| ------------------------------- | ---------------------------------------------- |
| **Marcelo Crisóstomo Carrasco** | Frontend – Coordinación, configuración inicial |
| **Christian Nivela**            | Bases de datos y documentación técnica         |
| **Laura Paterni**               | Frontend avanzado y pruebas (testing)          |
| **José Jiménez**                | Backend y despliegue general                   |

---

## 🧱 Fases del Proyecto

### 🟦 FASE 1 – Planificación y configuración inicial (Día 1-2)

**Responsable:** Marcelo Crisóstomo Carrasco

* Creación del repositorio en GitHub
* Configuración de ramas (`main`, `dev`, `feature/*`)
* Inicialización con Vite
* Estructura de carpetas
* `.gitignore` profesional
* Wireframe de vistas iniciales
* Documentación base (`README.md`)

---

### 🟨 FASE 2 – Desarrollo de componentes y navegación (Día 3-6)

**Responsable:** Laura Paterni

* Desarrollo de 10+ componentes funcionales
* Integración de React Router v6 con al menos 4 rutas
* Creación de vistas: landing, home, detalle de libro, checkout
* Coordinación de diseño con responsable de estilos

---

### 🟧 FASE 3 – Hooks, lógica de datos y carrito (Día 7)

**Responsable:** Christian Nivela

* Implementación de `useState`, `useEffect`
* Creación de custom hook (`useGoogleBooks`)
* Simulación de datos con API de Google Books
* Implementación completa del carrito y persistencia con localStorage

---

### 🟩 FASE 4 – Estilos, responsive y despliegue (Día 8)

**Responsable:** José Jiménez

* Aplicación de estilos con TailwindCSS
* Metodología BEM complementaria en CSS básico
* Diseño responsive para móviles y escritorio
* Despliegue en Vercel
* Generación del archivo `URL.txt` con enlace público

---

### 🟪 FASE 5 – Videomemoria y empaquetado final (Día 9-10)

**Responsable:** Marcelo Crisóstomo Carrasco

* Grabación y edición de la videomemoria (máx. 10 minutos)

  * Componentes, hooks, rutas, vistas y despliegue
* Empaquetado de entrega:

  * Carpeta del proyecto sin `node_modules`
  * `URL.txt`
  * Videomemoria `.mp4`
  * Archivo `.zip` final para la entrega

---

## 🎯 Funcionalidades Mínimas

* ✅ **Landing page con redirección automática tras 5 segundos**
* ✅ **Vista principal con barra de búsqueda (filtrado por título)**
* ✅ **Vista de detalle del libro (BookDetail) con datos completos y HTML enriquecido**
* ✅ **Carrito persistente (localStorage) con posibilidad de eliminar elementos**
* ✅ **Vista de checkout con resumen, botón de confirmación y redirección**
* ✅ **Integración de React Router con rutas declarativas y dinámicas (`/book/:id`)**
* ✅ **Custom hook funcional (`useGoogleBooks`) y context global (`useCart`)**
* ✅ **Integración de API pública: Google Books API para cargar resultados reales**

---

## 🔗 API Integrada

Esta aplicación hace uso de la API pública de **Google Books**:

* Documentación: [https://developers.google.com/books/docs/v1/using](https://developers.google.com/books/docs/v1/using)
* Endpoint utilizado: `https://www.googleapis.com/books/v1/volumes?q=`

El hook personalizado `useGoogleBooks()` realiza peticiones a esta API en tiempo real y carga:

* Título del libro
* Autor/es
* Imagen
* Descripción HTML
* Páginas, editorial, calificaciones, categorías y más

---

## 🌐 Despliegue

* 🔗 URL del sitio en producción: [https://relatos-de-papel-frontend-full-satck.vercel.app](https://relatos-de-papel-frontend-full-satck.vercel.app)
* Plataforma utilizada: **Vercel**

---

## 📊 Evaluación por criterios (UNIR)

| Criterio | Descripción                        | Puntos | Cumplido                                           |
| -------- | ---------------------------------- | ------ | -------------------------------------------------- |
| C1       | 10 componentes funcionales con JSX | 0.5    | ✅                                                  |
| C2       | Uso de `useState` y `useEffect`    | 0.5    | ✅                                                  |
| C3       | Custom Hook implementado y en uso  | 1.0    | ✅ `useGoogleBooks`                                 |
| C4       | Uso correcto de React Router       | 1.0    | ✅ con rutas `/`, `/home`, `/book/:id`, `/checkout` |
| C5       | Estilo con CSS y metodología BEM   | 1.0    | ✅ con Tailwind + clases BEM en base CSS            |
| C6       | Vistas completas y funcionales     | 4.5    | ✅                                                  |

---

## 📝 Licencia

© 2025 - Proyecto académico desarrollado para la Universidad Internacional de La Rioja (UNIR).
