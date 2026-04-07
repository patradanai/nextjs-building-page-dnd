const component = require('./components/config')
const module = require('./modules/config')
const store = require('./stores/config')
const page = require('./pages/config')
const util = require('./utils/config')

// Add here more generators
module.exports = function (plop) {
    plop.setGenerator('component', component)
    plop.setGenerator('utils', page)
    plop.setGenerator('module', module)
    plop.setGenerator('store', { ...store(plop) })
    plop.setGenerator('page', util)
}
