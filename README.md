# Loo SE 2021

[![Build Status](https://travis-ci.org/sexxis/website.svg?branch=travis)](https://travis-ci.org/sexxis/website)
[![bitHound Overall Score](https://www.bithound.io/github/sexxis/website/badges/score.svg)](https://www.bithound.io/github/sexxis/website)

SE XXI: Homepage for Waterloo Software Engineering Class of 2021

This website is partially an actual homepage for the class, but since those things don't actually turn out to be very useful very often, this is also a testing ground for all sorts of NodeJS-related technologies (and any other languages if you can manage to fit them in reasonably!). There are probably more "industry-standard" technologies used in this project than you'll be seeing in most reasonable co-ops (this claim is supported by upper-years :P), so this'll hopefully be able to serve as a learning experience as well for all those contributing. (See the [tech stack](#tech-stack) for details)

### Developer Setup

#### Installation

Make sure you have nodejs, npm and git installed. (if not, [rtfm](https://google.com))

```bash
$ git clone https://github.com/sexxis/website sexxi
$ cd sexxi
$ npm install # Install all of the dependencies
$ npm start # Start development servers

# Now you can visit the site at localhost:3000.
```

#### Making changes

```bash
$ git checkout -b name-of-branch
... make your changes ...
$ git add -A
$ git commit -m "some descriptive message"
... repeat if necessary
$ git push -u origin name-of-branch
```
Then create a pull request with that branch.

#### Lint

Lint makes sure code looks nice.

```bash
$ npm run lint # Lint everything
$ npm run lint:sass # Lint style files (*.sass)
$ npm run lint:pug # Lint templates (*.pug)
```

##### Editor Integration

You need to configure your editor to make it work! We use [pug-lint](https://github.com/pugjs/pug-lint#editor-integration)
for pugjs templates and [sass-lint](https://github.com/sasstools/sass-lint#ide-integration) for sass; rtfm in those links 
to get your IDE set up!
Thanks :smiley:

##### Git pre-commit hook (if you set it up)

Before you hit `git commit -m 'my awesome commit'`, our linter will lint all of the source files. If it detects any errors, your commit will be aborted and you won't be able to contribute to this awesome project. :smiley:

#### How BrowserSync works
Our site is actually running off of port 4200. However, when you access port 3000, 
BrowserSync will proxy it to port 4200, injecting whatever BrowserSync JS to keep things in sync.
There's also a socket server running on port 3000 for BrowserSync.
You can also access cool stuff at port 3001.


### Tech Stack

Includes but is not limited to...

##### Frontend
- HTML5, in Pug
- CSS3, in Sass
- JavaScript

##### Backend
- Node.JS and NPM
- Express

##### Dev Tools
- Gulp
- BrowserSync
- PugLint, SassLint, ESLint

##### Version Control & QA Tools
QA and code review is enforced! Much love.
- Git/GitHub
- PullApprove
- Greenkeeper
- Travis CI
- BitHound

##### Infrastructure (not directly accessible by you all, but you're welcome to duplicate it)
- Namecheap
- CloudFlare (for DNS, DDOS protection, CDN network)
- Mailgun (for MX and SMTP)
- Amazon EC2 running Amazon Linux AMI
