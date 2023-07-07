const questions=[
    {
        question:"What is the purpose of the typeof operator in JavaScript?",
        answers:[
            {text:"It checks if a variable is null.", correct:false},
            {text:"It returns the type of a given value.", correct:true},
            {text:"It converts a value to a string.", correct:false},
            {text:"It checks if a variable is undefined.", correct:false}
        ]
    },
    {
        question:"What is the correct syntax to create a function in JavaScript?",
        answers:[
            {text:"function = myFunction()", correct:false},
            {text:"var myFunction = function()", correct:false},
            {text:"function myFunction()", correct:true},
            {text:"myFunction = function()", correct:false}
        ]
    },{
        question:"Which keyword is used to declare a constant variable in JavaScript?",
        answers:[
            {text:"var", correct:false},
            {text:"let", correct:false},
            {text:"const", correct:true},
            {text:"final", correct:false}
        ]
    }
]
let question_element=document.getElementById('question_element')
let answer_button=document.getElementById('add_button')
let next_button=document.getElementById('next')

let question_index=0
let score=0

function start_quiz()
{
    question_index=0
    score=0
    next_button.style.fontSize="1.19rem"
    next_button.innerHTML="Next"
    set_question()
}

function set_question()
{
    next_button.style.display="none"
    reset_state()
    question_element.innerHTML=question_index+1 + ". " + questions[question_index].question
    questions[question_index].answers.forEach(answer=>{
        let butt=document.createElement("button")
        butt.innerHTML=answer.text
        butt.target=answer.correct
        butt.classList.add('but')
        answer_button.appendChild(butt)

        butt.addEventListener("click", function()
        {
            if(butt.target===true)
            {
                butt.style.backgroundColor="rgb(174, 255, 174)"
                score++
            }
            else
            {
                butt.style.backgroundColor="rgb(255, 187, 187)"
            }
            Array.from(answer_button.children).forEach(button=>
            {
                if(button.target===true)
                {
                    button.style.backgroundColor="rgb(174, 255, 174)"
                }
                button.disabled=true
            })
            next_button.style.display="block"
        })
    })
}

function display_result()
{
    reset_state()
    question_element.innerHTML=`You have scored ${score} out of ${questions.length}`
    next_button.innerHTML="Play Again"
    next_button.style.fontSize="1.06rem"
    question_index=-2
}

function reset_state()
{
    while(answer_button.firstChild)
    {
        answer_button.removeChild(answer_button.firstChild)
    }
}

next_button.addEventListener("click", function()
{
   
    question_index++
    if(question_index==-1)
    {
        start_quiz()
    }
    if(question_index<questions.length)
    {
        set_question()
    }
    else
    {
        display_result()
    }
})
start_quiz()