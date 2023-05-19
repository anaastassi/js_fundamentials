//1
let $elements = $(".head");
$elements.css("background-color", "green");
let $innerElements = $elements.find(".inner");
$innerElements.css("font-size", "35px");

//2
$("a[href^='https://']").attr("target", "_blank");

//3
let $divs = $("h3").next();
for (let i = 0; i < $divs.length; i++) {
  $divs[i].parentNode.insertBefore($divs[i], $divs[i].previousElementSibling);
}

//4
let allCheckboxes = $("input:checkbox");
allCheckboxes.change(function () {
  let checkedCount = $(":checkbox:checked").length;
  if (checkedCount > 2) {
    allCheckboxes.not(":checked").each(function () {
      $(this)[0].disabled = true;
    });
  } else {
    allCheckboxes.not(":checked").each(function () {
      $(this)[0].disabled = false;
    });
  }
});
