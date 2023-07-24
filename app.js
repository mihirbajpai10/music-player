const audio = document.getElementById('audio');
const playPauseBtn = document.getElementById('playPauseBtn');
const songList = document.getElementById('songList').getElementsByTagName('a');

let currentSongIndex = 0;

// Function to play the selected song from the playlist
function playSong(index) {
    if (index >= 0 && index < songList.length) {
        currentSongIndex = index;
        audio.src = songList[index].href;
        audio.play();
        playPauseBtn.textContent = 'play';
    }
}

// Function to handle the play/pause button
function togglePlay() {
    if (audio.paused) {
        audio.play();
        playPauseBtn.textContent = 'Pause';
    } else {
        audio.pause();
        playPauseBtn.textContent = 'Play';
    }
}
 
// Add event listeners to each song in the playlist
for (let i = 0; i < songList.length; i++) {
    songList[i].addEventListener('click', function(e) {
        e.preventDefault();
        playSong(i);
    });
}

playPauseBtn.addEventListener('click', togglePlay);

// Play the first song from the playlist by default
playSong(currentSongIndex);