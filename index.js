let homeScore = document.getElementById("score-home");
let guestScore = document.getElementById("score-guest");
let homeCount = 0;
let guestCount = 0;

function incrementHome(n) {
    homeCount += n;
    homeScore.textContent = homeCount;
}

function incrementGuest(n) {
    guestCount += n;
    guestScore.textContent = guestCount;
}

function resetHome(){
    homeScore.textContent = 0;
}

function resetGuest(){
    guestScore.textContent = 0;
}
