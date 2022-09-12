let lamp = document.getElementById("moodLight");
let sun = document.getElementById("mood");
let nav = document.getElementById("nav");
let navLis = document.querySelectorAll("a");
let h1 = document.querySelectorAll("#white");
let sevices = document.getElementById("sevices");
let cards = document.getElementById("cards");
let section = document.getElementById("section");
let high = document.getElementById("high");
let person = document.getElementById("person");
let boxs = document.querySelectorAll("#box");

lamp.onclick = function(){
    document.body.style.background = "#000";
    this.style.display = "none";
    sun.style.display = "block";

    sevices.style.background = "#111";
    cards.style.background = "#111";
    section.style.background = "#111";
    high.style.background = "#111";
    person.style.background = "#111";
    
    for(let i = 0 ; i < 10 ; i++){
        navLis[i].style.color = "#fff";
    }
    for(let i = 0 ; i < 40 ; i++){
        h1[i].style.color = "#fff";
    }
    for(let i = 0 ; i < 30 ; i++){
        boxs[i].style.background = "#000";;
    }
}

sun.onclick = function(){
    document.body.style.background = "#fff";
    this.style.display = "none";
    lamp.style.display = "block";
    sevices.style.background = "rgb(226, 226, 226)"
    cards.style.background = "rgb(226, 226, 226)"
    section.style.background = "rgb(226, 226, 226)"
    high.style.background = "rgb(226, 226, 226)"
    person.style.background = "rgb(226, 226, 226)"
    for(let i = 0 ; i < 10 ; i++){
        navLis[i].style.color = "#000";
    }
    for(let i = 0 ; i < 40 ; i++){
        h1[i].style.color = "#000";
    }
    for(let i = 0 ; i < 30 ; i++){
        boxs[i].style.background = "#fff ";;
    }
}



