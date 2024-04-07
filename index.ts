function convertStringtoNumber(str:string):number{
    return parseFloat(str);
}

console.log(convertStringtoNumber("199.55"))
console.log(convertStringtoNumber("54"))
console.log(convertStringtoNumber("abcd"))