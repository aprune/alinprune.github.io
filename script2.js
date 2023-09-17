

// Our "database" of phrases
const phrases = [
    	"Sa ma sugi Cosmine.",
		"Ha ha","Horse",
		"Work in progres.","something","something else","if you read this you gay", 
		"Lil bro stupid.","ce sugem?",
		"Ce mai astepti?","poate ti se pare dubios","dar","muie",
		"Horse...",
		"ney","ney?","ney","ney","ney?","ney!","ney","ney?","ney"
    // ... other phrases ...
];



// Utility functions
function getRandomTime() {
    return Math.random() * 2000 + 4000;
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

const colorScale = chroma.scale(['lightblue', 'pink','purple']);

function getRandomColorFromScale() {
    return colorScale(Math.random()).alpha(1).saturate(1).darken(1).hex();
}

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


// Duration of the fade effect in milliseconds
const FADE_DURATION = 2000; 

// Initialization
window.onload = function() {
	
	let cumulativeDelay = 0; // Start with no delay
	
    phrases.forEach(phraseText => {
        const phraseElement = document.createElement('div');
        phraseElement.innerText = phraseText;
        phraseElement.className = 'phrase'; // Apply the CSS class
		phraseElement.style.color = getRandomColorFromScale(); // Set the random color

        document.getElementById('phrasesContainer').appendChild(phraseElement);
        setRandomPosition(phraseElement); 

        cumulativeDelay += getRandomTime()/3; // Increase the delay for the next phrase
		console.log(cumulativeDelay); // Outputs: "I'm function-scoped!"
        setTimeout(() => {
            phraseElement.style.opacity = 1;
            setInterval(() => {
                phraseElement.style.opacity = 0;
                setTimeout(() => {
                    setRandomPosition(phraseElement);
                    phraseElement.style.opacity = 1;
                }, FADE_DURATION); // Wait for the fade-out to complete before repositioning
            }, getRandomTime());
        }, cumulativeDelay); // Use the cumulative delay here
    });
};

document.getElementById('menuTab').addEventListener('click', function() {
    const menuWrapper = document.getElementById('menuWrapper');
    if (menuWrapper.classList.contains('active')) {
        menuWrapper.classList.remove('active');
    } else {
        menuWrapper.classList.add('active');
    }
});