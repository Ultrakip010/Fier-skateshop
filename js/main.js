const searchIcon = document.getElementById('search-icon');
const searchBar = document.querySelector('.search-bar');

searchIcon.addEventListener('click', () => {
    searchBar.style.display = searchBar.style.display === 'none' ? 'block' : 'none';
});