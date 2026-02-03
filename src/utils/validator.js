export function validateNumbers(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("Inputs must be numbers");
  }
}
