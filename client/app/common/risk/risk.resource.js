let RiskResource = function ($resource, SRC) {
  'ngInject';
  let filePath = `${SRC.PATH}${SRC.FILE}`;

  return $resource(filePath);
}

export default RiskResource;
