import type { Api } from "../api.interface";
import * as express from "express";
import type { Express, Request, Response, NextFunction } from "express";
import type { Route } from "./routes/route";
import * as cors from "cors";
import { ClerkExpressRequireAuth } from '@clerk/clerk-sdk-node';

export class ApiExpress implements Api {
    public app: Express;

    private constructor(routes: Route[]) {
        this.app = express();
        
        this.app.use((req: Request, res: Response, next: NextFunction) => {
            next();
        });

        this.app.use(cors());
        this.app.use(express.json());

        
        this.app.use('/api/shopping_carts', ClerkExpressRequireAuth());
        this.app.use('/shopping-cart', ClerkExpressRequireAuth());
        
        
        this.addRoutes(routes);

       
        this.logRegisteredRoutes(routes);
    }

    public static create(routes: Route[]) {
        return new ApiExpress(routes);
    }

    private addRoutes(routes: Route[]) {
        routes.forEach((route) => {
            const path = route.getPath();
            const method = route.getMethod();
            const handler = route.getHandler();
            (this.app as any)[method](path, handler); 
        });
    }

    public start(port: number = 8000) { 
        this.app.listen(port, () => {
             console.log(`🚀 Servidor backend rodando em http://localhost:${port}`);
        });
    }
    
    
    private logRegisteredRoutes(routes: Route[]) {
        console.log("======================================");
        console.log("========= ROTAS REGISTRADAS ==========");
        
        if (routes.length === 0) {
            console.log("NENHUMA ROTA FOI PASSADA PARA O SERVIDOR.");
        } else {
            routes.forEach((route) => {
                const path = route.getPath();
                const method = route.getMethod();
                console.log(`-> [${method.toUpperCase()}] ${path}`);
            });
        }
        
        console.log("======================================");
    }
}