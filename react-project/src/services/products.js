import { collection, getDocs, getDoc, doc, query, where } from "firebase/firestore";
import { db } from "./firebase";

export async function getProducts() {
  const querySnapshot = await getDocs(collection(db, "products"));
  const products = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return products;
}

export async function getProductsByCategory(categoryId) {
  const q = query(collection(db, "products"), where("category", "==", categoryId));
  const querySnapshot = await getDocs(q);
  const products = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return products;
}

export async function getProductById(id) {
  const ref = doc(db, "products", id);
  const snapshot = await getDoc(ref);
  if (!snapshot.exists()) throw new Error("Producto no encontrado");
  return { id: snapshot.id, ...snapshot.data() };
}

export async function getCategories() {
  const all = await getProducts();
  return [...new Set(all.map((p) => p.category))];
}

