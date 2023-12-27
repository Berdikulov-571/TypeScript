// type User = {
//     firstName : string,
//     lastName : string,
//     phoneNumber: string,
//     Age : number
// }
// function GetFullInfo(user : User) : string
// {
//     return `FirstName : ${user.firstName}\nLastName: ${user.lastName}\nPhoneNumber: ${user.phoneNumber}\nAge: ${user.Age}`;
// }
// let user : User =
// {
//     firstName : "Sanajrbek",
//     lastName : "Berdikulov",
//     Age : 17,
//     phoneNumber : "+998900074272",
// }
// console.log(GetFullInfo(user));
// interface IUser {
//     firstName: string,
//     lastName: string,
//     phoneNumber: string,
//     Age: number
// }
// interface IPerson extends IUser {
//     address: string,
// }
// let person: IPerson =
// {
//     firstName: "Sanjarbek",
//     lastName: "Berdikulov",
//     Age: 17,
//     phoneNumber: "900074272",
//     address: "Bekobod",
// }
// function getPersonInfo(person: IPerson): string {
//     return `FirstName : ${person.firstName}\nLastName: ${person.lastName}\nPhoneNumber: ${person.phoneNumber}\nAge: ${person.Age}\nAddress: ${person.address}`;
// }
// console.log(getPersonInfo(person));
// type Person = {
//     firstName : string,
//     lastName : string,
//     phoneNumber: string,
//     Age : number
// }
// type User = Person & {
//     Address : string,
// }
// let user : User = {
//     firstName: "Sanjarbek",
//     lastName: "Berdikulov",
//     Age: 17,
//     phoneNumber: "900074272",
//     Address: "Bekobod",
// }
// console.log(user.Address);
// Enum
// enum Dictionary{
//     Rus,
//     Uzb,
//     Eng,
//     Kril
// }
// for(let i = 0; i < 4; i++)
// {
//     console.log(Dictionary[i]);
// }
// Tuple
var array = ["sanjarbek", 1, true];
console.log(array);
