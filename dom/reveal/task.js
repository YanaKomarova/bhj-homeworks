// Получаем все элементы с классом "reveal"
const revealElements = document.querySelectorAll('.reveal');

// Функция для проверки, находится ли элемент в поле зрения
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Функция для обработки события прокрутки
function handleScroll() {
    revealElements.forEach(element => {
        if (isInViewport(element)) {
            element.classList.add('reveal_active');
        }
    });
}

// Добавляем обработчик события прокрутки
window.addEventListener('scroll', handleScroll);

// Вызываем функцию 