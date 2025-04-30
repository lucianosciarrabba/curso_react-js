// src/mocks/products.js

export const products = [
  { 
    id: "1", 
    name: "Zapatilla Hombre", 
    category: "hombre", 
    price: 100, 
    description: "Zapatilla urbana para hombre, super cancheras", 
    image: "https://static.cotodigital3.com.ar/sitios/fotos/large/00589100/00589177.jpg" 
  },
  { 
    id: "2", 
    name: "Zapatilla Mujer", 
    category: "mujer", 
    price: 150, 
    description: "Zapatilla cómoda para mujer, perfecta para caminar", 
    image: "https://static.cotodigital3.com.ar/sitios/fotos/large/00579900/00579905.jpg" 
  },
  { 
    id: "3", 
    name: "Juguete Niños", 
    category: "ninos", 
    price: 50, 
    description: "Juego De Mesa MONKY LOCO", 
    image: "https://static.cotodigital3.com.ar/sitios/fotos/large/00130000/00130059.jpg" 
  },
  { 
    id: "4", 
    name: "Chaqueta Hombre", 
    category: "hombre", 
    price: 200, 
    description: "Buzo Caballero Estampa C/Cap", 
    image: "https://static.cotodigital3.com.ar/sitios/fotos/large/00585300/00585339.jpg" 
  },
];
  export const getProducts = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products);
      }, 1000);
    });
  };
  