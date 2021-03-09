// Get all play buttons
const playButtons = document.getElementsByClassName('player__btn');

// Handle click event
const handleClick = (e) => {
    const playerId = "audio" + e.target.dataset.player;
    const player = document.getElementById(playerId);
    const btn = document.getElementById(e.target.id);

    if (player.paused || player.ended) {
        btn.querySelector(".pause-btn").classList.toggle("hide");
        btn.querySelector(".play-btn").classList.toggle("hide");
        player.play();
    } else {
        player.pause();
        btn.querySelector(".pause-btn").classList.toggle("hide");
        btn.querySelector(".play-btn").classList.toggle("hide");
    }
}

// Attach event listeners
for (let i = 0; i < playButtons.length; i++) {
    // Attach click event to buttons
    playButtons[i].addEventListener("click", handleClick);
};