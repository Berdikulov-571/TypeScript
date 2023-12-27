// function Sum(a : number, b : number) : void
// {
//     console.log(a + b);
// }

// let numArray : number[] = [3,4,65,11,6,7,2,34,6,8,9,10]
// let stringArray : string[] = ['G','R','A','C','R','B','D']

// numArray.sort((a,b) => a - b);
// stringArray.sort();

// console.log(numArray);
// console.log(stringArray);




type User = {
    firstName : string,
    lastName : string,
    phoneNumber: string,
    Age : number
}


function GetFullInfo(user : User) : string
{
    return `FirstName : ${user.firstName}\nLastName: ${user.lastName}\nPhoneNumber: ${user.phoneNumber}\nAge: ${user.Age}`;
}

let user : User = 
{
    firstName : "Sanajrbek",
    lastName : "Berdikulov",
    Age : 17,
    phoneNumber : "+998900074272",
}

console.log(GetFullInfo(user));