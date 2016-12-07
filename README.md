#Getting started

# BroScriptLib



## Installation

The SDK relies on [Node Package Manager](https://www.npmjs.com/) (NPM) being available to resolve dependencies.
Once published you will need copy the folder `broscriptlib` in to your `node_modules` folder.

## Usage

The following shows how import and use the controller:

1. Import the module:

    ```js
    var broscriptlib = require('broscriptlib');
    ```

2. Configure any authentication parameters. For example:

    ```js
    var config = broscriptlib.configuration;
    config.apikey = a_secret_key;
    ```

3. Access various controllers by:

    ```js
    var controller = broscriptlib.XYZ;
    controller.getItems(id, callback);
    ```


