// src/services/orderService.js
import { db } from '../firebaseConfig';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export const createOrder = async (buyer, items, total) => {
  const order = {
    buyer: {
      name: buyer.name,
      email: buyer.email,
      phone: buyer.phone,
    },
    items: items.map(item => ({
      id: item.id,
      title: item.name,
      quantity: item.quantity,
      price: item.price,
    })),
    total: total,
    date: serverTimestamp(),
  };

  try {
    const docRef = await addDoc(collection(db, 'orders'), order);
    return docRef.id;
  } catch (error) {
    console.error("Error adding document: ", error);
    throw error;
  }
};
