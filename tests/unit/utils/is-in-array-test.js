import isInArray from 'github-ui/utils/is-in-array';
import Ember from 'ember';
import { module, test } from 'qunit';

module('Unit | Utility | is in array');

// Replace this with your real tests.
test('it works', function(assert) {

  const Type = Ember.Object.extend({
    item: 6,
    list: [1,2,3],
    isItemInList: isInArray('item', 'list')
  });

  const obj = Type.create();

  assert.equal(obj.get('isItemInList'), false, 'Initial check for not in list');

  obj.get('list').addObject(6);

  assert.equal(obj.get('isItemInList'), true, 'check for in list');

  obj.set('item', 52);

  assert.equal(obj.get('isItemInList'), false, 'after changing object its not in the list anymore');

});
