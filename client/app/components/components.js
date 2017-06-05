import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import Risks from './risks/risks';

let componentModule = angular.module('app.components', [
  Home,
  About,
  Risks
])

.name;

export default componentModule;
