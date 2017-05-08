import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    let orgName = params.id;
    return Ember.$.get(`https://api.github.com/orgs/${orgName}`).then(rawOrg => {
      rawOrg.oldId = rawOrg.id;
      rawOrg.id = rawOrg.login;
      return rawOrg;
    }).then(function(data) {
      return new Ember.RSVP.Promise((res, rej) => {
        Ember.run.later(() => {
          res(data);
        }, 2000);
      })
    });
  },

  actions: {
    error(jqxhr) {
      if (jqxhr.status === 404) {
        //go to org not found page.
        this.intermediateTransitionTo('org.notfound');
      }
      else {
        return true; //let global handle it (bubble up)
      }
    }
  }
});
