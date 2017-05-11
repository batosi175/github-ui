import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import Ember from 'ember';

moduleForComponent('github-org', 'Integration | Component | github org', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{github-org}}`);

  assert.equal(this.$().text().trim(), `[ Favorite ]`, 'inline synatax basic rendering');

  // Template block usage:
  this.render(hbs`
    {{#github-org}}
      template block text
    {{/github-org}}
  `);

  assert.equal(this.$().text().trim(), `[ Favorite ]`, 'Block syntax basic rendering');
});

test('bindings update data', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  assert.expect(2);

  const org= Ember.Object.create({
    id: 'my-org'
  });

  this.set('o', org);
  this.render(hbs`{{github-org org=o on-fav-click=on-fav-click}}`);

  assert.equal(Ember.$('.github-org a').text(), 'my-org', 'renders when passing data');

  // Ember.run(() => {
  //   org.set('id', 'other');
  //   assert.equal(Ember.$('.github-org a').text(), 'other', 'renders when passing data');
  // });

  let actionsCount = 0;
  this.set('on-fav-click', function() {
    actionsCount++;
  });

  Ember.$('.github-org span').click();

  assert.equal(actionsCount, 1, 'Action was fired Once')
});
