import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  // this.route('index', {path: '/'});
  this.route('pwreset');
  this.route('sign-up');
  this.route('kids');
  this.route('kid', {
      path: '/kid/:kid_id'
  }, function() {
    this.route('methods', function() {
        this.route('new')
        this.route('edit', {
            path: 'edit/:method_id'
        })
    });
    this.route('lunches', function() {
        this.route('lunch', {
            path: 'lunch/:lunch_id'
        });
    });
  });
  this.route('404', {
      path: '/*wildcard'
    });
});

export default Router;
