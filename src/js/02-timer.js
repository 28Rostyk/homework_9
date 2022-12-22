import { Timer } from './timer-components/Timer';
import { refs } from './timer-components/ref';

const timer = new Timer({
  onTick: updateCountUi,
});

refs.button.addEventListener('click', timer.start.bind(timer));
refs.button.disabled = true;

function updateCountUi({ days, hours, minutes, seconds }) {
  refs.secondsUi.textContent = seconds;
  refs.minutesUi.textContent = minutes;
  refs.hoursUi.textContent = hours;
  refs.daysUi.textContent = days;
}

// const timer = {
//   timerId: null,
//   start() {
//     userDate = Date.parse(refs.input.value);
//     const startTime = userDate;
//     this.timerId = setInterval(() => {
//       const currentTime = Date.now();
//       const deltaTime = startTime - currentTime;
//       const time = convertMs(deltaTime);
//       if (userDate <= currentTime) {
//         Notify.info('Please, choose date in future');
//         clearInterval(this.timerId);
//         refs.input.disabled = false;
//       }
//       updateCountUi(time);
//       refs.button.disabled = true;
//     }, 1000);
//   },
// };
