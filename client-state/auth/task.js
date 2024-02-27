// Получаем элементы формы
const form = document.getElementById('signin__form');
const loginInput = document.querySelector('input[name="login"]');
const passwordInput = document.querySelector('input[name="password"]');
const welcome = document.getElementById('welcome');
const userId = document.getElementById('user_id');

// Обработчик события отправки формы
form.addEventListener('submit', (event) => {
  // Предотвращаем перезагрузку страницы
  event.preventDefault();

  // Создаем объект с данными формы
  const data = {
    login: loginInput.value,
    password: passwordInput.value,
  };

  // Отправляем данные на сервер
  fetch('https://students.netoservices.ru/nestjs-backend/auth', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      // Проверяем успешность авторизации
      if (data.success) {
        // Сохраняем ID пользователя в локальное хранилище
        localStorage.setItem('user_id', data.user_id);

        // Отображаем блок приветствия
        welcome.classList.add('welcome_active');
        userId.textContent = data.user_id;
      } else {
        // Выводим сообщение об ошибке
        alert('Неверный логин/пароль');
      }
    })
    .catch((error) => {
      console.error('Ошибка при отправке данных на сервер:', error);
    });
});

// Проверяем, есть ли в локальном хранилище ID пользователя
const storedUserId = localStorage.getItem('user_id');

// Если ID пользователя есть, отображаем блок приветствия
if (storedUserId) {
  welcome.classList.add('welcome_active');
  userId.textContent = storedUserId;
}