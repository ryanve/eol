(function(root) {
  var common = typeof module != 'undefined' && !!module.exports;
  var aok = common ? require('aok') : root.aok;
  var eol = common ? require('../src') : root.eol;
  
  function contains(str, needle, guard) {
    if (guard) needle = str, str = this;
    return !!~str.indexOf(needle);
  }

  aok.pass(['lf', 'cr', 'crlf'], function(method, i) {
    var sample = ' ' + this.join() + 'text' + this.join(), normal = eol[method](sample);
    aok(method + ' retains', contains(normal, this[i]));
    aok(method + ' normalizes', ('crlf' === method ? 0 : 2) === aok.fail(this, contains, normal));
  }, ['\n', '\r', '\r\n']);
}(this));