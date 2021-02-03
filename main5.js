let halfling = document.querySelector("#halfling");
let elf = document.querySelector("#elf");
let dialogbox = document.querySelector("#dialogbox");
let dialogbox3 = document.querySelector("#dialogbox3");
let story = document.querySelector("#story");
let story2 = document.querySelector("#story2");
let story3 = document.querySelector("#story3");
let story4 = document.querySelector("#story4");
let next = document.querySelector("#next");
let next2 = document.querySelector("#next2");
let next3 = document.querySelector("#next3");
let next4 = document.querySelector("#next4");
let next5 = document.querySelector("#next5");
let text = document.querySelector("#text");
let text2 = document.querySelector("#text2");
let text3 = document.querySelector("#text3");
let text4 = document.querySelector("#text4");
let text5 = document.querySelector("#text5");
let text6 = document.querySelector("#text6");
let text7 = document.querySelector("#text7");
let text8 = document.querySelector("#text8");
let text9 = document.querySelector("#text9");
let end = document.querySelector("#end");
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

var theend = new Audio();
theend.src = "zvuk/end.mp3";

function kraj() {
  theend.play();
}

var stop = new Audio();
stop.src = "zvuk/stop.mp3";

function stani() {
  stop.play();
}

next.addEventListener("click", function () {
  next.style.visibility="hidden";
story.style.visibility="hidden";
halfling.style.visibility="visible";
dialogbox.style.visibility="visible";
text.style.visibility="visible";
next2.style.visibility="visible";
})

next2.addEventListener("click", function () {
  next2.style.visibility="hidden";
halfling.style.visibility="visible";
dialogbox.style.visibility="hidden";
text.style.visibility="hidden";
elf.style.visibility="visible";
dialogbox3.style.visibility="visible";
text2.style.visibility="visible";
next3.style.visibility="visible";
})

next3.addEventListener("click", function () {
  next3.style.visibility="hidden";
  dialogbox3.style.visibility="hidden";
text2.style.visibility="hidden";
option1.style.visibility="visible";
option2.style.visibility="visible";
option3.style.visibility="visible";
option4.style.visibility="visible";
})

option1.addEventListener("click", function () {
  option1.style.visibility="hidden";
  option2.style.visibility="hidden";
  option3.style.visibility="hidden";
  option4.style.visibility="hidden";
  text3.style.visibility="visible";
  dialogbox3.style.visibility="visible";
  option1_2.style.visibility="visible";
  option2_2.style.visibility="visible";
  option3_2.style.visibility="visible";
  option4_2.style.visibility="visible";
})

option2.addEventListener("click", function () {
  option1.style.visibility="hidden";
  option2.style.visibility="hidden";
  option3.style.visibility="hidden";
  option4.style.visibility="hidden";
  text4.style.visibility="visible";
  dialogbox3.style.visibility="visible";
  option1_2.style.visibility="visible";
  option2_2.style.visibility="visible";
  option3_2.style.visibility="visible";
  option4_2.style.visibility="visible";
})

option3.addEventListener("click", function () {
  option1.style.visibility="hidden";
  option2.style.visibility="hidden";
  option3.style.visibility="hidden";
  option4.style.visibility="hidden";
  text5.style.visibility="visible";
  dialogbox3.style.visibility="visible";
  option1_2.style.visibility="visible";
  option2_2.style.visibility="visible";
  option3_2.style.visibility="visible";
  option4_2.style.visibility="visible";
})

option4.addEventListener("click", function () {
  option1.style.visibility="hidden";
  option2.style.visibility="hidden";
  option3.style.visibility="hidden";
  option4.style.visibility="hidden";
  text5.style.visibility="hidden";
  dialogbox3.style.visibility="hidden";
  elf.style.visibility="hidden";
  halfling.style.visibility="hidden";
  end.style.visibility="visible";
  story2.style.visibility="visible";
})

option1_2.addEventListener("click", function () {
  option1_2.style.visibility="hidden";
  option2_2.style.visibility="hidden";
  option3_2.style.visibility="hidden";
  option4_2.style.visibility="hidden";
  text4.style.visibility="hidden";
  text6.style.visibility="visible";
  next4.style.visibility="visible";
  text3.style.visibility="hidden";
  text5.style.visibility="hidden";
  })

  option2_2.addEventListener("click", function () {
    option1_2.style.visibility="hidden";
    option2_2.style.visibility="hidden";
    option3_2.style.visibility="hidden";
    option4_2.style.visibility="hidden";
    text4.style.visibility="hidden";
    text7.style.visibility="visible";
    next4.style.visibility="visible";
    text3.style.visibility="hidden";
    text5.style.visibility="hidden";
    })

    option3_2.addEventListener("click", function () {
      option1_2.style.visibility="hidden";
      option2_2.style.visibility="hidden";
      option3_2.style.visibility="hidden";
      option4_2.style.visibility="hidden";
      text5.style.visibility="hidden";
      text4.style.visibility="hidden";
      text8.style.visibility="visible";
      next4.style.visibility="visible";
      text3.style.visibility="hidden";
      })

      option4_2.addEventListener("click", function () {
        option1_2.style.visibility="hidden";
        option2_2.style.visibility="hidden";
        option3_2.style.visibility="hidden";
        option4_2.style.visibility="hidden";
        text4.style.visibility="hidden";
        halfling.style.visibility="hidden";
        elf.style.visibility="hidden";
        dialogbox3.style.visibility="hidden";
        story3.style.visibility="visible";
        end.style.visibility="visible";
        text3.style.visibility="hidden";
        text5.style.visibility="hidden";
        })

        next4.addEventListener("click", function () {
          text9.style.visibility="visible";
          next4.style.visibility="hidden";
          text7.style.visibility="hidden";
          text8.style.visibility="hidden";
          text6.style.visibility="hidden";
          option1_3.style.visibility="visible";
          option2_3.style.visibility="visible";
          option3_3.style.visibility="visible";
          option4_3.style.visibility="visible";
})

option1_3.addEventListener("click", function () {
  option1_3.style.visibility="hidden";
  option2_3.style.visibility="hidden";
  option3_3.style.visibility="hidden";
  option4_3.style.visibility="hidden";
  story4.style.visibility="visible";
  elf.style.visibility="hidden";
  halfling.style.visibility="hidden";
  dialogbox3.style.visibility="hidden";
  text9.style.visibility="hidden";
  next5.style.visibility="visible";
})

option2_3.addEventListener("click", function () {
  option1_3.style.visibility="hidden";
  option2_3.style.visibility="hidden";
  option3_3.style.visibility="hidden";
  option4_3.style.visibility="hidden";
  story4.style.visibility="visible";
  elf.style.visibility="hidden";
  halfling.style.visibility="hidden";
  dialogbox3.style.visibility="hidden";
  text9.style.visibility="hidden";
  next5.style.visibility="visible";
})

option3_3.addEventListener("click", function () {
  option1_3.style.visibility="hidden";
  option2_3.style.visibility="hidden";
  option3_3.style.visibility="hidden";
  option4_3.style.visibility="hidden";
  story4.style.visibility="visible";
  elf.style.visibility="hidden";
  halfling.style.visibility="hidden";
  dialogbox3.style.visibility="hidden";
  text9.style.visibility="hidden";
  next5.style.visibility="visible";
})

option4_3.addEventListener("click", function () {
  option1_3.style.visibility="hidden";
  option2_3.style.visibility="hidden";
  option3_3.style.visibility="hidden";
  option4_3.style.visibility="hidden";
  story3.style.visibility="visible";
  elf.style.visibility="hidden";
  halfling.style.visibility="hidden";
  dialogbox3.style.visibility="hidden";
  text9.style.visibility="hidden";
  end.style.visibility="visible";
})
