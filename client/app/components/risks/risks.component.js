import template from './risks.html';
import controller from './risks.controller';
import './risks.scss';

let risksComponent = {
  bindings: {
  	riskData: '<'
  },
  template,
  controller
};

export default risksComponent;
