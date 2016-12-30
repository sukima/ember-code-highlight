/* global hljs */
import Ember from 'ember';
import layout from '../templates/components/code-highlight';

export default Ember.Component.extend({
  layout,
  lang: 'nohighlight',

  didInsertElement() {
    this._super(...arguments);
    hljs.highlightBlock(this.$('code').get(0));
  }
});
