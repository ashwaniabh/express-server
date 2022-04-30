"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function printTraingle(n) {
    let pattern = "";
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - i; j++) {
            pattern += " ";
        }
        for (let j = 0; j < i + 1; j++) {
            pattern += "* ";
        }
        pattern += "\n";
    }
    console.log(pattern);
}
exports.default = printTraingle;
//# sourceMappingURL=Equilateral%20triangle.js.map