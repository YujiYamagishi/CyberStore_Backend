
# Cyber - backend
This is the official back-end API for the Cyber project, responsible for business logic and data persistence,and integration with the front-end application.

## 🌐 Project Ecosystem

This repository contains the back-end API. The other related repositories are:

-   **[Cyber - Front-End](https://github.com/YujiYamagishi/AWS_FS_ABR25_D03_COMPASS_CYBER_FRONTEND.git)**: The main web application built with React that consumes this API.
## Requirements

- Node.js 24
- Git
-Nginx
-Pm2

## Getting Started

Follow these steps to set up and run the project:

1. **Clone the repository:**
   ```sh
   git clone https://github.com/YujiYamagishi/AWS_FS_ABR25_D03_COMPASS_CYBER_BACKEND.git
   git clone https://github.com/YujiYamagishi/AWS_FS_ABR25_D03_COMPASS_CYBER_FRONTEND.git
   ```

2. **Enter the project folder:**
   ```sh
   cd cyber-web-backend
   ```

3. **Create the Environment File**

   The application requires a .env file to configure the database connection. Copy the example file to create your own local configuration.
   

   ```Bash
   cp .env
   ```

   The new .env file will contain the following required variable:

   > DATABASE_URL="file:./dev.db"

4. **Initial setup:**
   ```sh
   npm run setup:dev
   ```
   This command includes `npm install` to download all dependencies, `npx prisma generate` to create a local Prisma client  and `npx prisma migrate dev` to populate the database with values. If you don't want to create a Prisma client or don't want to enter the recommended data, you can run only the commands that meet your needs individually.

5. **Run the project in development mode:**
   ```sh
   npm run dev
   ```
The server will be running on http://localhost:8000.

---

## ☁️ Cloud Infrastructure & Deployment

This guide describes the full deployment process for hosting both backend (Node.js/Express) and frontend (React/Vite) on a single AWS EC2 instance using Nginx as a reverse proxy and PM2 for process management.


Before starting the server configuration, ensure the following steps are complete:

1.  **AWS Account:** An active AWS account is available.
2.  **EC2 Instance:** A running **Ubuntu 22.04 LTS (t2.micro)** instance has been launched.
3.  **Elastic IP (EIP):** An Elastic IP has been allocated and successfully associated with the EC2 instance to prevent the public IP from changing upon restart.
4.  **Security Group:** The instance's Security Group has the following Inbound Rules:

| Port Range | Type | Source | Purpose |
| :--- | :--- | :--- | :--- |
| 22 | SSH | 0.0.0.0/0 (or your IP) | Remote Access |
| 80 | HTTP | 0.0.0.0/0 | Nginx (Frontend/Proxy) |
| 8000 | Custom TCP | 0.0.0.0/0 | Backend (Express API) |

5.  **Code Ready:** Your latest code, including the final `VITE_API_URL` setting and the corrected image URLs in the Prisma seed, is pushed to GitHub.

### 2. Server Setup & Cloning (Phases 1 & 2)

Connect to the instance via SSH and install the required platform software.

**2.1. Connect via SSH**

ssh -i /path/to/your-key.pem ubuntu@[YOUR_ELASTIC_IP]

**2.2. Install Core Software**

# Update and upgrade system packages
sudo apt update && sudo apt upgrade -y

# Install Node.js, NPM, and PM2 (Process Manager)
curl -fsSL [https://deb.nodesource.com/setup_20.x](https://deb.nodesource.com/setup_20.x) | sudo -E bash -
sudo apt install -y nodejs
sudo npm install -g pm2

# Install Nginx (Web Server and Reverse Proxy)
sudo apt install nginx -y

**2.3. Clone Repositories**

Clone both repositories into the home directory (~).

git clone https://github.com/YujiYamagishi/AWS_FS_ABR25_D03_COMPASS_CYBER_BACKEND.git
git clone https://github.com/YujiYamagishi/AWS_FS_ABR25_D03_COMPASS_CYBER_FRONTEND.git

### 3. Application Deployment & Startup

We use the production scripts (setup:prod) to handle installation, database migration, and compilation.

**3.1. Deploy and Start Backend**

cd AWS_FS_ABR25_D03_COMPASS_CYBER_BACKEND/

# 1. Install, Generate Prisma Client, Migrate DB, and Build (uses 'setup:prod' script)
npm run setup:prod

# 2. Start the Express server with PM2 on port 8000
pm2 start dist/main.js --name "cyber-backend"
pm2 start ecosystem.config.js 

# 3. Save the process list to restart automatically on server boot
pm2 save

**3.2. Deploy and Build Frontend**
cd ../AWS_FS_ABR25_D03_COMPASS_CYBER_FRONTEND/

npm install
npm run build

### 4. Nginx Configuration & Permissions

This phase ensures Nginx routes traffic correctly and resolves any Linux permission issues.

**4.1. Configure Nginx Reverse Proxy**

Create and edit the site configuration file.

sudo nano /etc/nginx/sites-available/cyber

Paste the following corrected configuration:
server {
    listen 80;
    server_name [YOUR_ELASTIC_IP];

    # 1. FRONTEND CONFIGURATION (SPA Hosting)
    root /home/ubuntu/AWS_FS_ABR25_D03_COMPASS_CYBER_FRONTEND/dist;
    index index.html;

    location / {
        try_files $uri /index.html;
    }

    # 2. BACKEND PROXY (Redirects /api/ traffic to Express on 8000)
    location /api/ {
        # Rewrites the URL, removing /api/ before sending to Express.
        rewrite /api/(.*) /$1 break;
        
        proxy_pass http://localhost:8000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }
}

**4.2. Activate Site and Apply Permissions**

# Enable the new site by creating a symbolic link
sudo ln -s /etc/nginx/sites-available/cyber /etc/nginx/sites-enabled/

# CRITICAL: Fix permissions to allow the nginx user (www-data) to traverse the home directory.
sudo chmod o+x /home/ubuntu

# Test syntax and restart Nginx
sudo nginx -t
sudo systemctl restart nginx

### 5. Final Access

Your application is now running. Access your site in a browser using your Elastic IP.

### Amazon S3 for Image Storage

All application images, such as product photos and user avatars, are hosted in an **Amazon S3 (Simple Storage Service)** bucket. This approach decouples static file storage from the application server, optimizing content delivery and improving overall performance.

-   **Bucket URL:** All images are served from the following public endpoint:
    ```
    [https://cyber-imgs-bucket.s3.us-east-2.amazonaws.com/]
    ```

# API Documentation

The API documentation is generated using Swagger and can be accessed in different environments.

### Development (Local)

When running the server locally, as described in the "Getting Started" section, the documentation is available at:

    http://localhost:8000/api-docs

### Production (Live on AWS)

The live version of the API, deployed on AWS, makes its documentation publicly available at the following endpoint:

    http://3.135.228.221:8000/api-docs

# Technologies and tools used
- Node.js
- Prisma
- Sqlite
- AWS (EC2, S3)
- Clean Architecture
- Express
- Swagger

# Project structure
This project follows the principles of Clean Architecture, separating responsibilities into well-defined layers to ensure testability and maintainability.

The main folder structure and its architectural purpose are organized as follows:

```
.
├── prisma/                 # Contains all database-related definitions (schema, migrations, seed).
│
├── src/                    # Contains all the application source code.
│   ├── domain/             # The core layer: business rules.
│   │   ├── entity/         # - Entities, pure objects with core business logic.
│   │   └── gateway/        # - Gateways, interfaces defining data persistence contracts.
│   │
│   ├── usecases/           # The application layer: orchestrates business rules.
│   │   └── ...             # - Use Cases, implementing the system's features.
│   │
│   ├── infra/              # The infrastructure layer: implementation details for tools.
│   │   ├── api/            # - Web server logic (Express), including Route classes.
│   │   └── repositories/   # - Concrete implementations of the Gateways (using Prisma).
│   │
│   └── main.ts             # The application's entry point where everything is wired up (Dependency Injection).
│
├── package.json            # Project dependencies and scripts.
└── tsconfig.json           # TypeScript configuration.
```
👨‍💻 Developer Full Stack  

[<img src="https://avatars.githubusercontent.com/u/181165633?v=4" width=125><br><sub>Yuji Yamagishi</sub>](https://github.com/YujiYamagishi) 
| :---: |


