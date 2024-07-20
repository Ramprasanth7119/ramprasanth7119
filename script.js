let sum=0;
let count = []
let len  = count.length;


let hasBlack = false
let isAlive = true
let message = "";
let pWant = document.getElementById("p-want")
function startGame(){
    let firstCard = getRandom()
    let secondCard = getRandom()
    sum = firstCard + secondCard;
    count = [firstCard,secondCard];
    renderGame()

}

function getRandom(){
    let randValue =  Math.floor(Math.random()*13) + 1;
    if(randValue == 1){
        return 11;
    }
    else if(randValue>10 && randValue<=13){
        return 10;
    }
    else{
        return randValue;
    }
}
function renderGame(){
    if(sum<=20){
        message = "Do you want to draw a new card?"
    }
    else if(sum==21){
        message = "You've got a Blackjack!"
        hasBlack = true
    }
    else{
        message = "You're out of the game!";
        isAlive = false    
    }
    pWant.textContent = message;

    let pSum = document.querySelector("#p-sum")
    pSum.textContent ="Sum : "+sum;

    let pCard = document.getElementById("p-card")
    pCard.textContent = "Card : "
    for(let i=0;i<count.length;i++){
        pCard.textContent += count[i] + " ";
    }
}
console.log(count)
function newCard(){
    if(isAlive === true && hasBlack === false){
        let cardValue = getRandom();
        sum+=cardValue;
        count.push(cardValue)
        renderGame();
    }
    
}


// let courses = {
//     title : "Learn CSS Grids for Free",
//     lessons : 16,
//     creator : "Stan Lee",
//     lenght : 57,
//     level : 2,
//     isFree : true,
//     tags : ["HTML","CSS"]
// }

// console.log(courses.tags)

// let person = {
//     name : "Ram",
//     age : 20,
//     country : "India"
// }
// function logData(){
//     return person.name + " is " +person.age +  " years old and lives in " +person.country +" ";
// }
// console.log(logData())


let largeCountries = ["India","Australia","WestIndices","England"]
largeCountries.push("Pakistan")
console.log(largeCountries)
largeCountries.unshift("China")
console.log(largeCountries)