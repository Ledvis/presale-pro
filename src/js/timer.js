const daysEl = document.querySelector('#timerDays');
const hoursEl = document.querySelector('#timerHours');
const minutesEl = document.querySelector('#timerMinutes');
const secondsEl = document.querySelector('#timerSeconds');
const countDownDay = new Date('October 5, 2018 12:00:00');

export default function init() {
  const timer = setInterval(() => {
    const now = new Date().getTime();
    const timeLeft = countDownDay - now;
    const daysLeft = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hoursLeft = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutesLeft = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const secondsLeft = Math.floor((timeLeft % (1000 * 60)) / (1000));
    daysEl.textContent = daysLeft;
    hoursEl.textContent = hoursLeft;
    minutesEl.textContent = minutesLeft;
    secondsEl.textContent = secondsLeft;

    if (timeLeft < 0) {
      clearInterval(timer);
      daysEl.textContent = 0;
      hoursEl.textContent = 0;
      minutesEl.textContent = 0;
      secondsEl.textContent = 0;
    }
  }, 1000);
}
