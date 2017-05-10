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
    // return new Ember.RSVP.Promise((resolve, reject) => {
    //   Ember.run.later(() => {
    //     resolve([
    //       {id: 'blizzard'},
    //       {id: 'facebook'},
    //       {id: 'netflix'},
    //       {id: 'yahoo'},
    //       {id: 'emberjs'}
    //     ]);
    //   }, 1000);
    // })
  },

  setupController(controller) {
    this._super(...arguments);
    controller.set('favorites', this.get('favorites.items'));
  },
  actions: {
    favoritesClicked(org){
      if (this.get('favorites.items').indexOf(org) < 0) {
        this.get('favorites').favoriteItem(org);
      } else {
        this.get('favorites').unfavoriteItem(org);
      }

    }
  }
});
