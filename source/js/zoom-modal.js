document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.price-img');
  
    // Создаём модалку
    const modal = document.createElement('div');
    modal.classList.add('promo-modal');
    modal.innerHTML = `
      <div class="promo-modal-content">
        <span class="close-btn">&times;</span>
        <img src="" alt="Zoomed Image">
      </div>
    `;
    document.body.appendChild(modal);
  
    const modalImage = modal.querySelector('img');
    const closeBtn = modal.querySelector('.close-btn');
    const content = modal.querySelector('.promo-modal-content');
  
    // Открытие модалки по клику на изображение
    images.forEach(img => {
      img.addEventListener('click', () => {
        modalImage.src = img.src;
        modalImage.classList.remove('zoomed');
        modal.style.display = 'flex';
      });
    });
  
    // Закрытие по крестику
    closeBtn.addEventListener('click', () => {
      modal.style.display = 'none';
      modalImage.classList.remove('zoomed');
    });
  
    // Масштабирование по клику на изображение
    modalImage.addEventListener('click', () => {
      modalImage.classList.toggle('zoomed');
    });
  
    // Закрытие при клике вне области изображения и контента
    modal.addEventListener('click', (e) => {
      if (!content.contains(e.target)) {
        modal.style.display = 'none';
        modalImage.classList.remove('zoomed');
      }
    });
  });
  