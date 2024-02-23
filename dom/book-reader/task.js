// Получаем элементы управления размером шрифта
const fontControls = document.querySelectorAll('.font-size');

// Получаем элемент книги
const book = document.getElementById('book');

// Функция для изменения размера шрифта
function changeFontSize(event) {
    event.preventDefault();

    // Удаляем класс font-size_active у всех элементов управления
    fontControls.forEach(control => control.classList.remove('font-size_active'));

    // Добавляем класс font-size_active к текущему элементу управления
    event.target.classList.add('font-size_active');

    // Получаем размер шрифта из data-size атрибута
    const fontSize = event.target.getAttribute('data-size');

    // Устанавливаем классы для изменения размера шрифта в зависимости от выбранного размера
    if (fontSize === 'small') {
        book.classList.remove('book_fs-big');
        book.classList.add('book_fs-small');
    } else if (fontSize === 'big') {
        book.classList.remove('book_fs-small');
        book.classList.add('book_fs-big');
    } else {
        book.classList.remove('book_fs-small');
        book.classList.remove('book_fs-big');
    }
}

// Добавляем обработчик события клика для каждого элемента управления размером шрифта
fontControls.forEach(control => {
    control.addEventListener('click', changeFontSize);
});