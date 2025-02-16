type Combinable = number | string;
type ConversionDescriptor = "as-number" | "as-text";

function combine(
  n1: Combinable,
  n2: Combinable,
  resultConversion: ConversionDescriptor
) {
  let result;
  if (
    (typeof n1 === "number" && typeof n2 === "number") ||
    resultConversion === "as-number"
  ) {
    result = +n1 + +n2;
  } else {
    result = n1.toString() + n2.toString();
  }
  return result;
}

const combinedAges = combine(30, 26, "as-number");
console.log(combinedAges);

const combinedNames = combine("Bank", "Bow", "as-text");
console.log(combinedNames);

const combinedStringAges = combine("10", "226", "as-number");
console.log(combinedStringAges);
