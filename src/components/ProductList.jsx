import ProductCard from "./ProductCard";

function ProductList({ products, onDeleteProduct }) {
  return (
    <div className="product-list">
      {products.length === 0 ? (
        <p>No products found.</p>
      ) : (
        products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onDeleteProduct={onDeleteProduct}
          />
        ))
      )}
    </div>
  );
}

export default ProductList;