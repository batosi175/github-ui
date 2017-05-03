import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [
      {id: 'contributor 1'},
      {id: 'contributor 2'},
      {id: 'contributor 3'}
    ]
  }
});
