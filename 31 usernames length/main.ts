let userNames = ["Mahad", "Ali", "Sara", "Admin", "Usman"];

userNames = []

if(userNames.length === 0){
    console.log("Your Array in Empty We need to finds some users!")
}else{
   // Using foreach loop on array
userNames.forEach(oneUser =>{
    if(oneUser === "Admin"){
        console.log(`Hello ${oneUser}, would you like to see a status report?`)
    }else{
        console.log(`Hello ${oneUser}, thankyou for logging in again.`)
    }
})
}

