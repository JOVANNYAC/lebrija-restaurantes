
const searchInput = document.querySelector('#searchInput');
const cards = document.querySelectorAll('.card');
const botonBuscar = document.querySelector('#botonBuscar');

function search() {
  const searchValue = searchInput.value.toLowerCase();

  cards.forEach(card => {
    const menu = card.getAttribute('data-menu').toLowerCase();

    if (menu.includes(searchValue)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

botonBuscar.addEventListener('click', () => {
  search();
});

searchInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    search();
  }
});


/** const searchInput = document.querySelector('#searchInput');
const cards = document.querySelectorAll('.card');
const botonBuscar = document.querySelector('#botonBuscar');


    botonBuscar.addEventListener('click', () => {
        const searchValue = searchInput.value.toLowerCase();
    
        cards.forEach(card => {
            const menu = card.getAttribute('data-menu').toLowerCase();
    
            if (menu.includes(searchValue)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });


*/