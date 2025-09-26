// src/infra/api/api.interface.ts

import type { Express } from "express";

export interface Api {
  app: Express;
  start(port: number): void;
}