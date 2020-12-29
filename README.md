# hub-demo.minter.network website

This is the repository containing the code for the [hub-demo.minter.network](https://hub-demo.minter.network) website


## Install

- clone the repo
- ensure latest stable Node.js and NPM are installed
- install node_modules `npm ci`
- copy .env.mainnet `cp .env.mainnet .env`
- set correct .env variables
- build `npm run production`
- now you have static assets in the `./dist/` folder, you have to distribute them with some web server like Nginx (or run `npm run start`, but it's not recommended for production)


## Deployment script

Build Nuxt
```bash
npm ci && npm run production
```
Root folder: `./dist/`


### Nuxt build cheatsheet

``` bash
# install dependencies
$ npm install # Or yarn install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, checkout the [Nuxt.js docs](https://github.com/nuxt/nuxt.js).