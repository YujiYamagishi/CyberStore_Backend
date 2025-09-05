import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    console.log(`Start seeding ...`);

    // Limpa o banco de dados na ordem correta
    await prisma.review.deleteMany({});
    await prisma.storageOption.deleteMany({});
    await prisma.colorsProduct.deleteMany({});
    await prisma.product.deleteMany({});
    await prisma.smartphoneSpec.deleteMany({});
    await prisma.category.deleteMany({});

    console.log('Old data cleared.');

    // --- 1. CREATE CATEGORIES ---
    await prisma.category.createMany({
        data: [
            { id: 1, name: 'Phones', description: 'Modern cell phones with various specifications' },
            { id: 2, name: 'Notebooks', description: 'Laptops for personal and professional use' },
            { id: 3, name: 'Tablets', description: 'Mobile devices with larger screens' },
            { id: 4, name: 'Headphones', description: 'High quality headphones with immersive sound' },
            { id: 5, name: 'Gaming', description: 'Gaming consoles and accessories' },
            { id: 6, name: 'TVs', description: 'Latest generation televisions' },
            { id: 7, name: 'Audio', description: 'High-quality speakers with great sound' },
            { id: 8, name: 'Smart Watches', description: 'Smartwatches and fitness trackers' },
        ]
    });

    // --- 2. CREATE SMARTPHONE SPECS ---
    await prisma.smartphoneSpec.createMany({
        data: [
            { id: 1, screen_size: '6.1 inch', cpu: 'A17 Pro', total_cores: '6 cores', main_camera: '48MP', front_camera: '12MP', battery: '3274mAh' },
            { id: 2, screen_size: '6.8 inch', cpu: 'Snapdragon 8 Gen 3', total_cores: '8 cores', main_camera: '200MP', front_camera: '12MP', battery: '5000mAh' },
            { id: 3, screen_size: '6.7 inch', cpu: 'Google Tensor G3', total_cores: '9 cores', main_camera: '50MP', front_camera: '10.5MP', battery: '5050mAh' },
            { id: 4, screen_size: '6.73 inch', cpu: 'Snapdragon 8 Gen 2', total_cores: '8 cores', main_camera: '50.3MP', front_camera: '32MP', battery: '4820mAh' },
            { id: 5, screen_size: '6.9 inch', cpu: 'Snapdragon 8 Gen 2 for Galaxy', total_cores: '8 cores', main_camera: '50MP', front_camera: '12MP', battery: '4400mAh' },
        ]
    });

    // --- 3. CREATE PRODUCTS ---
    await prisma.product.createMany({
        data: [
            // PHONES (30+)
            { id: 1, name: 'iPhone 15 Pro', description: 'Apple Titan-Grade Smartphone with A17 Pro Chip.', brand: 'Apple', price: 9299, stock: 50, url_image: 'https://source.unsplash.com/random/800x600?iphone,pro', tag: 'discount_up_to_50', id_category: 1, id_specs_smartphone: 1 },
            { id: 2, name: 'Samsung Galaxy S24 Ultra', description: 'Experience the new era of AI with Galaxy AI.', brand: 'Samsung', price: 8999, discounted_price: 8499, stock: 40, url_image: 'https://source.unsplash.com/random/800x600?samsung,s24,ultra', tag: 'new_arrival', id_category: 1, id_specs_smartphone: 2 },
            { id: 3, name: 'Google Pixel 8 Pro', description: 'The best of Google, with an amazing AI camera.', brand: 'Google', price: 7999, stock: 35, url_image: 'https://source.unsplash.com/random/800x600?google,pixel,pro', tag: 'featured_product', id_category: 1, id_specs_smartphone: 3 },
            { id: 4, name: 'Xiaomi 14 Pro', description: 'Leica professional optics for stunning photos.', brand: 'Xiaomi', price: 5499, discounted_price: 5199, stock: 30, url_image: 'https://source.unsplash.com/random/800x600?xiaomi,phone', tag: 'new_arrival', id_category: 1, id_specs_smartphone: 4 },
            { id: 5, name: 'Samsung Galaxy Z Fold 5', description: 'The ultimate productivity device that fits in your pocket.', brand: 'Samsung', price: 11999, stock: 20, url_image: 'https://source.unsplash.com/random/800x600?samsung,foldable', tag: 'featured_product', id_category: 1, id_specs_smartphone: 5 },
            { id: 6, name: 'iPhone 15', description: 'The standard iPhone, now with Dynamic Island.', brand: 'Apple', price: 7299, discounted_price: 6999, stock: 60, url_image: 'https://source.unsplash.com/random/800x600?iphone,15', tag: 'bestseller', id_category: 1, id_specs_smartphone: 1 },
            { id: 7, name: 'Google Pixel 8', description: 'Powerful, helpful, and all-around impressive.', brand: 'Google', price: 5999, stock: 45, url_image: 'https://source.unsplash.com/random/800x600?google,pixel', tag: 'bestseller', id_category: 1, id_specs_smartphone: 3 },
            { id: 8, name: 'Motorola Razr 40 Ultra', description: 'Iconic foldable design with a huge external screen.', brand: 'Motorola', price: 6999, discounted_price: 6499, stock: 25, url_image: 'https://source.unsplash.com/random/800x600?motorola,phone', tag: 'new_arrival', id_category: 1, id_specs_smartphone: 5 },
            { id: 9, name: 'Samsung Galaxy A54', description: 'Awesome camera, awesome screen, awesome battery.', brand: 'Samsung', price: 2499, stock: 100, url_image: 'https://source.unsplash.com/random/800x600?samsung,galaxy,a54', tag: 'discount_up_to_50', id_category: 1, id_specs_smartphone: 2 },
            { id: 10, name: 'Asus ROG Phone 7', description: 'The ultimate gaming phone with unmatched performance.', brand: 'Asus', price: 7999, discounted_price: 7799, stock: 15, url_image: 'https://source.unsplash.com/random/800x600?asus,gaming,phone', tag: 'featured_product', id_category: 1, id_specs_smartphone: 2 },
            ...Array.from({ length: 20 }, (_, i) => ({ id: 31 + i, name: `Generic Phone Model ${i + 1}`, description: `A reliable phone from Brand ${i % 5 + 1}`, brand: ['Apple', 'Samsung', 'Xiaomi', 'Motorola', 'OnePlus'][i % 5], price: 1999 + i * 150, discounted_price: (i % 3 === 0) ? 1899 + i * 150 : undefined, stock: 50 + i * 2, url_image: `https://source.unsplash.com/random/800x600?smartphone,${['Apple', 'Samsung', 'Xiaomi', 'Motorola', 'OnePlus'][i % 5]}`, tag: 'discount_up_to_50', id_category: 1, id_specs_smartphone: (i % 5) + 1 })),

            // NOTEBOOKS (10+)
            { id: 101, name: 'MacBook Pro 14" M3', description: 'Apple professional laptop with M3 Pro chip.', brand: 'Apple', price: 18499, stock: 15, url_image: 'https://source.unsplash.com/random/800x600?macbook,pro', tag: 'bestseller', id_category: 2 },
            { id: 102, name: 'Dell XPS 15', description: 'Powerful and elegant laptop for creators.', brand: 'Dell', price: 14999, discounted_price: 14499, stock: 20, url_image: 'https://source.unsplash.com/random/800x600?dell,xps', tag: 'featured_product', id_category: 2 },
            ...Array.from({ length: 8 }, (_, i) => ({ id: 103 + i, name: `Laptop Model ${i + 1}`, description: `A great laptop from Brand ${i % 4 + 1}`, brand: ['HP', 'Lenovo', 'Asus', 'Microsoft'][i % 4], price: 4999 + i * 300, discounted_price: (i % 2 === 0) ? 4799 + i * 300 : undefined, stock: 30 + i * 3, url_image: `https://source.unsplash.com/random/800x600?laptop,${['HP', 'Lenovo', 'Asus', 'Microsoft'][i % 4]}`, tag: 'discount_up_to_50', id_category: 2 })),

            // TABLETS (10+)
            { id: 201, name: 'iPad Pro 11"', description: 'The ultimate iPad experience with M2 chip.', brand: 'Apple', price: 9799, stock: 30, url_image: 'https://source.unsplash.com/random/800x600?ipad,pro', tag: 'bestseller', id_category: 3 },
            { id: 202, name: 'Samsung Galaxy Tab S9', description: 'Dynamic AMOLED 2X display for immersive viewing.', brand: 'Samsung', price: 6999, discounted_price: 6799, stock: 25, url_image: 'https://source.unsplash.com/random/800x600?samsung,tablet', tag: 'new_arrival', id_category: 3 },
            ...Array.from({ length: 8 }, (_, i) => ({ id: 203 + i, name: `Tablet Model ${i + 1}`, description: `A handy tablet from Brand ${i % 4 + 1}`, brand: ['Xiaomi', 'Lenovo', 'Microsoft', 'Amazon'][i % 4], price: 1499 + i * 200, stock: 40 + i * 5, url_image: `https://source.unsplash.com/random/800x600?tablet,${['Xiaomi', 'Lenovo', 'Microsoft', 'Amazon'][i % 4]}`, tag: 'featured_product', id_category: 3 })),

            // HEADPHONES (10+)
            { id: 301, name: 'AirPods Pro 2', description: 'Richer audio quality and next-level Active Noise Cancellation.', brand: 'Apple', price: 2599, stock: 100, url_image: 'https://source.unsplash.com/random/800x600?airpods', tag: 'bestseller', id_category: 4 },
            { id: 302, name: 'Sony WH-1000XM5', description: 'Industry-leading noise canceling headphones.', brand: 'Sony', price: 2399, discounted_price: 2199, stock: 50, url_image: 'https://source.unsplash.com/random/800x600?sony,headphones', tag: 'featured_product', id_category: 4 },
            ...Array.from({ length: 8 }, (_, i) => ({ id: 303 + i, name: `Headphone Model ${i + 1}`, description: `Great sound from Brand ${i % 4 + 1}`, brand: ['Bose', 'Sennheiser', 'JBL', 'Beats'][i % 4], price: 899 + i * 100, stock: 60 + i * 10, url_image: `https://source.unsplash.com/random/800x600?headphones,${['Bose', 'Sennheiser', 'JBL', 'Beats'][i % 4]}`, tag: 'new_arrival', id_category: 4 })),

            // GAMING (10+)
            { id: 401, name: 'PlayStation 5 Slim', description: 'The new slim design of the powerful PS5.', brand: 'Sony', price: 4799, stock: 40, url_image: 'https://source.unsplash.com/random/800x600?playstation,5', tag: 'bestseller', id_category: 5 },
            { id: 402, name: 'Xbox Series X', description: 'The fastest, most powerful Xbox ever.', brand: 'Microsoft', price: 4899, stock: 35, url_image: 'https://source.unsplash.com/random/800x600?xbox,series,x', tag: 'featured_product', id_category: 5 },
            { id: 403, name: 'Nintendo Switch OLED', description: 'Play at home or on the go with a vibrant 7-inch OLED screen.', brand: 'Nintendo', price: 2499, discounted_price: 2399, stock: 60, url_image: 'https://source.unsplash.com/random/800x600?nintendo,switch', tag: 'new_arrival', id_category: 5 },
            ...Array.from({ length: 7 }, (_, i) => ({ id: 404 + i, name: `Gaming Accessory ${i + 1}`, description: `An accessory from Brand ${i % 4 + 1}`, brand: ['Logitech', 'Razer', 'Corsair', 'HyperX'][i % 4], price: 399 + i * 50, stock: 80 + i, url_image: `https://source.unsplash.com/random/800x600?gaming,${['mouse', 'keyboard', 'headset', 'controller'][i % 4]}`, tag: 'bestseller', id_category: 5 })),

            // TVs (10+)
            { id: 501, name: 'Samsung S90C OLED 65"', description: 'Incredible contrast and vibrant colors with OLED technology.', brand: 'Samsung', price: 12999, discounted_price: 11999, stock: 15, url_image: 'https://source.unsplash.com/random/800x600?samsung,television', tag: 'new_arrival', id_category: 6 },
            { id: 502, name: 'LG C3 OLED 65"', description: 'The most popular OLED TV, now even brighter.', brand: 'LG', price: 13499, stock: 12, url_image: 'https://source.unsplash.com/random/800x600?lg,television', tag: 'featured_product', id_category: 6 },
            ...Array.from({ length: 8 }, (_, i) => ({ id: 503 + i, name: `TV Model ${i + 1} - 55"`, description: `A 4K TV from Brand ${i % 4 + 1}`, brand: ['Sony', 'TCL', 'Philips', 'Hisense'][i % 4], price: 3499 + i * 250, stock: 25 + i * 2, url_image: `https://source.unsplash.com/random/800x600?television,living,room,${['Sony', 'TCL', 'Philips', 'Hisense'][i % 4]}`, tag: 'bestseller', id_category: 6 })),

            // AUDIO (10+)
            { id: 601, name: 'JBL Boombox 3', description: 'Massive sound and deepest bass for 24 hours of play time.', brand: 'JBL', price: 2899, stock: 40, url_image: 'https://source.unsplash.com/random/800x600?jbl,speaker', tag: 'bestseller', id_category: 7 },
            { id: 602, name: 'Sonos Era 300', description: 'Feel sound all around you with this spatial audio speaker.', brand: 'Sonos', price: 3599, discounted_price: 3499, stock: 25, url_image: 'https://source.unsplash.com/random/800x600?sonos,speaker', tag: 'new_arrival', id_category: 7 },
            ...Array.from({ length: 8 }, (_, i) => ({ id: 603 + i, name: `Audio Device ${i + 1}`, description: `A speaker from Brand ${i % 4 + 1}`, brand: ['Bose', 'Marshall', 'Anker', 'Sony'][i % 4], price: 499 + i * 150, stock: 50 + i * 5, url_image: `https://source.unsplash.com/random/800x600?speaker,${['Bose', 'Marshall', 'Anker', 'Sony'][i % 4]}`, tag: 'featured_product', id_category: 7 })),

            // SMART WATCHES (10+)
            { id: 701, name: 'Apple Watch Series 9', description: 'A brighter display and a magical new way to interact.', brand: 'Apple', price: 4999, stock: 80, url_image: 'https://source.unsplash.com/random/800x600?apple,watch', tag: 'discount_up_to_50', id_category: 8 },
            { id: 702, name: 'Samsung Galaxy Watch 6', description: 'Track your wellness and crush your fitness goals.', brand: 'Samsung', price: 2199, discounted_price: 1999, stock: 60, url_image: 'https://source.unsplash.com/random/800x600?samsung,watch', tag: 'featured_product', id_category: 8 },
            ...Array.from({ length: 8 }, (_, i) => ({ id: 703 + i, name: `Smart Watch ${i + 1}`, description: `A watch from Brand ${i % 4 + 1}`, brand: ['Garmin', 'Fitbit', 'Xiaomi', 'Amazfit'][i % 4], price: 899 + i * 80, stock: 70 + i * 3, url_image: `https://source.unsplash.com/random/800x600?smartwatch,${['Garmin', 'Fitbit', 'Xiaomi', 'Amazfit'][i % 4]}`, tag: 'new_arrival', id_category: 8 })),
        ]
    });

    console.log('Products seeded.');

    // --- 4. CREATE RELATIONAL DATA ---
    await prisma.colorsProduct.createMany({
        data: [
            // iPhones
            { id_product: 1, hex_code: '#2E4053', name: 'Titanium Blue' },
            { id_product: 1, hex_code: '#F2F3F4', name: 'Titanium White' },
            { id_product: 1, hex_code: '#FADBD8', name: 'Pink' },
            { id_product: 1, hex_code: '#D4EFDF', name: 'Green' },
            { id_product: 6, hex_code: '#FADBD8', name: 'Pink' },
            { id_product: 6, hex_code: '#D4EFDF', name: 'Green' },
            // Samsungs
            { id_product: 2, hex_code: '#17202A', name: 'Phantom Black' },
            { id_product: 2, hex_code: '#D6EAF8', name: 'Sky Blue' },
            { id_product: 5, hex_code: '#FCF3CF', name: 'Cream' },
            { id_product: 9, hex_code: '#85C1E9', name: 'Awesome Blue' },
            { id_product: 9, hex_code: '#17202A', name: 'Phantom Black' },
            { id_product: 9, hex_code: '#D6EAF8', name: 'Sky Blue' },
            { id_product: 9, hex_code: '#FCF3CF', name: 'Cream' },
            // MacBooks
            { id_product: 101, hex_code: '#808080', name: 'Space Gray' },
            { id_product: 101, hex_code: '#D5D8DC', name: 'Silver' },

            { id_product: 3, hex_code: '#2E4053', name: 'Titanium Blue' },
            { id_product: 3, hex_code: '#F2F3F4', name: 'Titanium White' },
            { id_product: 3, hex_code: '#FADBD8', name: 'Pink' },
            { id_product: 3, hex_code: '#D4EFDF', name: 'Green' },
        ]
    });

    await prisma.storageOption.createMany({
        data: [
            // iPhones
            { id_product: 1, size: '256GB' },
            { id_product: 1, size: '512GB' },
            { id_product: 1, size: '1TB' },
            { id_product: 6, size: '128GB' },
            { id_product: 6, size: '256GB' },
            // Samsungs
            { id_product: 2, size: '256GB' },
            { id_product: 2, size: '512GB' },
            { id_product: 2, size: '1TB' },
            { id_product: 5, size: '256GB' },
            { id_product: 9, size: '1TB' },
            // Notebooks
            { id_product: 101, size: '512GB' },
            { id_product: 101, size: '1TB' },
            { id_product: 102, size: '512GB' },

            { id_product: 3, size: '128GB' },
            { id_product: 3, size: '256GB' },
        ]
    });

    await prisma.review.createMany({
        data: [
            { id_product: 1, rating: 5, message: 'Best iPhone yet! The camera is incredible.', name_user: 'Lucas Almeida', url_image_user: 'https://source.unsplash.com/random/100x100?man,portrait' },
            { id_product: 1, rating: 4, message: 'Very fast, but I miss the lightning port.', name_user: 'Beatriz Rocha', url_image_user: 'https://source.unsplash.com/random/100x100?woman,portrait' },
            { id_product: 2, rating: 5, message: 'The zoom on this camera is basically magic.', name_user: 'Carlos Mendes', url_image_user: 'https://source.unsplash.com/random/100x100?person' },
            { id_product: 3, rating: 4, message: 'Pure Android is so good. The phone feels very responsive.', name_user: 'Ana Costa', url_image_user: 'https://source.unsplash.com/random/100x100?woman,face' },
            { id_product: 9, rating: 5, message: 'M3 Pro handles 4K video editing like a dream. Worth every penny.', name_user: 'João Silva', url_image_user: 'https://source.unsplash.com/random/100x100?man,face' },
            { id_product: 102, rating: 4, message: 'Beautiful machine for coding, but it can get a bit hot.', name_user: 'Mariana Souza', url_image_user: 'https://source.unsplash.com/random/100x100?person,face' },
            { id_product: 401, rating: 5, message: 'The slim design looks so much better in my living room.', name_user: 'Ricardo Alves', url_image_user: 'https://source.unsplash.com/random/100x100?man' },
            { id_product: 701, rating: 5, message: 'The double tap gesture is surprisingly useful!', name_user: 'Gabriela Rocha', url_image_user: 'https://source.unsplash.com/random/100x100?woman' },
            { id_product: 401, rating: 4, message: 'Fast loading times and smooth gameplay.', name_user: 'Renata Ribeiro', url_image_user: 'https://source.unsplash.com/random/100x100?woman' },
            { id_product: 9, rating: 5, message: 'Xbox Game Pass is amazing on this!', name_user: 'André Monteiro', url_image_user: 'https://source.unsplash.com/random/100x100?man' },
            { id_product: 402, rating: 4, message: 'Powerful console for 4K gaming.', name_user: 'Simone Nunes', url_image_user: 'https://source.unsplash.com/random/100x100?woman' },
            { id_product: 3, rating: 5, message: 'Perfect for portable gaming!', name_user: 'Paulo Gomes', url_image_user: 'https://source.unsplash.com/random/100x100?man' },
            { id_product: 403, rating: 4, message: 'Great for family gaming sessions.', name_user: 'Luciana Ferreira', url_image_user: 'https://source.unsplash.com/random/100x100?woman' },
            { id_product: 501, rating: 5, message: 'OLED picture quality is mind-blowing!', name_user: 'Carlos Castro', url_image_user: 'https://source.unsplash.com/random/100x100?man' },
            { id_product: 3, rating: 4, message: 'Great for movie nights at home.', name_user: 'Helena Miranda', url_image_user: 'https://source.unsplash.com/random/100x100?woman' },
            { id_product: 3, rating: 5, message: 'LG makes the best OLED TVs!', name_user: 'Mauricio Santos', url_image_user: 'https://source.unsplash.com/random/100x100?man' },
            { id_product: 9, rating: 4, message: 'Excellent for sports and gaming.', name_user: 'Elaine Costa', url_image_user: 'https://source.unsplash.com/random/100x100?woman' },
            { id_product: 101, rating: 5, message: 'M3 chip is a beast for video editing!', name_user: 'Rodrigo Santos', url_image_user: 'https://source.unsplash.com/random/100x100?man' },
            { id_product: 3, rating: 4, message: 'Excellent build quality and performance.', name_user: 'Amanda Costa', url_image_user: 'https://source.unsplash.com/random/100x100?woman' },
            { id_product: 102, rating: 5, message: 'Beautiful design and great keyboard.', name_user: 'Fabio Oliveira', url_image_user: 'https://source.unsplash.com/random/100x100?man' },
            { id_product: 102, rating: 4, message: 'Good for creative work and programming.', name_user: 'Cristina Silva', url_image_user: 'https://source.unsplash.com/random/100x100?woman' },
            { id_product: 101, rating: 5, message: 'Perfect tablet for drawing and note-taking.', name_user: 'Alexandre Pereira', url_image_user: 'https://source.unsplash.com/random/100x100?man' },
            { id_product: 3, rating: 4, message: 'Great iPad for professionals.', name_user: 'Monique Alves', url_image_user: 'https://source.unsplash.com/random/100x100?woman' },
            { id_product: 102, rating: 5, message: 'AMOLED screen is absolutely stunning!', name_user: 'Diego Souza', url_image_user: 'https://source.unsplash.com/random/100x100?man' },
            { id_product: 202, rating: 4, message: 'Good alternative to iPad for Android users.', name_user: 'Bianca Rodrigues', url_image_user: 'https://source.unsplash.com/random/100x100?woman' },
            { id_product: 9, rating: 5, message: 'Noise cancellation is incredible!', name_user: 'Vinicios Lima', url_image_user: 'https://source.unsplash.com/random/100x100?man' },
            { id_product: 301, rating: 4, message: 'Comfortable for long listening sessions.', name_user: 'Débora Martins', url_image_user: 'https://source.unsplash.com/random/100x100?woman' },
            { id_product: 9, rating: 5, message: 'Best headphones I have ever owned!', name_user: 'Roberto Barbosa', url_image_user: 'https://source.unsplash.com/random/100x100?man' },
            { id_product: 1, rating: 3, message: 'Battery life could be better for the price.', name_user: 'Carlos Mendonça', url_image_user: 'https://source.unsplash.com/random/100x100?man' },
            { id_product: 2, rating: 2, message: 'Too big and heavy for daily use.', name_user: 'Fernanda Lima', url_image_user: 'https://source.unsplash.com/random/100x100?woman' },
            { id_product: 1, rating: 3, message: 'Heats up too much during gaming.', name_user: 'Ricardo Santos', url_image_user: 'https://source.unsplash.com/random/100x100?man' },
            { id_product: 1, rating: 1, message: 'Camera quality not as advertised.', name_user: 'Patricia Oliveira', url_image_user: 'https://source.unsplash.com/random/100x100?woman' },
            { id_product: 5, rating: 2, message: 'Foldable screen developed cracks after 2 months.', name_user: 'Marcos Silva', url_image_user: 'https://source.unsplash.com/random/100x100?man' },
            { id_product: 1, rating: 3, message: 'Charging is slower than expected.', name_user: 'Juliana Costa', url_image_user: 'https://source.unsplash.com/random/100x100?woman' },
            { id_product: 7, rating: 2, message: 'Software bugs need to be fixed.', name_user: 'Roberto Almeida', url_image_user: 'https://source.unsplash.com/random/100x100?man' },
            { id_product: 8, rating: 1, message: 'External screen stopped working after update.', name_user: 'Camila Rodrigues', url_image_user: 'https://source.unsplash.com/random/100x100?woman' },
            { id_product: 9, rating: 3, message: 'Performance drops after heavy usage.', name_user: 'Thiago Pereira', url_image_user: 'https://source.unsplash.com/random/100x100?man' },
            { id_product: 9, rating: 0, message: 'Gaming features overhyped, average performance.', name_user: 'Vanessa Souza', url_image_user: 'https://source.unsplash.com/random/100x100?woman' }
        ]
    });

    console.log(`Seeding finished.`);
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });