// Our "database" of phrases
const phrases = [
    "Sa ma sugi Cosmine.",
    "Cel putin merge pagina.",
    "Work in progress!",
	"Get the fuck out already"
	"Horse..."
    // ... add more phrases as needed
];

// Function to generate a random time between 1 to 2 seconds
function getRandomTime() {
    return Math.random() * 1000 + 1000; // 1000 to 2000 milliseconds
}

// Function to move and fade a phrase element
function moveAndFadePhrase(phraseElement) {
    // Fade out the phrase
    phraseElement.style.opacity = 0;

    // After a random fade out duration, move the phrase and fade it in
    setTimeout(() => {
        const x = Math.random() * (window.innerWidth - phraseElement.clientWidth);
        const y = Math.random() * (window.innerHeight - phraseElement.clientHeight);

        phraseElement.style.left = x + 'px';
        phraseElement.style.top = y + 'px';

        // Fade in the phrase
        phraseElement.style.opacity = 1;
    }, getRandomTime());
}

// Create, style, and animate each phrase from the database
phrases.forEach(phraseText => {
    const phraseElement = document.createElement('div');
    phraseElement.innerText = phraseText;
    phraseElement.style.position = 'absolute';
    phraseElement.style.fontWeight = 'bold';
    phraseElement.style.fontSize = '2em';
    phraseElement.style.transition = 'opacity 0.5s ease-out';

    document.getElementById('phrasesContainer').appendChild(phraseElement);

    // Move and fade the phrase at random intervals
    setInterval(() => moveAndFadePhrase(phraseElement), getRandomTime());
});