const textElement = document.getElementById('movingText');

function moveTextRandomly() {
    const x = Math.random() * (window.innerWidth - textElement.offsetWidth);
    const y = Math.random() * (window.innerHeight - textElement.offsetHeight);

    textElement.style.left = x + 'px';
    textElement.style.top = y + 'px';
}

// Move the text every 2 seconds
setInterval(moveTextRandomly, 2000);