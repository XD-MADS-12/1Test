// Initialize the YouTube player
let player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '450',
        width: '800',
        videoId: '', // Start with an empty video
    });
}

// Listen for click on video thumbnails
const videos = document.querySelectorAll('.video');
videos.forEach(video => {
    video.addEventListener('click', () => {
        const videoId = video.getAttribute('data-video-id');
        player.loadVideoById(videoId); // Load the selected video
    });
});