// route.ts
import type { Response } from "express";
import type { Request } from "express"; // Removemos o alias e confiamos na tipagem global.

// REMOVEMOS A INTERFACE Request, pois ela está definida em index.d.ts
/*
export interface Request extends ExpressRequest {
  auth?: {
    userId: string | null;
  };
}
*/

export enum HttpMethod {
    GET = "get",
    POST = "post",
    PATCH = "patch",
    PUT = "put",
}


export interface Route {
  // O tipo 'Request' aqui é a interface global que inclui 'auth' com 'sessionId'.
  // O retorno é 'Promise<void>' ou 'Promise<any>' dependendo da sua base. Usaremos 'any'
  // para garantir compatibilidade com as rotas.
  getHandler(): (req: Request, res: Response) => Promise<any>; 
  getPath(): string;
  getMethod(): HttpMethod;
}