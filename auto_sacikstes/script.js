window.onload=function(){
    endScreen.style.display="none"
    speedButton.style.display="none"
    restartEngineer.style.display="none"
    restartButton.style.display="none"

}

let playerSpeed = 0
let enemySpeed = 0
let clicks = 0

startButton.addEventListener("click", function(){

    if(playerCar1.checked){playerCarBox.innerHTML = "<img src='fiat126.png'>"}

    if(playerCar2.checked){playerCarBox.innerHTML = "<img src='doubledecker.png'>"}

    if(playerCar3.checked){playerCarBox.innerHTML = "<img src='nissansilvia.png'>"}

    startScreen.style.display = "none";

    enemyDrive = setInterval(function(){

        enemySpeed += Math.floor(Math.random()*7)

        statRow2.innerHTML = "Enemy: " + Math.floor(enemySpeed/9) + " km/h"
        
        enemyCarBox.style.marginLeft = enemySpeed + "px"

        if(enemySpeed>= 925){clearInterval(enemyDrive)}

    }, 50)

})

startRaceButton.addEventListener("click", function(){

    let carStart = Math.random()

    if(carStart>=0.3){

        if(playerCar1.checked){}

        startRaceButton.style.display="none"
        speedButton.style.display="block"

    } else{

        restartEngineer.style.display="block"
        restartButton.style.display="block"
        startRaceButton.style.display="none"

    }

})

restartButton.addEventListener("click", function(){location.reload()})

speedButton.addEventListener("click", function(){

    playerSpeed += Math.floor(Math.random()*19)+1
    statRow1.innerHTML = "Player: " + Math.floor(playerSpeed/9) + " km/h"
    playerCarBox.style.marginLeft = playerSpeed + "px"

    clicks++
    statRow3.innerHTML = "Clicks: " + clicks

    if(playerSpeed>=925 || enemySpeed>= 925){
        
        speedButton.style.display = "none"
        statScreen.style.display = "none"
        endScreen.style.display = "block"

        if(playerSpeed>enemySpeed){endRow0.innerHTML = "You Won!"} else {endRow0.innerHTML = "You Lost!"}

        

        endRow1.innerHTML = "Player Top Speed: " + Math.floor(playerSpeed/9) + " km/h"

        endRow2.innerHTML = "Enemy Top Speed: " + Math.floor(enemySpeed/9) + " km/h"

        endRow3.innerHTML = "Clicks Made: " + clicks

    }

})

document.getElementById("statRow1").innerHTML = "Player: " + playerSpeed + " km/h"

document.getElementById("statRow2").innerHTML = "Enemy: " + enemySpeed + " km/h"

document.getElementById("statRow3").innerHTML = "Clicks: " + clicks

document.getElementById("endRow1").innerHTML = "Player Top Speed: " + playerSpeed + " km/h"

document.getElementById("endRow2").innerHTML = "Enemy Top Speed: " + enemySpeed + " km/h"

document.getElementById("endRow3").innerHTML = "Clicks Made: " + clicks