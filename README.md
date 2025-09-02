
# Cyber - backend
This is the official back-end API for the Cyber project, responsible for business logic and data persistence.

## 🌐 Project Ecosystem

This repository contains the back-end API. The other related repositories are:

-   **[Cyber - Front-End](https://github.com/Ericklys/cyber-web-frontend.git)**: The main web application built with React that consumes this API.
## Requirements

- Node.js 24
- Git

## Getting Started

Follow these steps to set up and run the project:

1. **Clone the repository:**
   ```sh
   git clone https://github.com/fromanoel/cyber-web-backend.git
   ```

2. **Enter the project folder:**
   ```sh
   cd cyber-web-backend
   ```

3. **Initial setup:**
   ```sh
   npm run setup:dev
   ```
   This command includes `npm install` to download all dependencies, `npx prisma generate` to create a local Prisma client  and `npx prisma migrate dev` to populate the database with values. If you don't want to create a Prisma client or don't want to enter the recommended data, you can run only the commands that meet your needs individually.

4. **Run the project in development mode:**
   ```sh
   npm run dev
   ```
The server will be running on http://localhost:8000.

---
# Technologies and tools used
- Node.js
- Prisma
- Sqlite
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
# Developers 

## Backend team

| [<img loading="lazy" src="https://avatars.githubusercontent.com/u/130419872?v=4" width=125><br><sub>Fernanda Romanoel </sub>](https://github.com/fromanoel) |  [<img loading="lazy" src="https://avatars.githubusercontent.com/u/112771403?v=4" width=125><br><sub>Fernando Emidio</sub>](https://github.com/Fernando7492) |  [<img loading="lazy" src="https://avatars.githubusercontent.com/u/117694456?v=4" width=125><br><sub>Jefferson Lucas</sub>](https://github.com/JeufoDev) |
| :---: | :---: | :---: |

## Frontend team

| [<img loading="lazy" src="https://avatars.githubusercontent.com/u/128267135?v=4" width=125><br><sub>Ericklys </sub>](https://github.com/Ericklys) |  [<img loading="lazy" src="https://avatars.githubusercontent.com/u/133705031?v=4" width=125><br><sub>Tarcisio Lucas</sub>](https://github.com/T-Lucas43) |  [<img loading="lazy" src="https://avatars.githubusercontent.com/u/181165633?v=4" width=125><br><sub>Yuji Yamagishi</sub>](https://github.com/YujiYamagishi) |   [<img loading="lazy" src="https://avatars.githubusercontent.com/u/18268176?v=4" width=125><br><sub> Alvino Pedrosa</sub>](https://github.com/alvinopf) |
| :---: | :---: | :---: | :---: |