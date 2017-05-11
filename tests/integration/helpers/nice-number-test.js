
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('nice-number', 'helper:nice-number', {
  integration: true
});

// Replace this with your real tests.
test('It works', function(assert) {
  this.set('inputValue', '1234');

  this.render(hbs`{{nice-number inputValue}}`);

  assert.equal(this.$().text().trim(), '1.2K', 'rounds and trunkates number > 1000');

  this.set('inputValue', '10');
  assert.equal(this.$().text().trim(), '10', 'does not trunkate value smaller than 1000');

  this.set('inputValue', '9999');
  assert.equal(this.$().text().trim(), '10K', 'trunkates but does not leave trailing 0');

  this.set('inputValue', null);
  assert.equal(this.$().text().trim(), '', 'no input should render empty string');
});
