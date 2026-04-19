import ProductCard from "@/components/ProductCard"

export default function ProductsPage() {
  return (
    <main>
      <h1>Produtos</h1>

      <ProductCard name="Produto Teste" price={99.9} />
      <ProductCard name="Outro Produto" price={149.9} />
    </main>
  )
}