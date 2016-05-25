//
//  Javascript libraries required for the Admin area of the CMS.
//
//= require jquery
//= require jquery_ujs
//= require jquery-ui
//= require bootstrap/bootstrap
//= require jquery.cookie
//= require cms/core_library
//= require cms/attachment_manager
//= require cms/toolbar
//= require datetimepicker/bootstrap-datetimepicker.min
//= require select/bootstrap-select.min
//= require tag_list
//= require jquery-tablesorter
//= require highcharts
//= require highcharts/highcharts-more
//


$(document).ready(function() {
  $('.tool-tip').tooltip();

  $('#submit_search').click(function() {
    $('#search_form').submit();
  })
});
