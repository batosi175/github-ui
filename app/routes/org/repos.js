import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    //get id resovled from org
    let orgName = Ember.get(this.modelFor('org'), 'id');

    //using that id to make an api call to fetch data
    return Ember.$.get(`https://api.github.com/orgs/${orgName}/repos`).then(rawRepos => {
      return rawRepos.map(rawRepo => {
        rawRepo.oldId = rawRepo.id;
        rawRepo.id = rawRepo.name;
        return rawRepo;
      });
    });
  },

  setupController(controller) {
    this._super(...arguments);
    controller.set('org', this.modelFor('org'));
  }
});
