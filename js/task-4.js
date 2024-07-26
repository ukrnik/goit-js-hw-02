function getShippingCost(country) {
    switch (country) {
        case "China":
            return `Shipping to ${country} will cost 100 credits`
            break;

        case "Chile":
            return `Shipping to ${country} will cost 250 credits`
        break;

        case "Australia":
            return `Shipping to ${country} will cost 170 credits`
        break;

        case "Jamaica":
            return `Shipping to ${country} will cost 120 credits`
        break;
    
        default:
            return "Sorry, there is no delivery to your country"
            break;
    }
}

// China — 100 кредитів
// Chile — 250 кредитів
// Australia — 170 кредитів
// Jamaica — 120 кредитів

console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"