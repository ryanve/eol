!function(root) {
  function contains(str, needle) {
    return !!~str.indexOf(needle);
  }

  var common = typeof module != 'undefined' && !!module.exports
  var aok = common ? require('aok') : root.aok
  var eol = common ? require('./') : root.eol
  var platform = typeof process != 'undefined' && process.platform
  var meths = ['lf', 'cr', 'crlf', 'auto']
  var chars = ['\n', '\r', '\r\n', 'win32' === platform ? '\r\n' : '\n']
  var sample = ' ' + chars.join() + 'text' + chars.join()

  aok.prototype.fail = function() {
    throw new Error('FAILED TEST: ' + this.id)
  }

  aok('contains() sees contained text', contains('ab', 'a') === true)
  aok('sample contains newlines', contains(sample, '\n') && contains(sample, '\r'))
  aok('returns other strings as is', eol.auto('random') === 'random')
  aok('returns empty strings as is', eol.auto('') === '')

  aok.pass(meths, function(method, i) {
    var normalized = eol[method](sample)
    aok(method + ' retains', contains(normalized, chars[i]))
    aok(method + ' normalizes', !aok.fail(chars, function(c) {
      return contains(chars[i], c) === contains(normalized, c)
    }))

    return eol.auto(sample) === normalized
  })

  aok('auto agrees', 2 === aok.pass(meths, function(method) {
    return eol.auto(sample) === eol[method](sample);
  }))

  aok.log('All tests passed =)')
}(this);
