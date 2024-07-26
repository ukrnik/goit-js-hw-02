// function checkForSpam(message){
//     let messageToLower = message.toLowerCase();
//     if ((messageToLower.indexOf("spam") === -1 && messageToLower.indexOf("sale")) === -1 ){
//         return false;
//     } else {
//         return true;
//     }
// }

function checkForSpam(message){
    let messageToLower = message.toLowerCase();
    return (messageToLower.indexOf("spam") === -1 && messageToLower.indexOf("sale")) === -1 ? false : true
}


console.log(checkForSpam("Latest technology news")); // false
console.log(checkForSpam("JavaScript weekly newsletter")); // false
console.log(checkForSpam("Get best sale offers now!")); // true
console.log(checkForSpam("Amazing SalE, only tonight!")); // true
console.log(checkForSpam("Trust me, this is not a spam message")); // true
console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!")); // true
console.log(checkForSpam("[SPAM] How to earn fast money?")); // true