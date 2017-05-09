import Ember from 'ember';

export default Ember.Component.extend({
  tagName: ['li'],
  actions: {
    addFavorite(){
      this.sendAction('on-add-fav', this.get('org'));
    }
  }
});
