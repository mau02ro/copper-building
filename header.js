window.addEventListener("resize", () => {
  hd_Reset();
});
$(".hd__btnMenu").click(() => {
  $("#hd__menu").addClass("hd__OpenMenu");
});
$("#hd__menu-btn").click(() => {
  $("#hd__menu").removeClass("hd__OpenMenu");

  hd_Reset();
});
$(".hd__menu-itemTitle").click((event) => {
  let subMenu = event.currentTarget.nextElementSibling;
  if (subMenu) {
    $(event.currentTarget).toggleClass("hd__hover");
    $(subMenu).toggle();
  }
});
function hd_Reset() {
  $(".hd__menu-itemTitle").removeClass("hd__hover");
  $(".hd__subMenu").hide();
  $("#hd__menu").removeClass("hd__OpenMenu");
}
