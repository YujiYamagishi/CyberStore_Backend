import type { Request as ExpressRequest, Response } from "express";

export interface Request extends ExpressRequest {
  auth?: {
    userId: string | null;
  };
}


export enum HttpMethod {
    GET = "get",
    POST = "post",
    PATCH = "patch",
    PUT = "put",
}


export interface Route {
  getHandler(): (req: Request, res: Response) => Promise<any>;
  getPath(): string;
  getMethod(): HttpMethod;
}