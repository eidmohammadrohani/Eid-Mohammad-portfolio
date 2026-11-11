// A link is only shown when it is a real https address.
// This keeps empty placeholders and typos from becoming broken links.
export function isHttpsUrl(value) {
  if (typeof value !== 'string') return false
  try {
    return new URL(value.trim()).protocol === 'https:'
  } catch {
    return false
  }
}
