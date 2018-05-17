var React = require('react')
var qrImage = require('qr-image')
var PropTypes = require('prop-types')

var ReactQR = function(props) {
  var pngBuffer = qrImage.imageSync(props.text, { type: 'png', margin: 1 })
  var dataURI = 'data:image/png;base64,' + pngBuffer.toString('base64')
  return (
    <img className='react-qr' src={dataURI} />
  )  
}

ReactQR.displayName = 'ReactQR';

ReactQR.propTypes = {
  text: PropTypes.string.isRequired
};

module.exports = ReactQR
