var eye = document.querySelector('.eye'), ripple = document.querySelector('.ripple'), toggle = document.querySelector('.toggle'), passwordInput = document.getElementById('password');
function click(e) {
    // Ripple Effect
    ripple.classList.add('animate');
    // Push Effect
    passwordInput.classList.add('animate');
    // Toggle input type between: password / text 
    passwordInput.classList.toggle('text');
    passwordInput.type === 'text' ? passwordInput.type = 'password' : passwordInput.type = 'text';
    toggle.dataset.state = passwordInput.type === 'text' ? 'visible' : 'hidden';
}
toggle.addEventListener('click', click);
// Remove all after animation ends
function removeAnimate() {
    ripple.classList.remove('animate');
    passwordInput.classList.remove('animate');
    toggle.style.pointerEvents = 'all';
}
ripple.addEventListener('animationend', removeAnimate);