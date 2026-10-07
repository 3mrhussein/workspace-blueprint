export interface User {
  readonly id: string;
  readonly email: string;
  readonly roles: readonly string[];
  readonly createdAt: Date;
}
