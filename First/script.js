function Sum(a, b) {
    console.log(a + b);
}
var numArray = [3, 4, 65, 11, 6, 7, 2, 34, 6, 8, 9, 10];
var stringArray = ['G', 'R', 'A', 'C', 'R', 'B', 'D'];
numArray.sort(function (a, b) { return a - b; });
stringArray.sort();
console.log(numArray);
console.log(stringArray);
