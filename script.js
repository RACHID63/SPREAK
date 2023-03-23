function lire(texte) {
    var syntheseVocale = window.speechSynthesis;
    var message = new SpeechSynthesisUtterance(texte);
    message.voiceURI = 'native';
    message.lang = 'ar-AR';
    syntheseVocale.speak(message);
}

function lireMot() {
    var selectedWord = window.getSelection().toString();
    if (selectedWord !== '') {
        lire(selectedWord);
    }
}

function lireTout() {
    var texte = document.getElementById('texte').value;
    lire(texte);
}

function setupListeners() {
    var readWordButton = document.getElementById('read-word');
    readWordButton.addEventListener('mousedown', lireMot);
    readWordButton.addEventListener('mouseup', () => window.getSelection().removeAllRanges());
    document.getElementById('read-all').addEventListener('click', lireTout);
}

function handleTextChange() {
    var words = document.getElementById('texte').value.split(' ');
    var container = document.getElementById('text-container');
    container.innerHTML = '';
    words.forEach(function (word) {
        var span = document.createElement('span');
        span.className = 'word';
        // span.innerText = word + ' ';
        // container.appendChild(span);
    });
}

document.getElementById('texte').addEventListener('input', handleTextChange);
setupListeners();
