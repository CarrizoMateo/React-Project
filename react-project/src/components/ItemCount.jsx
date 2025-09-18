import { useState } from "react";


export default function ItemCount({ stock = 0, initial = 1, onAdd }) {
    const [qty, setQty] = useState(initial);
    const inc = () => setQty((q) => (q < stock ? q + 1 : q));
    const dec = () => setQty((q) => (q > 1 ? q - 1 : q));


    return (
        <div style={styles.row}>
            <div style={styles.counter}>
                <button onClick={dec} disabled={qty <= 1}>&minus;</button>
                <span>{qty}</span>
                <button onClick={inc} disabled={qty >= stock}>+</button>
            </div>
            <button onClick={() => onAdd?.(qty)} disabled={stock === 0} style={styles.add}>Agregar</button>
        </div>
    );
}


const styles = {
    row: { display: "flex", gap: 12, alignItems: "center" },
    counter: { display: "inline-flex", alignItems: "center", gap: 8, border: "1px solid #e5e7eb", borderRadius: 10, padding: "0.35rem 0.6rem" },
    add: { background: "black", color: "white", border: 0, padding: "0.45rem 0.8rem", borderRadius: 10, fontWeight: 600 },
};