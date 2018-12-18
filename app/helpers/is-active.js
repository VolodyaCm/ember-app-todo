import Helper from '@ember/component/helper';

export default Helper.extend({
  compute(param) {
    return param[0].group == param[1] ? 'active-g' : '';
  }
});
