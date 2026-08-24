let x = 100
let y = 100
let virziensX = 0
let virziensY = 0 
let atrums = 1
let punkti = 0
let speletajs = document.createElement("img")
speletajs.src = "https://static.vecteezy.com/system/resources/thumbnails/047/432/764/small/pink-butterfly-on-transparent-background-ai-generative-free-png.png"
speletajs.style.width = "50px"
speletajs.style.position = "absolute"
speletajs.style.top = y + "px"
speletajs.style.left = x + "px"
document.body.appendChild(speletajs)


let zaudetUzraksti = document.getElementById("zaudetUzraksti")
window.onload = function(){
    zaudetUzraksti.style.display = "none"
}

function beigas(){
    clearInterval(kustiba)
    document.body.innerHTML = ""
    
    document.body.appendChild(zaudetUzraksti)
    document.getElementById("zaudeTeikums").textContent = "Spēle beigusies! Tavs punktu skaits: " + punkti
    zaudetUzraksti.style.display = "block"
}

function parvietot(){
    let randomX =  Math.floor(Math.random() * (window.innerWidth - 50)) 
    let randomY =  Math.floor(Math.random() * (window.innerHeight - 50))

    bloks.style.top = randomY + "px"
    bloks.style.left = randomX + "px"



}



// .getBoundingClientRact()
function sadursme(){
    let speletajaKoord = speletajs.getBoundingClientRect()
    let blokaKoor = bloks.getBoundingClientRect()

    if(speletajaKoord.left < blokaKoor.right &&
        speletajaKoord.right > blokaKoor.left &&
        speletajaKoord.top < blokaKoor.bottom &&
        speletajaKoord.bottom > blokaKoor.top
    ){
        punkti += 1
        document.getElementById("pt").textContent = "Punkti: " + punkti
        parvietot()
    }
}


//bloks

let bloks = document.createElement("div")
bloks.style.width = "30px"
bloks.style.height = "30px"
bloks.style.backgroundColor = "gold"
bloks.style.position = "absolute"
bloks.style.left = Math.floor(Math.random()*window.innerWidth-50) + "px"
bloks.style.top = Math.floor(Math.random()*window.innerHeight-50) + "px"
document.body.appendChild(bloks)






// "w" "a" "s" "d" - key codes event.key == "w"


document.addEventListener("keydown", function(event){
   if(event.key == "d"){
    virziensX = 3 * atrums
    virziensY = 0
   }
     if(event.key == "w"){
        virziensX = 0
        virziensY = -3 * atrums
     }

    if(event.key == "a"){
        virziensX = -3 * atrums
        virziensY = 0
    }

    if(event.key == "s"){
        virziensX = 0
        virziensY = 3 * atrums
    }
    if(event.key == " "){
        virziensX = 0
        virziensY = 0
    }
   if(punkti >= 10){
    atrums = 2
   } 
    if(punkti >= 15){
    atrums = 2.5
   } 
    if(punkti >= 20){
    atrums = 3
   } 
    if(punkti >= 25){
    atrums = 3.5
   } 
   document.getElementById("speed").textContent = "Ātrums: " + atrums
})

let kustiba = setInterval(function(){
    x += virziensX
    y += virziensY

    if(x < 0){
        x = 0
        beigas()
    }
    if(y < 0){
        y = 0
        beigas()
    }
    if(x > window.innerWidth - 50 ){
        x = window.innerWidth - 50
        beigas()
    }
    if(y > window.innerHeight - 50){
        y = window.innerHeight - 50
        beigas()
    }

 speletajs.style.left = x + "px"
    speletajs.style.top = y + "px"

    sadursme()
}, 10)


document.getElementById("try").addEventListener("click", function(){
    location.reload()
})
