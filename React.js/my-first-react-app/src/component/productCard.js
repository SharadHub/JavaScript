
const products = [
  { id: 1, name: "Laptop", price: 1000 },
  { id: 2, name: "Phone", price: 600 },
  { id: 3, name: "Tablet", price: 800 }
];

function ProductList() {
  return (
    <section>
      <h2>Products</h2>
      <ul>
        {products.map(product => (
          <li
            key={product.id}
            style={{ fontWeight: product.price > 800 ? "bold" : "normal" }}
          >
            {product.name} — ${product.price}
          </li>
        ))}
      </ul>
    </section>
  );
}
export default ProductList;