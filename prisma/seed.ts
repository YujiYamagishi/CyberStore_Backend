import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {

    
    await prisma.itemShoppingCart.deleteMany({});
    await prisma.shoppingCart.deleteMany({});
    await prisma.review.deleteMany({});
    await prisma.storageOption.deleteMany({});
    await prisma.colorsProduct.deleteMany({});
    await prisma.product.deleteMany({});
    await prisma.smartphoneSpec.deleteMany({});
    await prisma.category.deleteMany({});
    console.log('Banco de dados limpo com sucesso.');

    
    await prisma.shoppingCart.create({
        data: {
            user_id: "1", 
            status: 'ativo',
        },
    });
    console.log('Carrinho de compras de teste criado com sucesso.');

    
    const baseURL = "https://cyber-imgs-bucket.s3.us-east-2.amazonaws.com/";


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

   
    await prisma.smartphoneSpec.createMany({
        data: [
            { id: 1, screen_size: '6.1 inch', cpu: 'A17 Pro', total_cores: '6 cores', main_camera: '48MP', front_camera: '12MP', battery: '3274mAh' },
            { id: 2, screen_size: '6.8 inch', cpu: 'Snapdragon 8 Gen 3', total_cores: '8 cores', main_camera: '200MP', front_camera: '12MP', battery: '5000mAh' },
            { id: 3, screen_size: '6.7 inch', cpu: 'Google Tensor G3', total_cores: '9 cores', main_camera: '50MP', front_camera: '10.5MP', battery: '5050mAh' },
            { id: 4, screen_size: '6.73 inch', cpu: 'Snapdragon 8 Gen 2', total_cores: '8 cores', main_camera: '50.3MP', front_camera: '32MP', battery: '4820mAh' },
            { id: 5, screen_size: '6.9 inch', cpu: 'Snapdragon 8 Gen 2 for Galaxy', total_cores: '8 cores', main_camera: '50MP', front_camera: '12MP', battery: '4400mAh' },
        ]
    });

   await prisma.product.createMany({
        data: [
            { id: 1, name: 'iPhone 15 Pro', description: 'The first iPhone forged in aerospace-grade titanium...', brand: 'Apple', price: 9299, stock: 50, url_image: `${baseURL}product_1_phones.jpg`, tag: 'bestseller', id_category: 1, id_specs_smartphone: 1 },

            { id: 2, 
                name: 'Samsung Galaxy S24 Ultra', 
                description: 'Welcome to the era of mobile AI...', 
                brand: 'Samsung', 
                price: 8999, 
                discounted_price: 8499, 
                stock: 40, 
                url_image: `${baseURL}product_2_samsung-galaxy-s24-ultra.jpg`, 
                tag: 'new_arrival', 
                id_category: 1, 
                id_specs_smartphone: 2 },

            { id: 3, 
                name: 'Google Pixel 8 Pro', 
                description: 'The Pixel 8 Pro is the most powerful, personal, and secure Pixel phone yet...', brand: 'Google', 
                price: 7999, 
                stock: 35, 
                url_image: `${baseURL}product_2_samsung-galaxy-s24-ultra.jpg`, 
                tag: 'featured_product', 
                id_category: 1, 
                id_specs_smartphone: 3 },

            { id: 4, 
                name: 'Xiaomi 14 Pro', 
                description: 'A masterpiece of mobile photography with a Leica professional optical lens...', brand: 'Xiaomi', 
                price: 5499, 
                discounted_price: 5199, 
                stock: 30, 
                url_image: `${baseURL}product_2_samsung-galaxy-s24-ultra.jpg`, 
                tag: 'new_arrival', 
                id_category: 1, 
                id_specs_smartphone: 4 },

            { id: 5, 
                name: 'Samsung Galaxy Z Fold 5', 
                description: 'A massive, immersive screen that fits in your pocket...', 
                brand: 'Samsung', 
                price: 11999, 
                stock: 20, 
                url_image: `https://cyber-imgs-bucket.s3.us-east-2.amazonaws.com/product_1_phones.jpg`, tag: 'featured_product', 
                id_category: 1, 
                id_specs_smartphone: 5 },


            { id: 6, name: 'iPhone 15', 
                description: 'Now with Dynamic Island, a 48MP main camera, and USB-C...', 
                brand: 'Apple', price: 7299, 
                discounted_price: 6999, 
                stock: 60, 
                url_image: `${baseURL}product_1_iphones.jpg`, 
                tag: 'bestseller', 
                id_category: 1, 
                id_specs_smartphone: 1 },
            { id: 7, 
                name: 'Google Pixel 8', 
                description: 'The helpful phone, engineered by Google...', 
                brand: 'Google', 
                price: 5999, 
                stock: 45, 
                url_image: `${baseURL}product_2_samsung-galaxy-s24-ultra.jpg`, 
                tag: 'bestseller', 
                id_category: 1, 
                id_specs_smartphone: 3 },
            { id: 8, 
                name: 'Motorola Razr 40 Ultra', 
                description: 'Flip the script with the iconic foldable design...', 
                brand: 'Motorola', 
                price: 6999, 
                discounted_price: 6499, 
                stock: 25, 
                url_image: `${baseURL}product_2_samsung-galaxy-s24-ultra.jpg`, 
                tag: 'new_arrival', 
                id_category: 1, 
                id_specs_smartphone: 5 },
            { id: 9, 
                name: 'Samsung Galaxy A55', 
                description: 'Awesome camera, awesome screen, awesome battery...', 
                brand: 'Samsung', 
                price: 2499, 
                stock: 100, 
                url_image: `${baseURL}product_2_samsung-galaxy-s24-ultra.jpg`, 
                tag: 'bestseller', 
                id_category: 1, 
                id_specs_smartphone: 2 },
            { id: 10, 
                name: 'Asus ROG Phone 8', 
                description: 'The ultimate gaming phone is back...', 
                brand: 'Asus', 
                price: 8999, 
                discounted_price: 8799, 
                stock: 15, 
                url_image: `${baseURL}product_2_samsung-galaxy-s24-ultra.jpg`, 
                tag: 'featured_product', 
                id_category: 1,
                id_specs_smartphone: 2 },
            { id: 11, 
                name: 'OnePlus 12', 
                description: 'A flagship powerhouse with a stunning display...', 
                brand: 'OnePlus', 
                price: 6299, 
                stock: 28, 
                url_image: `${baseURL}product_2_samsung-galaxy-s24-ultra.jpg`, 
                tag: 'new_arrival', 
                id_category: 1, 
                id_specs_smartphone: 4 },
            { id: 12, 
                name: 'iPhone 14', 
                description: 'A great upgrade with significant camera improvements...', 
                brand: 'Apple', 
                price: 5999, 
                stock: 70, 
                url_image: `${baseURL}product_2_samsung-galaxy-s24-ultra.jpg`, 
                tag: 'discount_up_to_50', 
                id_category: 1, 
                id_specs_smartphone: 1 },
            { id: 13, 
                name: 'Samsung Galaxy Z Flip 5', 
                description: 'The pocket-sized foldable with a massive Flex Window...', 
                brand: 'Samsung', 
                price: 7999, 
                discounted_price: 7499, 
                stock: 33, 
                url_image: `${baseURL}product_2_samsung-galaxy-s24-ultra.jpg`, 
                tag: 'featured_product', 
                id_category: 1, 
                id_specs_smartphone: 5 },
            { id: 14, 
                name: 'Google Pixel 7a', 
                description: 'The essential Pixel phone, bringing amazing features...', 
                brand: 'Google', 
                price: 3599, 
                stock: 80, 
                url_image: `${baseURL}product_2_samsung-galaxy-s24-ultra.jpg`, 
                tag: 'bestseller', 
                id_category: 1, 
                id_specs_smartphone: 3 },
            { id: 15, 
                name: 'Xiaomi Redmi Note 13', 
                description: 'A fantastic mid-range option with a high-resolution camera...', 
                brand: 'Xiaomi', 
                price: 1899, 
                stock: 120, 
                url_image: `${baseURL}product_2_samsung-galaxy-s24-ultra.jpg`, 
                tag: 'bestseller', 
                id_category: 1, 
                id_specs_smartphone: 4 },
            { id: 16, 
                name: 'Motorola Edge 40 Neo', 
                description: 'Slim, light, and stylish with a powerful camera system...', 
                brand: 'Motorola', 
                price: 3499, 
                discounted_price: 3299, 
                stock: 55, 
                url_image: `${baseURL}product_2_samsung-galaxy-s24-ultra.jpg`, 
                tag: 'featured_product', 
                id_category: 1, 
                id_specs_smartphone: 5 },
            { id: 17, 
                name: 'iPhone SE (3rd Gen)', 
                description: 'Serious power with the A15 Bionic chip...', 
                brand: 'Apple', 
                price: 4299, 
                stock: 90, 
                url_image: `${baseURL}product_2_samsung-galaxy-s24-ultra.jpg`, 
                tag: 'bestseller', 
                id_category: 1, 
                id_specs_smartphone: 1 },
            { id: 18, 
                name: 'Samsung Galaxy S23 FE', 
                description: 'Fan Edition is back with pro-grade features...', 
                brand: 'Samsung', 
                price: 4499, 
                discounted_price: 4199, 
                stock: 65, 
                url_image: `${baseURL}product_2_samsung-galaxy-s24-ultra.jpg`, 
                tag: 'new_arrival', 
                id_category: 1, 
                id_specs_smartphone: 2 },
            { id: 19, 
                name: 'Sony Xperia 1 V', 
                description: 'A smartphone for photographers, with next-gen sensor technology.', 
                brand: 'Sony', 
                price: 9999, 
                stock: 10, 
                url_image: `${baseURL}product_1_phones.jpg`, 
                tag: 'featured_product', 
                id_category: 1, 
                id_specs_smartphone: 2 },
            { id: 20, 
                name: 'Nothing Phone (2)', 
                description: 'A unique design with the Glyph Interface...', 
                brand: 'Nothing', 
                price: 4599, 
                stock: 22, 
                url_image: `${baseURL}product_1_phones.jpg`, 
                tag: 'new_arrival', 
                id_category: 1, 
                id_specs_smartphone: 4 },
            { id: 21, 
                name: 'Oppo Find X6 Pro', 
                description: 'Co-engineered with Hasselblad for a pro-level camera experience.', 
                brand: 'Oppo', 
                price: 7500, 
                stock: 18, 
                url_image: `${baseURL}product_1_phones.jpg`, 
                tag: 'featured_product', 
                id_category: 1, 
                id_specs_smartphone: 2 },
            { id: 22, 
                name: 'Vivo X90 Pro', 
                description: 'Exceptional low-light photography capabilities...', 
                brand: 'Vivo', 
                price: 7200, 
                stock: 21, 
                url_image: `${baseURL}product_1_phones.jpg`, 
                tag: 'new_arrival', 
                id_category: 1, 
                id_specs_smartphone: 4 },
            { id: 23, 
                name: 'Realme GT Neo 5', 
                description: 'Blazing-fast charging speeds and a powerful chipset...', 
                brand: 'Realme', 
                price: 3800, 
                discounted_price: 3500, 
                stock: 40, 
                url_image: `${baseURL}product_1_phones.jpg`, 
                tag: 'bestseller', 
                id_category: 1, 
                id_specs_smartphone: 4 },
            { id: 24, 
                name: 'Huawei P60 Pro', 
                description: 'Variable aperture camera system for stunning versatility...', 
                brand: 'Huawei', 
                price: 8100, 
                stock: 12, 
                url_image: `${baseURL}product_1_phones.jpg`, 
                tag: 'featured_product', 
                id_category: 1, 
                id_specs_smartphone: 2 },
            { id: 25, 
                name: 'Nokia G42', 
                description: 'A sustainable choice, designed for easy repairability...', 
                brand: 'Nokia', 
                price: 1500, 
                stock: 110, 
                url_image: `${baseURL}product_1_phones.jpg`, 
                tag: 'discount_up_to_50', 
                id_category: 1, 
                id_specs_smartphone: 5 },
            { id: 26, 
                name: 'Fairphone 5', 
                description: 'The most sustainable and ethical smartphone...', 
                brand: 'Fairphone', 
                price: 5500, 
                stock: 30, 
                url_image: `${baseURL}product_1_phones.jpg`, 
                tag: 'new_arrival', 
                id_category: 1, 
                id_specs_smartphone: 4 },
            { id: 27, 
                name: 'CAT S75', 
                description: 'An ultra-rugged smartphone built to survive extreme conditions.', 
                brand: 'CAT', 
                price: 4200, 
                stock: 25, 
                url_image: `${baseURL}product_1_phones.jpg`, 
                tag: 'featured_product', 
                id_category: 1, 
                id_specs_smartphone: 5 },
            { id: 28, 
                name: 'iPhone 13 Mini', 
                description: 'Pocket-sized power with the A15 Bionic chip.', 
                brand: 'Apple', 
                price: 5699, 
                discounted_price: 5199, 
                stock: 40, 
                url_image: `${baseURL}product_1_phones.jpg`, 
                tag: 'bestseller', 
                id_category: 1, 
                id_specs_smartphone: 1 },
            { id: 29, 
                name: 'Samsung Galaxy S23 FE', 
                description: 'The Fan Edition returns with a powerful camera...', 
                brand: 'Samsung', 
                price: 3999, 
                stock: 70, 
                url_image: `${baseURL}product_1_phones.jpg`, 
                tag: 'bestseller', 
                id_category: 1, 
                id_specs_smartphone: 2 },
            { id: 30, 
                name: 'Xiaomi Poco F5', 
                description: 'Incredible performance for gaming and multitasking...', 
                brand: 'Xiaomi', 
                price: 2999, 
                stock: 85, 
                url_image: `${baseURL}product_1_phones.jpg`, 
                tag: 'featured_product', 
                id_category: 1, 
                id_specs_smartphone: 4 },
            
            
            { id: 101, 
                name: 'MacBook Pro 14" M3', 
                description: 'The 14-inch MacBook Pro with M4 Pro and M4 Max chips...', 
                brand: 'Apple', 
                price: 18499, 
                stock: 15, 
                url_image: `${baseURL}product_101_macbook-pro-14-m3.jpg`, 
                tag: 'bestseller', 
                id_category: 2 },
                
            { id: 102, 
                name: 'Dell XPS 15', 
                description: 'A stunning OLED display and powerful Intel Core Ultra processors...', 
                brand: 'Dell', 
                price: 14999, 
                discounted_price: 14499, 
                stock: 20, 
                url_image: `${baseURL}product_102_dell-xps-15.jpg`, 
                tag: 'featured_product', 
                id_category: 2 },

            { id: 103, 
                name: 'HP Spectre x360 14', 
                description: 'A versatile 2-in-1 laptop with a gorgeous touch display...', 
                brand: 'HP', 
                price: 11999, 
                stock: 25, 
                url_image: `${baseURL}product_103_hp-spectre-x360-14.jpg`, 
                tag: 'new_arrival', 
                id_category: 2 },

            { id: 104, 
                name: 'Lenovo Yoga 9i', 
                description: 'Innovative design with a rotating soundbar...', 
                brand: 'Lenovo', 
                price: 10999, 
                stock: 30, 
                url_image: `${baseURL}product_104_lenovo-yoga-9i.jpg`, 
                tag: 'bestseller', 
                id_category: 2 },

            { id: 105, 
                name: 'Asus Zenbook Duo', 
                description: 'The future of laptops with two full-sized OLED touchscreens...', 
                brand: 'Asus', 
                price: 15999, 
                discounted_price: 15499, 
                stock: 18, 
                url_image: `${baseURL}product_105_asus-zenbook-duo.jpg`, 
                tag: 'featured_product', 
                id_category: 2 },

            { id: 106, 
                name: 'Microsoft Surface Laptop 5', 
                description: 'Blazing-fast performance in a sleek, ultra-portable design...', 
                brand: 'Microsoft', 
                price: 9999, stock: 40, 
                url_image: `${baseURL}product_106_microsoft-surface-laptop-5.jpg`, 
                tag: 'new_arrival', 
                id_category: 2 },

            { id: 107, 
                name: 'Razer Blade 16', 
                description: 'The most powerful gaming laptop with a stunning mini-LED display.', 
                brand: 'Razer', 
                price: 25999, 
                stock: 10, 
                url_image: `${baseURL}product_107_razer-blade-16.png`, 
                tag: 'bestseller', 
                id_category: 2 },

            { id: 108, 
                name: 'Samsung Galaxy Book3 Ultra', 
                description: 'Seamless connectivity with your Galaxy devices...', 
                brand: 'Samsung', 
                price: 16999, 
                stock: 22, 
                url_image: `${baseURL}product_108_samsung-galaxy-book3-ultra.jpg`, 
                tag: 'featured_product', 
                id_category: 2 },

            { id: 109, 
                name: 'LG Gram 17', 
                description: 'Incredibly lightweight for a 17-inch laptop...', 
                brand: 'LG', 
                price: 11500, 
                stock: 28, 
                url_image: `${baseURL}product_107_razer-blade-16.png`, 
                tag: 'new_arrival', 
                id_category: 2 },

            { id: 110, 
                name: 'Acer Swift Go 14', 
                description: 'An excellent value laptop with a bright OLED display...', 
                brand: 'Acer', 
                price: 6500, 
                stock: 50, 
                url_image: `${baseURL}product_107_razer-blade-16.png`, 
                tag: 'discount_up_to_50', 
                id_category: 2 },

           
            { id: 201, 
                name: 'iPad Pro 11" M4', 
                description: 'The ultimate iPad experience, now with the outrageous power of the M4 chip...', brand: 'Apple', 
                price: 12299, 
                stock: 30, 
                url_image: `${baseURL}product_201_ipad-pro-11-m4.jpg`, 
                tag: 'bestseller', 
                id_category: 3 },

            { id: 202, 
                name: 'Samsung Galaxy Tab S9 Ultra', 
                description: 'A massive 14.6-inch Dynamic AMOLED 2X display...', 
                brand: 'Samsung', 
                price: 9999, 
                discounted_price: 9499, 
                stock: 25,
                url_image: `${baseURL}product_202_samsung-galaxy-tab-s9-ultra.jpg`, 
                tag: 'new_arrival', 
                id_category: 3 },
                
            { id: 203, 
                name: 'Microsoft Surface Pro 9', 
                description: 'The versatility of a tablet and the performance of a laptop.', 
                brand: 'Microsoft', 
                price: 8999, 
                stock: 35, 
                url_image: `${baseURL}product_203_microsoft-surface-pro-9.webp`, 
                tag: 'featured_product', 
                id_category: 3 },
                
            { 
                id: 204,
                name: 'iPad Air M2',
                description: 'Powerful, colorful, and versatile, now supercharged by the M2 chip.',
                brand: 'Apple',
                price: 6999,
                stock: 50,
                url_image: `${baseURL}product_201_ipad-pro-11-m4.jpg`,
                tag: 'bestseller',
                id_category: 3 
                },

                { 
                id: 205,
                name: 'Lenovo Tab P12',
                description: 'A large 12.7-inch 3K display for cinematic entertainment...',
                brand: 'Lenovo',
                price: 3499,
                discounted_price: 3199,
                stock: 45,
                url_image: `${baseURL}product_201_ipad-pro-11-m4.jpg`,
                tag: 'new_arrival',
                id_category: 3 
                },

                { 
                id: 206,
                name: 'Xiaomi Pad 6',
                description: 'A flagship-level tablet for work and entertainment...',
                brand: 'Xiaomi',
                price: 2999,
                stock: 60,
                url_image: `${baseURL}product_201_ipad-pro-11-m4.jpg`,
                tag: 'featured_product',
                id_category: 3 
                },

                { 
                id: 207,
                name: 'Amazon Fire Max 11',
                description: 'Amazon’s biggest and most powerful tablet...',
                brand: 'Amazon',
                price: 1899,
                stock: 80,
                url_image: `${baseURL}product_201_ipad-pro-11-m4.jpg`,
                tag: 'bestseller',
                id_category: 3 
                },

                { 
                id: 208,
                name: 'Google Pixel Tablet',
                description: 'The only tablet with a Charging Speaker Dock...',
                brand: 'Google',
                price: 4999,
                stock: 28,
                url_image: `${baseURL}product_201_ipad-pro-11-m4.jpg`,
                tag: 'new_arrival',
                id_category: 3 
                },

                { 
                id: 209,
                name: 'OnePlus Pad',
                description: 'Features the world’s first 7:5 ratio display...',
                brand: 'OnePlus',
                price: 4299,
                discounted_price: 3999,
                stock: 33,
                url_image: `${baseURL}product_201_ipad-pro-11-m4.jpg`,
                tag: 'featured_product',
                id_category: 3 
                },

                { 
                id: 210,
                name: 'Samsung Galaxy Tab A9+',
                description: 'A great value tablet for family entertainment...',
                brand: 'Samsung',
                price: 1499,
                stock: 100,
                url_image: `${baseURL}product_201_ipad-pro-11-m4.jpg`,
                tag: 'discount_up_to_50',
                id_category: 3 
                },


            
            { 
                id: 301,
                name: 'AirPods Pro (2nd gen)',
                description: 'Richer audio quality, next-level Active Noise Cancellation...',
                brand: 'Apple',
                price: 2599,
                stock: 100,
                url_image: `${baseURL}product_301_airpods-pro-2nd-gen.jpg`,
                tag: 'bestseller',
                id_category: 4 
                },

                { 
                id: 302,
                name: 'Sony WH-1000XM5',
                description: 'Industry-leading noise canceling with two processors...',
                brand: 'Sony',
                price: 2399,
                discounted_price: 2199,
                stock: 50,
                url_image: `${baseURL}product_303_bose-quietcomfort-ultra-headphones.jpg`,
                tag: 'featured_product',
                id_category: 4 
                },

                { 
                id: 303,
                name: 'Bose QuietComfort Ultra Headphones',
                description: 'World-class noise cancellation and groundbreaking Bose Immersive Audio.',
                brand: 'Bose',
                price: 2999,
                stock: 45,
                url_image: `${baseURL}product_303_bose-quietcomfort-ultra-headphones.jpg`,
                tag: 'new_arrival',
                id_category: 4 
                },

                { 
                id: 304,
                name: 'Sennheiser Momentum 4',
                description: 'Enjoy exceptional sound with this audiophile-inspired headphone...',
                brand: 'Sennheiser',
                price: 2199,
                stock: 55,
                url_image: `${baseURL}product_303_bose-quietcomfort-ultra-headphones.jpg`,
                tag: 'featured_product',
                id_category: 4 
                },

                { 
                id: 305,
                name: 'AirPods Max',
                description: 'A perfect balance of exhilarating high-fidelity audio...',
                brand: 'Apple',
                price: 5999,
                discounted_price: 5499,
                stock: 25,
                url_image: `${baseURL}product_303_bose-quietcomfort-ultra-headphones.jpg`,
                tag: 'bestseller',
                id_category: 4 
                },

                { 
                id: 306,
                name: 'JBL Tour One M2',
                description: 'True Adaptive Noise Cancelling technology...',
                brand: 'JBL',
                price: 1499,
                stock: 70,
                url_image: `${baseURL}product_303_bose-quietcomfort-ultra-headphones.jpg`,
                tag: 'new_arrival',
                id_category: 4 
                },

                { 
                id: 307,
                name: 'Beats Studio Pro',
                description: 'Fully adaptive Active Noise Cancelling and lossless audio...',
                brand: 'Beats',
                price: 2299,
                stock: 65,
                url_image: `${baseURL}product_303_bose-quietcomfort-ultra-headphones.jpg`,
                tag: 'featured_product',
                id_category: 4 
                },

                { 
                id: 308,
                name: 'Anker Soundcore Space Q45',
                description: 'Upgraded noise cancelling and ultra-long playtime...',
                brand: 'Anker',
                price: 999,
                stock: 90,
                url_image: `${baseURL}product_303_bose-quietcomfort-ultra-headphones.jpg`,
                tag: 'bestseller',
                id_category: 4 
                },

                { 
                id: 309,
                name: 'Audio-Technica ATH-M50x',
                description: 'Critically acclaimed studio monitor headphones...',
                brand: 'Audio-Technica',
                price: 899,
                stock: 85,
                url_image: `${baseURL}product_303_bose-quietcomfort-ultra-headphones.jpg`,
                tag: 'featured_product',
                id_category: 4 
                },

                { 
                id: 310,
                name: 'Edifier W820NB',
                description: 'Hybrid Active Noise Cancelling headphones with Hi-Res Audio certification.',
                brand: 'Edifier',
                price: 499,
                stock: 120,
                url_image: `${baseURL}product_303_bose-quietcomfort-ultra-headphones.jpg`,
                tag: 'discount_up_to_50',
                id_category: 4 
                },



             { 
                id: 401,
                name: 'PlayStation 5 Slim Console',
                description: 'Experience lightning-fast loading with an ultra-high-speed SSD...',
                brand: 'Sony',
                price: 4799,
                stock: 40,
                url_image: `${baseURL}product_402_xbox-series-x-console.webp`,
                tag: 'bestseller',
                id_category: 5 
                },

                { 
                id: 402,
                name: 'Xbox Series X Console',
                description: 'The fastest, most powerful Xbox ever...',
                brand: 'Microsoft',
                price: 4899,
                stock: 35,
                url_image: `${baseURL}product_402_xbox-series-x-console.webp`,
                tag: 'featured_product',
                id_category: 5 
                },

                { 
                id: 403,
                name: 'Nintendo Switch OLED Model',
                description: 'Play at home on the TV or on-the-go with a vibrant 7-inch OLED screen...',
                brand: 'Nintendo',
                price: 2499,
                discounted_price: 2399,
                stock: 60,
                url_image: `${baseURL}product_402_xbox-series-x-console.webp`,
                tag: 'new_arrival',
                id_category: 5 
                },

                { 
                id: 404,
                name: 'Logitech G Pro X Superlight Mouse',
                description: 'An ultra-lightweight wireless gaming mouse for professional gamers.',
                brand: 'Logitech',
                price: 899,
                stock: 100,
                url_image: `${baseURL}product_402_xbox-series-x-console.webp`,
                tag: 'bestseller',
                id_category: 5 
                },

                { 
                id: 405,
                name: 'Razer BlackWidow V4 Pro Keyboard',
                description: 'A mechanical gaming keyboard with Razer Chroma RGB...',
                brand: 'Razer',
                price: 1499,
                discounted_price: 1399,
                stock: 70,
                url_image: `${baseURL}product_402_xbox-series-x-console.webp`,
                tag: 'featured_product',
                id_category: 5 
                },

                { 
                id: 406,
                name: 'SteelSeries Arctis Nova Pro Headset',
                description: 'Achieve almighty audio levels with the Nova Pro Acoustic System...',
                brand: 'SteelSeries',
                price: 2199,
                stock: 55,
                url_image: `${baseURL}product_402_xbox-series-x-console.webp`,
                tag: 'new_arrival',
                id_category: 5 
                },

                { 
                id: 407,
                name: 'DualSense Edge Wireless Controller',
                description: 'Get an edge in gameplay with this high-performance controller...',
                brand: 'Sony',
                price: 1499,
                stock: 65,
                url_image: `${baseURL}product_402_xbox-series-x-console.webp`,
                tag: 'bestseller',
                id_category: 5 
                },

                { 
                id: 408,
                name: 'Xbox Elite Series 2 Controller',
                description: 'Play like a pro with the world’s most advanced controller...',
                brand: 'Microsoft',
                price: 1299,
                stock: 75,
                url_image: `${baseURL}product_402_xbox-series-x-console.webp`,
                tag: 'featured_product',
                id_category: 5 
                },

                { 
                id: 409,
                name: 'Elgato Stream Deck MK.2',
                description: '15 customizable LCD keys to control your apps and tools.',
                brand: 'Elgato',
                price: 999,
                stock: 80,
                url_image: `${baseURL}product_402_xbox-series-x-console.webp`,
                tag: 'new_arrival',
                id_category: 5 
                },

                { 
                id: 410,
                name: 'Steam Deck OLED',
                description: 'A powerful, portable PC gaming device with a vibrant OLED screen.',
                brand: 'Valve',
                price: 4499,
                stock: 30,
                url_image: `${baseURL}product_402_xbox-series-x-console.webp`,
                tag: 'discount_up_to_50',
                id_category: 5 
                },


         { 
                id: 501,
                name: 'Samsung S90C OLED 65"',
                description: 'Experience incredible contrast and vibrant colors...',
                brand: 'Samsung',
                price: 12999,
                discounted_price: 11999,
                stock: 15,
                url_image: `${baseURL}product_501_samsung-s90c-oled-65.jpg`,
                tag: 'new_arrival',
                id_category: 6 
                },

                { 
                id: 502,
                name: 'LG C3 OLED evo 65"',
                description: 'The most popular OLED TV, now even brighter...',
                brand: 'LG',
                price: 13499,
                stock: 12,
                url_image: `${baseURL}product_502_lg-c3-oled-evo-65.jpg`,
                tag: 'featured_product',
                id_category: 6 
                },

                { 
                id: 503,
                name: 'Sony Bravia XR A95L Q-OLED',
                description: 'Cognitive Processor XR delivers unprecedented contrast...',
                brand: 'Sony',
                price: 18999,
                stock: 10,
                url_image: `${baseURL}product_503_sony-bravia-xr-a95l-q-oled.jpg`,
                tag: 'bestseller',
                id_category: 6 
                },

                { 
                id: 504,
                name: 'TCL QM8 Q-Class 4K Mini-LED',
                description: 'A flagship Mini-LED TV with stunning brightness...',
                brand: 'TCL',
                price: 8999,
                stock: 25,
                url_image: `${baseURL}product_504_tcl-qm8-q-class-4k-mini-led.jpg`,
                tag: 'featured_product',
                id_category: 6 
                },

                { 
                id: 505,
                name: 'Hisense U8K Series Mini-LED',
                description: 'High-end performance at a mid-range price...',
                brand: 'Hisense',
                price: 7999,
                discounted_price: 7499,
                stock: 30,
                url_image: `${baseURL}product_505_hisense-u8k-series-mini-led.jpg`,
                tag: 'new_arrival',
                id_category: 6 
                },

                { 
                id: 506,
                name: 'Philips The One 55" Ambilight',
                description: 'The one with magical Ambilight...',
                brand: 'Philips',
                price: 4999,
                stock: 40,
                url_image: `${baseURL}product_507_samsung-the-frame-2024.jpg`,
                tag: 'bestseller',
                id_category: 6 
                },

                { 
                id: 507,
                name: 'Samsung The Frame 2024',
                description: 'A TV when it’s on, art when it’s off...',
                brand: 'Samsung',
                price: 9999,
                stock: 18,
                url_image: `${baseURL}product_507_samsung-the-frame-2024.jpg`,
                tag: 'featured_product',
                id_category: 6 
                },

                { 
                id: 508,
                name: 'Panasonic MZ2000 OLED',
                description: 'The professional’s choice for color accuracy...',
                brand: 'Panasonic',
                price: 19999,
                stock: 8,
                url_image: `${baseURL}product_507_samsung-the-frame-2024.jpg`,
                tag: 'new_arrival',
                id_category: 6 
                },

                { 
                id: 509,
                name: 'Vizio Quantum Pro QLED',
                description: 'A great value QLED TV with excellent gaming features.',
                brand: 'Vizio',
                price: 6500,
                stock: 33,
                url_image: `${baseURL}product_507_samsung-the-frame-2024.jpg`,
                tag: 'bestseller',
                id_category: 6 
                },

                { 
                id: 510,
                name: 'Xiaomi TV Max 86"',
                description: 'A massive 86-inch screen for a true home theater experience.',
                brand: 'Xiaomi',
                price: 11999,
                stock: 14,
                url_image: `${baseURL}product_507_samsung-the-frame-2024.jpg`,
                tag: 'discount_up_to_50',
                id_category: 6 
                },

            { 
                id: 601,
                name: 'JBL Boombox 3 Speaker',
                description: 'Massive sound and deepest bass for 24 hours of play time...',
                brand: 'JBL',
                price: 2899,
                stock: 40,
                url_image: `${baseURL}product_601_jbl-boombox-3-speaker.jpg`,
                tag: 'bestseller',
                id_category: 7 
                },

                { 
                id: 602,
                name: 'Sonos Era 300 Speaker',
                description: 'Feel sound all around you with this spatial audio speaker...',
                brand: 'Sonos',
                price: 3599,
                discounted_price: 3499,
                stock: 25,
                url_image: `${baseURL}product_602_sonos-era-300-speaker.jpg`,
                tag: 'new_arrival',
                id_category: 7 
                },

                { 
                id: 603,
                name: 'Bose SoundLink Revolve+',
                description: 'A portable Bluetooth speaker with deep, loud, and immersive 360° sound.',
                brand: 'Bose',
                price: 2199,
                stock: 35,
                url_image: `${baseURL}product_603_bose-soundlink-revolve.jpg`,
                tag: 'featured_product',
                id_category: 7 
                },

                { 
                id: 604,
                name: 'Marshall Stanmore III',
                description: 'An iconic design with even wider stereo sound than its predecessor.',
                brand: 'Marshall',
                price: 2999,
                stock: 30,
                url_image: `${baseURL}product_604_marshall-stanmore-iii.jpg`,
                tag: 'bestseller',
                id_category: 7 
                },

                { 
                id: 605,
                name: 'Anker Soundcore Motion+',
                description: 'Hi-Res Audio with intense bass, powered by an ultra-wide frequency range.',
                brand: 'Anker',
                price: 799,
                stock: 80,
                url_image: `${baseURL}product_605_anker-soundcore-motion.jpg`,
                tag: 'featured_product',
                id_category: 7 
                },

                { 
                id: 606,
                name: 'Sonos Arc Soundbar',
                description: 'The premium smart soundbar for TV, movies, music, gaming, and more.',
                brand: 'Sonos',
                price: 7999,
                discounted_price: 7799,
                stock: 20,
                url_image: `${baseURL}product_606_sonos-arc-soundbar.jpg`,
                tag: 'new_arrival',
                id_category: 7 
                },

                { 
                id: 607,
                name: 'Samsung HW-Q990C Soundbar',
                description: 'The ultimate sound experience with Wireless Dolby Atmos and 11.1.4ch sound.',
                brand: 'Samsung',
                price: 8999,
                stock: 15,
                url_image: `${baseURL}product_609_bowers--wilkins-zeppelin.jpg`,
                tag: 'bestseller',
                id_category: 7 
                },

                { 
                id: 608,
                name: 'Ultimate Ears Wonderboom 3',
                description: 'An ultra-portable Bluetooth speaker with a surprisingly big sound.',
                brand: 'Ultimate Ears',
                price: 699,
                stock: 90,
                url_image: `${baseURL}product_609_bowers--wilkins-zeppelin.jpg`,
                tag: 'featured_product',
                id_category: 7 
                },

                { 
                id: 609,
                name: 'Bowers & Wilkins Zeppelin',
                description: 'A stunningly designed wireless smart speaker with high-resolution sound.',
                brand: 'B&W',
                price: 5999,
                stock: 12,
                url_image: `${baseURL}product_609_bowers--wilkins-zeppelin.jpg`,
                tag: 'new_arrival',
                id_category: 7 
                },

                { 
                id: 610,
                name: 'Edifier R1280T Bookshelf Speakers',
                description: 'Active bookshelf speakers perfect for any living space.',
                brand: 'Edifier',
                price: 750,
                stock: 70,
                url_image: `${baseURL}product_609_bowers--wilkins-zeppelin.jpg`,
                tag: 'discount_up_to_50',
                id_category: 7 
                },

            
            { 
                id: 701,
                name: 'Apple Watch Ultra 2',
                description: 'The most rugged and capable Apple Watch ever, designed for exploration, adventure, and endurance...',
                brand: 'Apple',
                price: 9699,
                stock: 30,
                url_image: `${baseURL}product_701_apple-watch-ultra-2.png`,
                tag: 'bestseller',
                id_category: 8
                },

                { 
                id: 702,
                name: 'Samsung Galaxy Watch 6 Classic',
                description: 'The iconic rotating bezel is back, with a larger display and advanced wellness tracking...',
                brand: 'Samsung',
                price: 3199,
                discounted_price: 2999,
                stock: 40,
                url_image: `${baseURL}product_702_samsung-galaxy-watch-6-classic.jpg`,
                tag: 'featured_product',
                id_category: 8
                },

                { 
                id: 703,
                name: 'Garmin Fenix 7 Pro',
                description: 'The ultimate multisport GPS watch with solar charging and built-in flashlight.',
                brand: 'Garmin',
                price: 7999,
                stock: 25,
                url_image: `${baseURL}product_702_samsung-galaxy-watch-6-classic.jpg`,
                tag: 'new_arrival',
                id_category: 8
                },

                { 
                id: 704,
                name: 'Apple Watch Series 9',
                description: 'Your essential companion for a healthy life is now even more powerful.',
                brand: 'Apple',
                price: 4999,
                stock: 80,
                url_image: `${baseURL}product_702_samsung-galaxy-watch-6-classic.jpg`,
                tag: 'bestseller',
                id_category: 8
                },

                { 
                id: 705,
                name: 'Google Pixel Watch 2',
                description: 'The best of Google and Fitbit, with a new sensor for more accurate health tracking.',
                brand: 'Google',
                price: 2999,
                stock: 50,
                url_image: `${baseURL}product_702_samsung-galaxy-watch-6-classic.jpg`,
                tag: 'featured_product',
                id_category: 8
                },

                { 
                id: 706,
                name: 'Fitbit Charge 6',
                description: 'Get motivated to move more with Google essentials and advanced health sensors.',
                brand: 'Fitbit',
                price: 1299,
                stock: 90,
                url_image: `${baseURL}product_702_samsung-galaxy-watch-6-classic.jpg`,
                tag: 'new_arrival',
                id_category: 8
                },

                { 
                id: 707,
                name: 'Amazfit T-Rex 2',
                description: 'A rugged outdoor GPS smartwatch with military-grade toughness.',
                brand: 'Amazfit',
                price: 1599,
                discounted_price: 1399,
                stock: 60,
                url_image: `${baseURL}product_707_amazfit-t-rex-2.jpg`,
                tag: 'bestseller',
                id_category: 8
                },

                { 
                id: 708,
                name: 'Huawei Watch GT 4',
                description: 'An elegant design with comprehensive health and fitness tracking.',
                brand: 'Huawei',
                price: 1899,
                stock: 45,
                url_image: `${baseURL}product_707_amazfit-t-rex-2.jpg`,
                tag: 'featured_product',
                id_category: 8
                },

                { 
                id: 709,
                name: 'Xiaomi Smart Band 8',
                description: 'A stylish fitness tracker with a versatile design and long battery life.',
                brand: 'Xiaomi',
                price: 399,
                stock: 150,
                url_image: `${baseURL}product_707_amazfit-t-rex-2.jpg`,
                tag: 'new_arrival',
                id_category: 8
                },

                { 
                id: 710,
                name: 'Garmin Forerunner 265',
                description: 'A brilliant AMOLED display and training metrics to help you push your limits.',
                brand: 'Garmin',
                price: 3999,
                stock: 35,
                url_image: `${baseURL}product_707_amazfit-t-rex-2.jpg`,
                tag: 'discount_up_to_50',
                id_category: 8
                },
        ]
    });
    
     await prisma.colorsProduct.createMany({
        data: [

            { id_product: 1, hex_code: '#2E4053', name: 'Titanium Blue' },
            { id_product: 1, hex_code: '#F2F3F4', name: 'Titanium White' },
            { id_product: 1, hex_code: '#FADBD8', name: 'Pink' },
            { id_product: 1, hex_code: '#D4EFDF', name: 'Green' },
            { id_product: 6, hex_code: '#FADBD8', name: 'Pink' },
            { id_product: 6, hex_code: '#D4EFDF', name: 'Green' },

            { id_product: 2, hex_code: '#17202A', name: 'Phantom Black' },
            { id_product: 2, hex_code: '#D6EAF8', name: 'Sky Blue' },
            { id_product: 5, hex_code: '#FCF3CF', name: 'Cream' },
            { id_product: 9, hex_code: '#85C1E9', name: 'Awesome Blue' },
            { id_product: 9, hex_code: '#17202A', name: 'Phantom Black' },
            { id_product: 9, hex_code: '#D6EAF8', name: 'Sky Blue' },
            { id_product: 9, hex_code: '#FCF3CF', name: 'Cream' },

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

            { id_product: 1, size: '256GB' },
            { id_product: 1, size: '512GB' },
            { id_product: 1, size: '1TB' },
            { id_product: 6, size: '128GB' },
            { id_product: 6, size: '256GB' },

            { id_product: 2, size: '256GB' },
            { id_product: 2, size: '512GB' },
            { id_product: 2, size: '1TB' },
            { id_product: 5, size: '256GB' },
            { id_product: 9, size: '1TB' },

            { id_product: 101, size: '512GB' },
            { id_product: 101, size: '1TB' },
            { id_product: 102, size: '512GB' },

            { id_product: 3, size: '128GB' },
            { id_product: 3, size: '256GB' },
        ]
    });

    const userImagesBaseURL = "https://cyber-imgs-bucket.s3.us-east-2.amazonaws.com/";

await prisma.review.createMany({
    data: [
       
      {
            id_product: 1,
            rating: 5,
            message: 'Best iPhone yet! The camera is incredible.',
            name_user: 'Lucas Almeida',
            url_image_user: `${userImagesBaseURL}user_0_lucas-almeida.jpg`
            },
            {
            id_product: 1,
            rating: 4,
            message: 'Very fast, but I miss the lightning port.',
            name_user: 'Beatriz Rocha',
            url_image_user: `${userImagesBaseURL}user_1_beatriz-rocha.jpeg`
            },
            {
            id_product: 2,
            rating: 5,
            message: 'The zoom on this camera is basically magic.',
            name_user: 'Carlos Mendes',
            url_image_user: `${userImagesBaseURL}user_2_carlos-mendes.jpg`
            },
            {
            id_product: 3,
            rating: 4,
            message: 'Pure Android is so good. The phone feels very responsive.',
            name_user: 'Ana Costa',
            url_image_user: `${userImagesBaseURL}user_3_ana-costa.jpg`
            },
            {
            id_product: 701,
            rating: 5,
            message: 'The double tap gesture is surprisingly useful!',
            name_user: 'Gabriela Rocha',
            url_image_user: `${userImagesBaseURL}user_7_gabriela-rocha.jpg`
            },
            {
            id_product: 101,
            rating: 5,
            message: 'Yep. The real deal. I have only had the Apple MacBook Pro 14-inch...',
            name_user: 'Rodrigo Santos',
            url_image_user: `${userImagesBaseURL}user_17_rodrigo-santos.jpg`
            },
            {
            id_product: 101,
            rating: 5,
            message: 'I recently upgraded to the MacBook Pro with the M4 Pro chip...',
            name_user: 'Alexandre Pereira',
            url_image_user: `${userImagesBaseURL}user_21_alexandre-pereira.jpg`
            },
            {
            id_product: 9,
            rating: 5,
            message: 'Noise cancellation is incredible!',
            name_user: 'Vinicios Lima',
            url_image_user: `${userImagesBaseURL}user_25_vinicios-lima.jpg`
            },
            {
            id_product: 1,
            rating: 3,
            message: 'Battery life could be better for the price.',
            name_user: 'Carlos Mendonça',
            url_image_user: `${userImagesBaseURL}user_28_carlos-mendona.jpg`
            },
            {
            id_product: 1,
            rating: 3,
            message: 'Heats up too much during gaming.',
            name_user: 'Ricardo Santos',
            url_image_user: `${userImagesBaseURL}user_30_ricardo-santos.jpg`
            },
            {
            id_product: 5,
            rating: 2,
            message: 'Foldable screen developed cracks after 2 months.',
            name_user: 'Marcos Silva',
            url_image_user: `${userImagesBaseURL}user_32_marcos-silva.jpg`
            },
            {
            id_product: 7,
            rating: 2,
            message: 'Software bugs need to be fixed.',
            name_user: 'Roberto Almeida',
            url_image_user: `${userImagesBaseURL}user_34_roberto-almeida.jpg`
            },


       
        {
            id_product: 9,
            rating: 5,
            message: 'M3 Pro handles 4K video editing like a dream. Worth every penny.',
            name_user: 'João Silva',
            url_image_user: `${userImagesBaseURL}/joao-silva.jpg`
            },
            {
            id_product: 102,
            rating: 4,
            message: 'Beautiful machine for coding, but it can get a bit hot.',
            name_user: 'Mariana Souza',
            url_image_user: `${userImagesBaseURL}/mariana-souza.jpg`
            },
            {
            id_product: 401,
            rating: 5,
            message: 'The slim design looks so much better in my living room.',
            name_user: 'Ricardo Alves',
            url_image_user: `${userImagesBaseURL}/ricardo-alves.jpg`
            },
            {
            id_product: 401,
            rating: 4,
            message: 'Fast loading times and smooth gameplay.',
            name_user: 'Renata Ribeiro',
            url_image_user: `${userImagesBaseURL}/renata-ribeiro.jpg`
            },
            {
            id_product: 9,
            rating: 5,
            message: 'Xbox Game Pass is amazing on this!',
            name_user: 'André Monteiro',
            url_image_user: `${userImagesBaseURL}/andre-monteiro.jpg`
            },
            {
            id_product: 402,
            rating: 4,
            message: 'Powerful console for 4K gaming.',
            name_user: 'Simone Nunes',
            url_image_user: `${userImagesBaseURL}/simone-nunes.jpg`
            },
            {
            id_product: 3,
            rating: 5,
            message: 'Perfect for portable gaming!',
            name_user: 'Paulo Gomes',
            url_image_user: `${userImagesBaseURL}/paulo-gomes.jpg`
            },
            {
            id_product: 403,
            rating: 4,
            message: 'Great for family gaming sessions.',
            name_user: 'Luciana Ferreira',
            url_image_user: `${userImagesBaseURL}/luciana-ferreira.jpg`
            },
            {
            id_product: 501,
            rating: 5,
            message: 'OLED picture quality is mind-blowing!',
            name_user: 'Carlos Castro',
            url_image_user: `${userImagesBaseURL}/carlos-castro.jpg`
            },
            {
            id_product: 3,
            rating: 4,
            message: 'Great for movie nights at home.',
            name_user: 'Helena Miranda',
            url_image_user: `${userImagesBaseURL}/helena-miranda.jpg`
            },
            {
            id_product: 3,
            rating: 5,
            message: 'LG makes the best OLED TVs!',
            name_user: 'Mauricio Santos',
            url_image_user: `${userImagesBaseURL}/mauricio-santos.jpg`
            },
            {
            id_product: 9,
            rating: 4,
            message: 'Excellent for sports and gaming.',
            name_user: 'Elaine Costa',
            url_image_user: `${userImagesBaseURL}/elaine-costa.jpg`
            },
            {
            id_product: 3,
            rating: 4,
            message: 'Excellent build quality and performance.',
            name_user: 'Amanda Costa',
            url_image_user: `${userImagesBaseURL}/amanda-costa.jpg`
            },
            {
            id_product: 102,
            rating: 5,
            message: 'Beautiful design and great keyboard.',
            name_user: 'Fabio Oliveira',
            url_image_user: `${userImagesBaseURL}/fabio-oliveira.jpg`
            },
            {
            id_product: 102,
            rating: 4,
            message: 'Good for creative work and programming.',
            name_user: 'Cristina Silva',
            url_image_user: `${userImagesBaseURL}/cristina-silva.jpg`
            },
            {
            id_product: 3,
            rating: 4,
            message: 'Great iPad for professionals.',
            name_user: 'Monique Alves',
            url_image_user: `${userImagesBaseURL}/monique-alves.jpg`
            },
            {
            id_product: 102,
            rating: 5,
            message: 'AMOLED screen is absolutely stunning!',
            name_user: 'Diego Souza',
            url_image_user: `${userImagesBaseURL}/diego-souza.jpg`
            },
            {
            id_product: 202,
            rating: 4,
            message: 'Good alternative to iPad for Android users.',
            name_user: 'Bianca Rodrigues',
            url_image_user: `${userImagesBaseURL}/bianca-rodrigues.jpg`
            },
            {
            id_product: 301,
            rating: 4,
            message: 'Comfortable for long listening sessions.',
            name_user: 'Débora Martins',
            url_image_user: `${userImagesBaseURL}/debora-martins.jpg`
            },
            {
            id_product: 9,
            rating: 5,
            message: 'Best headphones I have ever owned!',
            name_user: 'Roberto Barbosa',
            url_image_user: `${userImagesBaseURL}/roberto-barbosa.jpg`
            },
            {
            id_product: 2,
            rating: 2,
            message: 'Too big and heavy for daily use.',
            name_user: 'Fernanda Lima',
            url_image_user: `${userImagesBaseURL}/fernanda-lima.jpg`
            },
            {
            id_product: 1,
            rating: 1,
            message: 'Camera quality not as advertised.',
            name_user: 'Patricia Oliveira',
            url_image_user: `${userImagesBaseURL}/patricia-oliveira.jpg`
            },
            {
            id_product: 1,
            rating: 3,
            message: 'Charging is slower than expected.',
            name_user: 'Juliana Costa',
            url_image_user: `${userImagesBaseURL}/juliana-costa.jpg`
            },
            {
            id_product: 8,
            rating: 1,
            message: 'External screen stopped working after update.',
            name_user: 'Camila Rodrigues',
            url_image_user: `${userImagesBaseURL}/camila-rodrigues.jpg`
            },
            {
            id_product: 9,
            rating: 3,
            message: 'Performance drops after heavy usage.',
            name_user: 'Thiago Pereira',
            url_image_user: `${userImagesBaseURL}/thiago-pereira.jpg`
            },
            {
            id_product: 9,
            rating: 0,
            message: 'Gaming features overhyped, average performance.',
            name_user: 'Vanessa Souza',
            url_image_user: `${userImagesBaseURL}/vanessa-souza.jpg`
            },

    ]
});
    
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });