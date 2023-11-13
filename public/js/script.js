/** @format */
$(function () {
  // notification-popup - header//
  $(".nav-item .notification").click(function () {
    $(".detailsPopUp").toggle("d-block");
  });
  // availability table selected - Page: deshbord.profile-edit//
  $(".availability-table .available").on("click", function () {
    $(this).toggleClass("selected");
    getValues();
  });
});
