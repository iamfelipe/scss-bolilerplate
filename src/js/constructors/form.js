class Form {
  constructor(el) {
    this.DOM = {
      el: el
    };
    this.init();
  }
  validateRadios(currentIndex) {
    const $currentFieldset = this.DOM.el.find(
      "fieldset.body:eq(" + currentIndex + ") "
    );
    const $radios = $currentFieldset.find("input:radio");
    // Make groups
    let checked = true;
    const names = [];
    $radios.each(function() {
      const radioName = $(this).attr("name");
      if ($.inArray(radioName, names) === -1) names.push(radioName);
    });

    // Do validation for each group
    $.each(names, (i, name) => {
      const $radio = $('input[name="' + name + '"]');
      const $radioGroup = $radio.closest(".form-group");
      const $radioChecked = $('input[name="' + name + '"]:checked');
      const classIsInvalid = "is-invalid";
      const invalidFeedback =
        '<span class="invalid-feedback d-block">Campo requerido</span>';

      $radioGroup.removeClass(classIsInvalid);
      $radioGroup.children("span.invalid-feedback").remove();

      if ($radioChecked.length === 0) {
        $radioGroup.addClass(classIsInvalid);
        $radioGroup.append(invalidFeedback);
        checked = false;
      }
    });
    return checked;
  }
  init() {
    this.DOM.el.show();
    this.DOM.el
      .steps({
        /* Labels */
        labels: {
          cancel: "Cancelar",
          finish: "Enviar",
          next: "Continuar",
          previous: "Volver",
          loading: "Cargando..."
        },
        headerTag: "h3",
        bodyTag: "fieldset",
        titleTemplate: "#title#",
        transitionEffect: "slideLeft",
        onStepChanging: (event, currentIndex, newIndex) => {
          // Allways allow previous action even if the current form is not valid!
          if (currentIndex > newIndex) {
            return true;
          }
          return this.validateRadios(currentIndex);
          // Needed in some cases if the user went back (clean up)
          if (currentIndex < newIndex) {
            // To remove error styles
            this.DOM.el.find(".body:eq(" + newIndex + ") label.error").remove();
            this.DOM.el
              .find(".body:eq(" + newIndex + ") .error")
              .removeClass("error");
          }
          this.DOM.el.validate().settings.ignore = ":disabled,:hidden";
          // console.log(this.DOM.el.valid());
          return this.DOM.el.valid();
        },
        onStepChanged: (event, currentIndex, priorIndex) => {
          // Used to skip the "Warning" step if the user is old enough.
          if (currentIndex === 2 && Number($("#age-2").val()) >= 18) {
            this.DOM.el.steps("next");
          }
          // Used to skip the "Warning" step if the user is old enough and wants to the previous step.
          if (currentIndex === 2 && priorIndex === 3) {
            this.DOM.el.steps("previous");
          }
        },
        onFinishing: (event, currentIndex) => {
          return this.validateRadios(currentIndex);
          this.DOM.el.validate().settings.ignore = ":disabled";
          return this.DOM.el.valid();
        },
        onFinished: (event, currentIndex) => {
          alert("Submitted!");
        }
      })
      .validate({
        errorPlacement: function errorPlacement(error, element) {
          element.before(error);
        },
        rules: {
          radioOptions: "required",
          confirm: {
            equalTo: "#password-2"
          }
        }
      });
  }
}

export default Form;
