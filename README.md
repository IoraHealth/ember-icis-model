# Ember-icis-model

This Ember addon gives you access to all the Ember models exposed via our
services directly to your Ember-CLI app. This addon assumes that you
are setting an access_token service somewhere (probably in your routers)
and also configuring the specific host/environment for your adapters.

## Installation

```sh
npm install --save-dev ember-icis-model
```

For each adapter:
```js
// app/adapters/practice.js
import config from 'notes-dash/config/environment';
import practice from 'ember-icis-model/adapters/practice';

export default practice.reopen({
  host: config.app.staff_url
});
```


## Running Tests

* `npm install`
* `bower install`
* `ember test`
* `ember test --server`

## Development

It's expected that we'll test each model in this addon.

### Local development of addon

It's often easier to provide a local link to this library while developing a
widget. This is how you go about it.

In the CLI app you are building first lower the requirement for the widget lib:
```js
//package.json
"devDependencies": {
  //"ember-icis-model": "~ 0.1.0"
  "ember-icis-model": "*"
}
```

Next, in this directory link the local version into npm:
```sh
npm link
```

Then in the CLI directory, link the local version of this lib:
```sh
npm link ember-icis-model
```

