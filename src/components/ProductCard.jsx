function ProductCard({ product, onDeleteProduct }) {
  return (
    <div className="product-card">
      <div className="product-icon">{product.icon}</div>

      <h3>{product.name}</h3>

      <p>Category: {product.category}</p>

      <h4>${Number(product.price).toFixed(2)}</h4>

      <p>Stock: {product.stock}</p>

      <p>
        Status: {product.stock > 0 ? "In Stock" : "Out of Stock"}
      </p>

      <button
        className="delete-button"
        onClick={() => onDeleteProduct(product.id)}
      >
        Delete
      </button>
    </div>
  );
}

export default ProductCard;