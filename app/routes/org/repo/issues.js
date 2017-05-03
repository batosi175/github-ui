import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [
      {id: 'issue 1'},
      {id: 'issue 2'},
      {id: 'issue 3'}
    ]
  }
});
