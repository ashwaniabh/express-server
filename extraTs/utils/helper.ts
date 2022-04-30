import {str}from "../interfaces";
export function validation(email:str) {
    var pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
    return pattern.test(email)
}