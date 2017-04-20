const controller = require('./register.controller.js')
const template = require('./register.html')

const component = {
  controller: controller,
  template: template
}

angular
  .module('newapp')
  .component('register', component)
