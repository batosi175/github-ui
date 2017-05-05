import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    let orgName = Ember.get(this.modelFor('org'), 'id');
    let repoName = Ember.get(this.modelFor('org.repo'), 'id');
    return Ember.$.get(`https://api.github.com/repos/${orgName}/${repoName}/issues`).then(issues => {
      return issues.map(x => {
        x.oldId = x.id;
        x.id = x.title;
        return x;
      });
    });
  }
});
