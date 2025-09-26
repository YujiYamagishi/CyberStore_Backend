// src/types/express/index.d.ts

import { Session, User } from '@clerk/clerk-sdk-node';


declare global {
  namespace Express {
    interface Request {
      auth: {
        // Se você instalou @clerk/clerk-sdk-node
        // use os tipos dele para ter autocomplete
        sessionId: string | null;
        userId: string | null;
      };
    }
  }
}

// É necessário um export vazio para que o TypeScript trate este como um módulo.
export {};