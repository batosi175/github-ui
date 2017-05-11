import { moduleForComponent, test } from 'ember-qunit';
import Ember from 'ember';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('github-repo', 'Integration | Component | github repo', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  const repo = Ember.Object.create({
    forks_count: 32,
    watchers_count: 9999,
    name: 'repooo'
  });
  this.set('repo', repo);
  this.render(hbs`{{github-repo repo=repo}}`);

  assert.equal(this.$().text().trim(), `repooo

  (
  Forks: 32
  Watchers: 10K
  )`, 'renderes inline');

  // Template block usage:
  this.render(hbs`
    {{#github-repo repo=repo}}
      template block text
    {{/github-repo}}
  `);

  assert.equal(this.$().text().trim(), `template block text

repooo

  (
  Forks: 32
  Watchers: 10K
  )`, 'renders with block text');
});
