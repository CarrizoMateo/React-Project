import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts, getProductsByCategory } from "../services/products";
import ItemList from "./ItemList";


export default function ItemListContainer({ greeting = "Catálogo" }) {
    const { categoryId } = useParams();
    const [items, setItems] = useState([]);
    const [status, setStatus] = useState("idle"); // idle | loading | success | error
    const [error, setError] = useState(null);


    useEffect(() => {
        let cancel = false;
        async function fetchData() {
            try {
                setStatus("loading");
                setError(null);
                const data = categoryId ? await getProductsByCategory(categoryId) : await getProducts();
                if (!cancel) {
                    setItems(data);
                    setStatus("success");
                }
            } catch (err) {
                if (!cancel) {
                    setStatus("error");
                    setError(err.message || "Error inesperado");
                }
            }
        }
        fetchData();
        return () => { cancel = true; };
    }, [categoryId]); // ⚠️ Dependencia en el parámetro de URL


    if (status === "loading") return <p>Cargando productos...</p>;
    if (status === "error") return <p>Hubo un problema: {error}</p>;


    return (
        <section>
            <h1 style={{ marginTop: 0 }}>{greeting} {categoryId ? `· ${categoryId}` : ""}</h1>
            <ItemList items={items} />
        </section>
    );
}