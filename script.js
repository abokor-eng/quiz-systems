const questions =
document.querySelectorAll(".question");

const next =
document.getElementById("next");

const prev =
document.getElementById("prev");

const submit =
document.getElementById("submit");

const result =
document.getElementById("result");

let current = 0;

// Show one question
function showQuestion(){

questions.forEach((q)=>{

q.style.display =
"none";

});

questions[current]
.style.display =
"block";

// Previous
prev.style.display =
current === 0
? "none"
: "inline-block";

// Last Question
if(
current ===
questions.length - 1
){

next.style.display =
"none";

submit.style.display =
"inline-block";

}else{

next.style.display =
"inline-block";

submit.style.display =
"none";

}

}

// Next
next.addEventListener(
"click",

function(){

current++;

if(
current >
questions.length - 1
){

current =
questions.length - 1;

}

showQuestion();

}

);

// Previous
prev.addEventListener(
"click",

function(){

current--;

if(
current < 0
){

current = 0;

}

showQuestion();

}

);

// Submit
document
.getElementById(
"quizForm"
)

.addEventListener(

"submit",

function(e){

e.preventDefault();

let score = 0;

let answers =
document.querySelectorAll(
'input[type="radio"]:checked'
);

answers.forEach((a)=>{

score +=
Number(
a.value
);

});

result.innerHTML =
`🎉 Score:
${score}/10`;

}

);

// Start
showQuestion();

const themeBtn =
document.getElementById(
"themeBtn"
);

themeBtn.addEventListener(
"click",

function(){

document.body
.classList
.toggle(
"dark"
);

if(
document.body
.classList
.contains(
"dark"
)
){

themeBtn.innerHTML =
"☀ Light Mode";

}

else{

themeBtn.innerHTML =
"🌙 Dark Mode";

}

}
);