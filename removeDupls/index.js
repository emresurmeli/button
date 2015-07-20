'use strict';

// Use a 'hash table' to solve duplicates
function removeDuplicateChars(s) {
  var chars = {};
  var rmDupl = '';

  for(var i = 0; i < s.length; i++) {
      if(!(s[i] in chars)) {
          chars[s[i]] = 1;
          rmDupl += s[i];
      }
  }
  return rmDupl;
}
