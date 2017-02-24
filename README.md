# generator-nm-nodejs
Yeoman generator for developing your own pure node modules (without transpilation). Based on [generator-npm-es6](https://github.com/sohamkamani/generator-nm-es6) by [sohamkamani](https://github.com/sohamkamani)
- Uses [mocha](https://mochajs.org/) to run tests.
- Uses [npm scripts](http://blog.keithcirkel.co.uk/how-to-use-npm-as-a-build-tool/) for workflow automation.

## Installation and usage

- Install previous dependencies if you haven't already (`npm install -g yo mocha`).
- Install the generator (`npm install -g generator-rblb-babel`)
- Run the generator (`yo rblb-babel`)

## Development Workflow

the folder tree structure after running the generator and running `npm run build` will look something like this:  
```
.  
├── .gitignore  
├── .jshintrc  
├── README.md   
├── package.json  
├── src  
│   └── index.js  
└── test  
    └── index.spec.js

```

- Everything inside the source and test folder should be written exactly as supported by nodejs. There is no transpilation.
- All the tests reside inside the test folder and will be run using mocha.

### npm scripts
- `npm test` - Run all tests and jshint. Also watches files for changes.

### source
The source folder is where *all* the source code files go. The `index.js` file inside this folder will be the entry point to the node module, i.e. the node module will export whatever source/index.js exports.

### test
The test folder contains all the tests for the source files. Tests are run using [mocha](https://mochajs.org/).

## License

MIT © [perchten](https://github.com/perchten)
