// Получаем все элементы с классом "rotator"
const rotatorCases = document.querySelectorAll('.rotator__case');
const intervalTime = 1000; // Интервал смены текстовых блоков в миллисекундах

let currentCaseIndex = 0;

// Функция для смены активного класса
function rotateCases() {
    const previousCaseIndex = currentCaseIndex === 0 ? rotatorCases.length - 1 : currentCaseIndex - 1;

    rotatorCases[previousCaseIndex].classList.remove('rotator__case_active');
    rotatorCases[currentCaseIndex].classList.add('rotator__case_active');

    currentCaseIndex = (currentCaseIndex + 1) % rotatorCases.length;
}

// Запускаем смену текстовых блоков каждую секунду
setInterval(rotateCases, intervalTime);