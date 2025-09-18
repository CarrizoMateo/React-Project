import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";


export default function CartPage() {
    const { items, totalItems, totalPrice, removeItem, clearCart } = useCart();


    if (!items.length)
        return (
            <div>
                <h2>Tu carrito está vacío</h2>
                <Link to="/">Ir al catálogo</Link>
            </div>
        );


    return (
        <section>
            <h2>Carrito</h2>
            <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: 12 }}>
                {items.map((it) => (
                    <li key={it.id} style={{ display: "grid", gridTemplateColumns: "80px 1fr auto", gap: 12, alignItems: "center", border: "1px solid #e5e7eb", borderRadius: 12, padding: 12 }}>
                        <img src={it.image} alt={it.name} style={{ width: 80, height: 60, objectFit: "cover", borderRadius: 8 }} />
                        <div>
                            <strong>{it.name}</strong>
                            <div style={{ opacity: .8 }}>x{it.qty} · ${it.price.toLocaleString("es-AR")} c/u</div>
                        </div>
                        <button onClick={() => removeItem(it.id)}>Quitar</button>
                    </li>
                ))}
            </ul>


            <div style={{ display: "flex", justifyContent: "space-between", marginTop: 16 }}>
                <button onClick={clearCart}>Vaciar carrito</button>
                <div style={{ textAlign: "right" }}>
                    <div>Total ítems: <strong>{totalItems}</strong></div>
                    <div>Total: <strong>${totalPrice.toLocaleString("es-AR")}</strong></div>
                </div>
            </div>
        </section>
    );
}