class Form {
  constructor(el) {
    this.DOM = { el: el };
    this.settings = {
      labels: {
        cancel: "Cancelar",
        finish: "Enviar",
        next: "Continuar",
        previous: "Volver",
        loading: "Cargando..."
      },
      headerTag: "h3",
      bodyTag: "fieldset",
      transitionEffect: "slideLeft"
    };
    this.methods = {
      onStepChanging: (event, currentIndex, newIndex) => {
        // Allways allow previous action even if the current form is not valid!
        if (currentIndex > newIndex) {
          return true;
        }
        // Needed in some cases if the user went back (clean up)
        if (currentIndex < newIndex) {
          // To remove error styles
          this.DOM.el.find(".body:eq(" + newIndex + ") label.error").remove();
          this.DOM.el
            .find(".body:eq(" + newIndex + ") .error")
            .removeClass("error");
        }
        this.DOM.el.validate().settings.ignore = ":disabled,:hidden";
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
        this.DOM.el.validate().settings.ignore = ":disabled";
        return this.DOM.el.valid();
      },
      onFinished: (event, currentIndex) => {
        alert("Submitted!");
      }
    };
    this.init();
  }
  init() {
    console.log(this.DOM.el);
    this.DOM.el.show();
    this.DOM.el
      .steps({
        ...this.settings,
        ...this.methods
      })
      .validate({
        errorPlacement: function errorPlacement(error, element) {
          element.before(error);
        },
        rules: {
          confirm: {
            equalTo: "#password-2"
          }
        }
      });
  }
}

export default Form;
