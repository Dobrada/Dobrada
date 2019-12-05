$(document).ready(function () {

    // Checkboxes styling
    $('.form-group-checkboxes label').on('click', function () {
      $(this).toggleClass('active');
    });

    // Mobile navbar first view
    $('.navbar-toggler').addClass('collapsed');
});