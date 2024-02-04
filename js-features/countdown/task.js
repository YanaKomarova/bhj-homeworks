// Получаем элементы DOM
const timerElement = document.getElementById('timer');
const statusElement = document.getElementById('status');

// Устанавливаем начальное значение таймера
let seconds = parseInt(timerElement.textContent);

// Функция для форматирования времени в формате hh:mm:ss
function formatTime(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;

  const formattedHours = String(hours).padStart(2, '0');
  const formattedMinutes = String(minutes).padStart(2, '0');
  const formattedSeconds = String(secs).padStart(2, '0');

  return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}

// Функция для обновления таймера каждую секунду
function updateTimer() {
  seconds--;

  if (seconds < 0) {
    clearInterval(timerInterval);
    alert('Вы победили в конкурсе!');
  } else {
    timerElement.textContent = formatTime(seconds);
  }
}

// Запускаем таймер
const timerInterval = setInterval(updateTimer, 1000);