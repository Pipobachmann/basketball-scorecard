let homeScore = document.getElementById("score-home");
let guestScore = document.getElementById("guest-score");
let homeCount = 0;
let guestCount = 0;

function incrementHome(n) {
    homeCount += n;
    homeScore.textContent = homeCount;


    
}
alert(homeScore)