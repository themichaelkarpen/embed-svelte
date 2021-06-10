# Simple demo of svelte embedding

[Code and Life blog post](https://codeandlife.com/2021/03/06/easy-to-embed-svelte-components/)

This repository contains sample code to create a simple
`dist.js` script that you can include in any web page
that will render the `Embed.svelte` component just before
that script.

```
npm install
```

## Install `rollup` so we can use rollup command

locally

```
npm install rollup --save-dev
```

## Install 'rollup-plugin-terser` so we can minify our build code

```
npm i rollup-plugin-terser --save-dev
```

## TODO: Next steps

- see if we can get html page outputting here in dev mode - for fast development
- basically configure like a regular svelte/rollup app but have output happen in the same way as this original example

- Can component use other components?
- Can component use Store?
- Can component have sass/css applied within app?
- Can component use scoped variables?
- Have a button pop open a modal to create a new item
- Have component accept a param, like an ID, to open modal and fetch api data for initializing/editing - or we would query this first on parent and get the info and pass it in as props, perhaps the whole object?
- Can test browser query params and see if it recognizes what is in url of parent (or can it accept an ID or props somehow.
- It can accept props in the script, perhaps we can set localStorage or qs first and have the script read it and pass in as a prop. Not sure though if that js file gets built and does not run dynamically on request - TEST THIS
- Can it send/emit an event to the parent when something completes? Perhaps we can pass in a callback fn as a prop, that it calls if something happens
