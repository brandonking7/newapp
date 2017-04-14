const controller = require('./home.component.js');
const template = require('./home.html');

const component = {
  controller: controller,
  template: template
}

angular
  .module('newapp')
  .component('home', component);
