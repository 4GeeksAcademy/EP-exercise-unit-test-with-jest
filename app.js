// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}



let fromEuroToDollar = function(valueInDollar) {
	return valueInDollar * 1.07;
}
let fromDollarToYen = function(valueInYen) {
	return valueInYen * 156.5;
}
let fromYenToPound = function(valueInPound){
    return valueInPound * 0.87;
}

console.log(fromEuroToDollar(3.5))

module.exports = {fromEuroToDollar }