import { useState } from "react";
import "./App.css";


import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import AddProductForm from "./components/AddProductForm";
import SearchBar from "./components/SearchBar";

function App() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Wireless Headphones",
      category: "Electronics",
      price: 59.99,
      stock: 24,
      icon: "🎧",
    },
    {
      id: 2,
      name: "Smart Watch",
      category: "Electronics",
      price: 129.99,
      stock: 10,
      icon: "⌚",
    },
    {
      id: 3,
      name: "Coffee Mug",
      category: "Home",
      price: 14.99,
      stock: 0,
      icon: "☕",
    },
    {
      id: 4,
      name: "Backpack",
      category: "Accessories",
      price: 45.0,
      stock: 15,
      icon: "🎒",
    },
    {
      id: 5,
      name: "Desk Lamp",
      category: "Home",
      price: 34.5,
      stock: 8,
      icon: "💡",
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");

  function handleAddProduct(newProduct) {
    setProducts((currentProducts) => [
      ...currentProducts,
      newProduct,
    ]);
  }

  function handleDeleteProduct(productId) {
    setProducts((currentProducts) =>
      currentProducts.filter((product) => product.id !== productId)
    );
  }

  const filteredProducts = products.filter((product) => {
    const search = searchTerm.toLowerCase().trim();

    return (
      product.name.toLowerCase().includes(search) ||
      product.category.toLowerCase().includes(search)
    );
  });

  const totalProducts = products.length;

  const inStockCount = products.filter(
    (product) => product.stock > 0
  ).length;

  const outOfStockCount = products.filter(
    (product) => product.stock === 0
  ).length;

  return (
    <div className="app">
      <Navbar
        totalProducts={totalProducts}
        inStockCount={inStockCount}
        outOfStockCount={outOfStockCount}
      />

      <main className="dashboard">
        <h1>Product & Inventory Dashboard</h1>

        <p className="description">
          Manage your products and inventory in one place.
        </p>

        <AddProductForm onAddProduct={handleAddProduct} />

        <SearchBar
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
        />

        <h2>Product Catalog</h2>

        <ProductList
          products={filteredProducts}
          onDeleteProduct={handleDeleteProduct}
        />
      </main>
    </div>
  );
}

export default App;