import Ember from 'ember';

export default Ember.Component.extend({
  addNewComment: false,
  actions: {
    commentFormShow() {
      this.set('addNewComment', true);
    },

    saveComment() {
      var input = {
        username: this.get('username'),
        comment: this.get('comment'),
        cake: this.cake
      };
      this.set('addNewComment', false),
      this.sendAction('saveComment', input);
    },


    updateComment() {
      var params = {
      comment: this.get('comment'),

      };

      // this.set('updateCakeForm', false);
      this.sendAction('updateComment', comment, params);
    }

  }
});
