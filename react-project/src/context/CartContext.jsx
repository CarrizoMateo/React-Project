import { createContext, useContext, useEffect, useMemo, useReducer } from "react";


const CartContext = createContext();


function reducer(state, action) {
    switch (action.type) {
        case "ADD": {
            const { product, qty } = action.payload;
            const idx = state.items.findIndex((it) => it.id === product.id);
            let items;
            if (idx !== -1) {
                items = state.items.map((it) =>
                    it.id === product.id ? { ...it, qty: Math.min(it.qty + qty, product.stock ?? it.qty + qty) } : it
                );
            } else {
                items = [...state.items, { ...product, qty }];
            }
            return { ...state, items };
        }
        case "REMOVE": {
            return { ...state, items: state.items.filter((it) => it.id !== action.payload) };
        }
        case "CLEAR": {
            return { ...state, items: [] };
        }
        case "LOAD": {
            return action.payload ?? state;
        }
        default:
            return state;
    }
}


const initialState = { items: [] };


export function CartProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        const saved = localStorage.getItem("cart:v1");
        if (saved) {
            try { dispatch({ type: "LOAD", payload: JSON.parse(saved) }); } catch { }
        }
    }, []);
    useEffect(() => {
        localStorage.setItem("cart:v1", JSON.stringify(state));
    }, [state]);


    const totals = useMemo(() => {
        const totalItems = state.items.reduce((acc, it) => acc + it.qty, 0);
        const totalPrice = state.items.reduce((acc, it) => acc + it.qty * (it.price ?? 0), 0);
        return { totalItems, totalPrice };
    }, [state.items]);


    const value = {
        items: state.items,
        ...totals,
        addItem: (product, qty = 1) => dispatch({ type: "ADD", payload: { product, qty } }),
        removeItem: (id) => dispatch({ type: "REMOVE", payload: id }),
        clearCart: () => dispatch({ type: "CLEAR" }),
    };


    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}


export function useCart() {
    const ctx = useContext(CartContext);
    if (!ctx) throw new Error("useCart debe usarse dentro de <CartProvider>");
    return ctx;
}