// function makeTransaction(quantity, pricePerDroid, customerCredits){
//     let totalPrice = quantity * pricePerDroid;
//     if (totalPrice <= customerCredits){
//         return `You ordered ${quantity} droids worth ${totalPrice} credits!`
//     } else {
//         return "Insufficient funds!"
//     }
// }


function makeTransaction(quantity, pricePerDroid, customerCredits){
    let totalPrice = quantity * pricePerDroid;
    return (totalPrice <= customerCredits) ? `You ordered ${quantity} droids worth ${totalPrice} credits!` : "Insufficient funds!"
}



//TODO quantity — кількість замовлених дроїдів
//TODO pricePerDroid — ціна одного дроїда
//TODO customerCredits — сума коштів на рахунку клієнта

console.log(makeTransaction(5, 3000, 23000)); // "You ordered 5 droids worth 15000 credits!"
console.log(makeTransaction(3, 1000, 15000)); // "You ordered 3 droids worth 3000 credits!"
console.log(makeTransaction(10, 5000, 8000)); // "Insufficient funds!"
console.log(makeTransaction(8, 2000, 10000)); // "Insufficient funds!"
console.log(makeTransaction(10, 500, 5000)); // "You ordered 10 droids worth 5000 credits!"
