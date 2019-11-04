import { registerWaiter, unregisterWaiter } from '@ember/test';


export default class Bar {
  isPolling = false;
  label = undefined;

  constructor(label) {
    this.label = label;
  }

  start() {
    this.waiterCheck = () => {
      console.log(`waiterCheck on '${this.label}'`);
      return !this.isPolling;
    };

    this.isPolling = true;
    registerWaiter(this.waiterCheck);
  }
  stop() {
    this.isPolling = false;
    unregisterWaiter(this.waiterCheck);
  }
}
