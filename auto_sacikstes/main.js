let points = 10
let dice1 = 0
let dice2 = 0

function game(){
    dice1=(Math.floor(Math.random()*6)+1)
    dice2=(Math.floor(Math.random()*6)+1)

    document.getElementById("output").innerHTML = "🎲 = " + dice1 + "<br>" + "🎲 = " + dice2

    let diceSum = dice1 + dice2

    if (diceSum == 7){
        points += 2
        document.getElementById("output").innerHTML +="<br>" + "<b>✅Dice Sum is 7, You get 2 points<b>"
    } else {points -= 1}

    document.getElementById("pointNum").innerHTML = "Point count: " + points

    if (points==0){document.getElementById("close").innerHTML = ""}
}

document.getElementById("bt1").addEventListener("click", game)
document.getElementById("bt2").addEventListener("click", function(){document.getElementById("close").innerHTML = ""})