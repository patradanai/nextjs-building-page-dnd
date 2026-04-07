import component from './components/config.js'
import moduleConfig from './modules/config.js'
import page from './pages/config.js'
import store from './stores/config.js'
import util from './utils/config.js'

// Add here more generators
const plopfile = function (plop) {
    plop.setGenerator('component', component)
    plop.setGenerator('utils', page)
    plop.setGenerator('module', moduleConfig)
    plop.setGenerator('store', { ...store(plop) })
    plop.setGenerator('page', util)
}

export default plopfile
