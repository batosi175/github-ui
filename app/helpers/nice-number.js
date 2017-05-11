import Ember from 'ember';

export function niceNumber(params/*, hash*/) {
  const [number] = params;
  if (!params) {
    return '';
  } else {
    if (number < 1000) {
      return number;
    } else {
      return `${((Math.round(number/100)/10).toFixed(1)).toString().replace(/\.0+$/,'')}K`
      // return `${(Math.round(number * 0.01) * 0.1).toFixed(1)}K`
    }
  }
}

export default Ember.Helper.helper(niceNumber);
