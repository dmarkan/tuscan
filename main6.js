let end = document.querySelector("#end");
let halfling = document.querySelector("#halfling");
let elf = document.querySelector("#elf");
let spider = document.querySelector("#spider");
let dialogbox = document.querySelector("#dialogbox");
let dialogbox3 = document.querySelector("#dialogbox3");
let story = document.querySelector("#story");
let story2 = document.querySelector("#story2");
let story3 = document.querySelector("#story3");
let story4 = document.querySelector("#story4");
let story5 = document.querySelector("#story5");
let story6 = document.querySelector("#story6");
let text = document.querySelector("#text");
let text2 = document.querySelector("#text2");
let text3 = document.querySelector("#text3");
let text4 = document.querySelector("#text4");
let text5 = document.querySelector("#text5");
let text6 = document.querySelector("#text6");
let text7 = document.querySelector("#text7");
let next = document.querySelector("#next");
let next2 = document.querySelector("#next2");
let next3 = document.querySelector("#next3");
let next4 = document.querySelector("#next4");
let next5 = document.querySelector("#next5");
let next6 = document.querySelector("#next6");
let next7 = document.querySelector("#next7");
let option1 = document.querySelector("#option1");
let option2 = document.querySelector("#option2");
let option3 = document.querySelector("#option3");
let option4 = document.querySelector("#option4");

var theend = new Audio();
theend.src = "zvuk/end.mp3";

function kraj() {
  theend.play();
}

var hiss = new Audio();
hiss.src = "zvuk/hiss.mp3";

function pauk() {
  hiss.play();
}

var spider_death = new Audio();
spider_death.src = "zvuk/spider_death.mp3";

function pauk_umire() {
  spider_death.play();
}

next.addEventListener("click", function() {
  next.style.visibility = "hidden";
  story.style.visibility = "hidden";
  elf.style.visibility = "visible";
  dialogbox3.style.visibility = "visible";
  text.style.visibility = "visible";
  halfling.style.visibility = "visible";
  next2.style.visibility = "visible";
})

next2.addEventListener("click", function() {
next2.style.visibility = "hidden";
dialogbox3.style.visibility = "hidden";
text.style.visibility = "hidden";
spider.style.visibility = "visible";
dialogbox.style.visibility = "visible";
dialogbox3.style.visibility = "visible";
text2.style.visibility = "visible";
text3.style.visibility = "visible";
next3.style.visibility = "visible";
})

next3.addEventListener("click", function() {
next3.style.visibility = "hidden";
option1.style.visibility = "visible";
option2.style.visibility = "visible";
option3.style.visibility = "visible";
option4.style.visibility = "visible";
text2.style.visibility = "hidden";
text3.style.visibility = "hidden";
text4.style.visibility = "visible";
text5.style.visibility = "visible";
})

option1.addEventListener("click", function() {
  option1.style.visibility = "hidden";
  option2.style.visibility = "hidden";
  option3.style.visibility = "hidden";
  option4.style.visibility = "hidden";
  text4.style.visibility = "hidden";
  text5.style.visibility = "hidden";
  end.style.visibility = "visible";
  story2.style.visibility = "visible";
  spider.style.visibility = "hidden";
  halfling.style.visibility = "hidden";
  elf.style.visibility = "hidden";
  dialogbox.style.visibility = "hidden";
  dialogbox3.style.visibility = "hidden";
  text4.style.visibility = "hidden";
  text5.style.visibility = "hidden";
})

option2.addEventListener("click", function() {
  option1.style.visibility = "hidden";
  option2.style.visibility = "hidden";
  option3.style.visibility = "hidden";
  option4.style.visibility = "hidden";
  text4.style.visibility = "hidden";
  text5.style.visibility = "hidden";
  story4.style.visibility = "visible";
  spider.style.visibility = "hidden";
  halfling.style.visibility = "hidden";
  elf.style.visibility = "hidden";
  dialogbox.style.visibility = "hidden";
  dialogbox3.style.visibility = "hidden";
  text4.style.visibility = "hidden";
  text5.style.visibility = "hidden";
  next4.style.visibility = "visible";
})

option3.addEventListener("click", function() {
  option1.style.visibility = "hidden";
  option2.style.visibility = "hidden";
  option3.style.visibility = "hidden";
  option4.style.visibility = "hidden";
  text4.style.visibility = "hidden";
  text5.style.visibility = "hidden";
  story5.style.visibility = "visible";
  spider.style.visibility = "hidden";
  halfling.style.visibility = "hidden";
  elf.style.visibility = "hidden";
  dialogbox.style.visibility = "hidden";
  dialogbox3.style.visibility = "hidden";
  text4.style.visibility = "hidden";
  text5.style.visibility = "hidden";
  next4.style.visibility = "visible";
})

option4.addEventListener("click", function() {
  option1.style.visibility = "hidden";
  option2.style.visibility = "hidden";
  option3.style.visibility = "hidden";
  option4.style.visibility = "hidden";
  text4.style.visibility = "hidden";
  text5.style.visibility = "hidden";
  end.style.visibility = "visible";
  story3.style.visibility = "visible";
  spider.style.visibility = "hidden";
  halfling.style.visibility = "hidden";
  elf.style.visibility = "hidden";
  dialogbox.style.visibility = "hidden";
  dialogbox3.style.visibility = "hidden";
  text4.style.visibility = "hidden";
  text5.style.visibility = "hidden";
})

next4.addEventListener("click", function() {
  elf.style.visibility = "visible";
  dialogbox3.style.visibility = "visible";
  text6.style.visibility = "visible";
  story5.style.visibility = "hidden";
  story4.style.visibility = "hidden";
  next4.style.visibility = "hidden";
  next5.style.visibility = "visible";
})

next5.addEventListener("click", function() {
  next5.style.visibility = "hidden";
  text6.style.visibility = "hidden";
  option1_2.style.visibility = "visible";
  option2_2.style.visibility = "visible";
  option3_2.style.visibility = "visible";
  option4_2.style.visibility = "visible";
  dialogbox3.style.visibility = "hidden";
})

option1_2.addEventListener("click", function() {
  option1_2.style.visibility = "hidden";
  option2_2.style.visibility = "hidden";
  option3_2.style.visibility = "hidden";
  option4_2.style.visibility = "hidden";
  text7.style.visibility = "visible";
  next6.style.visibility = "visible";
  dialogbox3.style.visibility = "visible";
})

option2_2.addEventListener("click", function() {
  option1_2.style.visibility = "hidden";
  option2_2.style.visibility = "hidden";
  option3_2.style.visibility = "hidden";
  option4_2.style.visibility = "hidden";
  text7.style.visibility = "visible";
  next6.style.visibility = "visible";
  dialogbox3.style.visibility = "visible";
})

option3_2.addEventListener("click", function() {
  option1_2.style.visibility = "hidden";
  option2_2.style.visibility = "hidden";
  option3_2.style.visibility = "hidden";
  option4_2.style.visibility = "hidden";
  text7.style.visibility = "visible";
  next6.style.visibility = "visible";
  dialogbox3.style.visibility = "visible";
})

option4_2.addEventListener("click", function() {
  option1_2.style.visibility = "hidden";
  option2_2.style.visibility = "hidden";
  option3_2.style.visibility = "hidden";
  option4_2.style.visibility = "hidden";
  text7.style.visibility = "visible";
  next6.style.visibility = "visible";
  dialogbox3.style.visibility = "visible";
})

next6.addEventListener("click", function() {
  next6.style.visibility = "hidden";
  next7.style.visibility = "visible";
  text7.style.visibility = "hidden";
  next6.style.visibility = "hidden";
  dialogbox3.style.visibility = "hidden";
  story6.style.visibility = "visible";
  elf.style.visibility = "hidden";
})
