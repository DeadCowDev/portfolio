export function htmlClass(...classes: string[]) {
  return classes
    .map((c) => c.trim())
    .filter(Boolean)
    .join(" ");
}
