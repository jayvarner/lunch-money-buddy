import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('index', {path: '/'});
  this.route('pwreset');
  this.route('sign-up');
  this.route('kids');
  this.route('kid', {
      path: '/kid/:kid_id'
  }, function() {
      this.route('index', { path: '/' });
      this.route('methods', function() {
        this.route('edit', {path: '/edit/:method_id'});
        this.route('new');
      });
  });
  // this.route('kids', function() {});
});

export default Router;
