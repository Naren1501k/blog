const loginbutton = document.getElementById('loginbutton');
    const modal = document.getElementById('modal');

    loginbutton.addEventListener('click', function() {
      modal.style.display = 'flex';
    });

    modal.addEventListener('click', function(event) {
      if (event.target === modal) {
        modal.style.display = 'none';
      }
    });