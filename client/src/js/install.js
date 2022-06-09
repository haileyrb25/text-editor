const installBtn = document.getElementById('buttonInstall');
const textHeader = document.getElementById('textHeader');

window.addEventListener('beforeinstallprompt', (event) => {
  window.defferedPrompt = event;
  installBtn.classList.toggle("hidden", false)

});

installBtn.addEventListener('click', () => {
  const promptEvent = window.defferedPrompt;

  if(!promptEvent){
    return;
  }

  promptEvent.prompt();

  window.defferedPrompt = null; 

  installBtn.classList.toggle("hidden", true)
  installBtn.textContent = 'J.A.T.E has been installed!';
});

window.addEventListener('appinstalled', (event) => {
  window.defferedPrompt = null; 
  // textHeader.textContent = 'Successfully installed J.A.T.E!';
  // console.log('great!', 'appinstalled', event);
});
