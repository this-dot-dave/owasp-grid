import RisksModule from './risks';
import RisksController from './risks.controller';
import RisksComponent from './risks.component';
import RisksTemplate from './risks.html';

describe('Risks', () => {
  let $rootScope, makeController;

  beforeEach(window.module(RisksModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new RisksController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(RisksTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = RisksComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(RisksTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(RisksController);
    });
  });
});
