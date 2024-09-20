const startSpeechRecognitionButton = document.getElementById('startSpeechRecognition');
    const transcriptionDiv = document.getElementById('transcription');

    startSpeechRecognitionButton.addEventListener('click', startSpeechRecognition);

    function startSpeechRecognition() {
        const recognition = new webkitSpeechRecognition(); // Use webkitSpeechRecognition for compatibility

        recognition.lang = 'en-US'; // Set the language for recognition

        recognition.onresult = function (event) {
            const result = event.results[0][0].transcript;
            transcriptionDiv.textContent = result;
        };

        recognition.onend = function () {
            console.log('Speech recognition ended.');
        };

        recognition.start();
    }