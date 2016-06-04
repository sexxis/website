# Loo SE 2021

### Developer Setup

* Make sure you have nodejs, npm and git installed (if not, [rtfm](https://google.com))
* On your command line

```bash
$ git clone https://github.com/UWaterlooSE2021/sexxi.xyz/
$ cd sexxi.xyz
$ npm install # Install all of the dependencies
$ npm start # Start development servers

# Now you can visit the site on localhost:3000.
```

### How BrowserSync works
Our site is actually running off of port 4200. However, when you access port 3000, 
BrowserSync will proxy it to port 4200, injecting whatever BrowserSync JS to keep things in sync.
There's also a socket server running on port 3000 for BrowserSync.
You can also access cool stuff at port 3001.

