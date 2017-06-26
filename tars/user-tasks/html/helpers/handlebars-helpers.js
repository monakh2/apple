'use strict';

const Handlebars = tars.packages.handlebars;

/**
 * You can add your own helpers to handlebarsHelpers Object
 * All helpers from that object will be available in templates
 * @type {Object}
 */
const handlebarsHelpers = {

    /**
     * This is an example of handlebars-helper
     * This helper gets string and returns it
     * @param  {String} str Source string
     * @return {String}     Result string
     */
    exampleHelper: function (str) {
        return str;
    },
	ifOdd : function(val, options) {
		return val % 2 === 0
			? options.fn(this)
			: options.inverse(this);
	}
};

module.exports = handlebarsHelpers;
