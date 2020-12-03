/*!
 * name: @jswork/next-registry-choices
 * description: Yeoman registry choices based on next.
 * homepage: https://github.com/afeiship/next-registry-choices
 * version: 1.0.0
 * date: 2020-12-03 08:49:59
 * license: MIT
 */

(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@jswork/next');
  var npmRegisties = nx.npmRegisties || require('@jswork/next-npm-registries');
  var SUPPORT_LIST = ['npm', 'github', 'alo7', 'null'];

  var NxRegistryChoices = nx.declare('nx.RegistryChoices', {
    statics: {
      init: function () {
        this.items = SUPPORT_LIST.map(function (item) {
          return { name: item, value: npmRegisties(item) };
        });
      },
      gets: function () {
        return this.items;
      }
    }
  });

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxRegistryChoices;
  }
})();
