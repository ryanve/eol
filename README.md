# [eol](https://ryanve.github.io/eol)

[Newline](http://en.wikipedia.org/wiki/Newline) character converter node module for [JavaScript](eol.js) or [TypeScript](eol.d.ts)

### [npm.im/eol](https://npmjs.com/package/eol)

* `npm install eol`
* <code><b>let</b> eol = <b>require</b>("eol")</code>
* <code><b>import</b> eol <b>from</b> "eol"</code>

## [API](https://ryanve.github.io/eol#methods)

### eol.auto(<var>text</var>)

* Normalize line endings in <var>text</var> to match the current operating system
* Returns string with line endings normalized to `\r\n` or `\n`

### eol.crlf(<var>text</var>)

* Normalize line endings in <var>text</var> to <b>CRLF</b> (Windows, DOS)
* Returns string with line endings normalized to `\r\n`

### eol.lf(<var>text</var>)

* Normalize line endings in <var>text</var> to <b>LF</b> (Unix, OS X)
* Returns string with line endings normalized to `\n`

### eol.cr(<var>text</var>)

* Normalize line endings in <var>text</var> to <b>CR</b> (Mac OS)
* Returns string with line endings normalized to `\r`

### eol.dub(<var>text</var>)

* Generate normalizer where linebreaks become <var>text</var>
* Used [internally](eol.js) to generate the [normalizers](#api) above
* Returns composed pure function with [creative potential](#dubbing)

### eol.before(<var>text</var>)

* Add linebreak before <var>text</var>
* Returns string with linebreak added before text
* Uses `eol.auto` linebreak
* `eol.lf(eol.before(text))` &vellip;

### eol.after(<var>text</var>)

* Add linebreak after <var>text</var>
* Returns string with linebreak added after text
* Uses `eol.auto` linebreak
* `eol.lf(eol.after(text))` &vellip;

### eol.match(<var>text</var>)

* Detect or inspect linebreaks in <var>text</var>
* Returns array of matched linebreaks

### eol.split(<var>text</var>)

* Split <var>text</var> by newline
* Returns array of lines

### Joining

Coercing [normalizers](#api) to string yields the appropriate character...useful glue for joining

```js
String(eol.lf) // "\n"
eol.split(text).join(eol.auto) // === eol.auto(text)
eol.split(text).filter(line => line).join(eol.auto) // text joined after removing empty lines
eol.split(text).slice(-3).join(eol.auto) // last 3 lines joined
```

### Matching

Detect or inspect via match

```js
eol.match(" ") // []
eol.match("world\nwide\nweb") // ["\n","\n"]
```

### Dubbing

Generate alternate [normalizers](#api)

```
let extra = eol.dub("\n\n\n")
extra("...")
```

```
let huh = eol.dub("???")
huh("...")
```

## modularitY

### [edit-file](https://github.com/ryanve/edit-file)

```js
let eol = require("eol")
let edit = require("edit-file")

edit("sample.txt", eol.lf)
```

### [map-file](https://github.com/ryanve/map-file)

```js
let eol = require("eol")
let map = require("map-file")

map({
  from: "from.txt",
  to: "to.txt",
  map: eol.lf
})
```

### [ssv](https://ryanve.github.io/ssv)

```js
let ssv = require("ssv")
let eol = require("eol")

let deep = eol.split("spaced.txt").map(ssv.split)
```

### Yours

Have an `eol` sample to share?

[Then please do](../../issues/new) :test_tube: :test_tube: :test_tube: :test_tube:

## [opensource](package.json)

[<b>MIT</b> License](LICENSE.md)

[**∞/0**](#eol)
