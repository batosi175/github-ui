import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    let orgName = params.id;
    return Ember.$.get(`https://api.github.com/orgs/${orgName}`).then(rawOrg => {
      rawOrg.oldId = rawOrg.id;
      rawOrg.id = rawOrg.login;
      return rawOrg;
    });
  }
});
