import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    login: function(){
      let userName = this.controller.get('name');
      this.store.query('user', {
        name: userName
      }).then((users) => {
        if(users.get('length') === 1){
          let user = users.objectAt(0);
          this.controllerFor('application').set('user', user);
          this.transitionTo('notebooks', user.get('id'));
        } else {
          this.controller.set('message', `user ${userName} not found`)
        }
      });
    }
  }
});
