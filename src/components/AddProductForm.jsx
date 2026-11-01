import { useState } from "react";

function AddProductForm({ onAddProduct }) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const newProduct = {
      id: Date.now(),
      name: name.trim(),
      category: category.trim(),
      price: Number(price),
      stock: Number(stock),
      icon: "📦",
    };

    if (!newProduct.name || !newProduct.category) {
      return;
    }

    onAddProduct(newProduct);

    setName("");
    setCategory("");
    setPrice("");
    setStock("");
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>Add New Product</h3>

      <input
        type="text"
        placeholder="Product Name"
        value={name}
        onChange={(event) => setName(event.target.value)}
        required
      />

      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(event) => setCategory(event.target.value)}
        required
      />

      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(event) => setPrice(event.target.value)}
        min="0"
        step="0.01"
        required
      />

      <input
        type="number"
        placeholder="Stock Quantity"
        value={stock}
        onChange={(event) => setStock(event.target.value)}
        min="0"
        step="1"
        required
      />

      <button type="submit">Add Product</button>
    </form>
  );
}

export default AddProductForm;