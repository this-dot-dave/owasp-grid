import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngResource from 'angular-resource';
import risksComponent from './risks.component';
import dalRiskModule from '../../common/risk/dal.risk.module';

let risksModule = angular.module('risks', [
  uiRouter,
  ngResource,
  dalRiskModule.name
])

.config(($stateProvider) => {
  "ngInject";
  $stateProvider
    .state('risks', {
      url: '/risks',
      component: 'risks',
      
      resolve: {
      	riskData: Risk => Risk.get().$promise
      }
      /**/
    });
})

.component('risks', risksComponent)
.name;

export default risksModule;
