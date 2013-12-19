var util = require('util');

var Transform = require('stream').Transform;

exports.parse = function(options) {
  options = options || {};
  options['parse'] = true;
  return new Stream(options);
};

exports.serialize = function(options) {
  options = options || {};
  options['serialize'] = true;
  return new Stream(options);
};

function Stream(options) {
  if (!(this instanceof Stream))
    return new Stream(options);
  this._options = options || {};
  Transform.call(this, options);
}
utils.inherits(Stream, Transform);

Stream.prototype._transform = function(chunk, encoding, callback) {
}
