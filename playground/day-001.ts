type Role = "admin" | "editor" | "viewer";

type Permissions = {
  canRead: boolean;
  canWrite: boolean;
  canDelete: boolean;
};

export function getPermissions(role: Role): Permissions {
  // TODO
}
