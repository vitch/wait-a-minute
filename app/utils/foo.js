import { registerWaiter } from '@ember/test';

const runningThings = new Set();
registerWaiter(() => runningThings.size === 0);

export default class Foo {
  start() {
    runningThings.add(this);
  }
  stop() {
    runningThings.delete(this);
  }
}
