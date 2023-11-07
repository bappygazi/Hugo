/** @format */
// profile coaching item popup - Page: deshbord.profile//
$(function () {
  $("#coachingActive").mouseover(function () {
    $("#detailsPopUp").css("display", "block");
  });
  $("#detailsPopUp").mouseover(function () {
    $("#detailsPopUp").css("display", "block");
  });
  $("#detailsPopUp").mouseout(function () {
    $("#detailsPopUp").css("display", "none");
  });
  $("#coachingActive").mouseout(function () {
    $("#detailsPopUp").css("display", "none");
  });

  // availability table selected - Page: deshbord.profile-edit//
  $(".availability-table .available").on("click", function () {
    $(this).toggleClass("selected");
    getValues();
  });
});
