import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
    search() {
      console.log(this);
      let query = this.get('searchInput');
      console.log(`Searching for ${query}`);
    },
    scrollDown() {
      Ember.$('html,body').animate({
        scrollTop: Ember.$('#marketing').offset().top
      }, 2000);
    }
  }
});
