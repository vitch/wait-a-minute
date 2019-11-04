import EmberObject from '@ember/object';
import { registerWaiter, unregisterWaiter } from '@ember/test';

export default class Bar extends EmberObject {
  isPolling = false;
  label = undefined;

  init() {
    super.init();
    this.waiterCheck = () => {
      console.log(`baz waiterCheck on '${this.label}'`);
      return !this.isPolling;
    };
    registerWaiter(this.waiterCheck);
  }

  willDestroy() {
    unregisterWaiter(this.waiterCheck);
  }

  start() {
    this.isPolling = true;
  }
  stop() {
    this.isPolling = false;
  }
}
