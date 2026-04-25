import { Request, Response, NextFunction } from "express";

export interface AuthenticatedRequest extends Request {
  auth?: {
    userId: string;
    sessionClaims?: {
      orgRole?: string;
      orgId?: string;
    };
  };
}

export const requireAuth = (req: AuthenticatedRequest, res: Response, next: NextFunction): void => {
  const authHeader = req.headers.authorization;
  
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    res.status(401).json({ error: "Authentication required" });
    return;
  }

  next();
};

export const requireAdmin = (req: AuthenticatedRequest, res: Response, next: NextFunction): void => {
  if (!req.auth?.userId) {
    res.status(401).json({ error: "Authentication required" });
    return;
  }

  const userRole = req.auth.sessionClaims?.orgRole;
  
  if (userRole !== "admin") {
    res.status(403).json({ error: "Admin access required" });
    return;
  }

  next();
};

export const requireOrganizationMember = (req: AuthenticatedRequest, res: Response, next: NextFunction): void => {
  if (!req.auth?.userId) {
    res.status(401).json({ error: "Authentication required" });
    return;
  }

  if (!req.auth.sessionClaims?.orgId) {
    res.status(403).json({ error: "Organization membership required" });
    return;
  }

  next();
};
