(function(root, name, make) {
  if (typeof module != 'undefined' && module.exports) module.exports = make();
  else root[name] = make();
}(this, 'eol', function() {
  function converts(to) {
    return function(text) {
      return text.replace(newline, to);
    };
  }
  var api = {}, newline = /\r\n|\r|\n/g;
  api['lf'] = converts('\n');
  api['cr'] = converts('\r');
  api['crlf'] = converts('\r\n');
  return api;
}));