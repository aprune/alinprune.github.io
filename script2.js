// Our "database" of phrases
const phrases = [
    	"Sa ma sugi Cosmine.",
		"Horse",
		"Work in progres.",
		"Lil bro stupid.",
		"Ce mai astepti?","poate ti se pare dubios","dar","muie",
		"Horse...",
		"ney","ney?","ney",
    // ... other phrases ...
];

// Define the fixed margin
const fixedMargin = 100;

// Update bounds on window resize
const bounds = {
    left: fixedMargin,
    right: window.innerWidth - fixedMargin,
    top: fixedMargin,
    bottom: window.innerHeight - fixedMargin
};

window.addEventListener('resize', function() {
    bounds.right = window.innerWidth - fixedMargin;
    bounds.bottom = window.innerHeight - fixedMargin;
    document.querySelectorAll('#phrasesContainer div').forEach(setRandomPosition);
});

// Utility functions
function getRandomTime() {
    return Math.random() * 2000 + 2000;
}

function setRandomPosition(phraseElement) {
    const dynamicMargin = 2 * phraseElement.innerText.length;
    const totalMarginX = fixedMargin + dynamicMargin;
    const totalMarginY = fixedMargin + dynamicMargin;

    const x = Math.random() * (bounds.right - phraseElement.offsetWidth - totalMarginX) + totalMarginX;
    const y = Math.random() * (bounds.bottom - phraseElement.offsetHeight - totalMarginY) + totalMarginY;

    phraseElement.style.left = x + 'px';
    phraseElement.style.top = y + 'px';
}

// Initialization
window.onload = function() {
    phrases.forEach(phraseText => {
        const phraseElement = document.createElement('div');
        phraseElement.innerText = phraseText;
        phraseElement.className = 'phrase'; // Apply the CSS class

        document.getElementById('phrasesContainer').appendChild(phraseElement);
        setRandomPosition(phraseElement); 

        setTimeout(() => phraseElement.style.opacity = 1, getRandomTime());
        setInterval(() => {
            phraseElement.style.opacity = 0;
            setTimeout(() => {
                setRandomPosition(phraseElement);
                phraseElement.style.opacity = 1;
            }, getRandomTime());
        }, getRandomTime());
    });
};