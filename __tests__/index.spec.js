const { expect } = require('@jest/globals');

(function () {
  const NxRegistryChoices = require('../src');

  describe('NxRegistryChoices.methods', function () {
    test('init', function () {
      var list = NxRegistryChoices.gets();
      var keys = list.map((item) => item.name);
      expect(keys).toEqual(['npm', 'github', 'alo7', 'null']);
    });
  });
})();
