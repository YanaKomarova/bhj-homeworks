// Получаем элемент текстового редактора
const editor = document.getElementById('editor');

// Проверяем наличие поддержки localStorage
if (window.localStorage) {
  // Если localStorage поддерживается, загружаем текст из него
  const savedText = localStorage.getItem('editor-text');
  if (savedText) {
    editor.value = savedText;
  }

  // Добавляем обработчик события изменения текста в редакторе
  editor.addEventListener('input', () => {
    // Сохраняем текст в localStorage
    localStorage.setItem('editor-text', editor.value);
  });
}