import type { Api } from "../api.interface";
import * as express from "express";
import type { Express, Request, Response, NextFunction } from "express";
import type { Route } from "./routes/route";
import * as cors from "cors";
// ✅ Importa o middleware de segurança do Clerk
import { ClerkExpressRequireAuth } from '@clerk/clerk-sdk-node';

export class ApiExpress implements Api {
    public app: Express;

    private constructor(routes: Route[]) {
        this.app = express();

        // --- ORDEM CORRETA DOS MIDDLEWARES ---

        // 1. (Opcional) Middleware de debug para logar todas as requisições que chegam
        this.app.use((req: Request, res: Response, next: NextFunction) => {
            console.log(`--> [${new Date().toLocaleTimeString()}] Requisição Recebida: ${req.method} ${req.originalUrl}`);
            next();
        });

        // 2. Middleware de CORS para permitir requisições do seu frontend
        this.app.use(cors());

        // 3. Middleware para ler o corpo de requisições em formato JSON
        this.app.use(express.json());

        // 4. Middleware de segurança do Clerk para proteger as rotas do carrinho
        // Qualquer chamada para essas rotas vai exigir um token de autenticação válido.
        this.app.use('/api/shopping_carts', ClerkExpressRequireAuth());
        this.app.use('/shopping-cart', ClerkExpressRequireAuth());

        // 5. Adiciona as rotas da sua aplicação (agora protegidas)
        this.addRoutes(routes);
        this.listRoutes();
    }

    public static create(routes: Route[]) {
        return new ApiExpress(routes);
    }

    private addRoutes(routes: Route[]) {
        routes.forEach((route) => {
            const path = route.getPath();
            const method = route.getMethod();
            const handler = route.getHandler();
            this.app[method](path, handler);
        });
    }

    public start(port: number) {
        this.app.listen(port, () => {
            console.log(`Server running on port ${port}`);
        });
    }

    private listRoutes() {
        if (!this.app._router || !this.app._router.stack) {
            return;
        }
        const routes = this.app._router.stack
            .filter((route: any) => route.route)
            .map((route: any) => {
                return {
                    path: route.route.path,
                    method: route.route.stack[0].method,
                };
            });
    }
}