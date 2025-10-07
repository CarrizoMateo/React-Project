import { useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";
import { useCart } from "../context/CartContext";

export default function ItemDetail({ product }) {
    const { name, price, description, image, stock } = product;
    const { addItem } = useCart();
    const [added, setAdded] = useState(false); // nuevo estado

    const handleAdd = (qty) => {
        addItem(product, qty);
        setAdded(true); // cambia estado después de agregar
    };

    return (
        <article style={styles.wrap}>
            <img src={image} alt={name} style={styles.img} />
            <div style={styles.info}>
                <h2 style={{ marginTop: 0 }}>{name}</h2>
                <p style={{ opacity: 0.8 }}>{description}</p>
                <p style={{ fontWeight: 700 }}>Precio: ${price.toLocaleString("es-AR")}</p>
                <p style={{ opacity: 0.7 }}>Stock: {stock}</p>

                {!added ? (
                    <ItemCount stock={stock} initial={1} onAdd={handleAdd} />
                ) : (
                    <Link to="/cart" style={styles.btn}>Ir al carrito</Link>
                )}
            </div>
        </article>
    );
}

const styles = {
    wrap: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 24,
        alignItems: "start"
    },
    img: {
        width: "100%",
        borderRadius: 16,
        aspectRatio: "3/2",
        objectFit: "cover"
    },
    info: {
        background: "#fff",
        border: "1px solid #e5e7eb",
        borderRadius: 16,
        padding: 16
    },
    btn: {
        display: "inline-block",
        marginTop: 12,
        textDecoration: "none",
        background: "black",
        color: "white",
        padding: "0.45rem 0.8rem",
        borderRadius: 10,
        fontWeight: 600
    }
};
