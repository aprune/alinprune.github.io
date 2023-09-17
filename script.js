
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
	
	//define the margine from the edge of the page
	const margin = 50;
	
	//defines bounds with a margin
	const bounds = {
    left: margin,
    right: window.innerWidth - margin,
    top: margin,
    bottom: window.innerHeight - margin
	};
	
	window.addEventListener('resize', function() {
    // Update the bounds based on the new viewport size
    bounds.right = window.innerWidth;
    bounds.bottom = window.innerHeight;

    // Reposition all the text elements
    document.querySelectorAll('#phrasesContainer div').forEach(setRandomPosition);
	});
	
	// Function to generate a random time between 2 to 4 seconds
	function getRandomTime() {
		return Math.random() * 2000 + 2000; // 2000 to 4000 milliseconds
	}

	function fadeInPhrase(phraseElement) {
		setTimeout(() => {
			phraseElement.style.opacity = 1;
		}, getRandomTime());
	}

	// Function to set a random position for a phrase element
     function setRandomPosition(phraseElement) {
		const dynamicMargin = 5 * phraseElement.innerText.length; // additional margin based on text length
		
		const maxX = bounds.right - phraseElement.offsetWidth - dynamicMargin;
		const maxY = bounds.bottom - phraseElement.offsetHeight - dynamicMargin;

		const x = Math.random() * (maxX - bounds.left - dynamicMargin) + bounds.left + dynamicMargin;
		const y = Math.random() * (maxY - bounds.top - dynamicMargin) + bounds.top + dynamicMargin;

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