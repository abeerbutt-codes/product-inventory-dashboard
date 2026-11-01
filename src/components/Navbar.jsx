function Navbar({ totalProducts, inStockCount, outOfStockCount }) {
  return (
    <nav className="navbar">
      <h2>Product Inventory Dashboard</h2>

      <div className="summary">
        <p>Total Products: {totalProducts}</p>
        <p>In Stock: {inStockCount}</p>
        <p>Out of Stock: {outOfStockCount}</p>
      </div>
    </nav>
  );
}

export default Navbar;