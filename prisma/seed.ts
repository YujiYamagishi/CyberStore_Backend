import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    console.log(`Start seeding ...`);

    await prisma.review.deleteMany({});
    await prisma.storageOption.deleteMany({});
    await prisma.colorsProduct.deleteMany({});
    await prisma.product.deleteMany({});
    await prisma.smartphoneSpec.deleteMany({});
    await prisma.category.deleteMany({});

    console.log('Old data cleared.');

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
            { id: 1, name: 'iPhone 15 Pro', description: 'The first iPhone forged in aerospace-grade titanium. Features the game-changing A17 Pro chip, a customizable Action button, and the most powerful iPhone camera system ever.', brand: 'Apple', price: 9299, stock: 50, url_image: 'https://s3-eu-west-1.amazonaws.com/images.linnlive.com/ebb85ab2ff7175b17de881baec9aa1c0/519b5581-4068-41fd-a3a1-bc4d38c189a9.jpg', tag: 'bestseller', id_category: 1, id_specs_smartphone: 1 },
            { id: 2, name: 'Samsung Galaxy S24 Ultra', description: 'Welcome to the era of mobile AI. With Galaxy S24 Ultra, you can unleash whole new levels of creativity, productivity and possibility, starting with the most important device in your life.', brand: 'Samsung', price: 8999, discounted_price: 8499, stock: 40, url_image: 'https://m.media-amazon.com/images/I/61dDx7O3sOL.jpg', tag: 'new_arrival', id_category: 1, id_specs_smartphone: 2 },
            { id: 3, name: 'Google Pixel 8 Pro', description: 'The Pixel 8 Pro is the most powerful, personal, and secure Pixel phone yet, with a pro-level camera system and the helpfulness of Google AI.', brand: 'Google', price: 7999, stock: 35, url_image: 'https://img.joomcdn.net/3fd4304e27d11da29b4337694d44278cf10a97ce_original.jpeg', tag: 'featured_product', id_category: 1, id_specs_smartphone: 3 },
            { id: 4, name: 'Xiaomi 14 Pro', description: 'A masterpiece of mobile photography with a Leica professional optical lens and the latest Snapdragon processor for unmatched performance.', brand: 'Xiaomi', price: 5499, discounted_price: 5199, stock: 30, url_image: 'https://img.joomcdn.net/3fd4304e27d11da29b4337694d44278cf10a97ce_original.jpeg', tag: 'new_arrival', id_category: 1, id_specs_smartphone: 4 },
            { id: 5, name: 'Samsung Galaxy Z Fold 5', description: 'A massive, immersive screen that fits in your pocket. The ultimate productivity powerhouse with PC-like multitasking.', brand: 'Samsung', price: 11999, stock: 20, url_image: 'https://m.media-amazon.com/images/I/61dDx7O3sOL.jpg', tag: 'featured_product', id_category: 1, id_specs_smartphone: 5 },
            { id: 6, name: 'iPhone 15', description: 'Now with Dynamic Island, a 48MP main camera, and USB-C, all in a durable color-infused glass and aluminum design.', brand: 'Apple', price: 7299, discounted_price: 6999, stock: 60, url_image: 'https://s3-eu-west-1.amazonaws.com/images.linnlive.com/ebb85ab2ff7175b17de881baec9aa1c0/519b5581-4068-41fd-a3a1-bc4d38c189a9.jpg', tag: 'bestseller', id_category: 1, id_specs_smartphone: 1 },
            { id: 7, name: 'Google Pixel 8', description: 'The helpful phone, engineered by Google. Amazing photos and videos every time with the power of Google AI.', brand: 'Google', price: 5999, stock: 45, url_image: 'https://s3-eu-west-1.amazonaws.com/images.linnlive.com/ebb85ab2ff7175b17de881baec9aa1c0/519b5581-4068-41fd-a3a1-bc4d38c189a9.jpg', tag: 'bestseller', id_category: 1, id_specs_smartphone: 3 },
            { id: 8, name: 'Motorola Razr 40 Ultra', description: 'Flip the script with the iconic foldable design featuring a huge, fully functional external screen.', brand: 'Motorola', price: 6999, discounted_price: 6499, stock: 25, url_image: 'https://img.joomcdn.net/3fd4304e27d11da29b4337694d44278cf10a97ce_original.jpeg', tag: 'new_arrival', id_category: 1, id_specs_smartphone: 5 },
            { id: 9, name: 'Samsung Galaxy A55', description: 'Awesome camera, awesome screen, awesome battery. All you need in a durable, stylish package.', brand: 'Samsung', price: 2499, stock: 100, url_image: 'https://m.media-amazon.com/images/I/61dDx7O3sOL.jpg', tag: 'bestseller', id_category: 1, id_specs_smartphone: 2 },
            { id: 10, name: 'Asus ROG Phone 8', description: 'The ultimate gaming phone is back, with unmatched performance, a revolutionary cooling system, and pro-level gaming features.', brand: 'Asus', price: 8999, discounted_price: 8799, stock: 15, url_image: 'https://s3-eu-west-1.amazonaws.com/images.linnlive.com/ebb85ab2ff7175b17de881baec9aa1c0/519b5581-4068-41fd-a3a1-bc4d38c189a9.jpg', tag: 'featured_product', id_category: 1, id_specs_smartphone: 2 },
            { id: 11, name: 'OnePlus 12', description: 'A flagship powerhouse with a stunning display and incredibly fast charging.', brand: 'OnePlus', price: 6299, stock: 28, url_image: 'https://s3-eu-west-1.amazonaws.com/images.linnlive.com/ebb85ab2ff7175b17de881baec9aa1c0/519b5581-4068-41fd-a3a1-bc4d38c189a9.jpg', tag: 'new_arrival', id_category: 1, id_specs_smartphone: 4 },
            { id: 12, name: 'iPhone 14', description: 'A great upgrade with significant camera improvements and Crash Detection.', brand: 'Apple', price: 5999, stock: 70, url_image: 'https://s3-eu-west-1.amazonaws.com/images.linnlive.com/ebb85ab2ff7175b17de881baec9aa1c0/519b5581-4068-41fd-a3a1-bc4d38c189a9.jpg', tag: 'discount_up_to_50', id_category: 1, id_specs_smartphone: 1 },
            { id: 13, name: 'Samsung Galaxy Z Flip 5', description: 'The pocket-sized foldable with a massive Flex Window for ultimate self-expression.', brand: 'Samsung', price: 7999, discounted_price: 7499, stock: 33, url_image: 'https://m.media-amazon.com/images/I/61dDx7O3sOL.jpg', tag: 'featured_product', id_category: 1, id_specs_smartphone: 5 },
            { id: 14, name: 'Google Pixel 7a', description: 'The essential Pixel phone, bringing amazing features at a great price.', brand: 'Google', price: 3599, stock: 80, url_image: 'https://s3-eu-west-1.amazonaws.com/images.linnlive.com/ebb85ab2ff7175b17de881baec9aa1c0/519b5581-4068-41fd-a3a1-bc4d38c189a9.jpg', tag: 'bestseller', id_category: 1, id_specs_smartphone: 3 },
            { id: 15, name: 'Xiaomi Redmi Note 13', description: 'A fantastic mid-range option with a high-resolution camera and long battery life.', brand: 'Xiaomi', price: 1899, stock: 120, url_image: 'https://img.joomcdn.net/3fd4304e27d11da29b4337694d44278cf10a97ce_original.jpeg', tag: 'bestseller', id_category: 1, id_specs_smartphone: 4 },
            { id: 16, name: 'Motorola Edge 40 Neo', description: 'Slim, light, and stylish with a powerful camera system and vivid display.', brand: 'Motorola', price: 3499, discounted_price: 3299, stock: 55, url_image: 'https://img.joomcdn.net/3fd4304e27d11da29b4337694d44278cf10a97ce_original.jpeg', tag: 'featured_product', id_category: 1, id_specs_smartphone: 5 },
            { id: 17, name: 'iPhone SE (3rd Gen)', description: 'Serious power with the A15 Bionic chip in the iconic iPhone design.', brand: 'Apple', price: 4299, stock: 90, url_image: 'https://s3-eu-west-1.amazonaws.com/images.linnlive.com/ebb85ab2ff7175b17de881baec9aa1c0/519b5581-4068-41fd-a3a1-bc4d38c189a9.jpg', tag: 'bestseller', id_category: 1, id_specs_smartphone: 1 },
            { id: 18, name: 'Samsung Galaxy S23 FE', description: 'Fan Edition is back with pro-grade features for everyone.', brand: 'Samsung', price: 4499, discounted_price: 4199, stock: 65, url_image: 'https://m.media-amazon.com/images/I/61dDx7O3sOL.jpg', tag: 'new_arrival', id_category: 1, id_specs_smartphone: 2 },
            { id: 19, name: 'Sony Xperia 1 V', description: 'A smartphone for photographers, with next-gen sensor technology.', brand: 'Sony', price: 9999, stock: 10, url_image: 'https://s3-eu-west-1.amazonaws.com/images.linnlive.com/ebb85ab2ff7175b17de881baec9aa1c0/519b5581-4068-41fd-a3a1-bc4d38c189a9.jpg', tag: 'featured_product', id_category: 1, id_specs_smartphone: 2 },
            { id: 20, name: 'Nothing Phone (2)', description: 'A unique design with the Glyph Interface and a refined user experience.', brand: 'Nothing', price: 4599, stock: 22, url_image: 'https://s3-eu-west-1.amazonaws.com/images.linnlive.com/ebb85ab2ff7175b17de881baec9aa1c0/519b5581-4068-41fd-a3a1-bc4d38c189a9.jpg', tag: 'new_arrival', id_category: 1, id_specs_smartphone: 4 },
            { id: 21, name: 'Oppo Find X6 Pro', description: 'Co-engineered with Hasselblad for a pro-level camera experience.', brand: 'Oppo', price: 7500, stock: 18, url_image: 'https://img.joomcdn.net/3fd4304e27d11da29b4337694d44278cf10a97ce_original.jpeg', tag: 'featured_product', id_category: 1, id_specs_smartphone: 2 },
            { id: 22, name: 'Vivo X90 Pro', description: 'Exceptional low-light photography capabilities and fast performance.', brand: 'Vivo', price: 7200, stock: 21, url_image: 'https://s3-eu-west-1.amazonaws.com/images.linnlive.com/ebb85ab2ff7175b17de881baec9aa1c0/519b5581-4068-41fd-a3a1-bc4d38c189a9.jpg', tag: 'new_arrival', id_category: 1, id_specs_smartphone: 4 },
            { id: 23, name: 'Realme GT Neo 5', description: 'Blazing-fast charging speeds and a powerful chipset for gaming.', brand: 'Realme', price: 3800, discounted_price: 3500, stock: 40, url_image: 'https://s3-eu-west-1.amazonaws.com/images.linnlive.com/ebb85ab2ff7175b17de881baec9aa1c0/519b5581-4068-41fd-a3a1-bc4d38c189a9.jpg', tag: 'bestseller', id_category: 1, id_specs_smartphone: 4 },
            { id: 24, name: 'Huawei P60 Pro', description: 'Variable aperture camera system for stunning versatility in photography.', brand: 'Huawei', price: 8100, stock: 12, url_image: 'https://s3-eu-west-1.amazonaws.com/images.linnlive.com/ebb85ab2ff7175b17de881baec9aa1c0/519b5581-4068-41fd-a3a1-bc4d38c189a9.jpg', tag: 'featured_product', id_category: 1, id_specs_smartphone: 2 },
            { id: 25, name: 'Nokia G42', description: 'A sustainable choice, designed for easy repairability at home.', brand: 'Nokia', price: 1500, stock: 110, url_image: 'https://s3-eu-west-1.amazonaws.com/images.linnlive.com/ebb85ab2ff7175b17de881baec9aa1c0/519b5581-4068-41fd-a3a1-bc4d38c189a9.jpg', tag: 'discount_up_to_50', id_category: 1, id_specs_smartphone: 5 },
            { id: 26, name: 'Fairphone 5', description: 'The most sustainable and ethical smartphone on the market.', brand: 'Fairphone', price: 5500, stock: 30, url_image: 'https://s3-eu-west-1.amazonaws.com/images.linnlive.com/ebb85ab2ff7175b17de881baec9aa1c0/519b5581-4068-41fd-a3a1-bc4d38c189a9.jpg', tag: 'new_arrival', id_category: 1, id_specs_smartphone: 4 },
            { id: 27, name: 'CAT S75', description: 'An ultra-rugged smartphone built to survive extreme conditions.', brand: 'CAT', price: 4200, stock: 25, url_image: 'https://img.joomcdn.net/3fd4304e27d11da29b4337694d44278cf10a97ce_original.jpeg', tag: 'featured_product', id_category: 1, id_specs_smartphone: 5 },
            { id: 28, name: 'iPhone 13 Mini', description: 'Pocket-sized power with the A15 Bionic chip.', brand: 'Apple', price: 5699, discounted_price: 5199, stock: 40, url_image: 'https://s3-eu-west-1.amazonaws.com/images.linnlive.com/ebb85ab2ff7175b17de881baec9aa1c0/519b5581-4068-41fd-a3a1-bc4d38c189a9.jpg', tag: 'bestseller', id_category: 1, id_specs_smartphone: 1 },
            { id: 29, name: 'Samsung Galaxy S23 FE', description: 'The Fan Edition returns with a powerful camera and flagship performance.', brand: 'Samsung', price: 3999, stock: 70, url_image: 'https://m.media-amazon.com/images/I/61dDx7O3sOL.jpg', tag: 'bestseller', id_category: 1, id_specs_smartphone: 2 },
            { id: 30, name: 'Xiaomi Poco F5', description: 'Incredible performance for gaming and multitasking at a mid-range price.', brand: 'Xiaomi', price: 2999, stock: 85, url_image: 'https://img.joomcdn.net/3fd4304e27d11da29b4337694d44278cf10a97ce_original.jpeg', tag: 'featured_product', id_category: 1, id_specs_smartphone: 4 },

            { id: 101, name: 'MacBook Pro 14" M3', description: 'The 14-inch MacBook Pro with M4 Pro and M4 Max chips gives you outrageous performance in a powerhouse laptop built for Apple Intelligence. With up to 22 hours of battery life and a breathtaking Liquid Retina XDR display with up to 1600 nits peak brightness, it’s pro in every way.', brand: 'Apple', price: 18499, stock: 15, url_image: 'https://source.unsplash.com/random/800x600?macbook,pro,desk', tag: 'bestseller', id_category: 2 },
            { id: 102, name: 'Dell XPS 15', description: 'A stunning OLED display and powerful Intel Core Ultra processors for creators. Its premium design is crafted with machined aluminum.', brand: 'Dell', price: 14999, discounted_price: 14499, stock: 20, url_image: 'https://source.unsplash.com/random/800x600?dell,xps,laptop', tag: 'featured_product', id_category: 2 },
            { id: 103, name: 'HP Spectre x360 14', description: 'A versatile 2-in-1 laptop with a gorgeous touch display and powerful performance for work and play.', brand: 'HP', price: 11999, stock: 25, url_image: 'https://source.unsplash.com/random/800x600?hp,laptop', tag: 'new_arrival', id_category: 2 },
            { id: 104, name: 'Lenovo Yoga 9i', description: 'Innovative design with a rotating soundbar and brilliant OLED display.', brand: 'Lenovo', price: 10999, stock: 30, url_image: 'https://source.unsplash.com/random/800x600?lenovo,yoga,laptop', tag: 'bestseller', id_category: 2 },
            { id: 105, name: 'Asus Zenbook Duo', description: 'The future of laptops with two full-sized OLED touchscreens for ultimate productivity.', brand: 'Asus', price: 15999, discounted_price: 15499, stock: 18, url_image: 'https://source.unsplash.com/random/800x600?asus,zenbook', tag: 'featured_product', id_category: 2 },
            { id: 106, name: 'Microsoft Surface Laptop 5', description: 'Blazing-fast performance in a sleek, ultra-portable design with an amazing keyboard.', brand: 'Microsoft', price: 9999, stock: 40, url_image: 'https://source.unsplash.com/random/800x600?microsoft,surface,laptop', tag: 'new_arrival', id_category: 2 },
            { id: 107, name: 'Razer Blade 16', description: 'The most powerful gaming laptop with a stunning mini-LED display.', brand: 'Razer', price: 25999, stock: 10, url_image: 'https://source.unsplash.com/random/800x600?razer,blade,laptop', tag: 'bestseller', id_category: 2 },
            { id: 108, name: 'Samsung Galaxy Book3 Ultra', description: 'Seamless connectivity with your Galaxy devices and a powerful NVIDIA RTX GPU.', brand: 'Samsung', price: 16999, stock: 22, url_image: 'https://source.unsplash.com/random/800x600?samsung,galaxy,book', tag: 'featured_product', id_category: 2 },
            { id: 109, name: 'LG Gram 17', description: 'Incredibly lightweight for a 17-inch laptop, without compromising on performance.', brand: 'LG', price: 11500, stock: 28, url_image: 'https://source.unsplash.com/random/800x600?lg,gram,laptop', tag: 'new_arrival', id_category: 2 },
            { id: 110, name: 'Acer Swift Go 14', description: 'An excellent value laptop with a bright OLED display and solid performance.', brand: 'Acer', price: 6500, stock: 50, url_image: 'https://source.unsplash.com/random/800x600?acer,swift,laptop', tag: 'discount_up_to_50', id_category: 2 },

            { id: 201, name: 'iPad Pro 11" M4', description: 'The ultimate iPad experience, now with the outrageous power of the M4 chip, a breakthrough Ultra Retina XDR display, and superfast Wi-Fi 6E.', brand: 'Apple', price: 12299, stock: 30, url_image: 'https://apple-com.ru/image/cache/catalog/product/ipad/files/1931f89a1cad07b8e3bfde020790fd9a-1600x1080h.jpg', tag: 'bestseller', id_category: 3 },
            { id: 202, name: 'Samsung Galaxy Tab S9 Ultra', description: 'A massive 14.6-inch Dynamic AMOLED 2X display that’s a feast for the eyes. Includes the S Pen for ultimate creativity and note-taking.', brand: 'Samsung', price: 9999, discounted_price: 9499, stock: 25, url_image: 'https://cdn1.ozone.ru/s3/multimedia-1-c/6917565540.jpg', tag: 'new_arrival', id_category: 3 },
            { id: 203, name: 'Microsoft Surface Pro 9', description: 'The versatility of a tablet and the performance of a laptop.', brand: 'Microsoft', price: 8999, stock: 35, url_image: 'https://chobs.mistoremx.com/data/gallery_album/151/original_img/1641514945323338226.webp', tag: 'featured_product', id_category: 3 },
            { id: 204, name: 'iPad Air M2', description: 'Powerful, colorful, and versatile, now supercharged by the M2 chip.', brand: 'Apple', price: 6999, stock: 50, url_image: 'https://apple-com.ru/image/cache/catalog/product/ipad/files/1931f89a1cad07b8e3bfde020790fd9a-1600x1080h.jpg', tag: 'bestseller', id_category: 3 },
            { id: 205, name: 'Lenovo Tab P12', description: 'A large 12.7-inch 3K display for cinematic entertainment and productivity.', brand: 'Lenovo', price: 3499, discounted_price: 3199, stock: 45, url_image: 'https://chobs.mistoremx.com/data/gallery_album/151/original_img/1641514945323338226.webp', tag: 'new_arrival', id_category: 3 },
            { id: 206, name: 'Xiaomi Pad 6', description: 'A flagship-level tablet for work and entertainment with a 144Hz display.', brand: 'Xiaomi', price: 2999, stock: 60, url_image: 'https://cdn1.ozone.ru/s3/multimedia-1-c/6917565540.jpg', tag: 'featured_product', id_category: 3 },
            { id: 207, name: 'Amazon Fire Max 11', description: 'Amazon’s biggest and most powerful tablet, built for entertainment and light work.', brand: 'Amazon', price: 1899, stock: 80, url_image: 'https://chobs.mistoremx.com/data/gallery_album/151/original_img/1641514945323338226.webp', tag: 'bestseller', id_category: 3 },
            { id: 208, name: 'Google Pixel Tablet', description: 'The only tablet with a Charging Speaker Dock that turns it into a smart home hub.', brand: 'Google', price: 4999, stock: 28, url_image: 'https://cdn1.ozone.ru/s3/multimedia-1-c/6917565540.jpg', tag: 'new_arrival', id_category: 3 },
            { id: 209, name: 'OnePlus Pad', description: 'Features the world’s first 7:5 ratio display for a unique reading and browsing experience.', brand: 'OnePlus', price: 4299, discounted_price: 3999, stock: 33, url_image: 'https://cdn1.ozone.ru/s3/multimedia-1-c/6917565540.jpg', tag: 'featured_product', id_category: 3 },
            { id: 210, name: 'Samsung Galaxy Tab A9+', description: 'A great value tablet for family entertainment and everyday tasks.', brand: 'Samsung', price: 1499, stock: 100, url_image: 'https://cdn1.ozone.ru/s3/multimedia-1-c/6917565540.jpg', tag: 'discount_up_to_50', id_category: 3 },

            { id: 301, name: 'AirPods Pro (2nd gen)', description: 'Richer audio quality, next-level Active Noise Cancellation, and Adaptive Transparency. Personalized Spatial Audio provides an immersive experience.', brand: 'Apple', price: 2599, stock: 100, url_image: 'https://cdn1.ozone.ru/s3/multimedia-6/6341010150.jpg', tag: 'bestseller', id_category: 4 },
            { id: 302, name: 'Sony WH-1000XM5', description: 'Industry-leading noise canceling with two processors controlling eight microphones. A new standard in clear call quality and premium sound.', brand: 'Sony', price: 2399, discounted_price: 2199, stock: 50, url_image: 'https://www.jbl.com/on/demandware.static/-/Sites-masterCatalog_Harman/default/dw65304293/JBL_LIVE_FREE_NC+%20TWS_Product%20image_Hero_Black.png', tag: 'featured_product', id_category: 4 },
            { id: 303, name: 'Bose QuietComfort Ultra Headphones', description: 'World-class noise cancellation and groundbreaking Bose Immersive Audio.', brand: 'Bose', price: 2999, stock: 45, url_image: 'https://www.powerplanetonline.com/cdnassets/1more_comfobuds_mini_negro_01_l.jpg', tag: 'new_arrival', id_category: 4 },
            { id: 304, name: 'Sennheiser Momentum 4', description: 'Enjoy exceptional sound with this audiophile-inspired headphone featuring a 60-hour battery life.', brand: 'Sennheiser', price: 2199, stock: 55, url_image: 'https://www.jbl.com/on/demandware.static/-/Sites-masterCatalog_Harman/default/dw65304293/JBL_LIVE_FREE_NC+%20TWS_Product%20image_Hero_Black.png', tag: 'featured_product', id_category: 4 },
            { id: 305, name: 'AirPods Max', description: 'A perfect balance of exhilarating high-fidelity audio and the effortless magic of AirPods.', brand: 'Apple', price: 5999, discounted_price: 5499, stock: 25, url_image: 'https://cdn1.ozone.ru/s3/multimedia-6/6341010150.jpg', tag: 'bestseller', id_category: 4 },
            { id: 306, name: 'JBL Tour One M2', description: 'True Adaptive Noise Cancelling technology for an immersive audio experience.', brand: 'JBL', price: 1499, stock: 70, url_image: 'https://www.jbl.com/on/demandware.static/-/Sites-masterCatalog_Harman/default/dw65304293/JBL_LIVE_FREE_NC+%20TWS_Product%20image_Hero_Black.png', tag: 'new_arrival', id_category: 4 },
            { id: 307, name: 'Beats Studio Pro', description: 'Fully adaptive Active Noise Cancelling and lossless audio for an emotional listening experience.', brand: 'Beats', price: 2299, stock: 65, url_image: 'https://www.powerplanetonline.com/cdnassets/1more_comfobuds_mini_negro_01_l.jpg', tag: 'featured_product', id_category: 4 },
            { id: 308, name: 'Anker Soundcore Space Q45', description: 'Upgraded noise cancelling and ultra-long playtime for an affordable price.', brand: 'Anker', price: 999, stock: 90, url_image: 'https://www.jbl.com/on/demandware.static/-/Sites-masterCatalog_Harman/default/dw65304293/JBL_LIVE_FREE_NC+%20TWS_Product%20image_Hero_Black.png', tag: 'bestseller', id_category: 4 },
            { id: 309, name: 'Audio-Technica ATH-M50x', description: 'Critically acclaimed studio monitor headphones for professional use.', brand: 'Audio-Technica', price: 899, stock: 85, url_image: 'https://www.powerplanetonline.com/cdnassets/1more_comfobuds_mini_negro_01_l.jpg', tag: 'featured_product', id_category: 4 },
            { id: 310, name: 'Edifier W820NB', description: 'Hybrid Active Noise Cancelling headphones with Hi-Res Audio certification.', brand: 'Edifier', price: 499, stock: 120, url_image: 'https://cdn1.ozone.ru/s3/multimedia-6/6341010150.jpg', tag: 'discount_up_to_50', id_category: 4 },

            { id: 401, name: 'PlayStation 5 Slim Console', description: 'Experience lightning-fast loading with an ultra-high-speed SSD, deeper immersion with support for haptic feedback, and an all-new generation of incredible PlayStation games.', brand: 'Sony', price: 4799, stock: 40, url_image: 'https://cdn.pocket-lint.com/r/s/1200x/assets/images/71490-games-review-sony-playstation-3-ps3-slim-console-image1-JImvTjOBa3.jpg', tag: 'bestseller', id_category: 5 },
            { id: 402, name: 'Xbox Series X Console', description: 'The fastest, most powerful Xbox ever. Explore rich new worlds with 12 teraflops of raw graphic processing power, DirectX ray tracing, and a custom SSD.', brand: 'Microsoft', price: 4899, stock: 35, url_image: 'https://foks-donetsk.com/media/images/product/2024/12/igrovaya-konsol-xbox-series-s-1tb_6894c76c77284b6e8622c1aa83a9be31.webp', tag: 'featured_product', id_category: 5 },
            { id: 403, name: 'Nintendo Switch OLED Model', description: 'Play at home on the TV or on-the-go with a vibrant 7-inch OLED screen. Features a wide adjustable stand, a dock with a wired LAN port, and 64 GB of internal storage.', brand: 'Nintendo', price: 2499, discounted_price: 2399, stock: 60, url_image: 'https://cdn.pocket-lint.com/r/s/1200x/assets/images/71490-games-review-sony-playstation-3-ps3-slim-console-image1-JImvTjOBa3.jpg', tag: 'new_arrival', id_category: 5 },
            { id: 404, name: 'Logitech G Pro X Superlight Mouse', description: 'An ultra-lightweight wireless gaming mouse for professional gamers.', brand: 'Logitech', price: 899, stock: 100, url_image: 'https://de2wfhoo6xqi5.cloudfront.net/orig/692/110/faf5b74c7c368bcc60063d6a932de79b8d.jpg', tag: 'bestseller', id_category: 5 },
            { id: 405, name: 'Razer BlackWidow V4 Pro Keyboard', description: 'A mechanical gaming keyboard with Razer Chroma RGB and dedicated macro keys.', brand: 'Razer', price: 1499, discounted_price: 1399, stock: 70, url_image: 'https://cdn.pocket-lint.com/r/s/1200x/assets/images/71490-games-review-sony-playstation-3-ps3-slim-console-image1-JImvTjOBa3.jpg', tag: 'featured_product', id_category: 5 },
            { id: 406, name: 'SteelSeries Arctis Nova Pro Headset', description: 'Achieve almighty audio levels with the Nova Pro Acoustic System and premium Hi-Res drivers.', brand: 'SteelSeries', price: 2199, stock: 55, url_image: 'https://cdn.pocket-lint.com/r/s/1200x/assets/images/71490-games-review-sony-playstation-3-ps3-slim-console-image1-JImvTjOBa3.jpg', tag: 'new_arrival', id_category: 5 },
            { id: 407, name: 'DualSense Edge Wireless Controller', description: 'Get an edge in gameplay with this high-performance controller built for PlayStation 5.', brand: 'Sony', price: 1499, stock: 65, url_image: 'https://de2wfhoo6xqi5.cloudfront.net/orig/692/110/faf5b74c7c368bcc60063d6a932de79b8d.jpg', tag: 'bestseller', id_category: 5 },
            { id: 408, name: 'Xbox Elite Series 2 Controller', description: 'Play like a pro with the world’s most advanced controller, featuring adjustable-tension thumbsticks.', brand: 'Microsoft', price: 1299, stock: 75, url_image: 'https://foks-donetsk.com/media/images/product/2024/12/igrovaya-konsol-xbox-series-s-1tb_6894c76c77284b6e8622c1aa83a9be31.webp', tag: 'featured_product', id_category: 5 },
            { id: 409, name: 'Elgato Stream Deck MK.2', description: '15 customizable LCD keys to control your apps and tools.', brand: 'Elgato', price: 999, stock: 80, url_image: 'https://de2wfhoo6xqi5.cloudfront.net/orig/692/110/faf5b74c7c368bcc60063d6a932de79b8d.jpg', tag: 'new_arrival', id_category: 5 },
            { id: 410, name: 'Steam Deck OLED', description: 'A powerful, portable PC gaming device with a vibrant OLED screen.', brand: 'Valve', price: 4499, stock: 30, url_image: 'https://foks-donetsk.com/media/images/product/2024/12/igrovaya-konsol-xbox-series-s-1tb_6894c76c77284b6e8622c1aa83a9be31.webp', tag: 'discount_up_to_50', id_category: 5 },

            { id: 501, name: 'Samsung S90C OLED 65"', description: 'Experience incredible contrast and vibrant colors powered by Quantum Dot technology. This OLED TV delivers pure blacks and over a billion shades of color.', brand: 'Samsung', price: 12999, discounted_price: 11999, stock: 15, url_image: 'https://source.unsplash.com/random/800x600?samsung,oled,tv', tag: 'new_arrival', id_category: 6 },
            { id: 502, name: 'LG C3 OLED evo 65"', description: 'The most popular OLED TV, now even brighter with Brightness Booster. The α9 AI Processor Gen6 provides lifelike picture and sound.', brand: 'LG', price: 13499, stock: 12, url_image: 'https://source.unsplash.com/random/800x600?lg,oled,tv', tag: 'featured_product', id_category: 6 },
            { id: 503, name: 'Sony Bravia XR A95L Q-OLED', description: 'Cognitive Processor XR delivers unprecedented contrast with bright, vibrant colors.', brand: 'Sony', price: 18999, stock: 10, url_image: 'https://source.unsplash.com/random/800x600?sony,bravia,tv', tag: 'bestseller', id_category: 6 },
            { id: 504, name: 'TCL QM8 Q-Class 4K Mini-LED', description: 'A flagship Mini-LED TV with stunning brightness and local dimming.', brand: 'TCL', price: 8999, stock: 25, url_image: 'https://source.unsplash.com/random/800x600?tcl,television', tag: 'featured_product', id_category: 6 },
            { id: 505, name: 'Hisense U8K Series Mini-LED', description: 'High-end performance at a mid-range price, with fantastic brightness and contrast.', brand: 'Hisense', price: 7999, discounted_price: 7499, stock: 30, url_image: 'https://source.unsplash.com/random/800x600?hisense,television', tag: 'new_arrival', id_category: 6 },
            { id: 506, name: 'Philips The One 55" Ambilight', description: 'The one with magical Ambilight that makes your viewing experience more immersive.', brand: 'Philips', price: 4999, stock: 40, url_image: 'https://source.unsplash.com/random/800x600?philips,ambilight,tv', tag: 'bestseller', id_category: 6 },
            { id: 507, name: 'Samsung The Frame 2024', description: 'A TV when it’s on, art when it’s off. Features a matte display to reduce glare.', brand: 'Samsung', price: 9999, stock: 18, url_image: 'https://source.unsplash.com/random/800x600?samsung,frame,tv', tag: 'featured_product', id_category: 6 },
            { id: 508, name: 'Panasonic MZ2000 OLED', description: 'The professional’s choice for color accuracy and cinematic picture quality.', brand: 'Panasonic', price: 19999, stock: 8, url_image: 'https://source.unsplash.com/random/800x600?panasonic,television', tag: 'new_arrival', id_category: 6 },
            { id: 509, name: 'Vizio Quantum Pro QLED', description: 'A great value QLED TV with excellent gaming features.', brand: 'Vizio', price: 6500, stock: 33, url_image: 'https://source.unsplash.com/random/800x600?vizio,television', tag: 'bestseller', id_category: 6 },
            { id: 510, name: 'Xiaomi TV Max 86"', description: 'A massive 86-inch screen for a true home theater experience.', brand: 'Xiaomi', price: 11999, stock: 14, url_image: 'https://source.unsplash.com/random/800x600?xiaomi,television', tag: 'discount_up_to_50', id_category: 6 },

            { id: 601, name: 'JBL Boombox 3 Speaker', description: 'Massive sound and deepest bass for 24 hours of play time. The new 3-way speakers deliver higher sensitivity of our acoustic design.', brand: 'JBL', price: 2899, stock: 40, url_image: 'https://source.unsplash.com/random/800x600?jbl,boombox,speaker', tag: 'bestseller', id_category: 7 },
            { id: 602, name: 'Sonos Era 300 Speaker', description: 'Feel sound all around you with this spatial audio speaker. With next-level connectivity and breakthrough acoustic design, it projects sound from wall to wall.', brand: 'Sonos', price: 3599, discounted_price: 3499, stock: 25, url_image: 'https://source.unsplash.com/random/800x600?sonos,speaker', tag: 'new_arrival', id_category: 7 },
            { id: 603, name: 'Bose SoundLink Revolve+', description: 'A portable Bluetooth speaker with deep, loud, and immersive 360° sound.', brand: 'Bose', price: 2199, stock: 35, url_image: 'https://source.unsplash.com/random/800x600?bose,speaker', tag: 'featured_product', id_category: 7 },
            { id: 604, name: 'Marshall Stanmore III', description: 'An iconic design with even wider stereo sound than its predecessor.', brand: 'Marshall', price: 2999, stock: 30, url_image: 'https://source.unsplash.com/random/800x600?marshall,speaker', tag: 'bestseller', id_category: 7 },
            { id: 605, name: 'Anker Soundcore Motion+', description: 'Hi-Res Audio with intense bass, powered by an ultra-wide frequency range.', brand: 'Anker', price: 799, stock: 80, url_image: 'https://source.unsplash.com/random/800x600?anker,speaker', tag: 'featured_product', id_category: 7 },
            { id: 606, name: 'Sonos Arc Soundbar', description: 'The premium smart soundbar for TV, movies, music, gaming, and more.', brand: 'Sonos', price: 7999, discounted_price: 7799, stock: 20, url_image: 'https://source.unsplash.com/random/800x600?sonos,soundbar', tag: 'new_arrival', id_category: 7 },
            { id: 607, name: 'Samsung HW-Q990C Soundbar', description: 'The ultimate sound experience with Wireless Dolby Atmos and 11.1.4ch sound.', brand: 'Samsung', price: 8999, stock: 15, url_image: 'https://source.unsplash.com/random/800x600?samsung,soundbar', tag: 'bestseller', id_category: 7 },
            { id: 608, name: 'Ultimate Ears Wonderboom 3', description: 'An ultra-portable Bluetooth speaker with a surprisingly big sound.', brand: 'Ultimate Ears', price: 699, stock: 90, url_image: 'https://source.unsplash.com/random/800x600?ue,speaker', tag: 'featured_product', id_category: 7 },
            { id: 609, name: 'Bowers & Wilkins Zeppelin', description: 'A stunningly designed wireless smart speaker with high-resolution sound.', brand: 'B&W', price: 5999, stock: 12, url_image: 'https://source.unsplash.com/random/800x600?bowers,wilkins,speaker', tag: 'new_arrival', id_category: 7 },
            { id: 610, name: 'Edifier R1280T Bookshelf Speakers', description: 'Active bookshelf speakers perfect for any living space.', brand: 'Edifier', price: 750, stock: 70, url_image: 'https://source.unsplash.com/random/800x600?edifier,speakers', tag: 'discount_up_to_50', id_category: 7 },

            { id: 701, name: 'Apple Watch Ultra 2', description: 'The most rugged and capable Apple Watch ever, designed for exploration, adventure, and endurance. Features a bright display and a magical new way to interact.', brand: 'Apple', price: 9699, stock: 30, url_image: 'https://w7.pngwing.com/pngs/838/816/png-transparent-apple-watch-series-3-apple-watch-series-2-apple-watch-edition-apple-gold-apple-watch-fruit-nut.png', tag: 'bestseller', id_category: 8 },
            { id: 702, name: 'Samsung Galaxy Watch 6 Classic', description: 'The iconic rotating bezel is back, with a larger display and advanced wellness tracking. Crush your fitness goals and monitor your health.', brand: 'Samsung', price: 3199, discounted_price: 2999, stock: 40, url_image: 'https://cdn2.arogga.com/eyJidWNrZXQiOiJhcm9nZ2EiLCJrZXkiOiJQcm9kdWN0LXBfaW1hZ2VzXC83MTE5M1wvNzExOTMtVW50aXRsZWQtZGVzaWduLTIwMjQtMTAtMjRUMTkzOTMwLTU4bGt0aC5wbmciLCJlZGl0cyI6W119', tag: 'featured_product', id_category: 8 },
            { id: 703, name: 'Garmin Fenix 7 Pro', description: 'The ultimate multisport GPS watch with solar charging and built-in flashlight.', brand: 'Garmin', price: 7999, stock: 25, url_image: 'https://cdn2.arogga.com/eyJidWNrZXQiOiJhcm9nZ2EiLCJrZXkiOiJQcm9kdWN0LXBfaW1hZ2VzXC83MTE5M1wvNzExOTMtVW50aXRsZWQtZGVzaWduLTIwMjQtMTAtMjRUMTkzOTMwLTU4bGt0aC5wbmciLCJlZGl0cyI6W119', tag: 'new_arrival', id_category: 8 },
            { id: 704, name: 'Apple Watch Series 9', description: 'Your essential companion for a healthy life is now even more powerful.', brand: 'Apple', price: 4999, stock: 80, url_image: 'https://w7.pngwing.com/pngs/838/816/png-transparent-apple-watch-series-3-apple-watch-series-2-apple-watch-edition-apple-gold-apple-watch-fruit-nut.png', tag: 'bestseller', id_category: 8 },
            { id: 705, name: 'Google Pixel Watch 2', description: 'The best of Google and Fitbit, with a new sensor for more accurate health tracking.', brand: 'Google', price: 2999, stock: 50, url_image: 'https://cdn2.arogga.com/eyJidWNrZXQiOiJhcm9nZ2EiLCJrZXkiOiJQcm9kdWN0LXBfaW1hZ2VzXC83MTE5M1wvNzExOTMtVW50aXRsZWQtZGVzaWduLTIwMjQtMTAtMjRUMTkzOTMwLTU4bGt0aC5wbmciLCJlZGl0cyI6W119', tag: 'featured_product', id_category: 8 },
            { id: 706, name: 'Fitbit Charge 6', description: 'Get motivated to move more with Google essentials and advanced health sensors.', brand: 'Fitbit', price: 1299, stock: 90, url_image: 'https://cdn2.arogga.com/eyJidWNrZXQiOiJhcm9nZ2EiLCJrZXkiOiJQcm9kdWN0LXBfaW1hZ2VzXC83MTE5M1wvNzExOTMtVW50aXRsZWQtZGVzaWduLTIwMjQtMTAtMjRUMTkzOTMwLTU4bGt0aC5wbmciLCJlZGl0cyI6W119', tag: 'new_arrival', id_category: 8 },
            { id: 707, name: 'Amazfit T-Rex 2', description: 'A rugged outdoor GPS smartwatch with military-grade toughness.', brand: 'Amazfit', price: 1599, discounted_price: 1399, stock: 60, url_image: 'https://preview.free3d.com/img/2018/09/2174892508520121356/fv73sw6d.jpg', tag: 'bestseller', id_category: 8 },
            { id: 708, name: 'Huawei Watch GT 4', description: 'An elegant design with comprehensive health and fitness tracking.', brand: 'Huawei', price: 1899, stock: 45, url_image: 'https://cdn2.arogga.com/eyJidWNrZXQiOiJhcm9nZ2EiLCJrZXkiOiJQcm9kdWN0LXBfaW1hZ2VzXC83MTE5M1wvNzExOTMtVW50aXRsZWQtZGVzaWduLTIwMjQtMTAtMjRUMTkzOTMwLTU4bGt0aC5wbmciLCJlZGl0cyI6W119', tag: 'featured_product', id_category: 8 },
            { id: 709, name: 'Xiaomi Smart Band 8', description: 'A stylish fitness tracker with a versatile design and long battery life.', brand: 'Xiaomi', price: 399, stock: 150, url_image: 'https://cdn2.arogga.com/eyJidWNrZXQiOiJhcm9nZ2EiLCJrZXkiOiJQcm9kdWN0LXBfaW1hZ2VzXC83MTE5M1wvNzExOTMtVW50aXRsZWQtZGVzaWduLTIwMjQtMTAtMjRUMTkzOTMwLTU4bGt0aC5wbmciLCJlZGl0cyI6W119', tag: 'new_arrival', id_category: 8 },
            { id: 710, name: 'Garmin Forerunner 265', description: 'A brilliant AMOLED display and training metrics to help you push your limits.', brand: 'Garmin', price: 3999, stock: 35, url_image: 'https://w7.pngwing.com/pngs/838/816/png-transparent-apple-watch-series-3-apple-watch-series-2-apple-watch-edition-apple-gold-apple-watch-fruit-nut.png', tag: 'discount_up_to_50', id_category: 8 },
        ]
    });

    console.log('Products seeded.');

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

    await prisma.review.createMany({
        data: [
            { id_product: 1, rating: 5, message: 'Best iPhone yet! The camera is incredible.', name_user: 'Lucas Almeida', url_image_user: 'https://source.unsplash.com/random/100x100?man,portrait' },
            { id_product: 1, rating: 4, message: 'Very fast, but I miss the lightning port.', name_user: 'Beatriz Rocha', url_image_user: 'https://miro.medium.com/v2/resize:fit:1000/1*u93pnV0M6pMrrBZy5k6hWw.jpeg' },
            { id_product: 2, rating: 5, message: 'The zoom on this camera is basically magic.', name_user: 'Carlos Mendes', url_image_user: 'https://source.unsplash.com/random/100x100?person' },
            { id_product: 3, rating: 4, message: 'Pure Android is so good. The phone feels very responsive.', name_user: 'Ana Costa', url_image_user: 'https://avatars.mds.yandex.net/i?id=dc788414b6d6a612dd1a95cb50dccdf9a571b71d-5434079-images-thumbs&n=13' },
            { id_product: 9, rating: 5, message: 'M3 Pro handles 4K video editing like a dream. Worth every penny.', name_user: 'João Silva', url_image_user: 'https://source.unsplash.com/random/100x100?man,face' },
            { id_product: 102, rating: 4, message: 'Beautiful machine for coding, but it can get a bit hot.', name_user: 'Mariana Souza', url_image_user: 'https://miro.medium.com/v2/resize:fit:1000/1*u93pnV0M6pMrrBZy5k6hWw.jpeg' },
            { id_product: 401, rating: 5, message: 'The slim design looks so much better in my living room.', name_user: 'Ricardo Alves', url_image_user: 'https://source.unsplash.com/random/100x100?man' },
            { id_product: 701, rating: 5, message: 'The double tap gesture is surprisingly useful!', name_user: 'Gabriela Rocha', url_image_user: 'https://i.pinimg.com/originals/95/1b/67/951b6730d008239e4e3ebdb0f00c72ba.jpg' },
            { id_product: 401, rating: 4, message: 'Fast loading times and smooth gameplay.', name_user: 'Renata Ribeiro', url_image_user: 'https://miro.medium.com/v2/resize:fit:1000/1*u93pnV0M6pMrrBZy5k6hWw.jpeg' },
            { id_product: 9, rating: 5, message: 'Xbox Game Pass is amazing on this!', name_user: 'André Monteiro', url_image_user: 'https://source.unsplash.com/random/100x100?man' },
            { id_product: 402, rating: 4, message: 'Powerful console for 4K gaming.', name_user: 'Simone Nunes', url_image_user: 'https://avatars.mds.yandex.net/i?id=dc788414b6d6a612dd1a95cb50dccdf9a571b71d-5434079-images-thumbs&n=13' },
            { id_product: 3, rating: 5, message: 'Perfect for portable gaming!', name_user: 'Paulo Gomes', url_image_user: 'https://source.unsplash.com/random/100x100?man' },
            { id_product: 403, rating: 4, message: 'Great for family gaming sessions.', name_user: 'Luciana Ferreira', url_image_user: 'https://i.pinimg.com/originals/95/1b/67/951b6730d008239e4e3ebdb0f00c72ba.jpg' },
            { id_product: 501, rating: 5, message: 'OLED picture quality is mind-blowing!', name_user: 'Carlos Castro', url_image_user: 'https://source.unsplash.com/random/100x100?man' },
            { id_product: 3, rating: 4, message: 'Great for movie nights at home.', name_user: 'Helena Miranda', url_image_user: 'https://i.pinimg.com/originals/95/1b/67/951b6730d008239e4e3ebdb0f00c72ba.jpg' },
            { id_product: 3, rating: 5, message: 'LG makes the best OLED TVs!', name_user: 'Mauricio Santos', url_image_user: 'https://source.unsplash.com/random/100x100?man' },
            { id_product: 9, rating: 4, message: 'Excellent for sports and gaming.', name_user: 'Elaine Costa', url_image_user: 'https://avatars.mds.yandex.net/i?id=dc788414b6d6a612dd1a95cb50dccdf9a571b71d-5434079-images-thumbs&n=13' },
            { id_product: 101, rating: 5, message: 'Yep. The real deal. I have only had the Apple MacBook Pro 14-inch with the Apple M4 Pro chip, 24GB of memory, and a 1TB SSD in Space Black for a day, but I’ve run it through the paces, and of course, it’s fabulous! I didn’t opt for the Nano Texture screen, but I probably should have just for the glory. The laptop is amazing; it runs everything so smoothly and, frankly, is beautiful in the Space Black chassis. I haven’t used the Thunderbolt 5 port yet, but the SD card slot is a game changer. The 14-inch is the perfect size to throw in a bag and travel to the cafe. I used some of the Apple Intelligence features, and I must say, wow! Its an excellent time to own a Mac; so much is good now I love this device and recommend it to anyone looking for a powerful device with great portability.', name_user: 'Rodrigo Santos', url_image_user: 'https://source.unsplash.com/random/100x100?man' },
            { id_product: 3, rating: 4, message: 'Excellent build quality and performance.', name_user: 'Amanda Costa', url_image_user: 'https://i.pinimg.com/originals/95/1b/67/951b6730d008239e4e3ebdb0f00c72ba.jpg' },
            { id_product: 102, rating: 5, message: 'Beautiful design and great keyboard.', name_user: 'Fabio Oliveira', url_image_user: 'https://source.unsplash.com/random/100x100?man' },
            { id_product: 102, rating: 4, message: 'Good for creative work and programming.', name_user: 'Cristina Silva', url_image_user: 'https://miro.medium.com/v2/resize:fit:1000/1*u93pnV0M6pMrrBZy5k6hWw.jpeg' },
            { id_product: 101, rating: 5, message: 'I recently upgraded to the MacBook Pro with the M4 Pro chip, and it has been a game-changer for my daily workflow. The performance is incredibly smooth, even when running resource-intensive applications like video editing software and machine learning tools. The M4 Pro chip truly delivers on speed and efficiency. What I Liked: Blazing Fast Performance: Apps load instantly, and multitasking is seamless. Battery Life: I can work all day without worrying about charging – it easily lasts over 12 hours. Display Quality: The Retina XDR display is stunning, with vibrant colors and exceptional brightness, making it perfect for creative tasks. Build Quality: As always, Apple excels in design and build. The laptop feels premium and robust. What Could Be Improved: Price: While the performance justifies it for professionals, it might be steep for casual users. Port Options: It’s great to have Thunderbolt ports, but adding more variety, like USB-A, would have been helpful. Overall, the MacBook Pro with the M4 Pro chip is a powerhouse, perfect for professionals who need top-notch performance and portability. Highly recommended for anyone in fields like video editing, programming, or design!', name_user: 'Alexandre Pereira', url_image_user: 'https://source.unsplash.com/random/100x100?man' },
            { id_product: 3, rating: 4, message: 'Great iPad for professionals.', name_user: 'Monique Alves', url_image_user: 'https://avatars.mds.yandex.net/i?id=dc788414b6d6a612dd1a95cb50dccdf9a571b71d-5434079-images-thumbs&n=13' },
            { id_product: 102, rating: 5, message: 'AMOLED screen is absolutely stunning!', name_user: 'Diego Souza', url_image_user: 'https://source.unsplash.com/random/100x100?man' },
            { id_product: 202, rating: 4, message: 'Good alternative to iPad for Android users.', name_user: 'Bianca Rodrigues', url_image_user: 'https://i.pinimg.com/originals/95/1b/67/951b6730d008239e4e3ebdb0f00c72ba.jpg' },
            { id_product: 9, rating: 5, message: 'Noise cancellation is incredible!', name_user: 'Vinicios Lima', url_image_user: 'https://source.unsplash.com/random/100x100?man' },
            { id_product: 301, rating: 4, message: 'Comfortable for long listening sessions.', name_user: 'Débora Martins', url_image_user: 'https://avatars.mds.yandex.net/i?id=dc788414b6d6a612dd1a95cb50dccdf9a571b71d-5434079-images-thumbs&n=13' },
            { id_product: 9, rating: 5, message: 'Best headphones I have ever owned!', name_user: 'Roberto Barbosa', url_image_user: 'https://source.unsplash.com/random/100x100?man' },
            { id_product: 1, rating: 3, message: 'Battery life could be better for the price.', name_user: 'Carlos Mendonça', url_image_user: 'https://source.unsplash.com/random/100x100?man' },
            { id_product: 2, rating: 2, message: 'Too big and heavy for daily use.', name_user: 'Fernanda Lima', url_image_user: 'https://avatars.mds.yandex.net/i?id=dc788414b6d6a612dd1a95cb50dccdf9a571b71d-5434079-images-thumbs&n=13' },
            { id_product: 1, rating: 3, message: 'Heats up too much during gaming.', name_user: 'Ricardo Santos', url_image_user: 'https://source.unsplash.com/random/100x100?man' },
            { id_product: 1, rating: 1, message: 'Camera quality not as advertised.', name_user: 'Patricia Oliveira', url_image_user: 'https://miro.medium.com/v2/resize:fit:1000/1*u93pnV0M6pMrrBZy5k6hWw.jpeg' },
            { id_product: 5, rating: 2, message: 'Foldable screen developed cracks after 2 months.', name_user: 'Marcos Silva', url_image_user: 'https://source.unsplash.com/random/100x100?man' },
            { id_product: 1, rating: 3, message: 'Charging is slower than expected.', name_user: 'Juliana Costa', url_image_user: 'https://miro.medium.com/v2/resize:fit:1000/1*u93pnV0M6pMrrBZy5k6hWw.jpeg' },
            { id_product: 7, rating: 2, message: 'Software bugs need to be fixed.', name_user: 'Roberto Almeida', url_image_user: 'https://source.unsplash.com/random/100x100?man' },
            { id_product: 8, rating: 1, message: 'External screen stopped working after update.', name_user: 'Camila Rodrigues', url_image_user: 'https://i.pinimg.com/originals/95/1b/67/951b6730d008239e4e3ebdb0f00c72ba.jpg' },
            { id_product: 9, rating: 3, message: 'Performance drops after heavy usage.', name_user: 'Thiago Pereira', url_image_user: 'https://source.unsplash.com/random/100x100?man' },
            { id_product: 9, rating: 0, message: 'Gaming features overhyped, average performance.', name_user: 'Vanessa Souza', url_image_user: 'https://miro.medium.com/v2/resize:fit:1000/1*u93pnV0M6pMrrBZy5k6hWw.jpeg' }
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