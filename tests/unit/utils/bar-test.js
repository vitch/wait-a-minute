import Bar from 'wait-a-minute/utils/bar';
import { module, test } from 'qunit';
import wait from 'ember-test-helpers/wait';

module('Unit | Utility | bar', function() {

  test('A: this one will timeout', async function(assert) {
    assert.timeout( 1000 ); // Let's not wait the full 60 seconds!

    let bar = new Bar('test a1');
    assert.ok(bar);
    bar.start();
    await wait();
  });

  test('B: this one should pass because we don\'t `start`', async function(assert) {
    assert.timeout( 1000 ); // Let's not wait the full 60 seconds!

    let bar = new Bar('test b1');
    assert.ok(bar);
    await wait();
  });

  test('C: this one should pass because we `start` *and* `stop`', async function(assert) {
    assert.timeout( 1000 ); // Let's not wait the full 60 seconds!

    let bar = new Bar('test c1');
    assert.ok(bar);
    bar.start();
    bar.stop();
    await wait();
  });
});


module('Unit | Utility | bar - timeless', function() {

  test('B: this one should pass because we don\'t `start`', async function(assert) {
    assert.timeout( 1000 ); // Let's not wait the full 60 seconds!

    let bar = new Bar('test a2');
    assert.ok(bar);
    await wait();
  });

  test('C: this one should pass because we `start` *and* `stop`', async function(assert) {
    assert.timeout( 1000 ); // Let's not wait the full 60 seconds!

    let bar = new Bar('test b2');
    assert.ok(bar);
    bar.start();
    bar.stop();
    await wait();
  });
});
