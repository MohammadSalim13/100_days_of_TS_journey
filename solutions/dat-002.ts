export function parseUser(data: unknown) {
  if (
    typeof data === "object" &&
    data !== null &&
    "name" in data &&
    typeof data.name === "string"
  ) {
    return data.name.toUpperCase();
  }
}

// version 1 feedback: data.name is not valid in TS even if after check existence of name
// version 1 feedback: return type is string | undefined

export function parseUserV2(data: unknown): string {
  if (typeof data === "object" && data !== null && "name" in data) {
    const user = data as { name: unknown };

    if (typeof user.name === "string") {
      return user.name.toUpperCase();
    }
  }

  throw new Error("Invalid user data");
}

// version 2 feedback: 10/10
