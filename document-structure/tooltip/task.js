document.addEventListener('DOMContentLoaded', function() {
    const tooltips = document.querySelectorAll('.has-tooltip');
    const tooltipElement = document.querySelector('.tooltip');

    tooltips.forEach(tooltip => {
        tooltip.addEventListener('click', function(event) {
            event.preventDefault();

            const title = this.getAttribute('title');
            tooltipElement.textContent = title;

            // Установка позиции подсказки
            const position = this.getAttribute('data-position');
            const rect = this.getBoundingClientRect();

            switch (position) {
                case 'top':
                    tooltipElement.style.top = rect.top - tooltipElement.offsetHeight + 'px';
                    tooltipElement.style.left = rect.left + 'px';
                    break;
                case 'left':
                    tooltipElement.style.top = rect.top + 'px';
                    tooltipElement.style.left = rect.left - tooltipElement.offsetWidth + 'px';
                    break;
                case 'right':
                    tooltipElement.style.top = rect.top + 'px';
                    tooltipElement.style.left = rect.right + 'px';
                    break;
                case 'bottom':
                    tooltipElement.style.top = rect.bottom + 'px';
                    tooltipElement.style.left = rect.left + 'px';
                    break;
                default:
                    tooltipElement.style.top = rect.bottom + 'px';
                    tooltipElement.style.left = rect.left + 'px';
            }

            tooltipElement.classList.add('tooltip_active');
        });
    });

    // Скрытие подсказки при клике за ее пределами
    document.addEventListener('click', function(e) {
        if (!e.target.classList.contains('has-tooltip') && !e.target.classList.contains('tooltip')) {
            tooltipElement.classList.remove('tooltip_active');
        }
    });
});