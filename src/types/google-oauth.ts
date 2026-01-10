// src/types/google-oauth.ts
export interface GoogleCredentialResponse {
  credential?: string;
  select_by?: string;
  clientId?: string;
}

export interface GoogleAuthResponse {
  token: string;
  tokenType: string;
  user: {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    roles: string[];
    createdAt: string;
    desiredRole?: string;
    roleApprovalStatus?: string;
  };
  message?: string;
}

export interface GoogleAuthError {
  message?: string;
  error?: string;
  status?: number;
}