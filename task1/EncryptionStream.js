const { Stream } = require('stream');
const { encryption } = require('./caesar');

class EncryptionStream extends Stream.Transform {
  constructor(options = {}) {
    options = Object.assign({}, options, {
      decodeStrings: false
    });
    super(options);
    this.options = options;
  }

  _transform(chunk, encoding, callback) {
    if (encoding !== 'utf8') {
      this.emit('error', new Error('Only UTF-8 sources are supported!'));
      return callback();
    }
    const { action, shift } = this.options;
    this.push(encryption(chunk, shift, action));
    callback();
  }

  _flush(callback) {
    this.push('\n');
    callback();
  }
}

module.exports = EncryptionStream;
