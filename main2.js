let end = document.querySelector("#end");
let halfling = document.querySelector("#halfling");
let orc = document.querySelector("#orc");
let dialogbox = document.querySelector("#dialogbox");
let dialogbox3 = document.querySelector("#dialogbox3");
let story = document.querySelector("#story");
let story2 = document.querySelector("#story2");
let story3 = document.querySelector("#story3");
let story4 = document.querySelector("#story4");
let story5 = document.querySelector("#story5");
let story6 = document.querySelector("#story6");
let story7 = document.querySelector("#story7");
let story8 = document.querySelector("#story8");
let text = document.querySelector("#text");
let text2 = document.querySelector("#text2");
let text3 = document.querySelector("#text3");
let text4 = document.querySelector("#text4");
let text5 = document.querySelector("#text5");
let text6 = document.querySelector("#text6");
let text7 = document.querySelector("#text7");
let text8 = document.querySelector("#text8");
let text9 = document.querySelector("#text9");
let text10 = document.querySelector("#text10");
let text11 = document.querySelector("#text11");
let text12 = document.querySelector("#text12");
let next = document.querySelector("#next");
let next2 = document.querySelector("#next2");
let next3 = document.querySelector("#next3");
let next4 = document.querySelector("#next4");
let next5 = document.querySelector("#next5");
let next6 = document.querySelector("#next6");
let next7 = document.querySelector("#next7");
let next8 = document.querySelector("#next8");
let next9 = document.querySelector("#next9");
let next10 = document.querySelector("#next10");
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
let option1_5 = document.querySelector("#option1_5");
let option2_5 = document.querySelector("#option2_5");
let option3_5 = document.querySelector("#option3_5");
let option4_5 = document.querySelector("#option4_5");

var theend = new Audio();
theend.src = "zvuk/end.mp3";

function kraj() {
  theend.play();
}

var laugh = new Audio();
laugh.src = "zvuk/laugh.mp3";

function smeh() {
  laugh.play();
}

var orc_death = new Audio();
orc_death.src = "zvuk/orc_death.mp3";

function orc_smrt() {
  orc_death.play();
}

next.addEventListener("click", function() {
  next.style.visibility = "hidden";
  next2.style.visibility = "visible";
  story.style.visibility = "hidden";
  halfling.style.visibility = "visible";
  dialogbox.style.visibility = "visible";
  text.style.visibility = "visible";
})

next2.addEventListener("click", function() {

  next2.style.visibility = "hidden";
  orc.style.visibility = "visible";
  halfling.style.visibility = "hidden";
  dialogbox.style.visibility = "hidden";
  dialogbox3.style.visibility = "visible";
  text.style.visibility = "hidden";
  text2.style.visibility = "visible";
  option1.style.visibility = "visible";
  option2.style.visibility = "visible";
  option3.style.visibility = "visible";
  option4.style.visibility = "visible";
})

next3.addEventListener("click", function() {
  text3.style.visibility = "hidden";
  dialogbox3.style.visibility = "hidden";
  orc.style.visibility = "hidden";
  halfling.style.visibility = "visible";
  dialogbox.style.visibility = "visible";
  text4.style.visibility = "visible";
})

next5.addEventListener("click", function() {
  next5.style.visibility = "hidden";
  dialogbox3.style.visibility = "hidden";
  orc.style.visibility = "hidden";
  text5.style.visibility = "hidden";
  halfling.style.visibility = "visible";
  dialogbox.style.visibility = "visible";
  text4.style.visibility = "visible";
  text6.style.visibility = "hidden";
  next4.style.visibility = "visible";
})

option1.addEventListener("click", function() {
  option1.style.visibility = "hidden";
  option2.style.visibility = "hidden";
  option3.style.visibility = "hidden";
  option4.style.visibility = "hidden";
  text2.style.visibility = "hidden";
  next4.style.visibility = "visible";
  text4.style.visibility = "visible";
  halfling.style.visibility = "visible";
  dialogbox.style.visibility = "visible";
  orc.style.visibility = "hidden";
  dialogbox3.style.visibility = "hidden";
})

option2.addEventListener("click", function() {
  option1.style.visibility = "hidden";
  option2.style.visibility = "hidden";
  option3.style.visibility = "hidden";
  option4.style.visibility = "hidden";
  dialogbox3.style.visibility = "visible";
  orc.style.visibility = "visible";
  text2.style.visibility = "hidden";
  text5.style.visibility = "visible";
  next5.style.visibility = "visible";
})

option3.addEventListener("click", function() {
  option1.style.visibility = "hidden";
  option2.style.visibility = "hidden";
  option3.style.visibility = "hidden";
  option4.style.visibility = "hidden";
  dialogbox3.style.visibility = "visible";
  orc.style.visibility = "visible";
  text2.style.visibility = "hidden";
  text6.style.visibility = "visible";
  next5.style.visibility = "visible";
})

option4.addEventListener("click", function() {
  story2.style.visibility = "visible";
  end.style.visibility = "visible";
  option1.style.visibility = "hidden";
  option2.style.visibility = "hidden";
  option3.style.visibility = "hidden";
  option4.style.visibility = "hidden";
  dialogbox3.style.visibility = "hidden";
  orc.style.visibility = "hidden";
  text2.style.visibility = "hidden";
})

next3.addEventListener("click", function() {
  option1_2.style.visibility = "visible";
  option2_2.style.visibility = "visible";
  option3_2.style.visibility = "visible";
  option4_2.style.visibility = "visible";
  dialogbox.style.visibility = "hidden";
  halfling.style.visibility = "hidden";
  text4.style.visibility = "hidden";
  next3.style.visibility = "hidden";
  orc.style.visibility = "visible";
})

next4.addEventListener("click", function() {
  option1_2.style.visibility = "visible";
  option2_2.style.visibility = "visible";
  option3_2.style.visibility = "visible";
  option4_2.style.visibility = "visible";
  dialogbox.style.visibility = "hidden";
  halfling.style.visibility = "hidden";
  text4.style.visibility = "hidden";
  next4.style.visibility = "hidden";
  orc.style.visibility = "visible";
  dialogbox3.style.visibility = "hidden";
  text5.style.visibility = "hidden";
})

next6.addEventListener("click", function() {
  halfling.style.visibility = "visible";
  dialogbox.style.visibility = "visible";
  text7.style.visibility = "visible";
  next6.style.visibility = "hidden";
  story4.style.visibility = "hidden";
  story5.style.visibility = "hidden";
  next7.style.visibility = "visible";
})

next7.addEventListener("click", function() {
  next7.style.visibility = "hidden";
  halfling.style.visibility = "visible";
  dialogbox.style.visibility = "hidden";
  option1_3.style.visibility = "visible";
  option2_3.style.visibility = "visible";
  option3_3.style.visibility = "visible";
  option4_3.style.visibility = "visible";
  text7.style.visibility = "hidden";
})

option1_2.addEventListener("click", function() {
  orc.style.visibility = "hidden";
  text4.style.visibility = "hidden";
  dialogbox3.style.visibility = "hidden";
  option1_2.style.visibility = "hidden";
  option2_2.style.visibility = "hidden";
  option3_2.style.visibility = "hidden";
  option4_2.style.visibility = "hidden";
  end.style.visibility = "visible";
  story3.style.visibility = "visible";
})

option2_2.addEventListener("click", function() {
  story4.style.visibility = "visible";
  next6.style.visibility = "visible";
  option1_2.style.visibility = "hidden";
  option2_2.style.visibility = "hidden";
  option3_2.style.visibility = "hidden";
  option4_2.style.visibility = "hidden";
})

option3_2.addEventListener("click", function() {
  story5.style.visibility = "visible";
  next6.style.visibility = "visible";
  option1_2.style.visibility = "hidden";
  option2_2.style.visibility = "hidden";
  option3_2.style.visibility = "hidden";
  option4_2.style.visibility = "hidden";
})

option4_2.addEventListener("click", function() {
  story2.style.visibility = "visible";
  end.style.visibility = "visible";
  option1_2.style.visibility = "hidden";
  option2_2.style.visibility = "hidden";
  option3_2.style.visibility = "hidden";
  option4_2.style.visibility = "hidden";
  orc.style.visibility = "hidden";
})

option4_3.addEventListener("click", function() {
  story6.style.visibility = "visible";
  halfling.style.visibility = "hidden";
  end.style.visibility = "visible";
  option1_3.style.visibility = "hidden";
  option2_3.style.visibility = "hidden";
  option3_3.style.visibility = "hidden";
  option4_3.style.visibility = "hidden";
  option3_3.style.visibility = "hidden";
  option4_3.style.visibility = "hidden";
  option1_4.style.visibility = "hidden";
  option2_4.style.visibility = "hidden";
  next8.style.visibility = "hidden";
  dialogbox.style.visibility = "hidden";
  text8.style.visibility = "hidden";
  text9.style.visibility = "hidden";
})

option1_3.addEventListener("click", function() {
  text8.style.visibility = "visible";
  halfling.style.visibility = "visible";
  option1_3.style.visibility = "hidden";
  option2_3.style.visibility = "hidden";
  option3_3.style.visibility = "hidden";
  option4_3.style.visibility = "hidden";
  dialogbox.style.visibility = "visible";
  next8.style.visibility = "visible";
})

option2_3.addEventListener("click", function() {
  text9.style.visibility = "visible";
  halfling.style.visibility = "visible";
  option1_3.style.visibility = "hidden";
  option2_3.style.visibility = "hidden";
  option3_3.style.visibility = "hidden";
  option4_3.style.visibility = "hidden";
  dialogbox.style.visibility = "visible";
  next8.style.visibility = "visible";
})

option3_3.addEventListener("click", function() {
  story7.style.visibility = "visible";
  halfling.style.visibility = "hidden";
  end.style.visibility = "visible";
  option1_3.style.visibility = "hidden";
  option2_3.style.visibility = "hidden";
  option3_3.style.visibility = "hidden";
  option4_3.style.visibility = "hidden";
  option3_3.style.visibility = "hidden";
  option4_3.style.visibility = "hidden";
  option1_4.style.visibility = "hidden";
  option2_4.style.visibility = "hidden";
  next8.style.visibility = "hidden";
  dialogbox.style.visibility = "hidden";
  text8.style.visibility = "hidden";
  text9.style.visibility = "hidden";
})

next8.addEventListener("click", function() {
  option3_3.style.visibility = "visible";
  option4_3.style.visibility = "visible";
  option1_4.style.visibility = "visible";
  option2_4.style.visibility = "visible";
  next8.style.visibility = "hidden";
})

option1_4.addEventListener("click", function() {
  option3_3.style.visibility = "hidden";
  option4_3.style.visibility = "hidden";
  option1_4.style.visibility = "hidden";
  option2_4.style.visibility = "hidden";
  text10.style.visibility = "visible";
  text8.style.visibility = "hidden";
  text9.style.visibility = "hidden";
  option3_5.style.visibility = "visible";
  option4_5.style.visibility = "visible";
  option1_5.style.visibility = "visible";
  option2_5.style.visibility = "visible";
})

option2_4.addEventListener("click", function() {
  option3_3.style.visibility = "hidden";
  option4_3.style.visibility = "hidden";
  option1_4.style.visibility = "hidden";
  option2_4.style.visibility = "hidden";
  option3_5.style.visibility = "visible";
  option4_5.style.visibility = "visible";
  option1_5.style.visibility = "visible";
  option2_5.style.visibility = "visible";
  text10.style.visibility = "visible";
  text8.style.visibility = "hidden";
  text9.style.visibility = "hidden";
})
option1_5.addEventListener("click", function() {
  option3_5.style.visibility = "hidden";
  option4_5.style.visibility = "hidden";
  option1_5.style.visibility = "hidden";
  option2_5.style.visibility = "hidden";
  text11.style.visibility = "visible";
  text10.style.visibility = "hidden";
  next9.style.visibility = "visible";
})

option2_5.addEventListener("click", function() {
  option3_5.style.visibility = "hidden";
  option4_5.style.visibility = "hidden";
  option1_5.style.visibility = "hidden";
  option2_5.style.visibility = "hidden";
  text11.style.visibility = "visible";
  text10.style.visibility = "hidden";
  next9.style.visibility = "visible";
})
option3_5.addEventListener("click", function() {
  option3_5.style.visibility = "hidden";
  option4_5.style.visibility = "hidden";
  option1_5.style.visibility = "hidden";
  option2_5.style.visibility = "hidden";
  text12.style.visibility = "visible";
  text10.style.visibility = "hidden";
  next9.style.visibility = "visible";
})

option4_5.addEventListener("click", function() {
  option3_5.style.visibility = "hidden";
  option4_5.style.visibility = "hidden";
  option1_5.style.visibility = "hidden";
  option2_5.style.visibility = "hidden";
  text12.style.visibility = "visible";
  text10.style.visibility = "hidden";
  next9.style.visibility = "visible";
})

next9.addEventListener("click", function() {
  story8.style.visibility = "visible";
  halfling.style.visibility = "hidden";
  dialogbox.style.visibility = "hidden";
  text11.style.visibility = "hidden";
  text12.style.visibility = "hidden";
  next10.style.visibility = "visible";
  next9.style.visibility = "hidden";

})
