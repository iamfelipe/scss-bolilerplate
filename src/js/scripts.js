import bsCustomFileInput from "bs-custom-file-input";
import Form from "./constructors/form";

$(document).ready(function() {
  jQuery.validator.setDefaults({
    lang: "es",
    errorElement: "span",
    errorPlacement: function(error, element) {
      error.addClass("invalid-feedback");
      element.closest(".form-group").append(error);
    },
    highlight: function(element, errorClass, validClass) {
      $(element).addClass("is-invalid");
    },
    unhighlight: function(element, errorClass, validClass) {
      $(element).removeClass("is-invalid");
    }
  });

  // Custom File Input
  bsCustomFileInput.init();

  // Validate
  const $diagnosticForm = $("#diagnostic-form");
  const $signupForm = $("#signup-form");

  const forms = [$diagnosticForm, $signupForm];

  forms.forEach(function($form) {
    let form = new Form($form);
    // $form.show();
    // $form
    //   .steps({
    //     /* Labels */
    //     labels: {
    //       cancel: "Cancelar",
    //       finish: "Enviar",
    //       next: "Continuar",
    //       previous: "Volver",
    //       loading: "Cargando..."
    //     },
    //     headerTag: "h3",
    //     bodyTag: "fieldset",
    //     transitionEffect: "slideLeft",
    //     onStepChanging: function(event, currentIndex, newIndex) {
    //       // Allways allow previous action even if the current form is not valid!
    //       if (currentIndex > newIndex) {
    //         return true;
    //       }
    //       // Needed in some cases if the user went back (clean up)
    //       if (currentIndex < newIndex) {
    //         // To remove error styles
    //         $form.find(".body:eq(" + newIndex + ") label.error").remove();
    //         $form
    //           .find(".body:eq(" + newIndex + ") .error")
    //           .removeClass("error");
    //       }
    //       $form.validate().settings.ignore = ":disabled,:hidden";
    //       return $form.valid();
    //     },
    //     onStepChanged: function(event, currentIndex, priorIndex) {
    //       // Used to skip the "Warning" step if the user is old enough.
    //       if (currentIndex === 2 && Number($("#age-2").val()) >= 18) {
    //         $form.steps("next");
    //       }
    //       // Used to skip the "Warning" step if the user is old enough and wants to the previous step.
    //       if (currentIndex === 2 && priorIndex === 3) {
    //         $form.steps("previous");
    //       }
    //     },
    //     onFinishing: function(event, currentIndex) {
    //       $form.validate().settings.ignore = ":disabled";
    //       return $form.valid();
    //     },
    //     onFinished: function(event, currentIndex) {
    //       alert("Submitted!");
    //     }
    //   })
    //   .validate({
    //     errorPlacement: function errorPlacement(error, element) {
    //       element.before(error);
    //     },
    //     rules: {
    //       confirm: {
    //         equalTo: "#password-2"
    //       }
    //     }
    //   });
  });

  // let form = $(".c-wizard").show();
});
