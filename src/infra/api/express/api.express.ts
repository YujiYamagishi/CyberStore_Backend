import type { Api } from "../api";
import * as express from "express";
import type { Express } from "express";
import type { Route } from "./routes/route";
import * as cors from "cors";
export class ApiExpress implements Api {
    public app: Express;

    private constructor(routes: Route[]) {
        this.app = express();

        const corsOptions = {
            "origin" : 'http://localhost:5173'
        }
        this.app.use(cors(corsOptions));
        this.app.use(express.json());
        this.addRoutes(routes);
        this.listRoutes();
    }

    public static create(routes: Route[]) {
        return new ApiExpress(routes)
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
                }
            });
    }
}