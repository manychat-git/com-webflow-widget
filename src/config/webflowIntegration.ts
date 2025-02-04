interface NodeData {
  title?: string;
  author?: string;
  description?: string;
  imageUrl?: string;
}

export function initializeWebflowIntegration() {
  return {
    openPopup: (data: NodeData) => {
      // Находим элементы попапа
      const popup = document.querySelector('[data-w-popup]') as HTMLElement;
      const overlay = document.querySelector('[data-popup-overlay]') as HTMLElement;
      const title = document.querySelector('[data-w-title]') as HTMLElement;
      const author = document.querySelector('[data-w-author]') as HTMLElement;
      const description = document.querySelector('[data-w-description]') as HTMLElement;
      const image = document.querySelector('[data-w-image]') as HTMLImageElement;

      if (!popup || !overlay) {
        console.error('Popup elements not found');
        return;
      }

      // Заполняем данные
      if (title) title.textContent = data.title || '';
      if (author) author.textContent = data.author || '';
      if (description) description.textContent = data.description || '';
      if (image) image.src = data.imageUrl || '';

      // Открываем попап
      popup.classList.add('active');
      overlay.classList.add('active');
    },

    closePopup: () => {
      // Закрываем попап
      const popup = document.querySelector('[data-w-popup]') as HTMLElement;
      const overlay = document.querySelector('[data-popup-overlay]') as HTMLElement;

      if (popup) popup.classList.remove('active');
      if (overlay) overlay.classList.remove('active');
    }
  };
} 