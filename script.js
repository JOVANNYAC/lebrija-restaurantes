
const searchInput = document.querySelector('#searchInput');
const cards = document.querySelectorAll('.card');

searchInput.addEventListener('input', () => {
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