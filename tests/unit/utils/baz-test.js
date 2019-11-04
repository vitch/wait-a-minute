import Baz from 'wait-a-minute/utils/baz';
import { module, test } from 'qunit';
import wait from 'ember-test-helpers/wait';

module('Unit | Utility | baz', function(hooks) {
  let baz;

  hooks.afterEach(function() {
    baz.destroy();
  })

  test('A: this one will timeout', async function(assert) {
    assert.timeout( 1000 ); // Let's not wait the full 60 seconds!

    baz = Baz.create({ label: 'test a1' });
    assert.ok(baz);
    baz.start();
    await wait();
  });

  test('B: this one should pass because we don\'t `start`', async function(assert) {
    assert.timeout( 1000 ); // Let's not wait the full 60 seconds!

    baz = Baz.create({ label: 'test b1' });
    assert.ok(baz);
    await wait();
  });

  test('C: this one should pass because we `start` *and* `stop`', async function(assert) {
    assert.timeout( 1000 ); // Let's not wait the full 60 seconds!

    baz = Baz.create({ label: 'test c1' });
    assert.ok(baz);
    baz.start();
    baz.stop();
    await wait();
  });
});


module('Unit | Utility | baz - timeless', function(hooks) {
  let baz;

  hooks.afterEach(function() {
    baz.destroy();
  })

  test('B: this one should pass because we don\'t `start`', async function(assert) {
    assert.timeout( 1000 ); // Let's not wait the full 60 seconds!

    baz = Baz.create({ label: 'test a2' });
    assert.ok(baz);
    await wait();
  });

  test('C: this one should pass because we `start` *and* `stop`', async function(assert) {
    assert.timeout( 1000 ); // Let's not wait the full 60 seconds!

    baz = Baz.create({ label: 'test b2' });
    assert.ok(baz);
    baz.start();
    baz.stop();
    await wait();
  });
});
