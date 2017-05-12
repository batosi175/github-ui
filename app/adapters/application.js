import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  host: 'https://api.github.com',
  // headers: {
  //   'Accept': 'application/json, text/javascript; q=0.01'
  // },

  urlForQueryRecord(query, modelName) {
    switch (modelName) {
      case 'repo':
        return `${this.get('host')}/repos/${query.orgId}/${query.repoId}`;
      default:
        return this._super(...arguments);
    }
  },

  urlForQuery(query, modelName) {
    switch (modelName) {
      case 'repo':
        return `${this.get('host')}/orgs/${query.orgId}/repos`;
      default:
        return this._super(...arguments);
    }
  }

});
