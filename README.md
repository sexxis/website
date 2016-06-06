# Loo SE 2021

### Developer Setup

#### Installation

* Make sure you have nodejs, npm and git installed (if not, [rtfm](https://google.com))
* On your command line

```bash
$ git clone https://github.com/UWaterlooSE2021/sexxi.xyz/
$ cd sexxi.xyz
$ npm install # Install all of the dependencies
$ npm start # Start development servers

# Now you can visit the site at localhost:3000.
```

#### Lint

If you don't know or not sure about what is linting, please [rtfm](https://google.com)

```bash
$ npm run lint # Lint everything
$ npm run lint:sass # Lint style files (*.sass)
$ npm run lint:pug # lint templates (*.pug)
```

##### Editor Integration

You need to configure your editor to make it work! We use [pug-lint](https://github.com/pugjs/pug-lint#editor-integration)
for pugjs templates and [sass-lint](https://github.com/sasstools/sass-lint#ide-integration) for sass! Please rtfm.
Thanks :smiley:

##### Git pre-commit hook

Before you hit `git commit -m 'my awesome commit'`, our linter will lint all of the source files. If it detects any errors, your commit will be aborted and you won't be able to contribute to this awesome project. :smiley:

### How BrowserSync works
Our site is actually running off of port 4200. However, when you access port 3000, 
BrowserSync will proxy it to port 4200, injecting whatever BrowserSync JS to keep things in sync.
There's also a socket server running on port 3000 for BrowserSync.
You can also access cool stuff at port 3001.

