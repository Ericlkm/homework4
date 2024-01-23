var myQuestions = [
    {
        title:"when was JavaScript invented?",
        answers:[
        {text:"1999", correct: false},
        {text:"1995", correct: true},
        {text:"2000", correct: false},
        {text:"1994", correct: false},
        ]
    },

    {
        title:"How many heading tags are in HTML?",
        answers:[
            {text:"4", correct: false},
            {text:"5", correct: false},
            {text:"7", correct: false},
            {text:"6", correct: true},
        ]
    },

    {
        title:"what does HTML mean?",
        answers:[
            {text:"hypertext machine language", correct: false},
            {text:"hypertext markup language", correct: true},
            {text:"hyperticket module learning", correct: false},
            {text:"hightime modern language", correct: false},
        ]
    },

    {
        title:"what is the longest river in the world?",
        answers:[
            {text:"congo river", correct: false},
            {text:"yellow river", correct: false},
            {text:"nile river", correct: true},
            {text:"amazon river", correct: false},

        ]
    },

    {
        title:"who was the 15th president?",
        answers:[
            {text:"James Buchanan", correct:true},
            {text:"Andrew Jackson", correct:false},
            {text:"James Monroe", correct:false},
            {text:"John Quincy Adams", correct:false},
        ]
    },

    {
        title:"what is an Array?",
        answers:[
            {text:"a collection of booleans", correct:false},
            {text:"a collection of properties", correct:false},
            {text:"a collection of elements", correct:false},
            {text:"a collection of data", correct:true},

        ]
    },

    {
        title:"when linking a Javascript file to your document which attribute do you use?",
        answers:[
            {text:"link", correct: false},
            {text:"src", correct: true},
            {text:"href", correct: false},
            {text:"id", correct: false},
        ]
    },

    {
        title:"what is the most used coding language?",
        answers:[
            {text:"HTML", correct:false},
            {text:"SQL", correct:false},
            {text:"JavaScript", correct:true},
            {text:"CSS", correct:false},

        ]
    },

    {
        title:"who is the main character in the game Devil May Cry?",
        answers:[
            {text:"Dante", correct: true},
            {text:"Virgil", correct: false},
            {text:"Lady", correct: false},
            {text:"Trisha", correct: false},
        ]
    },

    {
        title:"what was the most popular and sold gaming console?",
        answers:[
            {text:"Ps5", correct: false},
            {text:"Xbox360", correct: false},
            {text:"Ps2", correct: true},
            {text:"GameCube", correct: false},

        ]
    }
];

let question = document.getElementById("intro");
let btns = document.getElementById("btns");
let startbtn = document.getElementById("startbtn");
var begin = document.getElementById("begin");
let time = document.getElementById("seconds");

begin.addEventListener("click",startQuiz)


let currentQuestionIndex = 0;
let score = 0;
let countDown = 75;

function startQuiz(){
    begin.style.display="none"
    currentQuestionIndex = 0;
    score = 0;
    startbtn.textContent ="Next!";
    showQuestions();
    startTime()
    
}

function startTime(){
    let timer = setInterval(function(){
        countDown--;
        time.textContent = " " + countDown;
        if(countDown === 0){
            clearInterval(timer)
            resetState()
            showScore()
            
        }


    },1000)
}

function showQuestions(){
    resetState();
    let currentQuestion = myQuestions[currentQuestionIndex];
    let questionNum = currentQuestionIndex + 1;
    title.textContent = questionNum + ". " + currentQuestion.title;


    currentQuestion.answers.forEach(answers =>{
        let button = document.createElement("button");
        button.textContent = answers.text;
        button.classList.add("button");
        btns.appendChild(button);
        if(answers.correct){
            button.dataset.correct = answers.correct;
        }
        button.addEventListener("click", selectAnswer);
    })
}

function resetState(){
    startbtn.style.display ="none";
    while(btns.firstChild){
        btns.removeChild(btns.firstChild);
    }

}

function selectAnswer(e){
    let selectedBtn = e.target;
    let isCorrect = selectedBtn.dataset.correct === "true" ;
    if(isCorrect){
        selectedBtn.classList.add("correct")
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect")
    }
    Array.from(btns.children).forEach(button =>{
        if(button.dataset.correct ==="true"){
           button.classList.add("correct");
        }
        button.disabled = true;
    });
    startbtn.style.display="inline";
}

startbtn.addEventListener("click",function(){
    if(currentQuestionIndex < myQuestions.length){
        handleNextButton();
    }
    else{
        startQuiz()
    }
})

function showScore(){
    
    resetState();
    
    if(score <= 6){
        question.textContent="you scored "+ score + " out of " + myQuestions.length +" play Again for better score!😬";
    }
    else if(score>=7){
        question.textContent="you scored " + score +  " out of " + myQuestions.length + " congratulations you did good!🏆"
    }
    else{
       return;
    }
    
    question.setAttribute("style","font-size:35px;");

    

}
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < myQuestions.length){
        showQuestions()
    }
    else{
        showScore()
    }
}










