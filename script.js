const countDownDate = '1 Jan 2022';
const countDownElement = document.getElementById('countDown');

const countDownTimer = setInterval(() => {
  const targetDate = new Date(countDownDate);
  const currentDate = new Date();
  const totalSeconds = (targetDate - currentDate) / 1000;

  const days = Math.floor(totalSeconds / 3600 / 24);

  const hours = Math.floor((totalSeconds / 3600) % 24);
  const minutes = Math.floor((totalSeconds / 60) % 60);
  const seconds = Math.floor(totalSeconds) % 60;

  countDownElement.textContent = `${days} Days ${hours} Hours ${minutes} Minutes ${seconds} s`;
}, 1000);


