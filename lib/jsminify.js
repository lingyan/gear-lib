/**
 * Minify JS.
 *
 * @param params {Object} Ignored.
 * @param objects {Array} Object chain.
 * @param logger {Object} Logger instance, if additional logging required (other than task exit status).
 * @param callback {Function} Callback on task completion.
 */
exports.minifyjs = function(params, objects, logger, callback) {
    callback(null, objects);
};