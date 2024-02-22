document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.tab');
    const tabContents = document.querySelectorAll('.tab__content');

    tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            // Убираем класс tab_active у всех вкладок
            tabs.forEach((t) => t.classList.remove('tab_active'));
            // Добавляем класс tab_active к текущей вкладке
            tab.classList.add('tab_active');

            // Скрываем все содержимое вкладок
            tabContents.forEach((content) => content.classList.remove('tab__content_active'));
            // Показываем содержимое соответствующей вкладки
            tabContents[index].classList.add('tab__content_active');
        });
    });
});