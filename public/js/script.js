/** @format */

$(function () {
  $(".table-hover a").click(function () {
    // Check for active
    $(".table-hover tbody a").removeClass("active");
    $(this).parent().addClass("active");

    // Display active tab
    let currentTab = $(this).attr("href");
    $(".detailsPopUp").hide();
    $(currentTab).show();

    return false;
  });
});
