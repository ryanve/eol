# eol
[Newline](http://en.wikipedia.org/wiki/Newline) character converter for JavaScript. Available [on npm](https://www.npmjs.com/package/eol).

```
npm install eol --save
```

### `require` or `import`

```js
const eol = require('eol')
```

```js
import eol from 'eol'
```

## API

### `eol.auto(text)`
* Normalize line endings in <var>text</var> to match the current operating system
* Returns string with line endings normalized to `\r\n` or `\n`

### `eol.crlf(text)`
* Normalize line endings in <var>text</var> to <b>CRLF</b> (Windows, DOS)
* Returns string with line endings normalized to `\r\n`

### `eol.lf(text)`
* Normalize line endings in <var>text</var> to <b>LF</b> (Unix, OS X)
* Returns string with line endings normalized to `\n`

### `eol.cr(text)`
* Normalize line endings in <var>text</var> to <b>CR</b> (Mac OS)
* Returns string with line endings normalized to `\r`

### `eol.dub(text)`

- [Dubnormalize.](https://github.com/ryanve/eol/pull/32) [Used internally.](eol.js) [Generative.](#dubbing)
- Create normalizer where linebreaks become <var>text</var>
- Returns composed function

### `eol.before(text)`
- Add linebreak before <var>text</var>
- Returns string with linebreak added before text

### `eol.after(text)`
- Add linebreak after <var>text</var>
- Returns string with linebreak added after text

### `eol.match(text)`
- Detect or inspect linebreaks in <var>text</var>
- Returns array of matched linebreaks

### `eol.split(text)`
- Split <var>text</var> by newline
- Returns array of lines

### Joining

Coercing `eol.auto`|`eol.crlf`|`eol.lf`|`eol.cr` to string yields the appropriate character. This is useful for joining.

```js
String(eol.lf) // "\n"
eol.split(text).join(eol.auto) // same as eol.auto(text)
eol.split(text).filter(line => line).join(eol.auto) // text joined after removing empty lines
eol.split(text).slice(-3).join(eol.auto) // last 3 lines joined
```

### Matching

Detect or inspect via match

```js
eol.match(' ') // []
eol.match('world\nwide\nweb') // ['\n','\n']
```

### Dubbing

Mixin friendly

```
let lflf = eol.dub("\n\n")
lflf("...")
```

[<kbd><b>got space</b>?</kbd>](https://github.com/ryanve/ssv)


## [opensource](package.json)

[`MIT License`](LICENSE.md)
