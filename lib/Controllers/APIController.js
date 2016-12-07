/**
 * BroScriptLib
 *
 */

var _request = require('../Http/Client/RequestClient'),
    _configuration = require('../configuration'),
    _APIHelper = require('../APIHelper');

var APIController = {

    /**
     * TODO: type endpoint description here
     * @param {string|null} chatId    Optional parameter: chat id
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {array}
     */
    cleanHistory: function (chatId, callback) {

        //prepare query string for API call;
        var _baseUri = _configuration.BASEURI;
        
        var _queryBuilder = _baseUri + "/clean-history";
        
        //Process query parameters
        _queryBuilder = _APIHelper.appendUrlWithQueryParameters(_queryBuilder, {
            "chat_id": chatId,
            "user_key": _configuration.userKey,
            "script_key": _configuration.scriptKey
        });

        //validate and preprocess url
        var _queryUrl = _APIHelper.cleanUrl(_queryBuilder);
        
        //prepare headers
        var _headers = {
            "accept": "application/json"
        };

        //Construct the request
        var _options = {
            queryUrl: _queryUrl,
            method: "POST",
            headers: _headers,
        };
        
        //Build the response processing. 
        function cb (_error, _response, _context) {
            if(_error) {
                callback({errorMessage: _error.message, errorCode: _error.code},null,_context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                var parsed = JSON.parse(_response.body);
                callback(null,parsed,_context);
            } else {
                callback({errorMessage: "HTTP Response Not OK", errorCode: _response.statusCode, errorResponse: _response.body}, null, _context);
            }
        }
        _request(_options, cb);
    },


    /**
     * Get array with templates
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {mixed}
     */
    templates: function (callback) {

        //prepare query string for API call;
        var _baseUri = _configuration.BASEURI;
        
        var _queryBuilder = _baseUri + "/templates";
        
        //Process query parameters
        _queryBuilder = _APIHelper.appendUrlWithQueryParameters(_queryBuilder, {
            "user_key": _configuration.userKey,
            "script_key": _configuration.scriptKey
        });

        //validate and preprocess url
        var _queryUrl = _APIHelper.cleanUrl(_queryBuilder);
        
        //prepare headers
        var _headers = {
            "accept": "application/json"
        };

        //Construct the request
        var _options = {
            queryUrl: _queryUrl,
            method: "POST",
            headers: _headers,
        };
        
        //Build the response processing. 
        function cb (_error, _response, _context) {
            if(_error) {
                callback({errorMessage: _error.message, errorCode: _error.code},null,_context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                var parsed = JSON.parse(_response.body);
                callback(null,parsed,_context);
            } else {
                callback({errorMessage: "HTTP Response Not OK", errorCode: _response.statusCode, errorResponse: _response.body}, null, _context);
            }
        }
        _request(_options, cb);
    },


    /**
     * Get answer
     * @param {string} msg    Required parameter: message
     * @param {string|null} chatId    Optional parameter: Chat id
     * @param {array|null} contact    Optional parameter: Object with information about concat
     * @param {array|null} external    Optional parameter: Object with information about external
     * @param {bool|null} stopIsNull    Optional parameter: Stop is null
     * @param {bool|null} repeatIsNull    Optional parameter: Stop is null
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {array}
     */
    answers: function (msg, chatId, contact, external, stopIsNull, repeatIsNull, callback) {
        //Assign default values
        stopIsNull = stopIsNull || false;
        repeatIsNull = repeatIsNull || false;

        //prepare query string for API call;
        var _baseUri = _configuration.BASEURI;
        
        var _queryBuilder = _baseUri + "/answer";
        
        //Process query parameters
        _queryBuilder = _APIHelper.appendUrlWithQueryParameters(_queryBuilder, {
            "msg": msg,
            "chat_id": chatId,
            "contact": contact,
            "external": external,
            "stop_is_null": (null != stopIsNull)? stopIsNull: false,
            "repeat_is_null": (null != repeatIsNull)? repeatIsNull: false,
            "user_key": _configuration.userKey,
            "script_key": _configuration.scriptKey
        });

        //validate and preprocess url
        var _queryUrl = _APIHelper.cleanUrl(_queryBuilder);
        
        //prepare headers
        var _headers = {
            "accept": "application/json"
        };

        //Construct the request
        var _options = {
            queryUrl: _queryUrl,
            method: "POST",
            headers: _headers,
        };
        
        //Build the response processing. 
        function cb (_error, _response, _context) {
            if(_error) {
                callback({errorMessage: _error.message, errorCode: _error.code},null,_context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                var parsed = JSON.parse(_response.body);
                callback(null,parsed,_context);
            } else {
                callback({errorMessage: "HTTP Response Not OK", errorCode: _response.statusCode, errorResponse: _response.body}, null, _context);
            }
        }
        _request(_options, cb);
    }

};

module.exports = APIController;