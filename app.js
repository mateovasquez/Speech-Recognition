window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition; // Makes the speech recognition compatible with all browsers

const recognition = new SpeechRecognition();

recognition.interimResults = true; //Make visible the result as we speak

let p = document.createElement('p');

const words = document.querySelector('.words');
words.appendChild(p);

//Listen to the results
recognition.addEventListener('result', e => {
    const transcript = Array.from(e.results)
    .map(result => result[0])
    .map(result => result.transcript) //Gets the recognition results
    .join(''); //Join the results into a singular sentence 

    //When you finish talking it creates another paragraph
    if(e.results[0].isFinal){
        p = document.createElement('p');
        words.appendChild(p);
    };

    p.textContent = transcript;
});

recognition.addEventListener('end', recognition.start); //Restart the function when you finish talking

recognition.start();