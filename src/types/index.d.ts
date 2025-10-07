import { Session, User } from '@clerk/clerk-sdk-node';
import "express";

declare global {
  namespace Express {
    interface Request {
      auth: {
        
        sessionId: string | null;
        userId: string | null;
      };
    }
  }
}

export {};