import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
    model: function() {
    return this.store.find('user');
  }
});

// import ember from 'ember';
// import authenticatedroutemixin from 'simple-auth/mixins/authenticated-route-mixin';
 
// export default Ember.Route.extend(AuthenticatedRouteMixin);