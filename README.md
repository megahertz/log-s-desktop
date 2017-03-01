# log-s-desktop

## This package is still in active development

Sometimes you can't use a debugger. In this case it's possible to write
some data to log, but log file becomes too hard for reading. This server
collects a such logs and displays it similar to Chrome Dev Tools.

It's a Desktop version of log-s server.

## Requirements

Node >= 7

## Installation

Install with [npm](https://npmjs.org/package/log-s):

    npm install -g log-s-desktop

## Usage

```sh
$ log-s-desktop
```

To add logs to the server you can send POST request in the following
format:

```sh
$ curl -H "Content-Type: application/json" -X POST\
-d '{"client":{"name":"Test"},"data":["Test log"]}'\
http://localhost:8085/log
```

or using fetch API:

```js
fetch('http://localhost:8085/log', {
  body: JSON.stringify(data),
  headers: { 'Content-Type': 'application/json' },
  method: 'POST'
});
```

## License

Licensed under MIT.
