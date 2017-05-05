import Ember from 'ember';

export default Ember.Route.extend({
  favorites: Ember.inject.service(),

  model() {
    return [
      {id: 'blizzard'},
      {id: 'facebook'},
      {id: 'netflix'},
      {id: 'yahoo'},
      {id: 'emberjs'}
    ];
  },

  setupController(controller) {
    this._super(...arguments);
    controller.set('favorites', this.get('favorites.items'));
  },
  actions: {
    addToFavorites(org){
      this.get('favorites').favoriteItem(org);
    }
  }
});
