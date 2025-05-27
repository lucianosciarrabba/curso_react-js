// src/services/productService.js

import { db } from '../firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';

export const getProducts = async () => {
  try {
    const productsRef = collection(db, 'items');
    const productsSnapshot = await getDocs(productsRef);
    const products = productsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return products;
  } catch (error) {
    console.error('Error al obtener los productos:', error);
    throw error;
  }
};
