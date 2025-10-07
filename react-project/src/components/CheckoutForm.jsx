import { useState } from "react";
import { useCart } from "../context/CartContext";
import { collection, addDoc, getFirestore, Timestamp } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

export default function CheckoutForm() {
    const { items, totalPrice, clearCart } = useCart();
    const [form, setForm] = useState({ name: "", email: "", phone: "" });
    const [orderId, setOrderId] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!form.name || !form.email || !form.phone) return;

        const order = {
            buyer: { ...form },
            items: items.map(it => ({
                id: it.id,
                title: it.name,
                price: it.price,
                quantity: it.qty
            })),
            total: totalPrice,
            date: Timestamp.fromDate(new Date())
        };

        try {
            setLoading(true);
            const db = getFirestore();
            const docRef = await addDoc(collection(db, "orders"), order);
            setOrderId(docRef.id);
            clearCart();
        } catch (error) {
            console.error("Error al crear la orden", error);
        } finally {
            setLoading(false);
        }
    };

    if (loading) return <p>Procesando tu orden...</p>;
    if (orderId)
        return (
            <div>
                <h2>¡Gracias por tu compra!</h2>
                <p>Tu número de orden es:</p>
                <code>{orderId}</code>
                <br />
                <button onClick={() => navigate("/")}>Volver al inicio</button>
            </div>
        );

    return (
        <form onSubmit={handleSubmit} style={{ display: "grid", gap: 12, maxWidth: 400 }}>
            <h2>Finalizar compra</h2>
            <input type="text" name="name" placeholder="Nombre" value={form.name} onChange={handleChange} required />
            <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
            <input type="tel" name="phone" placeholder="Teléfono" value={form.phone} onChange={handleChange} required />
            <button type="submit">Confirmar compra</button>
        </form>
    );
}
