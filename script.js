const countDownElement = document.getElementById('countDown');
const dateElement = document.getElementById('date');
const reset = document.getElementById('reset');

let countDownDate = 0;
const startTimer = (countDownDate) => {
  if (countDownDate !== 0) {
    setInterval(() => {
      const targetDate = new Date(countDownDate);
      const currentDate = new Date();
      const totalSeconds = (targetDate - currentDate) / 1000;

      const days = Math.floor(totalSeconds / 3600 / 24);

      const hours = Math.floor((totalSeconds / 3600) % 24);
      const minutes = Math.floor((totalSeconds / 60) % 60);
      const seconds = Math.floor(totalSeconds) % 60;

      countDownElement.textContent = `${days} Days ${hours} Hours ${minutes} Minutes ${seconds} s`;
    }, 1000);
  } else {
    countDownElement.textContent = `Please Enter target Date`;
  }
};

dateElement.addEventListener('input', (e) => {
  countDownDate = dateElement.value;
  dateElement.disabled = 'true';
  startTimer(countDownDate);
});

reset.addEventListener('click', () => {
  window.location.reload();
  countDownElement.textContent = `Please Enter target Date`;
});

countDownElement.textContent = `Please Enter target Date`;
