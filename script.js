window.addEventListener('keydown', function(e){
    const audio = document.querySelector('audio.d-' + e.keyCode);
    const key = document.querySelector('.drum.d-' + e.keyCode);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();    
    key.classList.add('playing');
    const keys = document.querySelectorAll('.drum');
    function removeTransition(e) {
        this.classList.remove('playing');
    }
    keys.forEach(key => key.addEventListener('transitionend', removeTransition));
})