!function(root, name, make) {
  if (typeof module != "undefined" && module.exports) module.exports = make()
  else root[name] = make()
}(this, "eol", function() {

  var api = {}
  var isWindows = typeof process != "undefined" && "win32" === process.platform
  var linebreak = isWindows ? "\r\n" : "\n"
  var newline = /\r\n|\r|\n/g

  function before(text) {
    return linebreak + text
  }

  function after(text) {
    return text + linebreak
  }

  function dub(to) {
    function change(text) {
      return text.replace(newline, to)
    }
    change.toString = function() {
      return to
    }
    return change
  }

  function match(text) {
    return text.match(newline) || []
  }

  function split(text) {
    return text.split(newline)
  }

  api["lf"] = dub("\n")
  api["cr"] = dub("\r")
  api["crlf"] = dub("\r\n")
  api["auto"] = dub(linebreak)
  api["before"] = before
  api["after"] = after
  api["match"] = match
  api["split"] = split
  api["dub"] = dub
  return api
});
