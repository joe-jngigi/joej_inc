const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const signPad = document.getElementById('signPad');

signUpButton.addEventListener('click', () => 
signPad.classList.add('right-panel-active'));

signInButton.addEventListener('click', () => 
signPad.classList.remove('right-panel-active'));