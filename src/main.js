import { calculate } from "./controller/calculator.js";

const operation = "divide";
const a = 20;
const b = 4;

try {
  const result = calculate(operation, a, b);
  console.log(`Result: ${result}`);
} catch (error) {
  console.error("Error:", error.message);
}
