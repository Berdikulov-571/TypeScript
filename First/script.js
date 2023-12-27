// function Sum(a : number, b : number) : void
// {
//     console.log(a + b);
// }
var person = {
    firstName: "Sanjarbek",
    lastName: "Berdikulov",
    Age: 17,
    phoneNumber: "900074272",
    address: "Bekobod",
};
function getPersonInfo(person) {
    return "FirstName : ".concat(person.firstName, "\nLastName: ").concat(person.lastName, "\nPhoneNumber: ").concat(person.phoneNumber, "\nAge: ").concat(person.Age, "\nAddress: ").concat(person.address);
}
console.log(getPersonInfo(person));
