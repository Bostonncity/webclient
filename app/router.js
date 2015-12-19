import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('protected');
  this.route('sign_in');
  this.route('login');
  this.route('places', function () {
    this.route('single', {path: ':id'});
  });
});

export default Router;
