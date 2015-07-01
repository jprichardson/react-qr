var assert = require('assert')
var jsdom = require('jsdom')

/* global beforeEach, describe, it */

describe('react-qr', function () {
  var React, QRCode, TestUtils

  beforeEach(function () {
    global.document = jsdom.jsdom('<!doctype html><html><body></body></html>')
    global.window = document.parentWindow
    global.navigator = {
      userAgent: 'node.js'
    }

    React = require('react/addons')
    QRCode = require('./')
    TestUtils = React.addons.TestUtils
  })

  it('should create the component with the data', function () {
    var text = 'hi'
    var renderedComponent = TestUtils.renderIntoDocument(<QRCode text={ text }/>)
    var component = TestUtils.findRenderedDOMComponentWithClass(renderedComponent, 'react-qr')
    var element = React.findDOMNode(component)
    var src = element.getAttribute('src')
    assert(src)
  })
})
