import {num}from "../interfaces";
export default function printTraingle(n:num) {
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
