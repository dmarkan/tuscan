let end = document.querySelector("#end");
let halfling = document.querySelector("#halfling");
let elf = document.querySelector("#elf");
let dwarf = document.querySelector("#dwarf");
let halfling2 = document.querySelector("#halfling2");
let halfling3 = document.querySelector("#halfling3");
let elf2 = document.querySelector("#elf2");
let dwarf2 = document.querySelector("#dwarf2");
let dwarf3 = document.querySelector("#dwarf3");
let dwarf4 = document.querySelector("#dwarf4");
let dragon = document.querySelector("#dragon");
let dialogbox = document.querySelector("#dialogbox");
let dialogbox2 = document.querySelector("#dialogbox2");
let dialogbox3 = document.querySelector("#dialogbox3");
let story = document.querySelector("#story");
let story2 = document.querySelector("#story2");
let story3 = document.querySelector("#story3");
let story4 = document.querySelector("#story4");
let choice = document.querySelector("#choice");
let blow = document.querySelector("#blow");
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
let next11 = document.querySelector("#next11");
let next12 = document.querySelector("#next12");
let next13 = document.querySelector("#next13");
let option1 = document.querySelector("#option1");
let option2 = document.querySelector("#option2");
let option3 = document.querySelector("#option3");
let option4 = document.querySelector("#option4");

var theend = new Audio();
theend.src = "zvuk/end.mp3";

function kraj() {
  theend.play();
}

var dragon_roar = new Audio();
dragon_roar.src = "zvuk/dragon.mp3";

function zmaj() {
  dragon_roar.play();
}

var pain = new Audio();
pain.src = "zvuk/pain.mp3";

function bol() {
  pain.play();
}

var dragon_death = new Audio();
dragon_death.src = "zvuk/dragon_death.mp3";

function smrt() {
  dragon_death.play();
}

next.addEventListener("click", function () {
next.style.visibility="hidden";
next2.style.visibility="visible";
halfling.style.visibility="visible";
dialogbox.style.visibility="visible";
text.style.visibility="visible";
story.style.visibility="hidden";
})

next2.addEventListener("click", function () {
  next2.style.visibility="hidden";
  next3.style.visibility="visible";
  halfling.style.visibility="hidden";
  elf.style.visibility="visible";
  text.style.visibility="hidden";
  text2.style.visibility="visible";
  })

  next3.addEventListener("click", function () {
    next3.style.visibility="hidden";
    next4.style.visibility="visible";
    elf.style.visibility="hidden";
    text2.style.visibility="hidden";
    text3.style.visibility="visible";
    dwarf.style.visibility="visible";
    dialogbox.style.visibility="hidden";
    dialogbox3.style.visibility="visible";
})

next4.addEventListener("click", function () {
  next4.style.visibility="hidden";
  dwarf.style.visibility="hidden";
  dialogbox2.style.visibility="visible";
  text3.style.visibility="hidden";
  text4.style.visibility="visible";
  dragon.style.visibility="visible";
  dialogbox3.style.visibility="hidden";
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
  text6.style.visibility="visible";
  next5.style.visibility="visible";
  text4.style.visibility="hidden";
  })

  option2.addEventListener("click", function () {
    option1.style.visibility="hidden";
    option2.style.visibility="hidden";
    option3.style.visibility="hidden";
    option4.style.visibility="hidden";
    text6.style.visibility="visible";
    next5.style.visibility="visible";
    text4.style.visibility="hidden";
    })

    option3.addEventListener("click", function () {
      option1.style.visibility="hidden";
      option2.style.visibility="hidden";
      option3.style.visibility="hidden";
      option4.style.visibility="hidden";
      text6.style.visibility="visible";
      next5.style.visibility="visible";
      text4.style.visibility="hidden";
      })

      option4.addEventListener("click", function () {
        option1.style.visibility="hidden";
        option2.style.visibility="hidden";
        option3.style.visibility="hidden";
        option4.style.visibility="hidden";
        text6.style.visibility="hidden";
        text4.style.visibility="hidden";
        end.style.visibility="visible";
        story2.style.visibility="visible";
        dialogbox2.style.visibility="hidden";
        dragon.style.visibility="hidden";
        })

        next5.addEventListener("click", function () {
          halfling.style.visibility="visible";
          dialogbox2.style.visibility="hidden";
          text5.style.visibility="visible";
          next5.style.visibility="hidden";
          next6.style.visibility="visible";
          dragon.style.visibility="hidden";
          text6.style.visibility="hidden";
          dialogbox.style.visibility="visible";
})

next6.addEventListener("click", function () {
  next6.style.visibility="hidden";
  dragon.style.visibility="visible";
  halfling.style.visibility="hidden";
  dialogbox.style.visibility="hidden";
  text5.style.visibility="hidden";
  halfling2.style.visibility="visible";
  elf2.style.visibility="visible";
  dwarf2.style.visibility="visible";
  choice.style.visibility="visible";
  })

  halfling2.addEventListener("click", function () {
    dragon.style.visibility="hidden";
    halfling2.style.visibility="hidden";
    text5.style.visibility="hidden";
    halfling2.style.visibility="hidden";
    elf2.style.visibility="hidden";
    dwarf2.style.visibility="hidden";
    choice.style.visibility="hidden";
    end.style.visibility="visible";
    story3.style.visibility="visible";
  })

  dwarf2.addEventListener("click", function () {
    dragon.style.visibility="hidden";
    halfling2.style.visibility="hidden";
    text5.style.visibility="hidden";
    halfling2.style.visibility="hidden";
    elf2.style.visibility="hidden";
    dwarf2.style.visibility="hidden";
    choice.style.visibility="hidden";
    end.style.visibility="visible";
    story3.style.visibility="visible";
  })

  elf2.addEventListener("click", function () {
    dragon.style.visibility="hidden";
    halfling2.style.visibility="hidden";
    text5.style.visibility="hidden";
    halfling2.style.visibility="hidden";
    elf2.style.visibility="hidden";
    dwarf2.style.visibility="hidden";
    choice.style.visibility="hidden";
  halfling.style.visibility="visible";
    text7.style.visibility="visible";
    dialogbox.style.visibility="visible";
    next7.style.visibility="visible";
  })

  next7.addEventListener("click", function () {
    next7.style.visibility="hidden";
    dragon.style.visibility="visible";
    halfling3.style.visibility="visible";
    dwarf3.style.visibility="visible";
    choice.style.visibility="visible";
  halfling.style.visibility="hidden";
    text7.style.visibility="hidden";
    dialogbox.style.visibility="hidden";
  })

dwarf3.addEventListener("click", function () {
  dragon.style.visibility="hidden";
  halfling3.style.visibility="hidden";
  dwarf3.style.visibility="hidden";
  choice.style.visibility="hidden";
halfling.style.visibility="hidden";
  text7.style.visibility="hidden";
  dialogbox.style.visibility="hidden";
  story3.style.visibility="visible";
  end.style.visibility="visible";
  })

  halfling3.addEventListener("click", function () {
    dragon.style.visibility="hidden";
    halfling2.style.visibility="hidden";
    text5.style.visibility="hidden";
    halfling3.style.visibility="hidden";
    elf2.style.visibility="hidden";
    dwarf3.style.visibility="hidden";
    choice.style.visibility="hidden";
  halfling.style.visibility="visible";
    text8.style.visibility="visible";
    dialogbox.style.visibility="visible";
    next8.style.visibility="visible";

    })

    next8.addEventListener("click", function () {
      dragon.style.visibility="visible";
      dwarf4.style.visibility="visible";
      choice.style.visibility="visible";
      text8.style.visibility="hidden";
      dialogbox.style.visibility="hidden";
      next8.style.visibility="hidden";
      halfling.style.visibility="hidden";
})

dwarf4.addEventListener("click", function () {
  dragon.style.visibility="hidden";
  halfling2.style.visibility="hidden";
  text5.style.visibility="hidden";
  halfling3.style.visibility="hidden";
  elf2.style.visibility="hidden";
  dwarf4.style.visibility="hidden";
  choice.style.visibility="hidden";
halfling.style.visibility="visible";
  dialogbox.style.visibility="visible";
  text9.style.visibility="visible";
  blow.style.visibility="visible";
})

blow.addEventListener("click", function () {
  blow.style.visibility="hidden";
  halfling.style.visibility="hidden";
  dialogbox.style.visibility="hidden";
  text9.style.visibility="hidden";
  dragon.style.visibility="visible";
  next9.style.visibility="visible";
  })

  next9.addEventListener("click", function () {
next9.style.visibility="hidden";
dragon.style.visibility="hidden";
next10.style.visibility="visible";
text10.style.visibility="visible";
halfling.style.visibility="visible";
dialogbox.style.visibility="visible";
})

next10.addEventListener("click", function () {
  next10.style.visibility="hidden";
  halfling.style.visibility="hidden";
  text10.style.visibility="hidden";
  elf.style.visibility="visible";
  text11.style.visibility="visible";
  next11.style.visibility="visible";

  })

  next11.addEventListener("click", function () {
    next11.style.visibility="hidden";
    elf.style.visibility="hidden";
    dialogbox.style.visibility="hidden";
    text11.style.visibility="hidden";
    dwarf.style.visibility="visible";
    text12.style.visibility="visible";
    dialogbox3.style.visibility="visible";
    next12.style.visibility="visible";

      })

      next12.addEventListener("click", function () {
        next12.style.visibility="hidden";
        next13.style.visibility="visible";
        dwarf.style.visibility="hidden";
        dialogbox3.style.visibility="hidden";
        text12.style.visibility="hidden";
        story4.style.visibility="visible";
})
