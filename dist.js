'use strict';

var React = require('react');
var qrImage = require('qr-image');

var ReactQR = React.createClass({
  displayName: 'ReactQR',
  propTypes: {
    text: React.PropTypes.string.isRequired
  },
  render: function render() {
    var pngBuffer = qrImage.imageSync(this.props.text, { type: 'png', margin: 1 });
    var dataURI = 'data:image/png;base64,' + pngBuffer.toString('base64');
    return React.createElement('img', { className: 'react-qr', src: dataURI });
  }
});

module.exports = ReactQR;

