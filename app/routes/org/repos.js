import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [
      {id: 'repo_name_1'},
      {id: 'repo_name_2'},
      {id: 'repo_name_3'}
    ]
  }
});
