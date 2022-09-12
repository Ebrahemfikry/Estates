let lamp = document.getElementById("moodLight");
let sun = document.getElementById("mood");
let navLis = document.querySelectorAll("a");
let h1 = document.querySelectorAll("#white");
let boxs = document.querySelectorAll("#box");
let high = document.getElementById("high");


lamp.onclick = function(){
    document.body.style.background = "#000";
    this.style.display = "none";
    sun.style.display = "block";
    high.style.background = "#111";
    
    for(let i = 0 ; i < 10 ; i++){
        navLis[i].style.color = "#fff";
    }
    for(let i = 0 ; i < 10 ; i++){
        h1[i].style.color = "#fff";
    }
    for(let i = 0 ; i < 10 ; i++){
        boxs[i].style.background = "#000";
    }
}

sun.onclick = function(){
    document.body.style.background = "#fff";
    this.style.display = "none";
    lamp.style.display = "block";
    high.style.background = "rgb(226, 226, 226)";
    for(let i = 0 ; i < 10 ; i++){
        navLis[i].style.color = "#000";
    }
    for(let i = 0 ; i < 10 ; i++){
        h1[i].style.color = "#000";
    }
    for(let i = 0 ; i < 10 ; i++){
        boxs[i].style.background = "#fff";
    }
}

