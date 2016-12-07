/**
  * @module BroScriptLib
  *  
  * BroScript api sdk
  */

var configuration = require('./configuration'),
    APIController = require('./Controllers/APIController');


function initializer () { }

//Main functional components of BroScriptLib
initializer.configuration = configuration;
initializer.APIController = APIController;

//Main Models of BroScriptLib

module.exports = initializer;