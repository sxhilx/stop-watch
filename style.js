let hours = 0;
let min = 0;
let sec = 0;
let milisec = 0;
const stopWatch = document.querySelector('.js-stop-watch')

let isWatchStart = false;
let intervalId;

function startWatch(){
  hours = parseInt(hours)
  min = parseInt(min)
  sec = parseInt(sec)
  milisec = parseInt (milisec)

  if (!isWatchStart){
    document.querySelector('.js-start-stop-button')
      .innerHTML = 'Stop'

    intervalId = setInterval(() => {   
      milisec += 1

      if (milisec === 100){
        sec += 1;
        milisec = 0;
      }
      stopWatch.innerHTML = `00 : 00 : ${sec < 10 ? '0' + sec : sec} : ${milisec < 10 ? '0' + milisec + '0' : milisec + '0'}`;

      if (sec === 60){
        min += 1
        sec = 0;
      }
      stopWatch.innerHTML = `00 : ${min < 10 ? '0' + min : min} : ${sec < 10 ? '0' + sec : sec} : ${milisec < 10 ? '0' + milisec + '0': milisec + '0'}`;

      if (min === 60){
        hours += 1;
        min = 0;
      }
      stopWatch.innerHTML = `${hours < 10 ? '0' + hours : hours} : ${min < 10 ? '0' + min : min} : ${sec < 10 ? '0' + sec : sec} : ${milisec < 10 ? '0' + milisec + '0': milisec + '0'}`;

      }, 10); 
      isWatchStart = true;

  } else{
    document.querySelector('.js-start-stop-button')
      .innerHTML = 'Start'

    clearInterval(intervalId)
    isWatchStart = false;
  }
}

function resetWatch(){
  document.querySelector('.js-stop-watch')
    .innerHTML = '00 : 00 : 00 : 000'
  hours = 0;
  min = 0;
  sec = 0;
  milisec = 0;
  
}

document.querySelector('.js-start-stop-button')
  .addEventListener('click', () => {
    startWatch()
  })

document.querySelector('.js-reset-button')
  .addEventListener('click', () => {
    resetWatch()
  })