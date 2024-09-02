let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll('.choice');
const your = document.querySelector("#yourScore");
const comp = document.querySelector("#compScore");
const msg = document.querySelector("#msg");
your.innerText = 0;
comp.innerText = 0;

choices.forEach((choice)=>{
    choice.addEventListener('click',()=>{
        let userChoice = choice.getAttribute("id");
        playGame(userChoice);        
    })
})

const playGame = (userChoice)=>{
    console.log(userChoice);
    const compChoice = computerScore();
    console.log(compChoice);

    if (userChoice === compChoice) {
        console.log("draw");
        msg.innerText = " Match Draw ";
        msg.style.backgroundColor = "green";
        
    }else{
        if(userChoice === 'rock'){
            if (compChoice === 'paper') {
                compScore++
                console.log("computer " + compScore);
                comp.innerText = compScore;
                msg.innerText = " Your are Lose ";
                msg.style.backgroundColor = "red";
            }else{
                userScore++
                console.log("your "+userScore);
                your.innerText = userScore;
                msg.innerText = " You Won ";
                msg.style.backgroundColor = "blue";
            }
        }else if (userChoice === 'paper') {
            if (compChoice === 'scissor') {
                compScore++
                console.log("computer " + compScore);
                comp.innerText = compScore;
                msg.innerText = " Your are Lose ";
                msg.style.backgroundColor = "red";
            }else{
                userScore++
                console.log("your "+userScore);
                your.innerText = userScore;
                msg.innerText = " You Won ";
                msg.style.backgroundColor = "blue";
            }
        }else if(userChoice === 'scissor'){
            if (compChoice === 'rock') {
                compScore++
                console.log("computer " + compScore);
                comp.innerText = compScore;
                msg.innerText = " Your are Lose ";
                msg.style.backgroundColor = "red";
            }else{
                userScore++
                console.log("your "+userScore);
                your.innerText = userScore;
                msg.innerText = " You Won ";
                msg.style.backgroundColor = "green";
            }
        }
        // let win = true;
        // if (userChoice === 'rock') {
            
        // }
    }
    
}

const computerScore =()=>{
    const option = ["rock","paper","scissor"];
    const index = Math.floor(Math.random()*3);
    return option[index];
}