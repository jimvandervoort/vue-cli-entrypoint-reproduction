# test

## Bug
The path to the entryfile in `vue.config.js` has to be absolute. Otherwise Polyfills are silently not included.
This minimal reproduction app cannot use Promise in IE11 (used in `src/main.js` to log a message to the console).

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
