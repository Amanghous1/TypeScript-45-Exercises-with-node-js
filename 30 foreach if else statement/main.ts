// Creating a array
let userNames = ["Mahad", "Zeeshan", "Admin", "Usman", "Saad"];

// Using foreach loop on array
userNames.forEach(oneUser =>{
    if(oneUser === "Admin"){
        console.log(`Hello ${oneUser}, would you like to see a status report?`)
    }else{
        console.log(`Hello ${oneUser}, thankyou for logging in again.`)
    }
})

