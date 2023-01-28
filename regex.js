// function isValidName(name){
//     let regex = /^[A-Z][a-z]*$/;
//     if(regex.test(name) == true){
//         console.log(name + " valid")
//     }else{
//         console.log(name + " invalidx");
//     }
// }

// function IsValidPassportNumbor(passport){
// let regex = /^[A-Z]{2}[0-9]{7}/;
//     if(regex.test(passport) == true){
//         console.log(passport + " valid")
//     }else{
//         console.log(passport + " invalidx");
//     }
// }



// isValidName("Asilbek");
// isValidName("asilbek");
// isValidName("Asilbek1");
// isValidName("1284");


// IsValidPassportNumbor("AA1234567")
// IsValidPassportNumbor("Ae1234567")
// IsValidPassportNumbor("bb1234567")
// IsValidPassportNumbor("AA234567")


function IsValidMobailNumbor(mobail){
    let regex = /[+]9989[0-9][0-9]{7}$/
        if(regex.test(mobail) == true){
            console.log(mobail + " valid")
        }else{
            console.log(mobail + " invalidx");
        }
    }

IsValidMobailNumbor("+998912344512")
IsValidMobailNumbor("+99899236452")
IsValidMobailNumbor("+99812344512")