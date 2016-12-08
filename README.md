#Getting started

# BroScriptLib



## Installation

The SDK relies on [Node Package Manager](https://www.npmjs.com/package/broscript) (NPM) being available to resolve dependencies.

```
npm i broscript
```

## Usage

The following shows how import and use the controller:

1. Import the module:

    ```js
    var broscript= require('broscript');
    ```

2. Configure any authentication parameters. For example:

    ```js
    broscript.config.userKey = user_key;
    broscript.config.scriptKey = script_key;
    ```

3. Use methods:

    ```js
    broscript.api.answers(...);
    broscript.api.templates(...);
    //...
    ```


