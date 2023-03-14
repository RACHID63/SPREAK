function lire() {

    // Récupérer le texte de l'élément textarea
    var texte =
    document.getElementById('texte').value;
    // Créer un objet de synthèse vocale
    var syntheseVocale = window.speechSynthesis;
    var message = new SpeechSynthesisUtterance (texte);
    // Sélectionner la voix
    message.voiceURI = 'native';
    message.lang ='fr-FR';
    // Lire le message
    syntheseVocale.speak (message);
    
    }