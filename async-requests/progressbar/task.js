// Получаем элементы формы и прогресс-бар
const form = document.getElementById('form');
const progress = document.getElementById('progress');

// Добавляем обработчик события отправки формы
form.addEventListener('submit', (event) => {
  // Предотвращаем перезагрузку страницы
  event.preventDefault();

  // Создаем объект FormData для отправки файла
  const formData = new FormData();
  const file = document.getElementById('file').files[0];
  formData.append('file', file);

  // Создаем объект XMLHttpRequest для отправки запроса
  const xhr = new XMLHttpRequest();

  // Добавляем обработчик события изменения состояния запроса
  xhr.addEventListener('progress', (event) => {
    // Обновляем прогресс-бар
    progress.value = event.loaded / event.total;
  });

  // Отправляем запрос на сервер
  xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
  xhr.send(formData);
});