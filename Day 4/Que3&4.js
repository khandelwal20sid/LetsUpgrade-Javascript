let data = [
    {
        name: "Siddharth",
        age: 20,
        country: "India",
        hobbies: ["Cricket","Sketching"],
    },

    {
        name:"abc",
        age: 10,
        country: "Australia",
        hobbies: ["coding", "singing"]        
    },

    {
        name: "mnb",
        age:15,
        country:"India",
        hobbies:["nothing","sleeping"],        
    },

    {
        name:"poi",
        age:54,
        country:"Canada",
        hobbies:["singing","dancing"],        
    }

]

function printobjs(){
    for(let i=0; i<data.length; i++){
        console.log(data[i]);
    }
}

printobjs();

//Que 4
console.log("Question 4");

function ageb(){
    for(let j=0; j<data.length; j++){ 
        if (data.age<30) {
            console.log(data[j]);
        }
    }
}


function countryind(){
    for(let i=0; i<data.length; i++) {
        if (data.country=="India") {
            console.log(data[i]);
        }
    }
}

ageb();
countryind();
