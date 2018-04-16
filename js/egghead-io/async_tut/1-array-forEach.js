// Take an array of sock objects, return only the symbols


// part 1, using the for loop
function getSymbols(stocks) {

	let symbols = [],
		  counter; 

	for ( counter = 0; counter < stocks.length; counter += 1 ) {
		symbols.push(stocks[counter].symbol) ;
	}

	return symbols;
}

// part2, usinf forEach

function getSymbols2(stocks) {
	let symbols = []

	stocks.forEach(stock => symbols.push(stock.symbol))

	return symbols
}

// I bet we could use map here:

function getSymbols3(stocks) {
	return stocks.map(stock => stock.symbol)
}

let stocks = [
	{symbol: "asdf", price: "lits"},
	{symbol: "cool", price: "many"},
	{symbol: "sweet", price: "money"}, 
]

let symbols = getSymbols(stocks);
let symbols2 = getSymbols2(stocks);
let symbols3 = getSymbols3(stocks);

console.log(symbols)
console.log(symbols2)
console.log(symbols3)
