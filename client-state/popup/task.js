// Получаем элементы
const modal = document.getElementById('subscribe-modal');
const closeButton = document.querySelector('.modal__close');

// Проверем, закрывалось ли окно ранее
const cookieValue = getCookie('subscribe-modal');

// Если окно не закрывалось, показываем его
if (!cookieValue) {
  modal.classList.add('modal_active');
}

// Закрыть окно при нажатии на кнопку закрытия
closeButton.addEventListener('click', () => {
  modal.classList.remove('modal_active');

  // Установить cookie, чтобы окно не показывалось снова
  setCookie('subscribe-modal', true, 365);
});

// Функция для получения значения cookie
function getCookie(name) {
  const matches = document.cookie.match(new RegExp('(?:^|; )' + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\\$1') + '=([^;]*)'));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

// Функция для установки cookie
function setCookie(name, value, days) {
  const expires = new Date();
  expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
  document.cookie = name + '=' + encodeURIComponent(value) + ';expires=' + expires.toUTCString();
}