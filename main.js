const arrHours = document.querySelector('.arr-hours'),
	arrMinutes = document.querySelector('.arr-minutes'),
	arrSeconds = document.querySelector('.arr-seconds'),
	numHours = document.querySelector('.num-hours'),
	numMinutes = document.querySelector('.num-minutes'),
	numSeconds = document.querySelector('.num-seconds'),
	tabLinks = document.querySelectorAll('.tabPanel-links--a'),
	tabItems = document.querySelectorAll('.tabPanel-content-item'),
	stopWatchBtn = document.querySelector('.start'),
	indicator = document.querySelector('.indicator'),
	stopWatchMinutes = document.querySelector('.minutes span'),
	stopWatchSeconds = document.querySelector('.seconds span'),
	stopWatchMiliseconds = document.querySelector('.miliseconds span'),
	stopWatchResult = document.querySelector('.result'),
	stopWatchInfo = document.querySelector('.stopWatch__result')

tabLinks.forEach(function (link, key) {
	link.addEventListener('click', function () {
		tabLinks.forEach(function (linkItem, key) {
			tabLinks[key].classList.remove('active')
			tabItems[key].classList.remove('active')
		})
		link.classList.add('active')
		tabItems[key].classList.add('active')
	})
})

function clock() {
	let time = new Date(),
		hours = time.getHours(),
		minutes = time.getMinutes(),
		seconds = time.getSeconds()

	arrSeconds.style = `transform: rotate(${seconds * 6}deg);`
	arrMinutes.style = `transform: rotate(${minutes * 6 + seconds / 10}deg);`
	arrHours.style = `transform: rotate(${hours * 30 + minutes / 2}deg);`

	numSeconds.innerHTML = seconds < 10 ? `0${seconds}` : seconds
	numMinutes.innerHTML = minutes < 10 ? `0${minutes}` : minutes
	numHours.innerHTML = hours < 10 ? `0${hours}` : hours
	setTimeout(() => {
		clock()
	}, 100)
}
clock()

stopWatchBtn.addEventListener('click', function () {
	if (stopWatchBtn.innerHTML === 'start') {
		stopWatchBtn.innerHTML = 'stop'
		indicator.classList.add('indicator-start')
		stopWatch(stopWatchBtn, 0, 0, 0)
	} else if (stopWatchBtn.innerHTML === 'stop') {
		stopWatchBtn.innerHTML = 'clear'
		indicator.classList.remove('indicator-start')
		indicator.classList.add('indicator-stop')
	} else {
		stopWatchBtn.innerHTML = 'start'
		indicator.classList.remove('indicator-stop')
		stopWatchMinutes.innerHTML = '00'
		stopWatchSeconds.innerHTML = '00'
		stopWatchMiliseconds.innerHTML = '00'
		// stopWatchInfo.innerHTML = ''
	}
	stopWatchInfoStr(stopWatchBtn.innerHTML)
	// console.log(stopWatchBtn.innerHTML)
})

function stopWatch(btn, i, sec, min) {
	if (btn.innerHTML === 'stop') {
		if (i == 100) {
			i = 0
			if (sec == 60) {
				min++
				sec = 0
				stopWatchMinutes.innerHTML = min < 10 ? `0${min}` : min
				stopWatchSeconds.innerHTML = sec < 10 ? `0${sec}` : sec
			} else {
				stopWatchSeconds.innerHTML = sec < 10 ? `0${sec}` : sec
				sec++
			}
		} else {
			stopWatchMiliseconds.innerHTML = i
			i++
		}
		setTimeout(() => {
			stopWatch(btn, i, sec, min)
		}, 10.1)
	}
}
function stopWatchInfoStr(resBtn) {
	let min = stopWatchMinutes.innerHTML,
		sec = stopWatchSeconds.innerHTML,
		mil = stopWatchMiliseconds.innerHTML,
		str = ''
		
	
		stopWatchResult.addEventListener('click', () => {
			if (resBtn === 'stop') {
				str = `<p>${min}:${sec}:${mil}</p>`
				stopWatchInfo.innerHTML += str
			}
			else if(resBtn === 'clear' || resBtn === 'start'){
					stopWatchInfo.innerHTML = ''
				}
		})
}


// stopWatchResult.addEventListener('click', () => {
// 	let min = stopWatchMinutes.innerHTML,
// 		sec = stopWatchSeconds.innerHTML,
// 		mil = stopWatchMiliseconds.innerHTML,
// 		str = `<p>${min}:${sec}:${mil}</p>`
// 		stopWatchInfo.innerHTML += str
// })