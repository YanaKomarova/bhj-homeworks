// Скрипт для загрузки курса валют

// Элемент, в который будут загружены данные
const itemsElement = document.getElementById('items');

// Элемент загрузки
const loaderElement = document.getElementById('loader');

// Функция для отображения загрузки
const showLoader = () => {
  loaderElement.classList.add('loader_active');
};

// Функция для скрытия загрузки
const hideLoader = () => {
  loaderElement.classList.remove('loader_active');
};

// Функция для загрузки данных о курсе валют
const loadRates = () => {
  // Отображаем загрузку
  showLoader();

  // Отправляем GET-запрос
  fetch('https://students.netoservices.ru/nestjs-backend/slow-get-courses')
    .then((response) => {
      // Скрываем загрузку
      hideLoader();

      // Проверяем статус ответа
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Ошибка при загрузке данных');
      }
    })
    .then((data) => {
      // Получаем данные о курсе валют
      const rates = data.response.Valute;

      // Создаем HTML-элементы для отображения данных
      for (const currency in rates) {
        const itemElement = document.createElement('div');
        itemElement.classList.add('item');

        const codeElement = document.createElement('div');
        codeElement.classList.add('item__code');
        codeElement.textContent = rates[currency].CharCode;

        const valueElement = document.createElement('div');
        valueElement.classList.add('item__value');
        valueElement.textContent = rates[currency].Value;

        const currencyElement = document.createElement('div');
        currencyElement.classList.add('item__currency');
        currencyElement.textContent = 'руб.';

        // Добавляем элементы в разметку
        itemElement.appendChild(codeElement);
        itemElement.appendChild(valueElement);
        itemElement.appendChild(currencyElement);

        itemsElement.appendChild(itemElement);
      }
    })
    .catch((error) => {
      // Обрабатываем ошибку
      console.error('Ошибка при загрузке данных:', error);
    });
};

// Загружаем данные о курсе валют
loadRates();