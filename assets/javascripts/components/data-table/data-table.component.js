(function() {
  'use strict';

  angular.module('dataTable', [])
    .component('dataTable', {
      templateUrl: 'components/data-table/data-table.html',
      controller: DataTableController,
      bindings: {}
    });

  DataTableController.$inject = [];

  function DataTableController() {
    var vm = this;

    // Scope Variables


    // Scope Functions


    // Lifecycle Hooks
    vm.$onInit = onInit;

    ////////////////////////

    function onInit() {

    }
  }
})();
