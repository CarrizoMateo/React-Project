import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../services/products";
import ItemDetail from "./ItemDetail";


export default function ItemDetailContainer() {
    const { itemId } = useParams();
    const [product, setProduct] = useState(null);
    const [status, setStatus] = useState("idle");
    const [error, setError] = useState(null);


    useEffect(() => {
        let cancel = false;
        setStatus("loading");
        setError(null);


        getProductById(itemId)
            .then((data) => { if (!cancel) { setProduct(data); setStatus("success"); } })
            .catch((err) => { if (!cancel) { setError(err.message || "Error inesperado"); setStatus("error"); } });


        return () => { cancel = true; };
    }, [itemId]);


    if (status === "loading") return <p>Cargando detalle...</p>;
    if (status === "error") return <p>Hubo un problema: {error}</p>;
    if (!product) return <p>No se encontró el producto.</p>;


    return <ItemDetail product={product} />;
}