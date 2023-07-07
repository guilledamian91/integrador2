const toggleButton = document.querySelector('.toggle-button');
    const menu = document.querySelector('.menu');

    toggleButton.addEventListener('click', function() {
      menu.style.display = menu.style.display === 'none' ? 'block' : 'none';
    });