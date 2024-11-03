# ⏳ Таймер обратного отсчета до Нового года

Это веб-приложение показывает, сколько времени осталось до наступления Нового года. Таймер автоматически обновляется каждую секунду, отображая количество дней, часов, минут и секунд до наступления следующего года.

## 🚀 Описание

Приложение рассчитывает оставшееся время до полуночи 1 января следующего года. На странице отображается оставшееся количество дней, часов, минут и секунд. Приложение также корректно склоняет слова "день", "час", "минута" и "секунда" в зависимости от числового значения.

### Основные функции

- **Обновление в реальном времени**: оставшееся время до Нового года пересчитывается каждую секунду.
- **Корректное склонение**: слова "день", "час", "минута" и "секунда" автоматически меняются в зависимости от числа, улучшая читаемость.
- **Отображение таймера**: оставшееся время визуально представлено на странице для удобного отслеживания.

## 🛠 Технологии

- **JavaScript** — для выполнения расчётов и обновления таймера в реальном времени.
- **HTML** и **CSS** — для создания и стилизации интерфейса.

## 📋 Установка и запуск

Для запуска приложения локально выполните следующие шаги:

1. Клонируйте репозиторий:

   ```bash
   git clone https://github.com/aliskhannn/new-year-countdown.git
   ```

2. Перейдите в директорию проекта:

   ```
    cd new-year-countdown
   ```

3. Откройте файл index.html в браузере, чтобы запустить приложение.

## 📖 Использование

1. Откройте приложение.
2. Таймер автоматически начнет отсчет до Нового года, показывая оставшееся количество дней, часов, минут и секунд.

## ⚙️ Логика работы

1. Вычисление оставшегося времени:

- Сначала определяется текущий год с помощью `new Date().getFullYear()`.
- Затем устанавливается цель для обратного отсчета: nextYear, которая равна 1 января следующего года.
- Каждый раз, когда функция `updateCounter` вызывается, она вычисляет разницу во времени между текущим моментом и полночью Нового года.

2. Форматирование и обновление значений:

- Временные интервалы (дни, часы, минуты, секунды) вычисляются и обновляются в HTML в реальном времени каждую секунду.
- Склонение слов "день", "час", "минута" и "секунда" изменяется в зависимости от числового значения, используя оператор `switch`.

3. Автоматическое обновление:

- `setInterval(updateCounter, 1000)` запускает функцию обновления каждую секунду, чтобы данные на странице всегда были актуальными.

## Автор

Aliskhan – Frontend разработчик

[GitHub](https://github.com/Aliskhan228)
