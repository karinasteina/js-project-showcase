words = ["achievement", "birthday", "breakfast", "champion", "combination", "electricity", "engineer", "entertainment", "environment", "foundation", "function", "government"]
letters = ["q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m"]
guesses = []
guessed = false
incorrect = []
typed = []
random = 0
guessesCount = 0
totalGuesses = 15
remaining = 0

random = Math.floor(Math.random()*words.length)
word = words[random]

for(let i = 0; i < word.length; i++){guesses.push(" _ ")}
output.innerHTML = guesses.join("")

restartButton.addEventListener("click", function(){location.reload()})

input.addEventListener("keydown", function(e){
    
    if(e.key == "Enter"){
        
        incorrectOutput.innerHTML = incorrect.join("")
        
        if(letters.includes(input.value.toLowerCase())){
            
            if(typed.includes(input.value.toLowerCase())){
                input.value = ""
                incorrectOutput.innerHTML = "Already Typed!"
                repetition = false
            } else{
                typed.push(input.value.toLowerCase(""))
                console.log(typed)
                
                guessesCount++
                guessesOutput.innerHTML = "Guesses: " + guessesCount

                remaining = totalGuesses - guessesCount

                remainingOutput.innerHTML = "Guesses Remaining: " + remaining

            if(!word.includes(input.value.toLowerCase())&&!incorrect.includes(input.value.toLowerCase())){
                incorrect.push(input.value.toLowerCase(""))
                incorrectOutput.innerHTML = incorrect.join("")
            }

            for(let i = 0; i < word.length; i++){
                if(word[i].toLowerCase() == input.value.toLowerCase()){guesses[i] = word[i]}
            }

            output.innerHTML = guesses.join("")

            if(remaining == 0){
                    output.innerHTML = "You Lose! The Word Was: " + word
                    restartButton.style.display = "block"
                    input.disabled = true
            }

            if(!guesses.includes(" _ ")){
                output.innerHTML = "You Win! The Word Was: " + word
                restartButton.style.display = "block"
            }
        
            input.value = ""
        }

    } else{
        input.value = ""
        incorrectOutput.innerHTML = "Not A Letter!"
    }

    }

})