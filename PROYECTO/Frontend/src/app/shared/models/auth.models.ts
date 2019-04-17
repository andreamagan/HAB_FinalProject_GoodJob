export interface Auth {
  accessToken: string,
  expiresIn: number
}

export interface LoginRequest {
  email: string;
  password: string;
  role: string;
}

export interface LoginResponse {
  uuid: string;
  email: string;
  role: string;
  expiresIn: number;
  accessToken: string;
}

export interface RegisterRequest {
  email: string;
  password: string;
  role: string;
}