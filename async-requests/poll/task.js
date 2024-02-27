// Отправляем запрос на сервер для получения данных опроса
fetch('https://students.netoservices.ru/nestjs-backend/poll')
  .then(response => response.json())
  .then(data => {
    // Получаем данные опроса
    const pollTitle = data.data.title;
    const pollAnswers = data.data.answers;

    // Отображаем вопрос опроса
    const pollTitleElement = document.getElementById('poll__title');
    pollTitleElement.textContent = pollTitle;

    // Отображаем список ответов опроса
    const pollAnswersElement = document.getElementById('poll__answers');
    pollAnswers.forEach(answer => {
      const pollAnswerElement = document.createElement('button');
      pollAnswerElement.classList.add('poll__answer');
      pollAnswerElement.textContent = answer;

      // Добавляем обработчик события нажатия на кнопку ответа
      pollAnswerElement.addEventListener('click', () => {
        // Выводим диалоговое окно с сообщением о том, что голос засчитан
        alert('Спасибо, ваш голос засчитан!');
      });

      // Добавляем кнопку ответа в список ответов
      pollAnswersElement.appendChild(pollAnswerElement);
    });
  });