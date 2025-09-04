import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {

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
            { id: 1, screen_size: '6.1 inch', cpu: 'A16 Bionic', total_cores: '6 cores', main_camera: '48MP + 12MP + 12MP', front_camera: '12MP', battery: '3200mAh' },
            { id: 2, screen_size: '6.8 inch', cpu: 'Snapdragon 8 Gen 2', total_cores: '8 cores', main_camera: '200MP + 12MP + 10MP + 10MP', front_camera: '12MP', battery: '5000mAh' },
            { id: 3, screen_size: '6.7 inch', cpu: 'Snapdragon 8 Gen 2', total_cores: '8 cores', main_camera: '50MP + 50MP + 50MP', front_camera: '32MP', battery: '4820mAh' },
            { id: 4, screen_size: '6.3 inch', cpu: 'Google Tensor G2', total_cores: '8 cores', main_camera: '50MP + 12MP', front_camera: '10.8MP', battery: '4355mAh' },
            { id: 5, screen_size: '6.5 inch', cpu: 'Dimensity 8020', total_cores: '8 cores', main_camera: '50MP + 13MP', front_camera: '32MP', battery: '4400mAh' },
            { id: 6, screen_size: '6.2 inch', cpu: 'Exynos 2200', total_cores: '8 cores', main_camera: '108MP + 12MP', front_camera: '10MP', battery: '3700mAh' },
            { id: 7, screen_size: '6.9 inch', cpu: 'Snapdragon 8+ Gen 1', total_cores: '8 cores', main_camera: '200MP + 12MP + 10MP + 10MP', front_camera: '12MP', battery: '5100mAh' },
            { id: 8, screen_size: '6.4 inch', cpu: 'Apple A15 Bionic', total_cores: '6 cores', main_camera: '12MP + 12MP', front_camera: '12MP', battery: '3300mAh' },
            { id: 9, screen_size: '6.7 inch', cpu: 'Snapdragon 888', total_cores: '8 cores', main_camera: '108MP + 13MP + 5MP', front_camera: '32MP', battery: '4500mAh' },
            { id: 10, screen_size: '6.5 inch', cpu: 'Dimensity 9000', total_cores: '8 cores', main_camera: '50MP + 50MP + 50MP', front_camera: '32MP', battery: '4600mAh' },
        ]
    });

    await prisma.product.createMany({
        data: [
            { id: 1, name: 'iPhone 14 Pro', description: 'Apple smartphone with triple camera and A16 Bionic chip', brand: 'Apple', price: 7999, discounted_price: 0, stock: 50, url_image: 'https://cdn.pixabay.com/photo/2017/10/15/16/20/iphone-2854317_1280.png', tag: 'bestseller', id_category: 1, id_specs_smartphone: 1 },
            { id: 2, name: 'Samsung Galaxy S23 Ultra', description: 'Samsung smartphone with 200MP camera and Snapdragon 8 Gen 2', brand: 'Samsung', price: 6999, discounted_price: 6599, stock: 40, url_image: 'https://cdn.pixabay.com/photo/2017/10/15/16/20/iphone-2854317_1280.png', tag: 'new_arrival', id_category: 1, id_specs_smartphone: 2 },
            { id: 3, name: 'Xiaomi 13 Pro', description: 'Xiaomi smartphone with Leica camera and Snapdragon 8 Gen 2', brand: 'Xiaomi', price: 4499, discounted_price: 4199, stock: 30, url_image: 'https://cdn.pixabay.com/photo/2017/10/15/16/20/iphone-2854317_1280.png', tag: 'featured_product', id_category: 1, id_specs_smartphone: 3 },
            { id: 4, name: 'Google Pixel 7', description: 'Google smartphone with advanced camera and pure Android', brand: 'Google', price: 3999, discounted_price: 3799, stock: 20, url_image: 'https://cdn.pixabay.com/photo/2017/10/15/16/20/iphone-2854317_1280.png', tag: 'discount_up_to_50', id_category: 1, id_specs_smartphone: 4 },
            { id: 5, name: 'Motorola Edge 40', description: 'Motorola smartphone with premium design', brand: 'Motorola', price: 3499, discounted_price: 3299, stock: 25, url_image: 'https://cdn.pixabay.com/photo/2017/10/15/16/20/iphone-2854317_1280.png', tag: 'bestseller', id_category: 1, id_specs_smartphone: 5 },
            { id: 6, name: 'Samsung Galaxy S22', description: 'Samsung smartphone with powerful camera and Exynos 2200', brand: 'Samsung', price: 5299, discounted_price: 4999, stock: 35, url_image: 'https://cdn.pixabay.com/photo/2017/10/15/16/20/iphone-2854317_1280.png', tag: 'featured_product', id_category: 1, id_specs_smartphone: 6 },
            { id: 7, name: 'OnePlus 11', description: 'OnePlus smartphone with Snapdragon 8+ Gen 1', brand: 'OnePlus', price: 4599, discounted_price: 4299, stock: 30, url_image: 'https://cdn.pixabay.com/photo/2017/10/15/16/20/iphone-2854317_1280.png', tag: 'new_arrival', id_category: 1, id_specs_smartphone: 7 },
            { id: 8, name: 'iPhone 13', description: 'Apple smartphone with A15 Bionic chip', brand: 'Apple', price: 3999, discounted_price: 3799, stock: 25, url_image: 'https://cdn.pixabay.com/photo/2017/10/15/16/20/iphone-2854317_1280.png', tag: 'bestseller', id_category: 1, id_specs_smartphone: 8 },
            { id: 9, name: 'Xiaomi Mi 11', description: 'Xiaomi smartphone with Snapdragon 888 and triple camera', brand: 'Xiaomi', price: 3299, discounted_price: 3099, stock: 20, url_image: 'https://cdn.pixabay.com/photo/2017/10/15/16/20/iphone-2854317_1280.png', tag: 'featured_product', id_category: 1, id_specs_smartphone: 9 },
            { id: 10, name: 'Realme GT 3', description: 'Realme smartphone with Dimensity 9000 and 4600mAh battery', brand: 'Realme', price: 2899, discounted_price: 2699, stock: 15, url_image: 'https://cdn.pixabay.com/photo/2017/10/15/16/20/iphone-2854317_1280.png', tag: 'new_arrival', id_category: 1, id_specs_smartphone: 10 },

            { id: 11, name: 'MacBook Air M2', description: 'Apple thin and light laptop with M2 chip', brand: 'Apple', price: 8999, discounted_price: 8499, stock: 20, url_image: 'https://images.unsplash.com/photo-1597672996375-4d21cad0cbb9?q=80&w=1329&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', tag: 'bestseller', id_category: 2 },
            { id: 12, name: 'Dell XPS 13', description: 'Dell ultrathin laptop with Intel i7 processor', brand: 'Dell', price: 7999, discounted_price: 7599, stock: 15, url_image: 'https://images.unsplash.com/photo-1597672996375-4d21cad0cbb9?q=80&w=1329&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', tag: 'featured_product', id_category: 2 },
            { id: 13, name: 'Lenovo ThinkPad X1', description: 'Lenovo laptop built for work and productivity', brand: 'Lenovo', price: 7499, discounted_price: 6999, stock: 12, url_image: 'https://images.unsplash.com/photo-1597672996375-4d21cad0cbb9?q=80&w=1329&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', tag: 'new_arrival', id_category: 2 },
            { id: 14, name: 'HP Spectre x360', description: 'HP convertible laptop with touch screen', brand: 'HP', price: 7299, discounted_price: 6999, stock: 10, url_image: 'https://images.unsplash.com/photo-1597672996375-4d21cad0cbb9?q=80&w=1329&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', tag: 'bestseller', id_category: 2 },
            { id: 15, name: 'Asus ZenBook 14', description: 'Asus thin and lightweight laptop', brand: 'Asus', price: 6999, discounted_price: 6699, stock: 8, url_image: 'https://images.unsplash.com/photo-1597672996375-4d21cad0cbb9?q=80&w=1329&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', tag: 'featured_product', id_category: 2 },

            { id: 16, name: 'iPad Pro', description: 'Apple tablet with M2 chip and Liquid Retina display', brand: 'Apple', price: 7999, discounted_price: 7499, stock: 25, url_image: 'https://images.unsplash.com/photo-1623126908029-58cb08a2b272?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', tag: 'bestseller', id_category: 3 },
            { id: 17, name: 'Samsung Galaxy Tab S8', description: 'Samsung tablet with S Pen and AMOLED display', brand: 'Samsung', price: 5999, discounted_price: 5699, stock: 20, url_image: 'https://images.unsplash.com/photo-1623126908029-58cb08a2b272?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', tag: 'new_arrival', id_category: 3 },
            { id: 18, name: 'Xiaomi Pad 6', description: 'Xiaomi tablet with powerful processor and large screen', brand: 'Xiaomi', price: 3499, discounted_price: 3299, stock: 15, url_image: 'https://images.unsplash.com/photo-1623126908029-58cb08a2b272?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', tag: 'featured_product', id_category: 3 },
            { id: 19, name: 'Lenovo Tab P12', description: 'Lenovo tablet designed for productivity and entertainment', brand: 'Lenovo', price: 2999, discounted_price: 2799, stock: 12, url_image: 'https://images.unsplash.com/photo-1623126908029-58cb08a2b272?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', tag: 'bestseller', id_category: 3 },
            { id: 20, name: 'Huawei MatePad 11', description: 'Huawei tablet with 2K display and stylus support', brand: 'Huawei', price: 3299, discounted_price: 3099, stock: 10, url_image: 'https://images.unsplash.com/photo-1623126908029-58cb08a2b272?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', tag: 'featured_product', id_category: 3 },

            { id: 21, name: 'Sony WH-1000XM5', description: 'Sony headphones with active noise cancellation', brand: 'Sony', price: 1499, discounted_price: 1399, stock: 30, url_image: 'https://images.unsplash.com/photo-1625245488600-f03fef636a3c?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', tag: 'bestseller', id_category: 4 },
            { id: 22, name: 'Bose QuietComfort 45', description: 'Bose headphones with comfort and high-quality sound', brand: 'Bose', price: 1299, discounted_price: 1199, stock: 25, url_image: 'https://images.unsplash.com/photo-1625245488600-f03fef636a3c?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', tag: 'featured_product', id_category: 4 },
            { id: 23, name: 'Apple AirPods Max', description: 'Apple headphones with immersive sound and premium design', brand: 'Apple', price: 2499, discounted_price: 2399, stock: 15, url_image: 'https://images.unsplash.com/photo-1625245488600-f03fef636a3c?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', tag: 'new_arrival', id_category: 4 },
            { id: 24, name: 'JBL Live 650BTNC', description: 'JBL headphones with active noise cancellation and strong bass', brand: 'JBL', price: 799, discounted_price: 749, stock: 20, url_image: 'https://images.unsplash.com/photo-1625245488600-f03fef636a3c?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', tag: 'bestseller', id_category: 4 },
            { id: 25, name: 'Sennheiser HD 450BT', description: 'Sennheiser headphones with deep bass and Bluetooth connectivity', brand: 'Sennheiser', price: 699, discounted_price: 649, stock: 18, url_image: 'https://images.unsplash.com/photo-1625245488600-f03fef636a3c?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', tag: 'featured_product', id_category: 4 },

            { id: 26, name: 'PlayStation 5', description: 'Sony next-generation gaming console', brand: 'Sony', price: 4999, discounted_price: 4799, stock: 30, url_image: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', tag: 'bestseller', id_category: 5 },
            { id: 27, name: 'Xbox Series X', description: 'Microsoft high-performance gaming console', brand: 'Microsoft', price: 4999, discounted_price: 4799, stock: 25, url_image: 'https://images.unsplash.com/photo-1683823362932-6f7599661d22?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', tag: 'featured_product', id_category: 5 },
            { id: 28, name: 'Nintendo Switch OLED', description: 'Nintendo portable and versatile console', brand: 'Nintendo', price: 3499, discounted_price: 3299, stock: 20, url_image: 'https://images.unsplash.com/photo-1680007966627-d49ae18dbbae?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', tag: 'new_arrival', id_category: 5 },

            { id: 31, name: 'Samsung QN90B', description: 'Samsung QLED 4K latest generation TV', brand: 'Samsung', price: 7999, discounted_price: 7499, stock: 10, url_image: 'https://images.unsplash.com/photo-1601944179066-29786cb9d32a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', tag: 'bestseller', id_category: 6 },
            { id: 32, name: 'LG OLED C2', description: 'LG OLED 4K TV with vivid colors', brand: 'LG', price: 8999, discounted_price: 8499, stock: 8, url_image: 'https://images.unsplash.com/photo-1601944179066-29786cb9d32a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', tag: 'featured_product', id_category: 6 },
            { id: 33, name: 'Sony Bravia X90K', description: 'Sony LED 4K TV', brand: 'Sony', price: 6999, discounted_price: 6599, stock: 7, url_image: 'https://images.unsplash.com/photo-1601944179066-29786cb9d32a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', tag: 'new_arrival', id_category: 6 },
            { id: 34, name: 'Philips 75PUS8807', description: 'Philips 75-inch 4K TV', brand: 'Philips', price: 5999, discounted_price: 5699, stock: 5, url_image: 'https://images.unsplash.com/photo-1601944179066-29786cb9d32a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', tag: 'bestseller', id_category: 6 },
            { id: 35, name: 'TCL 6-Series', description: 'TCL QLED 4K TV', brand: 'TCL', price: 4999, discounted_price: 4699, stock: 6, url_image: 'https://images.unsplash.com/photo-1601944179066-29786cb9d32a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', tag: 'featured_product', id_category: 6 },

            { id: 36, name: 'Bose SoundLink Revolve', description: 'Portable 360° speaker', brand: 'Bose', price: 999, discounted_price: 949, stock: 15, url_image: 'https://unsplash.com/pt-br/fotografias/alto-falante-jbl-go-ALf_DGUsgro', tag: 'bestseller', id_category: 7 },
            { id: 37, name: 'JBL Charge 5', description: 'Waterproof portable speaker', brand: 'JBL', price: 799, discounted_price: 749, stock: 12, url_image: 'https://unsplash.com/pt-br/fotografias/alto-falante-jbl-go-ALf_DGUsgro', tag: 'featured_product', id_category: 7 },
            { id: 38, name: 'Sony SRS-XB43', description: 'Powerful Sony speaker with deep bass', brand: 'Sony', price: 899, discounted_price: 849, stock: 10, url_image: 'https://unsplash.com/pt-br/fotografias/alto-falante-jbl-go-ALf_DGUsgro', tag: 'new_arrival', id_category: 7 },
            { id: 39, name: 'Anker Soundcore 2', description: 'Compact and portable Bluetooth speaker', brand: 'Anker', price: 399, discounted_price: 359, stock: 8, url_image: 'https://unsplash.com/pt-br/fotografias/alto-falante-jbl-go-ALf_DGUsgro', tag: 'bestseller', id_category: 7 },
            { id: 40, name: 'Marshall Emberton', description: 'Small portable speaker with rich sound', brand: 'Marshall', price: 699, discounted_price: 649, stock: 6, url_image: 'https://unsplash.com/pt-br/fotografias/alto-falante-jbl-go-ALf_DGUsgro', tag: 'featured_product', id_category: 7 },

            { id: 41, name: 'Apple Watch Series 9', description: 'Smartwatch with fitness and health tracking', brand: 'Apple', price: 3999, discounted_price: 3799, stock: 20, url_image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', tag: 'bestseller', id_category: 8 },
            { id: 42, name: 'Samsung Galaxy Watch 6', description: 'Samsung smartwatch with AMOLED display', brand: 'Samsung', price: 2999, discounted_price: 2799, stock: 15, url_image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', tag: 'featured_product', id_category: 8 },
            { id: 43, name: 'Fitbit Versa 4', description: 'Fitness-focused smartwatch', brand: 'Fitbit', price: 1299, discounted_price: 1199, stock: 12, url_image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', tag: 'new_arrival', id_category: 8 },
            { id: 44, name: 'Garmin Venu 2', description: 'Smartwatch for sports and health tracking', brand: 'Garmin', price: 1599, discounted_price: 1499, stock: 10, url_image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', tag: 'bestseller', id_category: 8 },
            { id: 45, name: 'Amazfit GTS 4', description: 'Lightweight smartwatch with fitness tracking', brand: 'Amazfit', price: 899, discounted_price: 849, stock: 8, url_image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', tag: 'featured_product', id_category: 8 },
        ]
    });

    await prisma.colorsProduct.createMany({
        data: [
            { id_product: 1, hex_code: '#000000', name: 'Black' },
            { id_product: 1, hex_code: '#FFFFFF', name: 'White' },
            { id_product: 1, hex_code: '#2E86C1', name: 'Blue' },
            { id_product: 1, hex_code: '#A93226', name: 'Red' },
            { id_product: 2, hex_code: '#2E86C1', name: 'Blue' },
            { id_product: 2, hex_code: '#A93226', name: 'Red' },
            { id_product: 3, hex_code: '#808080', name: 'Gray' },
            { id_product: 3, hex_code: '#FFFFFF', name: 'White' },
            { id_product: 4, hex_code: '#000000', name: 'Black' },
            { id_product: 4, hex_code: '#2E86C1', name: 'Blue' },
            { id_product: 4, hex_code: '#A93226', name: 'Red' },
            { id_product: 5, hex_code: '#3C3C3C', name: 'Graphite' },
            { id_product: 6, hex_code: '#FFFFFF', name: 'White' },
            { id_product: 7, hex_code: '#008080', name: 'Teal' },
            { id_product: 8, hex_code: '#000000', name: 'Black' },
            { id_product: 9, hex_code: '#FFFFFF', name: 'White' },
            { id_product: 10, hex_code: '#FF0000', name: 'Red' },
            { id_product: 10, hex_code: '#000000', name: 'Black' },
            { id_product: 10, hex_code: '#FFFFFF', name: 'White' },
        ]
    });

    await prisma.storageOption.createMany({
        data: [
            { id_product: 1, size: '128GB' },
            { id_product: 1, size: '256GB' },
            { id_product: 1, size: '512GB' },
            { id_product: 2, size: '256GB' },
            { id_product: 2, size: '512GB' },
            { id_product: 3, size: '128GB' },
            { id_product: 3, size: '256GB' },
            { id_product: 4, size: '128GB' },
            { id_product: 5, size: '128GB' },
            { id_product: 5, size: '256GB' },
            { id_product: 6, size: '128GB' },
            { id_product: 7, size: '256GB' },
            { id_product: 8, size: '128GB' },
            { id_product: 8, size: '256GB' },
            { id_product: 8, size: '512GB' },
            { id_product: 9, size: '128GB' },
            { id_product: 9, size: '256GB' },
            { id_product: 10, size: '256GB' },
            { id_product: 10, size: '512GB' },
            
        ]
    });

    await prisma.review.createMany({
        data: [
            { id_product: 1, rating: 3, message: 'Excellent phone, fast and beautiful!', name_user: 'Lucas Almeida', url_image_user: 'https://images.unsplash.com/photo-1542393881816-df51684879df?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
            { id_product: 2, rating: 4, message: 'Very good, but battery could last longer.', name_user: 'Ana Costa', url_image_user: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=761&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
            { id_product: 3, rating: 5, message: 'Great cost-benefit!', name_user: 'João Silva', url_image_user: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
            { id_product: 4, rating: 3, message: 'Good, but expected more from the camera.', name_user: 'Mariana Souza', url_image_user: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=761&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
            { id_product: 5, rating: 4, message: 'Amazing design, highly recommend!', name_user: 'Carlos Mendes', url_image_user: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
            { id_product: 6, rating: 5, message: 'Excellent performance and design.', name_user: 'Fernando Lima', url_image_user: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
            { id_product: 7, rating: 4, message: 'Very fast and smooth experience.', name_user: 'Beatriz Rocha', url_image_user: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=761&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
            { id_product: 8, rating: 5, message: 'Perfect for daily use, battery lasts long.', name_user: 'Ricardo Alves', url_image_user: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
            { id_product: 9, rating: 4, message: 'Good performance for the price.', name_user: 'Mariana Lima', url_image_user: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=761&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
            { id_product: 10, rating: 3, message: 'Decent phone, camera could improve.', name_user: 'Lucas Pereira', url_image_user: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
            { id_product: 1, rating: 3, message: 'Excellent phone, fast and beautiful!', name_user: 'Lucas Almeida', url_image_user: 'https://images.unsplash.com/photo-1542393881816-df51684879df?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
            { id_product: 2, rating: 4, message: 'Very good, but battery could last longer.', name_user: 'Ana Costa', url_image_user: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=761&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
            { id_product: 3, rating: 5, message: 'Great cost-benefit!', name_user: 'João Silva', url_image_user: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
            { id_product: 1, rating: 5, message: 'Excellent phone, fast and beautiful!', name_user: 'Lucas Almeida', url_image_user: 'https://images.unsplash.com/photo-1542393881816-df51684879df?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
            { id_product: 2, rating: 4, message: 'Very good, but battery could last longer.', name_user: 'Ana Costa', url_image_user: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=761&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
            { id_product: 3, rating: 5, message: 'Great cost-benefit!', name_user: 'João Silva', url_image_user: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
            { id_product: 1, rating: 3, message: 'Excellent phone, fast and beautiful!', name_user: 'Lucas Almeida', url_image_user: 'https://images.unsplash.com/photo-1542393881816-df51684879df?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
            { id_product: 2, rating: 4, message: 'Very good, but battery could last longer.', name_user: 'Ana Costa', url_image_user: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=761&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
            { id_product: 3, rating: 5, message: 'Great cost-benefit!', name_user: 'João Silva', url_image_user: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
            { id_product: 1, rating: 5, message: 'Excellent phone, fast and beautiful!', name_user: 'Lucas Almeida', url_image_user: 'https://images.unsplash.com/photo-1542393881816-df51684879df?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
            { id_product: 2, rating: 4, message: 'Very good, but battery could last longer.', name_user: 'Ana Costa', url_image_user: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=761&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
            { id_product: 3, rating: 5, message: 'Great cost-benefit!', name_user: 'João Silva', url_image_user: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
            { id_product: 1, rating: 5, message: 'Excellent phone, fast and beautiful!', name_user: 'Lucas Almeida', url_image_user: 'https://images.unsplash.com/photo-1542393881816-df51684879df?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
            { id_product: 2, rating: 4, message: 'Very good, but battery could last longer.', name_user: 'Ana Costa', url_image_user: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=761&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
            { id_product: 3, rating: 5, message: 'Great cost-benefit!', name_user: 'João Silva', url_image_user: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
            { id_product: 1, rating: 5, message: 'Excellent phone, fast and beautiful!', name_user: 'Lucas Almeida', url_image_user: 'https://images.unsplash.com/photo-1542393881816-df51684879df?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
            { id_product: 2, rating: 4, message: 'Very good, but battery could last longer.', name_user: 'Ana Costa', url_image_user: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=761&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
            { id_product: 3, rating: 5, message: 'Great cost-benefit!', name_user: 'João Silva', url_image_user: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
            { id_product: 1, rating: 5, message: 'Excellent phone, fast and beautiful!', name_user: 'Lucas Almeida', url_image_user: 'https://images.unsplash.com/photo-1542393881816-df51684879df?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
            { id_product: 2, rating: 4, message: 'Very good, but battery could last longer.', name_user: 'Ana Costa', url_image_user: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=761&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
            { id_product: 3, rating: 5, message: 'Great cost-benefit!', name_user: 'João Silva', url_image_user: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },



            { id_product: 16, rating: 5, message: 'Fantastic tablet, perfect for drawing.', name_user: 'Fabio Costa', url_image_user: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
            { id_product: 17, rating: 4, message: 'Great display and performance.', name_user: 'Gabriela Rocha', url_image_user: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=761&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
            { id_product: 18, rating: 5, message: 'Excellent value for money.', name_user: 'Hugo Martins', url_image_user: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
            { id_product: 19, rating: 4, message: 'Good tablet, a bit heavy.', name_user: 'Isabela Nunes', url_image_user: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=761&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
            { id_product: 20, rating: 3, message: 'Decent performance, battery could improve.', name_user: 'João Pedro', url_image_user: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        ]
    });

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
