var users = [
    { FullName: "Sanjarbek", Gender: true },
    { FullName: "Muhlisa", Gender: false },
    { FullName: "Alisher", Gender: true },
    { FullName: "Jonibek", Gender: true },
    { FullName: "Maftuna", Gender: false },
    { FullName: "Javohir", Gender: true },
    { FullName: "Zilola", Gender: false },
];
function Check() {
    var element = document.getElementById("input");
    var text = element === null || element === void 0 ? void 0 : element.value;
    if (text == "male") {
        GetMales2();
    }
    else if (text == "female") {
        GetFemales2();
    }
    else if (text == "getall") {
        GetAll();
    }
}
function refresh() {
    window.location.reload();
}
var btn = document.getElementById("btn");
btn === null || btn === void 0 ? void 0 : btn.addEventListener('click', Check);
function GetMales2() {
    var maleUsers = users.filter(function (x) { return x.Gender === true; });
    removeTableRows();
    for (var i = 0; i < maleUsers.length; i++) {
        var table = document.getElementById("table");
        var tr = document.createElement("tr");
        var td1 = document.createElement("td");
        var td2 = document.createElement("td");
        td1.innerHTML = maleUsers[i].FullName;
        td2.innerHTML = "Male";
        tr.appendChild(td1);
        tr.appendChild(td2);
        table === null || table === void 0 ? void 0 : table.append(tr);
    }
}
function GetFemales2() {
    var maleUsers = users.filter(function (x) { return x.Gender === false; });
    removeTableRows();
    for (var i = 0; i < maleUsers.length; i++) {
        var table = document.getElementById("table");
        var tr = document.createElement("tr");
        var td1 = document.createElement("td");
        var td2 = document.createElement("td");
        td1.innerHTML = maleUsers[i].FullName;
        td2.innerHTML = "Female";
        tr.appendChild(td1);
        tr.appendChild(td2);
        table === null || table === void 0 ? void 0 : table.append(tr);
    }
}
function removeTableRows() {
    var tr = document.querySelectorAll('tbody tr');
    tr.forEach(function (element) {
        element.remove();
    });
}
