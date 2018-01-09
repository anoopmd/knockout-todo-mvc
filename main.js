requirejs.config({
  paths:{
    'jquery': 'node_modules/jquery/dist/jquery',
    'knockout': 'node_modules/knockout/build/output/knockout-latest',
    'knockout-amd-helpers': 'node_modules/knockout-amd-helpers/build/knockout-amd-helpers',
    'text': 'node_modules/requirejs-text/text',
    'pager': 'pager'
    // 'pager': 'node_modules/pagerjs/pager'
  },
  shim:{
    'knockout':['jquery'],
    'pager':['knockout']
  },
});
define(['jquery', 'knockout', 'pager'], function($, knockout, pager) {
    var viewModel = {
      requireVM: function(module) {
        return function (callback) {
          require([module], function (mod) {
            callback(new mod());
          });
        }
      }
    };
    pager.Href.hash = '#!/';
    pager.extendWithPage(viewModel);
    knockout.applyBindings(viewModel);
    pager.start();
});