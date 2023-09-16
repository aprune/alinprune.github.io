const textElement = document.getElementById('movingText');

function moveTextRandomly() {
    // Fade out the text
    textElement.style.opacity = 0;

    // After the fade out duration (0.5s), move the text and fade it in
    setTimeout(() => {
        const x = Math.random() * (window.innerWidth - textElement.clientWidth);
        const y = Math.random() * (window.innerHeight - textElement.clientHeight);

        textElement.style.left = x + 'px';
        textElement.style.top = y + 'px';

        // Fade in the text
        textElement.style.opacity = 1;
    }, 500); // 500ms matches the CSS transition duration
}

// Move and fade the text every 2 seconds
setInterval(moveTextRandomly, 2000);