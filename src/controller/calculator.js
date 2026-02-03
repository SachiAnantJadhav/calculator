import { validateNumbers } from "../utils/validator.js";
import { log } from "../utils/logger.js";

import add from "../operations/add.js";
import subtract from "../operations/subtract.js";
import multiply from "../operations/multiply.js";
import divide from "../operations/divide.js";

export function calculate(operation, a, b) {
  validateNumbers(a, b);

  let result;

  switch (operation) {
    case "add":
      result = add(a, b);
      break;
    case "subtract":
      result = subtract(a, b);
      break;
    case "multiply":
      result = multiply(a, b);
      break;
    case "divide":
      result = divide(a, b);
      break;
    default:
      throw new Error("Invalid operation");
  }

  log(operation, a, b, result);
  return result;
}
