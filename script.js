async function loadAppIntoPopup(filename) {
    const popup = document.getElementById('app-popup');
  
    if (!popup.classList.contains('hidden')) {
      popup.classList.add('hidden');
      return;
    }
  
    try {
      const response = await fetch(filename);
      const htmlText = await response.text();
  
      const temp = document.createElement('div');
      temp.innerHTML = htmlText;
  
      const appDiv = temp.querySelector('.app');
      popup.innerHTML = '';
      if (appDiv) {
        popup.appendChild(appDiv);
      } else {
        popup.innerHTML = '<p>Could not load app.</p>';
      }
  
      popup.classList.remove('hidden');
    } catch (err) {
      console.error(err);
    }
  }
  
  document.addEventListener('click', (e) => {
    const popup = document.getElementById('app-popup');
  
    if (
        popup.classList.contains('hidden') ||
        popup.contains(e.target) ||
        e.target.closest('#flower-button')
    ) {
      return;
    }
  
    popup.classList.add('hidden');
});  