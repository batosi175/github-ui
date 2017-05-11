import Ember from 'ember';
import { module, test } from 'qunit';
import moduleForAcceptance from 'github-ui/tests/helpers/module-for-acceptance';
import Pretender from 'pretender';

moduleForAcceptance('Acceptance | index');

function json(obj, status=200) {
  return [status, { 'Content-Type' : 'text/json'}, JSON.stringify(obj)];
}


var server = new Pretender(function(){
  this.get('https://api.github.com/orgs/:id',
      () => json({
        id: 99,
        login: 'emberjs',
        name: 'Ember.js'
      }));
  this.get('https://api.github.com/orgs/:id/:repoid',
      () => json([{
        id: 123,
        name: 'data'
      }]));
  this.get('https://api.github.com/repos/:id/:repoid',
      () => json({
        id: 123,
        name: 'data'
      }));
  this.get('https://api.github.com/repos/:id/:repoid/issues',
      () => json([
        {id: 1, title: 'Issue 1'},
        {id: 2, title: 'Issue 2'}
      ]));
  this.get('https://api.github.com/repos/:id/:repoid/contributors',
      () => json([
        {id: 1, login: 'contributor1'},
        {id: 2, login: 'contributor2'}
      ]));
});

test('visiting /index', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentRouteName(), 'orgs', 'at orgs route');
  });

  click('a[href*="org/emberjs"]');

  andThen(() => {
    assert.equal(currentURL(), '/org/emberjs/repos', 'at repos page');
  });

  click('a[href*="org/emberjs/data"]');

  andThen(() => {
    assert.equal(currentURL(), '/org/emberjs/data/issues', 'at isssues page');
    assert.ok(Ember.$('.issues li').length > 0, 'some issues');
  });

  click('a[href*="org/emberjs/data/contributors"]');

  andThen(() => {
    assert.equal(currentURL(), '/org/emberjs/data/contributors', 'at contributors page');
    assert.ok(Ember.$('.contributors li').length > 0, 'some contributors');
  });
});
