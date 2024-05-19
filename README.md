# Svelte 3 + Typescript + Webpack 5 Template 

This is a project created using [template](https://github.com/sonyseng/svelte-webpack-template) for [Svelte 3](https://svelte.dev) apps using [Webpack 5](https://webpack.js.org/) and 
[Typescript](https://www.typescriptlang.org/). 

* Svelte Loader w/ HMR, Svelte Preprocess, File loader, CSS loader, TS Loader
* Jest test runner w/ [Svelte Testing Library](https://github.com/testing-library/svelte-testing-library)
* Production mode. Optimized bundles with code splitting

You will need to have [Node.js](https://nodejs.org) installed.

### Quick start in Development mode 
First..
```bash
npm install
```

Start Webpack-dev-server. Navigate to [localhost:9000](http://localhost:9000) 
```bash
npm start
```

### npm scripts

Run unit tests
```bash
npm test
```

Run unit tests in watch mode
```bash
npm run test:watch
```

Compile development source code and copy into the public/build directory
```bash
npm run build:dev
```

Compile optimized source code and copy into the public/build directory
```bash
npm run build:prod
```

Manually clean the build directory
```bash
npm run clean
```
