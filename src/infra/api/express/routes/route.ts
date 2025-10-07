import type { Response } from "express";
import type { Request } from "express"; 



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