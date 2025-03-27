
// Fonction pour afficher la notification
function showNotification(message, duration = 4000) {
    const notification = document.getElementById('notification');
    
    // Mettre à jour le message si fourni
    if (message) {
        notification.innerHTML = message;
    }
    
    // Retirer la classe hide
    notification.classList.remove('hide');
    
    // Ajouter la classe show pour déclencher l'animation d'entrée
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);
    
    // Masquer après la durée spécifiée
    setTimeout(() => {
        hideNotification();
    }, duration);
}

// Fonction pour masquer la notification
function hideNotification() {
    const notification = document.getElementById('notification');
    
    // Retirer la classe show pour amorcer la sortie
    notification.classList.remove('show');
    
    // Ajouter la classe hide après que l'animation de sortie soit terminée
    setTimeout(() => {
        notification.classList.add('hide');
    }, 500); // Même durée que la transition CSS
}

