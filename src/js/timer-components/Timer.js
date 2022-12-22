import { convertMs } from './convertMs';
import { refs } from './ref';
import { options } from './flatpickr';

export class Timer {
  constructor({ onTick, options }) {
    this.intervalId = null;
    this.onTick = onTick;
    this.options = options;
  }
  start() {
    this.userDate = Date.parse(refs.input.value);
    const startTime = this.userDate;

    this.intervalId = setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = startTime - currentTime;
      const time = convertMs(deltaTime);

      if (this.userDate <= currentTime) {
        Notify.info('Please, choose date in future');
        clearInterval(this.intervalId);
        refs.input.disabled = false;
      }

      this.onTick(time);
      refs.button.disabled = true;
      refs.input.disabled = true;
    }, 1000);
  }
}
