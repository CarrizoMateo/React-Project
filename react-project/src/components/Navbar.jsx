import { Link, NavLink } from "react-router-dom";
import { getCategories } from "../services/products";
import { useCart } from "../context/CartContext";


export default function NavBar() {
    const categories = getCategories();
    const { totalItems } = useCart();


    return (
        <header style={styles.header}>
            <div style={styles.inner}>
                <Link to="/" style={styles.brand}>RetroKits</Link>
                <nav style={styles.nav}>
                    <NavLink to="/" style={linkStyle}>Todo</NavLink>
                    {categories.map((cat) => (
                        <NavLink key={cat} to={`/category/${cat}`} style={linkStyle}>
                            {cat}
                        </NavLink>
                    ))}
                </nav>
                <Link to="/cart" style={styles.cart} aria-label="Carrito">
                    <span>🛒</span>
                    <span style={styles.badge}>{totalItems}</span>
                </Link>
            </div>
        </header>
    );
}


const linkStyle = ({ isActive }) => ({
    textTransform: "capitalize",
    textDecoration: "none",
    padding: "0.35rem 0.6rem",
    borderRadius: 8,
    fontWeight: 600,
    opacity: isActive ? 1 : 0.75,
    outline: isActive ? "2px solid rgba(0,0,0,.2)" : "none",
});


const styles = {
    header: { borderBottom: "1px solid #e5e7eb", background: "#fff" },
    inner: { maxWidth: 1100, margin: "0 auto", padding: "0.75rem 1.5rem", display: "flex", alignItems: "center", gap: 16, justifyContent: "space-between" },
    brand: { fontSize: 22, fontWeight: 800, textDecoration: "none", color: "#111" },
    nav: { display: "flex", gap: 12, alignItems: "center" },
    cart: { position: "relative", textDecoration: "none", color: "inherit", display: "inline-flex", alignItems: "center", gap: 8 },
    badge: { background: "black", color: "white", borderRadius: 999, padding: "0 8px", fontSize: 12, lineHeight: "20px", minWidth: 20, textAlign: "center" },
};