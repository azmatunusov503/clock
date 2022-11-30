const arrHours = document.querySelector('.arr-hours'),
arrMinutes = document.querySelector('.arr-minutes'),
      arrSeconds = document.querySelector('.arr-seconds'),
      numHours = document.querySelector('.num-hours'),
      numMinutes = document.querySelector('.num-minutes'),
      numSeconds = document.querySelector('.num-seconds'),
      tablinks = document.querySelectorAll('.tabPanel-links_a'),
      tabContent = document.querySelectorAll('.tabPanel-content_item'),
      stopWatchBtn = document.querySelector('.start'),
      indicator = document.querySelector('.indicator'),
      stopWatchMinute = document.querySelector('.minutes span'),
      stopWatchSeconds = document.querySelector('.seconds span'),
      stopWatchMilliSeconds = document.querySelector('.milliSeconds span'),
      stopWatchResult = document.querySelector('.result'),
      stopWatchInfo = document.querySelector('.stopWatch-result')

// console.log();

// Clock
function clock() {
  let time = new Date(),
      hours = time.getHours(),
      minutes = time.getMinutes(),
      seconds = time.getSeconds();
  
  arrSeconds.style = `transform: rotate(${seconds * 6}deg);`
  arrMinutes.style = `transform: rotate(${minutes * 6}deg)`
  arrHours.style = `transform: rotate(${hours * 30 + (minutes / 2)}deg)`
  
  numHours.innerHTML = hours < 10 ? `0${hours}` : hours;
  numMinutes.innerHTML = minutes < 10 ? `0${minutes}` : minutes;
  numSeconds.innerHTML = seconds < 10 ? `0${seconds}` : seconds;
  
  setTimeout(() => {
    clock()
  }, 100);
}
clock();
// Clock end

// Tab
tablinks.forEach(function(link, key){
  // console.log(link);
  link.addEventListener('click', function () {
    // link.classList.remove('active')
    // link.classList.remove('active')
    tablinks.forEach(function(linkItem, key){
      tablinks[key].classList.remove('active');
      tabContent[key].classList.remove('active');
      // console.log(key);
    })
    tablinks[key].classList.add('active');
    // link.classList.add('active');
    tabContent[key].classList.add('active');
  })
})
// Tab end
stopWatchResult.addEventListener('click', function () {
  let min = stopWatchMinute.innerHTML
  let sec = stopWatchSeconds.innerHTML
  let msec = stopWatchMilliSeconds.innerHTML
  let str = `<p>${min}:${sec}:${msec}</p>`
  stopWatchInfo.innerHTML += str
})

stopWatchBtn.addEventListener('click', function () {
  if (stopWatchBtn.innerHTML == 'start'){
    stopWatchBtn.innerHTML = 'stop';
    indicator.classList.add('indicator-start')
    stopWatch(stopWatchBtn, 0, 0, 0)
  }else if (stopWatchBtn.innerHTML == 'stop'){
    stopWatchBtn.innerHTML = 'clear';
    indicator.classList.remove('indicator-start')
    indicator.classList.add('indicator-stop')
  }else if (stopWatchBtn.innerHTML == 'clear') {
    stopWatchBtn.innerHTML = 'start';
    indicator.classList.remove('indicator-stop')
    stopWatchMinute.innerHTML = '00'
    stopWatchSeconds.innerHTML = '00'
    stopWatchMilliSeconds.innerHTML = '00'
    stopWatchInfo.innerHTML = ''
  }
})

function stopWatch(btn, i, sec, min) {
  if(btn.innerHTML == 'stop'){
    if (i == 100){
      i = 0
      if (sec == 59) {
        sec = 0
        min++
        stopWatchMinute.innerHTML = min < 10 ? `0${min}` : min
        stopWatchSeconds.innerHTML = sec < 10 ? `0${sec}`: sec
      }else {
        sec++
        stopWatchSeconds.innerHTML = sec < 10 ? `0${sec}`: sec
      }
    }else {
      // console.log(i);
      stopWatchMilliSeconds.innerHTML = i <10 ? `0${i}`: i
      i++
    }
    // i == 100 ? (i = 0,(sec == 59?(sec = 0, min++,(stopWatchMinute.innerHTML=min<10?`0${min}`:min),(stopWatchSeconds.innerHTML=sec<10?`0${sec}`:sec)):(sec++,(stopWatchSeconds.innerHTML=sec<10?`0${sec}`:sec)))) : (stopWatchMilliSeconds.innerHTML = i, i++)
    setTimeout(() => {
      stopWatch(btn, i, sec, min)
    }, 10.1);
  }
}






// ======================================================================
// let i = 0;
// function clock(i) {
//   i++
//   console.log(i);
//   if ( i <= 60) {
//     setTimeout(() => {
//       clock(i)
//     }, 100);
//   }
// }
// clock(i)
// let time = new Date(),
//       hours = time.getHours(),
//       minutes = time.getMinutes(),
//       seconds = time.getSeconds();

// arrSeconds.style = `transform: rotate(${seconds * 6}deg);`




// =================================================================================
// Задача перевести простое условие на тернарное
// if (i == 100){
//   i = 0
//   if (sec == 59) {
//     sec = 0
//     min++
//     stopWatchMinute.innerHTML = min < 10 ? `0${min}` : min
//     stopWatchSeconds.innerHTML = sec < 10 ? `0${sec}`: sec
//   }else {
//     sec++
//     stopWatchSeconds.innerHTML = sec < 10 ? `0${sec}`: sec
//   }
// }else {
//   // console.log(i);
//   stopWatchMilliSeconds.innerHTML = i
//   i++
// }
// i == 100 ? (i = 0(sec == 59?(sec = 0, min++,(stopWatchMinute.innerHTML=min<10?`0${min}`:min),(stopWatchSeconds.innerHTML=sec<10?`0${sec}`:sec)):(sec++,(stopWatchSeconds.innerHTML=sec<10?`0${sec}`:sec)))) : (stopWatchMilliSeconds.innerHTML = i, i++)