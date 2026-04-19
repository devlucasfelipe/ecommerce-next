type Props = {
  name: string
  price: number
}

export default function ProductCard({ name, price }: Props) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px" }}>
      <h2>{name}</h2>
      <p>R$ {price}</p>
    </div>
  )
}