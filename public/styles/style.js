$(".search-by-number").on("click", () => {
  $(".search-by-cities").removeClass("selected");
  $(".form-by-iata").removeClass("visible");
  $(".search-by-number").addClass("selected");
  $(".form-by-number").addClass("visible");
});

$(".search-by-cities").on("click", () => {
  $(".search-by-number").removeClass("selected");
  $(".form-by-number").removeClass("visible");
  $(".search-by-cities").addClass("selected");
  $(".form-by-iata").addClass("visible");
});

$(window).on("scroll", () => {
  const sectionRectAbout = $(".about")[0].getBoundingClientRect();
  const sectionRectWhyUs = $(
    ".about-inner-container"
  )[0].getBoundingClientRect();
  const triggerPoint1 = window.innerHeight <= 768 ? 0.25 : 0.75; // Adjust trigger point for small screens
  const triggerPoint2 = window.innerHeight <= 768 ? 0.3 : 0.025; // Adjust trigger point for small screens
  const triggerValue = window.innerHeight * triggerPoint1;
  console.log(
    "Top:",
    sectionRectWhyUs.top,
    "Bottom:",
    sectionRectWhyUs.bottom,
    "Trigger:",
    window.innerHeight * triggerPoint2
  );
  // Check if the section is almost in the viewport
  if (
    sectionRectAbout.top < triggerValue &&
    sectionRectAbout.bottom > window.innerHeight * 0.1
  ) {
    $(".about-inner-container").addClass("slide");
    $(".window-images-container").addClass("slide");
  }

  if (
    sectionRectWhyUs.top < window.innerHeight * triggerPoint2 &&
    sectionRectWhyUs.bottom > window.innerHeight * 0.1
  ) {
    $(".why-us-title-container").addClass("slide");
    $(".item1").addClass("slide");
    $(".item2").addClass("slideUp");
    $(".item3").addClass("slide");
  }
});
