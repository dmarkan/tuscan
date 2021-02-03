let end = document.querySelector("#end");
let next = document.querySelector("#next");
let next2 = document.querySelector("#next2");
let next3 = document.querySelector("#next3");
let next4 = document.querySelector("#next4");
let next5 = document.querySelector("#next5");
let next6 = document.querySelector("#next6");
let next7 = document.querySelector("#next7");
let next8 = document.querySelector("#next8");
let next9 = document.querySelector("#next9");
let story = document.querySelector("#story");
let story2 = document.querySelector("#story2");
let story3 = document.querySelector("#story3");
let story4 = document.querySelector("#story4");
let story5 = document.querySelector("#story5");
let waitress = document.querySelector("#waitress");
let orc = document.querySelector("#orc");
let halfling = document.querySelector("#halfling");
let option1 = document.querySelector("#option1");
let option2 = document.querySelector("#option2");
let option3 = document.querySelector("#option3");
let option4 = document.querySelector("#option4");
let option1_2 = document.querySelector("#option1_2");
let option2_2 = document.querySelector("#option2_2");
let option3_2 = document.querySelector("#option3_2");
let option4_2 = document.querySelector("#option4_2");
let option1_3 = document.querySelector("#option1_3");
let option2_3 = document.querySelector("#option2_3");
let option3_3 = document.querySelector("#option3_3");
let option4_3 = document.querySelector("#option4_3");
let option1_4 = document.querySelector("#option1_4");
let option2_4 = document.querySelector("#option2_4");
let option3_4 = document.querySelector("#option3_4");
let option4_4 = document.querySelector("#option4_4");
let opt1_answer = document.querySelector("#opt1_answer");
let opt2_answer = document.querySelector("#opt2_answer");
let opt3_answer = document.querySelector("#opt3_answer");
let opt4_answer = document.querySelector("#opt4_answer");
let opt1_answer2 = document.querySelector("#opt1_answer2");
let opt2_answer2 = document.querySelector("#opt2_answer2");
let opt3_answer2 = document.querySelector("#opt3_answer2");
let dialogbox = document.querySelector("#dialogbox");
let dialogbox2 = document.querySelector("#dialogbox2");
let dialogbox3 = document.querySelector("#dialogbox3");
let text = document.querySelector("#text");
let text2 = document.querySelector("#text2");
let text3 = document.querySelector("#text3");
let text4 = document.querySelector("#text4");
let text5 = document.querySelector("#text5");

var theend = new Audio();
theend.src = "zvuk/end.mp3";

function kraj() {
  theend.play();
}

var help = new Audio();
help.src = "zvuk/help.mp3";

function pomoc() {
  help.play();
}

var laugh = new Audio();
laugh.src = "zvuk/laugh.mp3";

function smeh() {
  laugh.play();
}

var hello = new Audio();
hello.src = "zvuk/hello.mp3";

function cao() {
  hello.play();
}

next.addEventListener("click", function() {
  next.style.visibility = "hidden";
  story.style.visibility = "hidden";
  waitress.style.visibility = "visible";
  dialogbox.style.visibility = "visible";
  text.style.visibility = "visible";
  option1.style.visibility = "visible";
  option2.style.visibility = "visible";
  option3.style.visibility = "visible";
  option4.style.visibility = "visible";
})

next2.addEventListener("click", function() {
  next2.style.visibility = "hidden";
  story2.style.visibility = "visible";
  next3.style.visibility = "visible";
})

next3.addEventListener("click", function() {
  next3.style.visibility = "hidden";
  next4.style.visibility = "visible";
  story2.style.visibility = "hidden";
  dialogbox2.style.visibility = "visible";
  text2.style.visibility = "visible";
  halfling.style.visibility = "visible";
})

next4.addEventListener("click", function() {
  next4.style.visibility = "hidden";
  next5.style.visibility = "visible";
  dialogbox3.style.visibility = "visible";
  text3.style.visibility = "visible";
  orc.style.visibility = "visible";
  dialogbox2.style.visibility = "hidden";
  text2.style.visibility = "hidden";
  halfling.style.visibility = "hidden";
})

next5.addEventListener("click", function() {
  next5.style.visibility = "hidden";
  next6.style.visibility = "visible";
  dialogbox3.style.visibility = "hidden";
  text3.style.visibility = "hidden";
  orc.style.visibility = "visible";
  halfling.style.visibility = "visible";
})

next6.addEventListener("click", function() {
  next6.style.visibility = "hidden";
  next7.style.visibility = "visible";
  dialogbox2.style.visibility = "visible";
  text4.style.visibility = "visible";
  orc.style.visibility = "visible";
  halfling.style.visibility = "visible";
})

next7.addEventListener("click", function() {
  next7.style.visibility = "hidden";
  next8.style.visibility = "visible";
  dialogbox2.style.visibility = "hidden";
  text4.style.visibility = "hidden";
  orc.style.visibility = "hidden";
  halfling.style.visibility = "hidden";
  story3.style.visibility = "visible";
})

next8.addEventListener("click", function() {
  next8.style.visibility = "hidden";
  halfling.style.visibility = "visible";
  dialogbox2.style.visibility = "visible";
  story3.style.visibility = "hidden";
  text5.style.visibility = "visible";
  option1_3.style.visibility = "visible";
  option2_3.style.visibility = "visible";
  option3_3.style.visibility = "visible";
  option4_3.style.visibility = "visible";
})

option1.addEventListener("click", function() {
  text.style.visibility = "hidden";
  opt1_answer.style.visibility = "visible";
  option1.style.visibility = "hidden";
  option2.style.visibility = "hidden";
  option3.style.visibility = "hidden";
  option4.style.visibility = "hidden";
  option1_2.style.visibility = "visible";
  option2_2.style.visibility = "visible";
  option3_2.style.visibility = "visible";
  option4_2.style.visibility = "visible";
})

option2.addEventListener("click", function() {
  text.style.visibility = "hidden";
  opt2_answer.style.visibility = "visible";
  option1.style.visibility = "hidden";
  option2.style.visibility = "hidden";
  option3.style.visibility = "hidden";
  option4.style.visibility = "hidden";
  option1_2.style.visibility = "visible";
  option2_2.style.visibility = "visible";
  option3_2.style.visibility = "visible";
  option4_2.style.visibility = "visible";
})

option3.addEventListener("click", function() {
  text.style.visibility = "hidden";
  opt3_answer.style.visibility = "visible";
  option1.style.visibility = "hidden";
  option2.style.visibility = "hidden";
  option3.style.visibility = "hidden";
  option4.style.visibility = "hidden";
  next2.style.visibility = "visible";
})

option4.addEventListener("click", function() {
  text.style.visibility = "hidden";
  opt4_answer.style.visibility = "visible";
  option1.style.visibility = "hidden";
  option2.style.visibility = "hidden";
  option3.style.visibility = "hidden";
  option4.style.visibility = "hidden";
  option1_2.style.visibility = "visible";
  option2_2.style.visibility = "visible";
  option3_2.style.visibility = "visible";
  option4_2.style.visibility = "visible";
})

option1_2.addEventListener("click", function() {
  opt1_answer.style.visibility = "hidden";
  opt2_answer.style.visibility = "hidden";
  opt3_answer.style.visibility = "visible";
  opt4_answer.style.visibility = "hidden";
  option1_2.style.visibility = "hidden";
  option2_2.style.visibility = "hidden";
  option3_2.style.visibility = "hidden";
  option4_2.style.visibility = "hidden";
  next2.style.visibility = "visible";
})

option2_2.addEventListener("click", function() {
  opt1_answer.style.visibility = "hidden";
  opt2_answer.style.visibility = "hidden";
  opt3_answer.style.visibility = "visible";
  opt4_answer.style.visibility = "hidden";
  option1_2.style.visibility = "hidden";
  option2_2.style.visibility = "hidden";
  option3_2.style.visibility = "hidden";
  option4_2.style.visibility = "hidden";
  next2.style.visibility = "visible";
})

option3_2.addEventListener("click", function() {
  opt1_answer.style.visibility = "hidden";
  opt2_answer.style.visibility = "hidden";
  opt3_answer.style.visibility = "visible";
  opt4_answer.style.visibility = "hidden";
  option1_2.style.visibility = "hidden";
  option2_2.style.visibility = "hidden";
  option3_2.style.visibility = "hidden";
  option4_2.style.visibility = "hidden";
  next2.style.visibility = "visible";

})

option4_2.addEventListener("click", function() {
  opt1_answer.style.visibility = "hidden";
  opt2_answer.style.visibility = "hidden";
  opt3_answer.style.visibility = "visible";
  opt4_answer.style.visibility = "hidden";
  option1_2.style.visibility = "hidden";
  option2_2.style.visibility = "hidden";
  option3_2.style.visibility = "hidden";
  option4_2.style.visibility = "hidden";
  next2.style.visibility = "visible";
})

option1_3.addEventListener("click", function() {
  option1_3.style.visibility = "hidden";
  option2_3.style.visibility = "hidden";
  option3_3.style.visibility = "hidden";
  option4_3.style.visibility = "hidden";
  opt1_answer2.style.visibility = "visible";
  text5.style.visibility = "hidden";
  option1_4.style.visibility = "visible";
  option2_4.style.visibility = "visible";
  option3_4.style.visibility = "visible";
  option4_4.style.visibility = "visible";
})

option2_3.addEventListener("click", function() {
  option1_3.style.visibility = "hidden";
  option2_3.style.visibility = "hidden";
  option3_3.style.visibility = "hidden";
  option4_3.style.visibility = "hidden";
  opt2_answer2.style.visibility = "visible";
  text5.style.visibility = "hidden";
})

option3_3.addEventListener("click", function() {
  option1_3.style.visibility = "hidden";
  option2_3.style.visibility = "hidden";
  option3_3.style.visibility = "hidden";
  option4_3.style.visibility = "hidden";
  opt3_answer2.style.visibility = "visible";
  text5.style.visibility = "hidden";
  option1_4.style.visibility = "visible";
  option2_4.style.visibility = "visible";
  option3_4.style.visibility = "visible";
  option4_4.style.visibility = "visible";
})

option4_3.addEventListener("click", function() {
  option1_3.style.visibility = "hidden";
  option2_3.style.visibility = "hidden";
  option3_3.style.visibility = "hidden";
  option4_3.style.visibility = "hidden";
  story4.style.visibility = "visible";
  text5.style.visibility = "hidden";
  halfling.style.visibility = "hidden";
  dialogbox2.style.visibility = "hidden";
  end.style.visibility = "visible";
})

option1_4.addEventListener("click", function() {
  option1_4.style.visibility = "hidden";
  option2_4.style.visibility = "hidden";
  option3_4.style.visibility = "hidden";
  option4_4.style.visibility = "hidden";
  opt1_answer2.style.visibility = "hidden";
  opt2_answer2.style.visibility = "hidden";
  text5.style.visibility = "hidden";
  halfling.style.visibility = "hidden";
  story5.style.visibility = "visible";
  dialogbox2.style.visibility = "hidden";
  next9.style.visibility = "visible";
  opt3_answer2.style.visibility = "hidden";
})

option2_4.addEventListener("click", function() {
  option1_4.style.visibility = "hidden";
  option2_4.style.visibility = "hidden";
  option3_4.style.visibility = "hidden";
  option4_4.style.visibility = "hidden";
  opt1_answer2.style.visibility = "hidden";
  text5.style.visibility = "hidden";
  halfling.style.visibility = "hidden";
  story5.style.visibility = "visible";
  dialogbox2.style.visibility = "hidden";
  next9.style.visibility = "visible";
  opt2_answer2.style.visibility = "hidden";
  opt3_answer2.style.visibility = "hidden";
})

option3_4.addEventListener("click", function() {
  option1_4.style.visibility = "hidden";
  option2_4.style.visibility = "hidden";
  option3_4.style.visibility = "hidden";
  option4_4.style.visibility = "hidden";
  opt1_answer2.style.visibility = "hidden";
  text5.style.visibility = "hidden";
  halfling.style.visibility = "hidden";
  story5.style.visibility = "visible";
  dialogbox2.style.visibility = "hidden";
  next9.style.visibility = "visible";
  opt2_answer2.style.visibility = "hidden";
  opt3_answer2.style.visibility = "hidden";
})

option2_3.addEventListener("click", function() {
  option1_3.style.visibility = "hidden";
  option2_3.style.visibility = "hidden";
  option3_3.style.visibility = "hidden";
  option4_3.style.visibility = "hidden";
  opt2_answer2.style.visibility = "visible";
  text5.style.visibility = "hidden";
  option1_4.style.visibility = "visible";
  option2_4.style.visibility = "visible";
  option3_4.style.visibility = "visible";
  option4_4.style.visibility = "visible";
})

option4_4.addEventListener("click", function() {
  option1_4.style.visibility = "hidden";
  option2_4.style.visibility = "hidden";
  option3_4.style.visibility = "hidden";
  option4_4.style.visibility = "hidden";
  story4.style.visibility = "visible";
  text5.style.visibility = "hidden";
  halfling.style.visibility = "hidden";
  dialogbox2.style.visibility = "hidden";
  end.style.visibility = "visible";
  opt1_answer2.style.visibility = "hidden";
  opt2_answer2.style.visibility = "hidden";
  opt3_answer2.style.visibility = "hidden";
})
