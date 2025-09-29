import React, { useReducer } from "react";
import './Task.css'

const Products = [
  { id: 1, productname: "Saree", price: 20000 },
  { id: 2, productname: "Kurti", price: 1000 },
  { id: 3, productname: "Lehenga", price: 30000 },
  { id: 4, productname: "Jewellery", price: 5000 },
  { id: 5, productname: "Makeup Kit", price: 1500 },
];

const initialState = {
  products: Products,      // filtered products for rendering
  allProducts: Products,   // original list
  cart: []                 // cart items
};

// Reducer
function reducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART": {
      const product = action.payload;
      const exists = state.cart.find(item => item.id === product.id);
      if (exists) {
        return {
          ...state,
          cart: state.cart.map(item =>
            item.id === product.id ? { ...item, qty: item.qty + 1 } : item
          )
        };
      }
      return {
        ...state,
        cart: [...state.cart, { ...product, qty: 1 }]
      };
    }

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload)
      };

    case "SEARCH":
      return {
        ...state,
        products: state.allProducts.filter(item =>
          item.productname.toLowerCase().includes(action.payload.toLowerCase())
        )
      };

    default:
      return state;
  }
}
function Task() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h2>Products</h2>
    
      <input type="text" placeholder="Search Product" onChange={(e) => dispatch({ type: "SEARCH", payload: e.target.value })}/>
      <button className = "search"onClick={() => dispatch({ type: "SEARCH", payload: "" })}>Search</button>

      <table className="table" border="1" cellPadding="5">
        <thead>
          <tr>
            <th>ID</th>
            <th>Product Name</th>
            <th>Add</th>
          </tr>
        </thead>
        <tbody>
          {state.products.map(product => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.productname}</td>
              <td>
                <button className="Add" onClick={() => dispatch({ type: "ADD_TO_CART", payload: product })}>Add to Cart</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Cart</h2>
      {state.cart.length === 0 ? (
        <p>No items in cart....</p>
      ) : (
        <table className="table" border="1" cellPadding="5">
          <thead>
            <tr>
              <th>ID</th>
              <th>Product</th>
              <th>Qty</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {state.cart.map(item => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.productname}</td>
                <td>{item.qty}</td>
                <td>
                  <button className = "remove"onClick={() =>dispatch({ type: "REMOVE_FROM_CART", payload: item.id })}>Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Task;
