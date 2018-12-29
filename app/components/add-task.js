import Component from '@ember/component';

export default Component.extend({
    actions: {
      addTask() {
        this.add();
      },
    },
}).reopenClass({
      positionalParams: 'params'
});
