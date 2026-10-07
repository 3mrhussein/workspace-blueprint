import type { User } from '../domain/User.js';

export interface AuthenticateInput {
  readonly email: string;
  readonly passwordHash: string;
}

export interface IIdentityService {
  authenticate(input: AuthenticateInput): Promise<User | null>;
  getUserById(id: string): Promise<User | null>;
}
