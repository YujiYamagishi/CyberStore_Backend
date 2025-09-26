import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {

    // ✅ ADICIONADO: Limpeza das tabelas do carrinho na ordem correta
    await prisma.itemShoppingCart.deleteMany({});
    await prisma.shoppingCart.deleteMany({});
    
    // Limpeza das outras tabelas que você já tinha
    await prisma.review.deleteMany({});
    await prisma.storageOption.deleteMany({});
    await prisma.colorsProduct.deleteMany({});
    await prisma.product.deleteMany({});
    await prisma.smartphoneSpec.deleteMany({});
    await prisma.category.deleteMany({});


    // ✅ ADICIONADO: Criação de um carrinho de teste para o usuário 1
    // Como o ID é autoincremento, o primeiro carrinho criado terá ID = 1
    await prisma.shoppingCart.create({
        data: {
            user_id: 1, // Carrinho para o usuário de teste
            status: 'ativo',
        },
    });
    console.log('Carrinho de compras de teste criado com sucesso.');


    // O resto do seu script para criar categorias, specs e produtos continua aqui
    await prisma.category.createMany({
        data: [
            // ... seus dados de categoria
            { id: 1, name: 'Phones', description: 'Modern cell phones with various specifications' },
            { id: 2, name: 'Notebooks', description: 'Laptops for personal and professional use' },
            // ... etc
        ]
    });

    await prisma.smartphoneSpec.createMany({
        data: [
            // ... seus dados de specs
            { id: 1, screen_size: '6.1 inch', cpu: 'A17 Pro', total_cores: '6 cores', main_camera: '48MP', front_camera: '12MP', battery: '3274mAh' },
            { id: 2, screen_size: '6.8 inch', cpu: 'Snapdragon 8 Gen 3', total_cores: '8 cores', main_camera: '200MP', front_camera: '12MP', battery: '5000mAh' },
            // ... etc
        ]
    });

    await prisma.product.createMany({
        data: [
            // ... seus dados de produto
            { id: 1, name: 'iPhone 15 Pro', description: 'The first iPhone forged in aerospace-grade titanium...', brand: 'Apple', price: 9299, stock: 50, url_image: 'https://...', tag: 'bestseller', id_category: 1, id_specs_smartphone: 1 },
            { id: 2, name: 'Samsung Galaxy S24 Ultra', description: 'Welcome to the era of mobile AI...', brand: 'Samsung', price: 8999, discounted_price: 8499, stock: 40, url_image: 'https://...', tag: 'new_arrival', id_category: 1, id_specs_smartphone: 2 },
            // ... etc
        ]
    });
    
    console.log("Criação de categorias, specs e produtos finalizada.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });