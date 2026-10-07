import { Identity } from '@blueprint/domain-core';

export function renderUserBadge(user: Identity.User): string {
  return `User: ${user.email} (${user.roles.join(', ')})`;
}
