import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | mouseover-lifecycle-hooks', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`{{mouseover-lifecycle-hooks}}`);

    assert.equal(this.element.textContent.trim(), '');

    // Template block usage:
    await render(hbs`
      {{#mouseover-lifecycle-hooks}}
        template block text
      {{/mouseover-lifecycle-hooks}}
    `);

    assert.equal(this.element.textContent.trim(), 'template block text');
  });
});
