type User = {
    FullName: string,
    Gender: boolean,
}

var users: User[] =
    [
        { FullName: "Sanjarbek", Gender: true },
        { FullName: "Muhlisa", Gender: false },
        { FullName: "Alisher", Gender: true },
        { FullName: "Jonibek", Gender: true },
        { FullName: "Maftuna", Gender: false },
        { FullName: "Javohir", Gender: true },
        { FullName: "Zilola", Gender: false },
    ]

function Check() {
    let element = document.getElementById("input");
    let text = element?.value;

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
btn?.addEventListener('click', Check);



function GetMales2() {

    let maleUsers = users.filter(x => x.Gender === true);
    removeTableRows();
    for (let i = 0; i < maleUsers.length; i++) {
        let table = document.getElementById("table");

        let tr = document.createElement("tr");
        let td1 = document.createElement("td");
        let td2 = document.createElement("td");

        td1.innerHTML = maleUsers[i].FullName;
        td2.innerHTML = "Male";

        tr.appendChild(td1);
        tr.appendChild(td2);

        table?.append(tr);
    }
}

function GetFemales2() {

    let maleUsers = users.filter(x => x.Gender === false);
    removeTableRows();
    for (let i = 0; i < maleUsers.length; i++) {
        let table = document.getElementById("table");

        let tr = document.createElement("tr");
        let td1 = document.createElement("td");
        let td2 = document.createElement("td");

        td1.innerHTML = maleUsers[i].FullName;
        td2.innerHTML = "Female";

        tr.appendChild(td1);
        tr.appendChild(td2);

        table?.append(tr);
    }
}


function removeTableRows() {
    let tr = document.querySelectorAll('tbody tr');
    tr.forEach(element => {
        element.remove();
    });
}