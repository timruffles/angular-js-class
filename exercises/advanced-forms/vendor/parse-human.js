var DAYS = 24 * 60 * 60 * 1000;

function parseHuman(string) {
  console.log(string);
  if(/^toda?y?/.test(string)) {
    return new Date
  }
  if(/^tomm?o?r?r?o?w?/.test(string)) {
    return new Date(+new Date + 1 * DAYS);
  }
  return false;
}
