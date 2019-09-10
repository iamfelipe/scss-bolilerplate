import bsCustomFileInput from "bs-custom-file-input";

$(document).ready(function() {
  bsCustomFileInput.init();
  // $("select").selectpicker({
  //   style: "",
  //   styleBase: "form-control"
  //   // liveSearch: true
  // });
});

// Login
// Upon load..
// window.addEventListener("load", () => {
//   // Grab all the forms
//   var forms = document.getElementsByClassName("needs-validation");
//
//   // Iterate over each one
//   for (let form of forms) {
//     // Add a 'submit' event listener on each one
//     form.addEventListener("submit", evt => {
//       // check if the form input elements have the 'required' attribute
//       if (!form.checkValidity()) {
//         evt.preventDefault();
//         evt.stopPropagation();
//         console.log("Bootstrap will handle incomplete form fields");
//       } else {
//         // Since form is now valid, prevent default behavior..
//         evt.preventDefault();
//         console.info("All form fields are now valid...");
//       }
//
//       form.classList.add("was-validated");
//     });
//   }
// });

// Wizard validation
$(document).ready(function() {
  var navListItems = $("div.setup-panel div a"),
    allWells = $(".setup-content"),
    allNextBtn = $(".nextBtn");

  allWells.hide();

  navListItems.click(function(e) {
    e.preventDefault();
    var $target = $($(this).attr("href")),
      $item = $(this);

    if (!$item.hasClass("disabled")) {
      navListItems.removeClass("btn-primary").addClass("btn-default");
      $item.addClass("btn-primary");
      allWells.hide();
      $target.show();
      $target.find("input:eq(0)").focus();
    }
  });

  allNextBtn.click(function() {
    var curStep = $(this).closest(".setup-content"),
      curStepBtn = curStep.attr("id"),
      nextStepWizard = $('div.setup-panel div a[href="#' + curStepBtn + '"]')
        .parent()
        .next()
        .children("a"),
      curInputs = curStep.find(
        "input[type='text'],input[type='url'],input[type='number']"
      ),
      isValid = true;

    $(".form-group").removeClass("has-error");
    for (var i = 0; i < curInputs.length; i++) {
      if (!curInputs[i].validity.valid) {
        isValid = false;
        $(curInputs[i])
          .closest(".form-group")
          .addClass("has-error");
      }
    }

    if (isValid) nextStepWizard.removeAttr("disabled").trigger("click");
  });

  $("div.setup-panel div a.btn-primary").trigger("click");
});
