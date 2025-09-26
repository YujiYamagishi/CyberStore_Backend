// src/infra/api/express/routes/route.ts

import type { Request as ExpressRequest, Response } from "express";

// Define que a propriedade `auth` PODE existir no objeto `req`, mas é opcional.
// Isso satisfaz tanto as rotas públicas quanto as protegidas pelo Clerk.
export interface Request extends ExpressRequest {
  auth?: {
    userId: string | null;
  };
}

// Seu enum HttpMethod
export enum HttpMethod {
    GET = "get",
    POST = "post",
    PATCH = "patch",
    PUT = "put",
}

// A interface Route agora usa nosso `Request` aprimorado.
export interface Route {
  getHandler(): (req: Request, res: Response) => Promise<any>;
  getPath(): string;
  getMethod(): HttpMethod;
}