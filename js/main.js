const days = document.querySelector('#days');
const hours = document.querySelector('#hours');
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');

const daysText = document.querySelector('#days-text');
const hoursText = document.querySelector('#hours-text');
const minutesText = document.querySelector('#minutes-text');
const secondsText = document.querySelector('#seconds-text');

// Делаем расчеты
const currentYear = new Date().getFullYear();
const nextYear = new Date(`Jan 01 ${currentYear + 1} 00:00:00`);

function updateCounter() {
	// Получаем текущую дату
	const currentTime = new Date();
	// Получаем разницу между текущей датой и 1 января 2024 года 00:00:00
	const difference = nextYear - currentTime;
	
	// Перевод в дни
	const daysLeft = Math.floor(difference / 1000 / 60 / 60 / 24);
	// Часов всего, далее остаток от деления н 24 (преобразования в дни), получаем 13 часов
	const hoursLeft = Math.floor(difference / 1000 / 60 / 60) % 24;
	// Минут всего, далее остаток от преобразования в часы, минут осталось
	const minutesLeft = Math.floor(difference / 1000 / 60) % 60;
	// Секунд всего, далее остаток от преобразования в минуты, секунд осталось
	const secondsLeft = Math.floor(difference / 1000) % 60;

	// Подставляем дату на страницу
	days.innerText = daysLeft < 10 ? '0' + daysLeft : daysLeft;
	hours.innerText = hoursLeft < 10 ? '0' + hoursLeft : hoursLeft;
	minutes.innerText = minutesLeft < 10 ? '0' + minutesLeft : minutesLeft;
	seconds.innerText = secondsLeft < 10 ? '0' + secondsLeft : secondsLeft;

	switch(daysLeft % 10) {
		case 1:
			daysText.innerHTML = 'день';
			break;
		case 2:
		case 3:
		case 4:
			daysText.innerHTML = 'дня';
			break;
		default:
			daysText.innerHTML = 'дней';
			break;
	}

	switch(hoursLeft % 10) {
		case 1:
			hoursText.innerHTML = 'час';
			break;
		case 2:
		case 3:
		case 4:
			hoursText.innerHTML = 'часа';
			break;
		default:
			hoursText.innerHTML = 'часов';
			break;
	}

	switch(minutesLeft % 10) {
		case 1:
			minutesText.innerHTML = 'минута';
			break;
		case 2:
		case 3:
		case 4:
			minutesText.innerHTML = 'минуты';
			break;
		default:
			minutesText.innerHTML = 'минут';
			break;
	}

	switch(secondsLeft % 10) {
		case 1:
			secondsText.innerHTML = 'секунда';
			break;
		case 2:
		case 3:
		case 4:
			secondsText.innerHTML = 'секунды';
			break;
		default:
			secondsText.innerHTML = 'секунд';
			break;
	}
	
	console.clear();
	console.log(daysLeft + ' : ' + hoursLeft + ' : ' + minutesLeft + ' : ' + secondsLeft);
}

// Вызываем функцию при загрузке страницы, чтобы сразу отобразить оставшееся время
updateCounter();

// Вызываем функцию в каждую секунду, чтобы отображать актуальное оставшееся время
setInterval(updateCounter, 1000);