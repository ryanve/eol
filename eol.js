!function(root, name, make) {
  if (typeof module != 'undefined' && module.exports) module.exports = make()
  else root[name] = make()
}(this, 'eol', function() {

  var api = {}
  var isWindows = typeof process != 'undefined' && 'win32' === process.platform
  var newline = /\r\n|\r|\n/g

  function converts(to) {
    return function(text) {
      return text.replace(newline, to)
    }
  }

  api['lf'] = converts('\n')
  api['cr'] = converts('\r')
  api['crlf'] = converts('\r\n')
  api['auto'] = converts(isWindows ? '\r\n' : '\n')

  return api
});
