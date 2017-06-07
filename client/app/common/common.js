import angular from 'angular';
import Navbar from './navbar/navbar';
import Hero from './hero/hero';
import Footer from './footer/footer';

let commonModule = angular.module('app.common', [
  Navbar,
  Hero,
  Footer
])
  
.name;

export default commonModule;
