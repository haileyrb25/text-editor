const installBtn = document.getElementById('installBtn');
const textHeader = document.getElementById('textHeader');

window.addEventListener('beforeinstallprompt', (event) => {
  event.preventDefault();
  installBtn.style.visibility = 'visible';
  textHeader.textContent = 'Click the button to install J.A.T.E!';

  installBtn.addEventListener('click', () => {
    event.prompt();
    installBtn.setAttribute('disabled', true);
    installBtn.textContent = 'J.A.T.E has been installed!';
  });
});

window.addEventListener('appinstalled', (event) => {
  textHeader.textContent = 'Successfully installed J.A.T.E!';
  console.log('great!', 'appinstalled', event);
});
