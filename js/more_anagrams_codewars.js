const checkAnagrams = (wordOne, wordTwo) => wordOne.split("").sort() === wordTwo.split("").sort()

console.log(checkAnagrams("cool", "looc"))
console.log(checkAnagrams("a", "b"))
