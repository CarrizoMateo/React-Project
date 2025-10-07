import { addDoc, collection } from "firebase/firestore";
import { db } from "../services/firebase";
import { products } from "../data/products";

export default function AdminUploader() {
  const uploadProducts = async () => {
    try {
      const colRef = collection(db, "products");
      for (const prod of products) {
        const { id, ...productData } = prod;
        await addDoc(colRef, productData);
      }
      alert("✅ Productos cargados exitosamente a Firebase");
    } catch (error) {
      console.error("❌ Error al subir productos:", error);
      alert("Hubo un error al cargar productos.");
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>⚠️ Carga manual de productos</h2>
      <button onClick={uploadProducts}>📤 Subir todos los productos a Firebase</button>
    </div>
  );
}
