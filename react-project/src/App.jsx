import { Routes, Route, Navigate } from "react-router-dom";
import NavBar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import NotFound from "./components/NotFound";
import CartPage from "./components/CartPage";

export default function App() {
    return (
        <div style={styles.layout}>
            <NavBar/>
            <main style={styles.main}>
                <Routes>
                    <Route path="/" element={<ItemListContainer greeting="Catálogo" />} />
                    <Route path="/category/:categoryId" element={<ItemListContainer greeting="Categoría" />} />
                    <Route path="/item/:itemId" element={<ItemDetailContainer />} />
                    <Route path="/cart" element={<CartPage />} />
                    <Route path="/home" element={<Navigate to="/" replace />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </main>
        </div>
    );
}


const styles = {
    layout: { fontFamily: "system-ui, sans-serif", minHeight: "100dvh", display: "grid", gridTemplateRows: "auto 1fr" },
    main: { maxWidth: 1100, margin: "0 auto", padding: "1.5rem" },
};