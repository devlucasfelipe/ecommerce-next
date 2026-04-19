// eslint-disable-next-line @typescript-eslint/no-require-imports
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function main() {
  await prisma.product.createMany({
    data: [
      {
        name: "Tênis Teste",
        price: 199.9,
        description: "Produto de teste",
        image: "tenis.jpg",
      },
      {
        name: "Camiseta Dry Fit",
        price: 79.9,
        description: "Camiseta leve",
        image: "camiseta.jpg",
      },
    ],
  })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
  })