type Role = "admin" | "editor" | "viewer";

type Permission = {
  canRead: boolean;
  canWrite: boolean;
  canDelete: boolean;
};

export function getPermissions(role: Role): Permission {
  switch (role) {
    case "admin":
      return { canRead: true, canWrite: true, canDelete: true };
    case "editor":
      return { canRead: true, canWrite: true, canDelete: false };
    case "viewer":
      return { canRead: true, canWrite: false, canDelete: false };
    default:
      const _exhaustive: never = role;
      return _exhaustive;
  }
}
// version 1 feedback: 9/10 working but not scalable

// version 2

const permissionsByRole: Record<Role, Permission> = {
  admin: {
    canRead: true,
    canWrite: true,
    canDelete: true,
  },
  editor: {
    canRead: true,
    canWrite: true,
    canDelete: false,
  },
  viewer: {
    canRead: true,
    canWrite: false,
    canDelete: false,
  },
};

export function getPermissionsV2(role: Role): Permission {
  switch (role) {
    case "admin":
    case "editor":
    case "viewer":
      return permissionsByRole[role];
    default:
      const _exhaustive: never = role;
      return _exhaustive;
  }
}

// version 2 feedback: 9.5/10 scalable but gave redundant exhaustiveness check switch and permissionsByRole: Record<Role, Permission>

// version 3 10/10

export function getPermissionsV3(role: Role): Permission {
  return permissionsByRole[role];
}
