# website

[Add application description]

## Getting started

### Prerequisites

First and foremost your project and its dependencies require [Node and npm](https://nodejs.org/) and [Git](http://git-scm.com/) to be installed.

* Change to Betfair's own internal npm repository
```bash
npm config set registry http://registry.npm.dev.betfair
```

### Installation

1. Go to the project's root directory.
```bash
cd /<working-directory>/bf-website
```

2. Install project dependencies.
```bash
npm install
```

## Running the project
The project comes with a sandbox that allows it to run independently. You can run your app using the following command:

```bash
gulp serve
```

## Development
There are a few tasks that might be useful during the development stages.

Check code syntax and other errors
```bash
gulp eslint
```

Run unit tests continuously
```bash
gulp test
```

Run functional tests continuously
```bash
gulp functional
```

Create `ng-docs` on the methods
```bash
gulp ngdocs
```

Create a `dist` version of the bundle, placed on the `./dist/` folder.
```bash
gulp dist
```

Release a new version of the module
* Major Release
```bash
gulp release --type major
```

* Minor Release
```bash
gulp release --type minor
```

* Patch Release
```bash
gulp release --type patch
```

### External Dependencies
In order to locally use the sandbox successfully the module dependencies below must be mocked.

[Add the modules dependencies. Remove if not applicable.]

## Using the module in your application

1. Set the module as an application dependency by adding it to its package.json file.
```
{
    "dependencies": {
        "bfWebsite": "^version"
    }
}
```

2. Add the module to the list of modules your application depends on
```javascript
    angular.module('myApp', ['BF.Website'])
```


3. Add the directive to an html file
```
<bf-website></bf-website>
```

