type Role = "admin" | "editor" | "viewer";

type Permission = {
  canRead: boolean;
  canWrite: boolean;
  canDelete: boolean;
};

function getPermissions(role: Role): Permission {
  // TODO
}
