
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


window.addEventListener('load', function() {
  let cardsContainer = document.querySelector('#cards-container');
  let cards = Array.from(cardsContainer.children);
  
  // Función para reordenar aleatoriamente un array
  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  
  // Reordenar las cards
  let shuffledCards = shuffle(cards);
  
  // Agregar las cards reordenadas al contenedor
  shuffledCards.forEach(card => cardsContainer.appendChild(card));
});

 