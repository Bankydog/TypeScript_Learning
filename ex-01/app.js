function combine(n1, n2, resultConversion) {
    var result;
    if ((typeof n1 === "number" && typeof n2 === "number") ||
        resultConversion === "as-number") {
        result = +n1 + +n2;
    }
    else {
        result = n1.toString() + n2.toString();
    }
    return result;
}
var combinedAges = combine(30, 26, "as-number");
console.log(combinedAges);
var combinedNames = combine("Bank", "Bow", "as-text");
console.log(combinedNames);
var combinedStringAges = combine("10", "226", "as-number");
console.log(combinedStringAges);
