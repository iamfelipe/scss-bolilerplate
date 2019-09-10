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
window.addEventListener("load", () => {
  // Grab all the forms
  var forms = document.getElementsByClassName("needs-validation");

  // Iterate over each one
  for (let form of forms) {
    // Add a 'submit' event listener on each one
    form.addEventListener("submit", evt => {
      // check if the form input elements have the 'required' attribute
      if (!form.checkValidity()) {
        evt.preventDefault();
        evt.stopPropagation();
        console.log("Bootstrap will handle incomplete form fields");
      } else {
        // Since form is now valid, prevent default behavior..
        evt.preventDefault();
        console.info("All form fields are now valid...");
      }

      form.classList.add("was-validated");
    });
  }
});
