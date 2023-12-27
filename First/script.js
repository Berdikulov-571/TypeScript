// function Sum(a : number, b : number) : void
// {
//     console.log(a + b);
// }
// Function return string
function GetFullInfo(user) {
    return "FirstName : ".concat(user.firstName, "\nLastName: ").concat(user.lastName, "\nPhoneNumber: ").concat(user.phoneNumber, "\nAge: ").concat(user.Age);
}
var user = {
    firstName: "Sanajrbek",
    lastName: "Berdikulov",
    Age: 17,
    phoneNumber: "+998900074272",
};
console.log(GetFullInfo(user));
