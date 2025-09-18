import { Link } from "react-router-dom";


export default function ItemCard({ item }) {
    const { id, name, price, image } = item;
    return (
        <article style={styles.card}>
            <img src={image} alt={name} style={styles.img} />
            <div style={styles.body}>
                <h3 style={{ margin: 0, fontSize: 18 }}>{name}</h3>
                <p style={{ margin: ".25rem 0", fontWeight: 700 }}>${price.toLocaleString("es-AR")}</p>
                <Link to={`/item/${id}`} style={styles.btn}>Ver detalle</Link>
            </div>
        </article>
    );
}


const styles = {
    card: { border: "1px solid #e5e7eb", borderRadius: 16, overflow: "hidden", background: "#fff", display: "flex", flexDirection: "column" },
    img: { width: "100%", aspectRatio: "3/2", objectFit: "cover" },
    body: { padding: "0.75rem" },
    btn: { display: "inline-block", marginTop: 8, textDecoration: "none", background: "black", color: "white", padding: "0.4rem 0.7rem", borderRadius: 10 },
};