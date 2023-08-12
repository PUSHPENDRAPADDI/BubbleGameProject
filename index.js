var timer = 60;
var score = 0;
var hitrn = 0;
var hitCount = 0;

function increaseScore() {
    score += 10
    document.querySelector("#incScore").textContent = score
}

function getNewHit() {
    hitrn = Math.floor(Math.random() * 10);
    document.querySelector("#hitVal").textContent = hitrn
}

function makeBubble() {
    var clutter = "";
    for (var i = 1; i <= 168; i++) {
        var num = Math.floor(Math.random() * 10)
        clutter += `<div id= ${i.toString()} class="bubble">${num}</div>`
    }
    document.querySelector("#pbtm").innerHTML = clutter;
    for (var i = 1; i <= 168; i++) {
        var dynamicElement = document.getElementById(i.toString());
        dynamicElement.style.backgroundColor = `rgb(${Math.floor(Math.random() * 100)},${Math.floor(Math.random() * 100)},${Math.floor(Math.random() * 100)})`
    }
}


function runTimer() {
    var timerInt = setInterval(() => {
        if (timer > 0) {
            timer--;
            document.querySelector("#timerval").textContent = timer
        } else {
            clearInterval(timerInt)
            document.querySelector("#pbtm").innerHTML = `
            <div>
            <div class = "scorediv">${score} in the ${hitCount} Hits</div>
            <button class="button" ${onclick = (restartGame)}>Restart</button>
            </div>`
            document.querySelector("#hitVal").textContent = 0
        }
    }, 1000);
}


document.querySelector("#pbtm")
    .addEventListener('click', function (params) {
        var clickedNum = Number(params.target.textContent);
        hitCount++;
        console.log(hitCount)
        if (clickedNum === hitrn) {
            increaseScore()
            makeBubble()
            getNewHit()
        }
    })

function restartGame() {
    timer = 60;
    hitCount = 0
    score = 0
    getNewHit()
    runTimer()
    makeBubble()
}

getNewHit()
runTimer()
makeBubble()