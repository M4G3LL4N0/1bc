export function cls(...parts: Array<string | false | undefined>) {
  return parts.filter(Boolean).join(" ");
}
