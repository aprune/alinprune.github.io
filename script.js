window.onload = function() {
	// Our "database" of phrases
	const phrases = [
		"Sa ma sugi Cosmine.",
		"Horse",
		"Work in progres.",
		"Lil bro stupid.",
		"Ce mai astepti?","poate ti se pare dubios","dar","muie",
		"Horse...",
		"ney","ney?","ney",
		
		// ... add more phrases as needed
	];
	
	const bounds = {
    left: 0,
    right: window.innerWidth,
    top: 0,
    bottom: window.innerHeight
	};
	
	// Function to generate a random time between 1 to 2 seconds
	function getRandomTime() {
		return Math.random() * 2000 + 2000; // 1000 to 2000 milliseconds
	}

	function fadeInPhrase(phraseElement) {
		setTimeout(() => {
			phraseElement.style.opacity = 1;
		}, getRandomTime());
	}

	// Function to set a random position for a phrase element
     function setRandomPosition(phraseElement) {
		const maxX = bounds.right - phraseElement.offsetWidth;
		const maxY = bounds.bottom - phraseElement.offsetHeight;

		const x = Math.random() * (maxX - bounds.left) + bounds.left;
		const y = Math.random() * (maxY - bounds.top) + bounds.top;

		phraseElement.style.left = x + 'px';
		phraseElement.style.top = y + 'px';
    }

	// Function to move and fade a phrase element
	function moveAndFadePhrase(phraseElement) {
		// Fade out the phrase
		phraseElement.style.opacity = 0;

		// After a random fade out duration, move the phrase and fade it in
		setTimeout(() => {
			setRandomPosition(phraseElement); // Set a new random position
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
		
		// Set the initial random position
		setRandomPosition(phraseElement); 

		// Fade in the phrase at a random time after the page loads
		fadeInPhrase(phraseElement);
		
		// Move and fade the phrase at random intervals
		setInterval(() => moveAndFadePhrase(phraseElement), getRandomTime());
	});
};