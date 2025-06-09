document.getElementById('retry-btn').addEventListener('click', function() {
    // Animate the error message by shaking it
    const errorMessage = document.querySelector('.error-message');
    errorMessage.classList.add('shake');
    
    setTimeout(() => {
        errorMessage.classList.remove('shake');
        alert('You are now connected to the internet! (Just Kidding)');
    }, 1000); // Wait for the shake animation to complete
});
