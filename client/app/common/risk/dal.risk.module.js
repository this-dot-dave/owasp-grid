import angular from 'angular';
import RiskResource from './risk.resource';

let dalRiskModule = angular.module('dal.risk', [])

  .factory('Risk', RiskResource)
  .constant('SRC', {
  	// currently brittle, due to webpack bundling
  	PATH: '/app/common/risk/',
  	FILE: 'owasp-model.json'
  });

export default dalRiskModule;
