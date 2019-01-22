import { helper } from '@ember/component/helper';

export function checkModalType(params) {
  return params[0] && params[1] === params[2] ? true : false;
}

export default helper(checkModalType);
