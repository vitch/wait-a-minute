import Foo from 'wait-a-minute/utils/foo';
import { module, test } from 'qunit';
import wait from 'ember-test-helpers/wait';

module('Unit | Utility | foo', function() {

  test('A: this one will timeout', async function(assert) {
    assert.timeout( 1000 ); // Let's not wait the full 60 seconds!

    let foo = new Foo();
    assert.ok(foo);
    foo.start();
    await wait();
  });

  test('B: this one should pass because we don\'t `start`', async function(assert) {
    assert.timeout( 1000 ); // Let's not wait the full 60 seconds!

    let foo = new Foo();
    assert.ok(foo);
    await wait();
  });

  test('C: this one should pass because we `start` *and* `stop`', async function(assert) {
    assert.timeout( 1000 ); // Let's not wait the full 60 seconds!

    let foo = new Foo();
    assert.ok(foo);
    foo.start();
    foo.stop();
    await wait();
  });
});


module('Unit | Utility | foo - timeless', function() {

  test('B: this one should pass because we don\'t `start`', async function(assert) {
    assert.timeout( 1000 ); // Let's not wait the full 60 seconds!

    let foo = new Foo();
    assert.ok(foo);
    await wait();
  });

  test('C: this one should pass because we `start` *and* `stop`', async function(assert) {
    assert.timeout( 1000 ); // Let's not wait the full 60 seconds!

    let foo = new Foo();
    assert.ok(foo);
    foo.start();
    foo.stop();
    await wait();
  });
});
