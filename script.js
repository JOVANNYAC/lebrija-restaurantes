
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


/*codigo para mostrar las cards aleatoriamente*/


let cardsRest = document.querySelectorAll(".card");
        for (let i = 0; i < cardsRest.length; i++) {
            let target = Math.floor(Math.random() * cardsRest.length - 1) + 1;
            let target2 = Math.floor(Math.random() * cardsRest.length - 1) + 1;
            cardsRest[target].parentNode.insertBefore(cardsRest[target], cardsRest[target2]);
        }
 