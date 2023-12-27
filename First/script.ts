function Sum(a : number, b : number) : void
{
    console.log(a + b);
}

let numArray : number[] = [3,4,65,11,6,7,2,34,6,8,9,10]
let stringArray : string[] = ['G','R','A','C','R','B','D']

numArray.sort((a,b) => a - b);
stringArray.sort();

console.log(numArray);
console.log(stringArray);