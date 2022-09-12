let lamp = document.getElementById("moodLight");
let sun = document.getElementById("mood");
let navLis = document.querySelectorAll("a");
let h1 = document.querySelectorAll("#white");
let free = document.getElementById("free");


lamp.onclick = function(){
    document.body.style.background = "#000";
    this.style.display = "none";
    sun.style.display = "block";
    free.style.background = "#111";
    
    for(let i = 0 ; i < 10 ; i++){
        navLis[i].style.color = "#fff";
    }
    for(let i = 0 ; i < 15 ; i++){
        h1[i].style.color = "#fff";
    }
}

sun.onclick = function(){
    document.body.style.background = "#fff";
    this.style.display = "none";
    lamp.style.display = "block";
    free.style.background = "rgb(226, 226, 226)";
    for(let i = 0 ; i < 10 ; i++){
        navLis[i].style.color = "#000";
    }
    for(let i = 0 ; i < 10 ; i++){
        h1[i].style.color = "#000";
    }
}

