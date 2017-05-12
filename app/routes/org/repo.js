import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    let orgId = Ember.get(this.modelFor('org'), 'id');
    return this.store.queryRecord('repo', {
      orgId,
      repoId: params.repoid
    });
    // return params.repoid;
    // return Ember.$.get(`https://api.github.com/repos/${orgId}/${params.repoid}`).then(rawRepo => {
    //   rawRepo.oldId = rawRepo.id;
    //   rawRepo.id = rawRepo.name;
    //   return rawRepo;
    // });
  }
});
