!function(sith) {
  var api = sith.eol
  var morf = document.getElementById("morf")
  var paste = morf.paste
  var output = morf.output
  var select = morf.method

  function fun(method, mix) {
    return api[method.toLowerCase()](mix)
  }
  
  function resample(ev) {
    ev && ev.preventDefault()
    var became = fun(select.value, paste.value)
    output.textContent = became
  }

  morf.addEventListener("submit", resample)
  resample()
}(this);
