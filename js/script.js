const navbar = document.getElementById('navbar')

// ===Accessibility Settings===

const openButton = document.getElementById('open-sidebar-button')

const media = window.matchMedia ( "(width < 1000px) ")

media.addEventListener( 'change', (e) => updateNavbar(e))

function updateNavbar (e) {
    const isMobile = e.matches

    if(isMobile) {
        navbar.setAttribute('inert', ' ')
    }
    else{
        //desktop device
          navbar.removeAttribute ('inert', ' ')
    }
}

// ===Navbar Mobile===

function openSidebar () {
    navbar.classList.add('show')
    openButton.setAttribute('aria-expanded', 'true')
    navbar.removeAttribute ('inert', ' ')
}

function closeSidebar () {
    navbar.classList.remove('show')
    openButton.setAttribute('aria-expanded', 'false')
    navbar.setAttribute('inert', ' ')
}

updateNavbar (media)



// ===Video Play/Pause===


const video = document.getElementById('video');
const playPauseBtn = document.getElementById('playPauseBtn');
const playPauseBtnContainer = document.getElementById('playPauseBtnContainer');

// Function to toggle play/pause state
function togglePlayPause() {
    if (video.paused) {
        video.play();
        playPauseBtn.classList.remove('ri-play-circle-fill');
        playPauseBtn.classList.add('ri-pause-circle-fill');
        playPauseBtnContainer.classList.add('hidden'); // Hide icon after play
    } else {
        video.pause();
        playPauseBtn.classList.remove('ri-pause-circle-fill');
        playPauseBtn.classList.add('ri-play-circle-fill');
        playPauseBtnContainer.classList.remove('hidden'); // Show icon when paused
    }
}

// Toggle play/pause when clicking on the video or the icon
video.addEventListener('click', togglePlayPause);
playPauseBtnContainer.addEventListener('click', togglePlayPause);

// Initially hide the icon when the video is playing
video.addEventListener('play', () => {
    playPauseBtnContainer.classList.add('hidden');
});

// Show the icon when the video is paused
video.addEventListener('pause', () => {
    playPauseBtnContainer.classList.remove('hidden');
});




// ===Gallery page===
