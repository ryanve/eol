!function(root, name, make) {
  if (typeof module != 'undefined' && module.exports) module.exports = make()
  else root[name] = make()
}(this, 'eol', function() {

  function converts(to) {
    return function(text) {
      return text.replace(newline, to)
    }
  }

  var api = {}
  var newline = /\r\n|\r|\n/g
  var isWindows = typeof process != 'undefined' && 'win32' === process.platform
  
  api['lf'] = converts('\n')
  api['cr'] = converts('\r')
  api['crlf'] = converts('\r\n')
  api['auto'] = converts(isWindows ? '\r\n' : '\n')

  return api
});