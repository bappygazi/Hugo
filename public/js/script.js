/** @format */

$(function () {
  $(".coaching-details active").click(function () {
    $(".coaching detailsPopUp").removeClass("d-none");
    $(this).addClass("d-block");
  });
});
