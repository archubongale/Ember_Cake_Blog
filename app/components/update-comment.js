import Ember from 'ember';

export default Ember.Component.extend({
  updateCommentForm: false,
  actions: {
    updateCommentForm() {
      this.set('updateCommentForm', true);
    },

    update(comment) {
      var params = {
        comment: this.get('comment')
      };

      this.set('updateCommentForm', false);
      this.sendAction('updateComment', comment, params);
    }
  }
});
