let halfling = document.querySelector("#halfling");
let wolf = document.querySelector("#wolf");
let dialogbox = document.querySelector("#dialogbox");
let dialogbox3 = document.querySelector("#dialogbox3");
let story = document.querySelector("#story");
let story2 = document.querySelector("#story2");
let story3 = document.querySelector("#story3");
let story4 = document.querySelector("#story4");
let story5 = document.querySelector("#story5");
let story6 = document.querySelector("#story6");
let story7 = document.querySelector("#story7");
let next = document.querySelector("#next");
let next2 = document.querySelector("#next2");
let next3 = document.querySelector("#next3");
let next4 = document.querySelector("#next4");
let next5 = document.querySelector("#next5");
let next6 = document.querySelector("#next6");
let next7 = document.querySelector("#next7");
let text = document.querySelector("#text");
let text2 = document.querySelector("#text2");
let text3 = document.querySelector("#text3");
let text4 = document.querySelector("#text4");
let text5 = document.querySelector("#text5");
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

var theend = new Audio();
theend.src = "zvuk/end.mp3";

function kraj() {
  theend.play();
}

var howl = new Audio();
howl.src = "zvuk/howl.mp3";

function vuk() {
  howl.play();
}

var wdeath = new Audio();
wdeath.src = "zvuk/wolf_death.mp3";

function vuksmrt() {
  wdeath.play();
}

var growl = new Audio();
growl.src = "zvuk/growl.mp3";

function rezanje() {
  growl.play();
}

next.addEventListener("click", function() {
  wolf.style.visibility = "visible";
  dialogbox3.style.visibility = "visible";
  text.style.visibility = "visible";
  story.style.visibility = "hidden";
next.style.visibility = "hidden";
next2.style.visibility = "visible";
})

next2.addEventListener("click", function() {
  wolf.style.visibility = "visible";
  dialogbox3.style.visibility = "hidden";
  text.style.visibility = "hidden";
next2.style.visibility = "hidden";
option1.style.visibility = "visible";
option2.style.visibility = "visible";
option3.style.visibility = "visible";
option4.style.visibility = "visible";
})

option1.addEventListener("click", function() {
  dialogbox3.style.visibility = "visible";
  option1.style.visibility = "hidden";
  option2.style.visibility = "hidden";
  option3.style.visibility = "hidden";
  option4.style.visibility = "hidden";
  text2.style.visibility = "visible";
  option1_2.style.visibility = "visible";
  option2_2.style.visibility = "visible";
  option3_2.style.visibility = "visible";
  option4_2.style.visibility = "visible";
  })

  option2.addEventListener("click", function() {
    dialogbox3.style.visibility = "visible";
    option1.style.visibility = "hidden";
    option2.style.visibility = "hidden";
    option3.style.visibility = "hidden";
    option4.style.visibility = "hidden";
    text2.style.visibility = "visible";
    option1_2.style.visibility = "visible";
    option2_2.style.visibility = "visible";
    option3_2.style.visibility = "visible";
    option4_2.style.visibility = "visible";
    })

    option3.addEventListener("click", function() {
      dialogbox3.style.visibility = "hidden";
      option1.style.visibility = "hidden";
      option2.style.visibility = "hidden";
      option3.style.visibility = "hidden";
      option4.style.visibility = "hidden";
      text3.style.visibility = "visible";
      halfling.style.visibility = "visible";
      dialogbox.style.visibility = "visible";
      next3.style.visibility = "hidden";
      next4.style.visibility = "visible";
      })

      option4.addEventListener("click", function() {
        dialogbox3.style.visibility = "hidden";
        option1.style.visibility = "hidden";
        option2.style.visibility = "hidden";
        option3.style.visibility = "hidden";
        option4.style.visibility = "hidden";
        text3.style.visibility = "visible";
        halfling.style.visibility = "visible";
        dialogbox.style.visibility = "visible";
        next3.style.visibility = "hidden";
        next4.style.visibility = "visible";
        })

option1_2.addEventListener("click", function() {
  text3.style.visibility = "visible";
  halfling.style.visibility = "visible";
  dialogbox.style.visibility = "visible";
  option1_2.style.visibility = "hidden";
  option2_2.style.visibility = "hidden";
  option3_2.style.visibility = "hidden";
  option4_2.style.visibility = "hidden";
  dialogbox3.style.visibility = "hidden";
  text2.style.visibility = "hidden";
  next4.style.visibility = "visible";
})

option2_2.addEventListener("click", function() {
  text3.style.visibility = "visible";
  halfling.style.visibility = "visible";
  dialogbox.style.visibility = "visible";
  option1_2.style.visibility = "hidden";
  option2_2.style.visibility = "hidden";
  option3_2.style.visibility = "hidden";
  option4_2.style.visibility = "hidden";
  dialogbox3.style.visibility = "hidden";
  text2.style.visibility = "hidden";
  next4.style.visibility = "visible";
})

option3_2.addEventListener("click", function() {
  end.style.visibility = "visible";
 wolf.style.visibility = "hidden";
  option1_2.style.visibility = "hidden";
  option2_2.style.visibility = "hidden";
  option3_2.style.visibility = "hidden";
  option4_2.style.visibility = "hidden";
  dialogbox3.style.visibility = "hidden";
  text2.style.visibility = "hidden";
  next4.style.visibility = "hidden";
  story2.style.visibility = "visible";
})

next4.addEventListener("click", function() {
  halfling.style.visibility = "hidden";
  dialogbox.style.visibility = "hidden";
  text3.style.visibility = "hidden";
  dialogbox3.style.visibility = "visible";
  text4.style.visibility = "visible";
  next4.style.visibility = "hidden";
})

next5.addEventListener("click", function() {
  next5.style.visibility = "hidden";
  halfling.style.visibility = "visible";
  dialogbox.style.visibility = "visible";
  text5.style.visibility = "visible";
  story4.style.visibility = "hidden";
  story5.style.visibility = "hidden";
  story6.style.visibility = "hidden";
  })

option4_2.addEventListener("click", function() {
  option1_2.style.visibility = "hidden";
  option2_2.style.visibility = "hidden";
  option3_2.style.visibility = "hidden";
  option4_2.style.visibility = "hidden";
  story3.style.visibility = "visible";
end.style.visibility = "visible";
wolf.style.visibility = "hidden";
dialogbox3.style.visibility = "hidden";
text2.style.visibility = "hidden";
option1_3.style.visibility = "hidden";
option2_3.style.visibility = "hidden";
option3_3.style.visibility = "hidden";

})

next4.addEventListener("click", function() {
  dialogbox3.style.visibility = "hidden";
  next4.style.visibility = "hidden";
  option1_3.style.visibility = "visible";
  option2_3.style.visibility = "visible";
  option3_3.style.visibility = "visible";
  option4_2.style.visibility = "visible";
  text4.style.visibility = "hidden";
})

next5.addEventListener("click", function() {
  dialogbox3.style.visibility = "hidden";
  next5.style.visibility = "hidden";
  next6.style.visibility = "visible";

})

next6.addEventListener("click", function() {
  dialogbox.style.visibility = "hidden";
  halfling.style.visibility = "hidden";
  next6.style.visibility = "hidden";
  story7.style.visibility = "visible";
  next7.style.visibility = "visible";
  text5.style.visibility = "hidden";
})

option1_3.addEventListener("click", function() {
  option1_3.style.visibility = "hidden";
  option2_3.style.visibility = "hidden";
  option3_3.style.visibility = "hidden";
  option4_2.style.visibility = "hidden";
  wolf.style.visibility = "hidden";
  story4.style.visibility = "visible";
  next5.style.visibility = "visible";
})

option2_3.addEventListener("click", function() {
  option1_3.style.visibility = "hidden";
  option2_3.style.visibility = "hidden";
  option3_3.style.visibility = "hidden";
  option4_2.style.visibility = "hidden";
  wolf.style.visibility = "hidden";
  story5.style.visibility = "visible";
  next5.style.visibility = "hidden";
  end.style.visibility = "visible";
})

option3_3.addEventListener("click", function() {
  option1_3.style.visibility = "hidden";
  option2_3.style.visibility = "hidden";
  option3_3.style.visibility = "hidden";
  option4_2.style.visibility = "hidden";
  wolf.style.visibility = "hidden";
  story6.style.visibility = "visible";
  next5.style.visibility = "visible";
})
