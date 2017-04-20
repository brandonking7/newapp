const controller = require('./login.component.js')
const template = require('./login.html')

const component = {
  controller: controller,
  template: template
}

angular
  .module('newapp')
  .component('login', component)
