// Получаем элементы DOM
const counterElement = document.getElementById('clicker__counter');
const cookieElement = document.getElementById('cookie');

// Инициализируем счетчик кликов и скорость клика
let clickCount = 0;
let clickSpeed = 0;
let startTime = Date.now();

// Обработчик события клика на печеньку
function handleClick() {
  // Увеличиваем счетчик кликов
  clickCount++;

  // Чередуем уменьшение и увеличение размера печеньки
  if (cookieElement.width === 200) {
    cookieElement.width = 180;
    cookieElement.height = 180;
  } else {
    cookieElement.width = 200;
    cookieElement.height = 200;
  }

  // Обновляем значение счетчика кликов
  counterElement.textContent = clickCount;
}

// Добавляем обработчик события клика на печеньку
cookieElement.addEventListener('click', handleClick);
