let blueCar = document.querySelector(".blueCar");
let raceCar = document.querySelector(".raceCar");

// bluecar Move
blueCar.addEventListener("animationiteration", function(){
    let randomLeft = Math.floor(Math.random() * 1024);
    if(randomLeft > 700 || randomLeft < 900 || randomLeft < 110){
        randomLeft += 300;
    }
    blueCar.style.left = randomLeft + "px";
});

// 102*10 = 1020
// raceCar
raceCar.addEventListener("keypress", function(e){
    let raceCarLeft = Math.floor(Math.random()*9);
    if(e.keycode == "39" || raceCarLeft > 6 || raceCarLeft < 9){
        if(raceCarLeft < 1024){
            raceCar.style.left = raceCarLeft*104 + "px";
        }
    }else if(e.keycode == "37" || raceCarLeft > 6 || raceCarLeft < 9){
        if(raceCarLeft < 1024){
            raceCar.style.left = raceCarLeft*104 + "px";
        }
    }
});

