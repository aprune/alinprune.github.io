const textElement = document.getElementById('movingText');

function moveTextRandomly() {
    const x = Math.random() * (window.innerWidth - textElement.clientWidth);
    const y = Math.random() * (window.innerHeight - textElement.clientHeight);

    textElement.style.left = x + 'px';
    textElement.style.top = y + 'px';
}

// Move the text every 2 seconds
setInterval(moveTextRandomly, 2000);