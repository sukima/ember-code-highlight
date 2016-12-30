# Ember-code-highlight

This is yet another [Highlight.js][hljs] Ember addon.

All the others seemed stale and over complicated. I wanted super simple for
those times when I wanted a simple code highlighting and none of the fluff. So
things like line numbers and callouts are lest to the the consumer of this
addon.

All this does is simply take the component's block and runs highlight.js over
it. The rest (escaping, formatting, line numbers, etc.) is left to you to add
to the code block.

## Usage

```handlebars
{{#code-highlight lang="js"}}
function foobar(baz) {
  return 'bazfoo';
}
{{/code-highlight}}
```

## Configuration

Choose a style (default: `tomorrow`):

```js
// ember-cli-build.js

var app = new EmberApp({
  emberCodeHighlight: {
    style: 'solarized-light'
  }
});
```

The list of available styles is available at [highlightjs.org][hljs].

## Installation

* `git clone <repository-url>` this repository
* `cd ember-code-highlight`
* `npm install`
* `bower install`

## Running

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

## Running Tests

* `npm test` (Runs `ember try:each` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://ember-cli.com/](http://ember-cli.com/).

[hljs]: https://highlightjs.org/
