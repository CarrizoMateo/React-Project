import ItemCard from "./ItemCard";


export default function ItemList({ items }) {
    if (!items.length) return <p>No hay productos para mostrar.</p>;
    return (
        <div style={styles.grid}>
            {items.map((p) => (
                <ItemCard key={p.id} item={p} />
            ))}
        </div>
    );
}


const styles = {
    grid: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
        gap: 16,
    },
};