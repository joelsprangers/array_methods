
//A, B

let coolnessList = [
    "nice",
    "awesome",
    "tof"
];

const addCoolness = () => coolnessList.push("cool");
addCoolness(coolnessList);

//console.log(coolnessList);
//console.log("adding cool: ", coolnessList);
//console.log("number of items: "+ coolnessList.length);

//C

let countryList = ["Belgie", "Nederland", "Luxemburg"];

const firstCountry = () => countryList[0];

console.log(firstCountry());

//D

let animals = ["Haas", "Cavia", "Kip", "Schildpad"];

const lastAnimal = () => animals[animals.length - 1];

console.log(lastAnimal());


//E

const presidents = ["Trump", "Obama", "Bush", "Clinton"]

const impeachTrumpSlice = function (array) {
    return presidents.slice(1);

}
const impeachTrumpSplice = function (array) {
    presidents.splice(0, 1);
    return presidents;
}

console.log(impeachTrumpSlice(presidents)); // ["Obama", "Bush", "Clinton"]
console.log(impeachTrumpSplice(presidents)); // ["Obama", "Bush", "Clinton"]
console.log(presidents);

//F

stringsTogether = (array) => array.join(' ');

console.log(stringsTogether(['Winc', 'Academy', 'is', 'leuk', ';-}'])) 
//resultaat: "Winc Academy is leuk ;-}"


//G
const combineArrays = (arrayOne, arrayTwo) => arrayOne.concat(arrayTwo); 
let combinedArrays = combineArrays([1,2,3], [4,5,6])

console.log(combinedArrays);
// resultaat: [1,2,3,4,5,6]