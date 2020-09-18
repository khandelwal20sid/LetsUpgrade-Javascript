let details = [
    {
        name:"Siddharth",
        age:20,
        city: "Indore",
        salary: 1200000,
    },

    {
        name:"Roopal",
        age:20,
        city:"Baitul",
        salary:1100000,
    },

    {
        name:"Shikha",
        age:20,
        city:"Ujjain",
        salary:900000,
    },

    {
        name:"Vaibhav",
        age:21,
        city:"Khandwa",
        salary:1150000
    },

    {
        name:"Tanmay",
        age:20,
        city:"Indore",
        salary:1200000
    },
]


function display(data) {
    let tabledata="";

    data.forEach(function(element, index) {
        let currentdata = `<tr>
        <td>${index+1}</td>
        <td>${element.name}</td>
        <td>${element.age}</td>
        <td>${element.city}</td>
        <td>${element.salary}</td>
        <td><button onclick="deleteDetails(${index})">delete </button> </td>
        </tr>`

        tabledata += currentdata;
        

        document.getElementById("tbody").innerHTML=tabledata;
    });
}

display(details);

function searchName() {
    let serachValue = document.getElementById("searchName").value;
    let newdata = details.filter(function (Sname) {
        return (Sname.name.indexOf(serachValue));
    });

    display(newdata);
}

function searchCity() {
    let serachCValue = document.getElementById("searchCity").value;
    let  newCdata = details.filter(function (Scity) {
        return (Scity.city.indexOf(serachCValue));
    });

    display(newCdata);
}

function deleteDetails(index){
     details.splice(index,1);   
    display (details);
}