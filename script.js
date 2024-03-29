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

const ages =[]
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

/** Object Literals syntaz */
const person ={
    'firstname':'Jonas',
    'lastName': 'Schnieder',
    'age': 2004 -1991,
    'job':'Teacher',
    'friends':['Nike', 'Addidas', 'Reebok']
}
console.log(person)

const interestedIn = prompt(`what do you want to know about Jonas?
choose between first name, last name, age, job and friends.`)
console.log(interestedIn)
console.log(person[interestedIn])

if(person[interestedIn]){
    console.log(person[interestedIn])
}
else{
    console.log(`Wrong request!
choose between first name, last name, age, job and friends.`)
}
console.log(`${person.firstname} has ${person.friends.length} friends, and his best friend is called ${person.friends[0]}` )

const jonas={
    'firstname':'Jonas',
    'lastName': 'Schnieder',
    'birthYear': 1993,
    'job':'Teacher',
    'friends':['Nike', 'Addidas', 'Reebok'],
    //'calcAge': function () {return 2024 - this.birthYear},
    calcAge: function () {
        this.age = 2024 - this.birthYear;
        return this.age;
    },
    'hasDriversLicense': true,
    getDriversLicense: function(){
        if(this.hasDriversLicense ==true){
            return `he has a driver's license`
        }
        else{
            return `he has no driver's license`
        }
        }
    }
/**const birthYear = prompt(`What year were you born?`)
console.log(jonas.calcAge(birthYear)) */

console.log(`${jonas.calcAge()}`)
console.log(`${jonas.firstname} is a ${jonas.calcAge()} year old teacher, and ${jonas.getDriversLicense()}`)

const mark = {
    'fullName':'Mark Miller',
    'mass':'78',
    'height':'1.69',
    //'bmi':'', There's is no need to declare an empty string, the this.bmi in the calcAge function introducing an new property bmi
    calcBMI: function(){
        this.bmi = this.mass/(this.height * 2)
        return this.bmi;
    }
}
   
const john = {
    'fullName':'John Smith',
    'mass':'92',
    'height':'1.95',
    calcBMI: function(){
        this.bmi = this.mass/(this.height * 2)
        return this.bmi;
    }
}
console.log(john.calcBMI(), mark.calcBMI())

if(john.bmi > mark.bmi){
 console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than Mark Miller's (${mark.bmi})!`)   
}
else{
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than John Smith's (${john.bmi})!`)
}

/** For loops */

for (let rep = 1; rep <= 10; rep++){
    console.log(`Lifting weights repitition 💪🏿 ${rep}`)
}

const jonah =[
    'jonah',
    'John',
    2024-1987,
    'teacher',
    ['mark', 'blake', 'sullivan']
]
const types =[]
for( let i =0; i < jonah.length; i++){
    types.push(typeof jonah[i])
    if( typeof jonah[i] !=='string') continue;
    console.log(jonah[i], typeof(jonah[i]))
}
console.log(types)

for(let i = 0; i< years.length; i++){
    ages.push(2024 - years[i])
}
console.log(ages)

for(let i=jonah.length-1; i >=0; i--){
   console.log(`-----Testing Backward Loop ${jonah[i]}`)

   for(let exercise = 1; exercise <=5; exercise++){
    console.log(`Lifting weights repitition 💪🏿 ${exercise}`)
   }
}

let dice = Math.trunc(Math.random()*6)+1
console.log(dice)

while(dice !== 6){
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random()*6)+1;
    if (dice ===6)
        console.log(`Your olled ${dice}, loop is about to end ....`)

}

const bils = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
const tiips =[]
const totaals =[]

for (let i=0; i<bils.length; i++){
    tips.push(calcTip(bils[i]))
    totals.push(bils[i] + (calcTip(bils[i])))
}
console.log(bils, tiips, totaals)

function calcAvrage(arr){
    let sum =0;
    for(let i = 0; i< arr.length; i++){
        sum = sum + arr[i]
    }
    return sum / arr.length;
}
console.log(calcAvrage(totaals))