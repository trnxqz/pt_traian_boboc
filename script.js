document.addEventListener('DOMContentLoaded', () => {
  const searchIcon = document.querySelector('.search-icon');
  const searchBox = document.getElementById('search-box');
  const categoryItems = document.querySelectorAll('.category-item');
  const coursesSection = document.getElementById('courses-section');
  
  // Inițializăm searchBox ca fiind ascuns
  searchBox.style.display = 'none';

  // Afișarea/ascunderea searchBox atunci când se apasă pe icon-ul de căutare
  searchIcon.addEventListener('click', (event) => {
    event.stopPropagation();
    searchBox.style.display = searchBox.style.display === 'block' ? 'none' : 'block';
  });

  // Închiderea searchBox dacă se dă click în afara acestuia
  document.addEventListener('click', (event) => {
    if (!searchIcon.contains(event.target) && !searchBox.contains(event.target)) {
      searchBox.style.display = 'none';
    }
  });

  // Funcționalitatea de căutare în categorii
  searchBox.addEventListener('input', () => {
    const query = searchBox.value.toLowerCase();
    categoryItems.forEach(item => {
      const text = item.textContent.toLowerCase();
      item.style.display = text.includes(query) ? '' : 'none';
    });
  });

  // Activarea secțiunii "Courses" la click pe navbar
  const coursesLink = document.querySelector('a[href="#courses-section"]');
  
  coursesLink.addEventListener('click', (event) => {
    event.preventDefault();  // Previne comportamentul default de navigare
    coursesSection.scrollIntoView({ behavior: 'smooth' }); // Derulează la secțiunea Courses
  });
});