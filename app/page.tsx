import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      <h1>Bem-vindo à One Life</h1>
      <p>
        <Link href="/products">Ver Produtos</Link>
      </p>
    </main>
  );
}
