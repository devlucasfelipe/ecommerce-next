import ProductCard from "@/components/ProductCard"

const products = [
  { id: 1, name: "Produto Teste", price: 99.9 },
  { id: 2, name: "Outro Produto", price: 149.9 },
  { id: 3, name: "Tênis Esportivo", price: 299.9 },
]

export default function ProductsPage() {
  return (
    <main>
      <h1>Produtos</h1>

      {products.map((product) => (
        <ProductCard
          key={product.id}
          name={product.name}
          price={product.price}
        />
      ))}
    </main>
  )
}