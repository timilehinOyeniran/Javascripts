'use strict';

function fruitJuice(apples, oranges){
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges`
    return juice;
}

const appleJuice = fruitJuice(2, 0)
console.log(appleJuice)

const currentYear = 2024
function calcAge(birthYear){
    const age = currentYear - birthYear
    return age
}

const currentAge = calcAge(1993);
console.log(currentAge)

const calcAge2 = function calcAge(birthYear){
    const age = currentYear - birthYear
    return age
}

const calcAge3 = birthYear => currentYear-birthYear
const age3 = calcAge3(1993)

const calcYearsUntilRetirement = firstName =>{
    const retirementAge = 65 - currentAge
    if (retirementAge > 0) {
        return `${firstName} retires in ${retirementAge} years`
    } else {
        return -1;
    }
}

const retirementAge = calcYearsUntilRetirement( `Timi`)
console.log(retirementAge)

function cutFruitPieces (fruit){
    return fruit * 4
}
function fruitProcessor(apples, oranges){
    console.log(apples, oranges);
    const applePieces = cutFruitPieces(5);
    const orangePieces = cutFruitPieces(5);
    const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges`
    return juice;
}

const newJuice = fruitProcessor(5, 10)
console.log(newJuice)

const calcAverage = (score1, score2, score3)=>{
    const averageScore= (score1+score2+score3)/3
    return averageScore;
}

let scoreDolphins = calcAverage(44,23,71);
let scoreKoalas = calcAverage(65,54,49);
//function calcAverage(){}

function checkWinner(avgDolphins, avgKoalas){
    if(avgDolphins >= (avgKoalas*2)){
        console.log(`Dolphins win ( ${avgDolphins} vs. ${avgKoalas})`)
    }
    else if (avgKoalas >=(avgDolphins*2)){
        console.log(`Koalas win ( ${avgKoalas} vs. ${avgDolphins})`)
    }
    else{
        console.log(`No team wins...`)
    }
}

checkWinner(scoreDolphins, scoreKoalas)
//Test Data 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);

checkWinner(scoreDolphins, scoreKoalas)

//Array
const years = [1990, 1987, 2007, 2018]
const age1 =calcAge(years[0])
const age2=calcAge(years[years.length-1])
const ages3 = calcAge(years[1])
console.log(age1, age2, ages3)

const ages =[age1, age2, ages3]
console.log(ages)

/**Array Methods */

const friends=[`Lade`, `Nike`, `Moyo`, `AY`]
//Add new element to array
friends.push(`Ruth`)
const newlength = friends.length
console.log(friends)
console.log(newlength)

//add new element to the first position
friends.unshift(`Romke`)
console.log(friends)

//Remove last element from an array
friends.pop(friends.length -1)
console.log(friends)

//Remove firt element
//const testShift = 
friends.shift()
//console.log(testShift)
console.log(friends)

friends.push(23)
console.log(friends)
console.log(friends.indexOf(23))
console.log(friends.includes(23))

if(friends.includes(`Nike`)){
    console.log(`You have a friend named Nike`)
}
/** Solution 1 */
const bills =[125, 555, 44]
let tip;

const calcTip = bill=>{
    if (bill>=50 && bill<=300){
        tip = 0.15 * bill
        return tip
    }
    else{
        tip = 0.20 *bill
        return tip
    }
}
const tipA = calcTip(bills[2])

const tips=[18.75, 111, 8.8]
const total = bills[2] + calcTip(bills[2])

console.log(tipA, total)
const totals=[143.75, 666, 52.8]

//Solution 2 with tenary opertors
//const calcTips =  bill =>bill >=50 && bill <=300 ? bill * 0.15 : bill * 0.2
const billss = [125, 555, 44]
const calcTipss = function(bill){
    return bill >=50 && bill<=300 ? bill * 0.15 : bill * 0.2
}
const tipps = [calcTipss(billss[0]), calcTipss(billss[1]), calcTipss(billss[2])]
const totalss=[billss[0] + tipps[0], billss[1] + tipps[1] ,billss[2] + tipps[2]]
console.log(bills, tipps, totalss)