# Install Dependencies

We have two kinds of dependencies in this project: tools and angular framework code.  The tools help
us manage and test the application.

* We get the tools we depend upon via `npm`, the [node package manager][npm].
* We get the angular code via `bower`, a [client-side code package manager][bower].

## Install node

https://nodejs.org/en/

## Install bower

```
  npm install bower -g
```

## Install dependencies

```
bower install
```

# Directory Layout

```
app/                    --> all of the source files for the application
  app.css               --> default stylesheet
  bower_components/     --> dependencies
  controllers/
    mainController.js
  app.js                --> main application module
  index.html            --> app layout file (the main html template file of the app)
```

# Running the App during Development

```
sudo npm install -g http-server
```

Then you can start your own development web server to serve static files from a folder by
running:

```
http-server -a localhost -p 8000
```

# Refs

git: http://git-scm.com/
bower: http://bower.io
npm: https://www.npmjs.org/
node: http://nodejs.org
http-server: https://github.com/nodeapps/http-server



