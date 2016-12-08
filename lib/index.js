/**
 * @module BroScript
 * BroScript api sdk
 */

var configuration = require('./configuration'),
    controller = require('./Controllers/APIController');

var initializer = {};
initializer.configuration = configuration;
initializer.api = controller;
module.exports = initializer;