'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/******/(function (modules) {
  // webpackBootstrap
  /******/ // The module cache
  /******/var installedModules = {};
  /******/
  /******/ // The require function
  /******/function __webpack_require__(moduleId) {
    /******/
    /******/ // Check if module is in cache
    /******/if (installedModules[moduleId]) {
      /******/return installedModules[moduleId].exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/var module = installedModules[moduleId] = {
      /******/i: moduleId,
      /******/l: false,
      /******/exports: {}
      /******/ };
    /******/
    /******/ // Execute the module function
    /******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
    /******/
    /******/ // Flag the module as loaded
    /******/module.l = true;
    /******/
    /******/ // Return the exports of the module
    /******/return module.exports;
    /******/
  }
  /******/
  /******/
  /******/ // expose the modules object (__webpack_modules__)
  /******/__webpack_require__.m = modules;
  /******/
  /******/ // expose the module cache
  /******/__webpack_require__.c = installedModules;
  /******/
  /******/ // define getter function for harmony exports
  /******/__webpack_require__.d = function (exports, name, getter) {
    /******/if (!__webpack_require__.o(exports, name)) {
      /******/Object.defineProperty(exports, name, { enumerable: true, get: getter });
      /******/
    }
    /******/
  };
  /******/
  /******/ // define __esModule on exports
  /******/__webpack_require__.r = function (exports) {
    /******/if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
      /******/Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
      /******/
    }
    /******/Object.defineProperty(exports, '__esModule', { value: true });
    /******/
  };
  /******/
  /******/ // create a fake namespace object
  /******/ // mode & 1: value is a module id, require it
  /******/ // mode & 2: merge all properties of value into the ns
  /******/ // mode & 4: return value when already ns object
  /******/ // mode & 8|1: behave like require
  /******/__webpack_require__.t = function (value, mode) {
    /******/if (mode & 1) value = __webpack_require__(value);
    /******/if (mode & 8) return value;
    /******/if (mode & 4 && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && value && value.__esModule) return value;
    /******/var ns = Object.create(null);
    /******/__webpack_require__.r(ns);
    /******/Object.defineProperty(ns, 'default', { enumerable: true, value: value });
    /******/if (mode & 2 && typeof value != 'string') for (var key in value) {
      __webpack_require__.d(ns, key, function (key) {
        return value[key];
      }.bind(null, key));
    } /******/return ns;
    /******/
  };
  /******/
  /******/ // getDefaultExport function for compatibility with non-harmony modules
  /******/__webpack_require__.n = function (module) {
    /******/var getter = module && module.__esModule ?
    /******/function getDefault() {
      return module['default'];
    } :
    /******/function getModuleExports() {
      return module;
    };
    /******/__webpack_require__.d(getter, 'a', getter);
    /******/return getter;
    /******/
  };
  /******/
  /******/ // Object.prototype.hasOwnProperty.call
  /******/__webpack_require__.o = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  };
  /******/
  /******/ // __webpack_public_path__
  /******/__webpack_require__.p = "";
  /******/
  /******/
  /******/ // Load entry module and return exports
  /******/return __webpack_require__(__webpack_require__.s = "./src/js/scripts.js");
  /******/
})(
/************************************************************************/
/******/{

  /***/"./node_modules/bs-custom-file-input/dist/bs-custom-file-input.js":
  /*!************************************************************************!*\
    !*** ./node_modules/bs-custom-file-input/dist/bs-custom-file-input.js ***!
    \************************************************************************/
  /*! no static exports found */
  /***/function node_modulesBsCustomFileInputDistBsCustomFileInputJs(module, exports, __webpack_require__) {

    /*!
     * bsCustomFileInput v1.3.2 (https://github.com/Johann-S/bs-custom-file-input)
     * Copyright 2018 - 2019 Johann-S <johann.servoire@gmail.com>
     * Licensed under MIT (https://github.com/Johann-S/bs-custom-file-input/blob/master/LICENSE)
     */
    (function (global, factory) {
      true ? module.exports = factory() : undefined;
    })(this, function () {
      'use strict';

      var Selector = {
        CUSTOMFILE: '.custom-file input[type="file"]',
        CUSTOMFILELABEL: '.custom-file-label',
        FORM: 'form',
        INPUT: 'input'
      };

      var textNodeType = 3;

      var getDefaultText = function getDefaultText(input) {
        var defaultText = '';
        var label = input.parentNode.querySelector(Selector.CUSTOMFILELABEL);

        if (label) {
          defaultText = label.innerHTML;
        }

        return defaultText;
      };

      var findFirstChildNode = function findFirstChildNode(element) {
        if (element.childNodes.length > 0) {
          var childNodes = [].slice.call(element.childNodes);

          for (var i = 0; i < childNodes.length; i++) {
            var node = childNodes[i];

            if (node.nodeType !== textNodeType) {
              return node;
            }
          }
        }

        return element;
      };

      var restoreDefaultText = function restoreDefaultText(input) {
        var defaultText = input.bsCustomFileInput.defaultText;
        var label = input.parentNode.querySelector(Selector.CUSTOMFILELABEL);

        if (label) {
          var element = findFirstChildNode(label);
          element.innerHTML = defaultText;
        }
      };

      var fileApi = !!window.File;
      var FAKE_PATH = 'fakepath';
      var FAKE_PATH_SEPARATOR = '\\';

      var getSelectedFiles = function getSelectedFiles(input) {
        if (input.hasAttribute('multiple') && fileApi) {
          return [].slice.call(input.files).map(function (file) {
            return file.name;
          }).join(', ');
        }

        if (input.value.indexOf(FAKE_PATH) !== -1) {
          var splittedValue = input.value.split(FAKE_PATH_SEPARATOR);
          return splittedValue[splittedValue.length - 1];
        }

        return input.value;
      };

      function handleInputChange() {
        var label = this.parentNode.querySelector(Selector.CUSTOMFILELABEL);

        if (label) {
          var element = findFirstChildNode(label);
          var inputValue = getSelectedFiles(this);

          if (inputValue.length) {
            element.innerHTML = inputValue;
          } else {
            restoreDefaultText(this);
          }
        }
      }

      function handleFormReset() {
        var customFileList = [].slice.call(this.querySelectorAll(Selector.INPUT)).filter(function (input) {
          return !!input.bsCustomFileInput;
        });

        for (var i = 0, len = customFileList.length; i < len; i++) {
          restoreDefaultText(customFileList[i]);
        }
      }

      var customProperty = 'bsCustomFileInput';
      var Event = {
        FORMRESET: 'reset',
        INPUTCHANGE: 'change'
      };
      var bsCustomFileInput = {
        init: function init(inputSelector, formSelector) {
          if (inputSelector === void 0) {
            inputSelector = Selector.CUSTOMFILE;
          }

          if (formSelector === void 0) {
            formSelector = Selector.FORM;
          }

          var customFileInputList = [].slice.call(document.querySelectorAll(inputSelector));
          var formList = [].slice.call(document.querySelectorAll(formSelector));

          for (var i = 0, len = customFileInputList.length; i < len; i++) {
            var input = customFileInputList[i];
            Object.defineProperty(input, customProperty, {
              value: {
                defaultText: getDefaultText(input)
              },
              writable: true
            });
            handleInputChange.call(input);
            input.addEventListener(Event.INPUTCHANGE, handleInputChange);
          }

          for (var _i = 0, _len = formList.length; _i < _len; _i++) {
            formList[_i].addEventListener(Event.FORMRESET, handleFormReset);

            Object.defineProperty(formList[_i], customProperty, {
              value: true,
              writable: true
            });
          }
        },
        destroy: function destroy() {
          var formList = [].slice.call(document.querySelectorAll(Selector.FORM)).filter(function (form) {
            return !!form.bsCustomFileInput;
          });
          var customFileInputList = [].slice.call(document.querySelectorAll(Selector.INPUT)).filter(function (input) {
            return !!input.bsCustomFileInput;
          });

          for (var i = 0, len = customFileInputList.length; i < len; i++) {
            var input = customFileInputList[i];
            restoreDefaultText(input);
            input[customProperty] = undefined;
            input.removeEventListener(Event.INPUTCHANGE, handleInputChange);
          }

          for (var _i2 = 0, _len2 = formList.length; _i2 < _len2; _i2++) {
            formList[_i2].removeEventListener(Event.FORMRESET, handleFormReset);

            formList[_i2][customProperty] = undefined;
          }
        }
      };

      return bsCustomFileInput;
    });
    //# sourceMappingURL=bs-custom-file-input.js.map


    /***/
  },

  /***/"./src/js/constructors/form.js":
  /*!*************************************!*\
    !*** ./src/js/constructors/form.js ***!
    \*************************************/
  /*! exports provided: default */
  /***/function srcJsConstructorsFormJs(module, __webpack_exports__, __webpack_require__) {

    "use strict";

    __webpack_require__.r(__webpack_exports__);

    var Form = function () {
      function Form(el) {
        _classCallCheck(this, Form);

        this.DOM = {
          el: el
        };
        this.init();
      }

      _createClass(Form, [{
        key: 'validateRadios',
        value: function validateRadios(currentIndex) {
          var $currentFieldset = this.DOM.el.find("fieldset.body:eq(" + currentIndex + ") ");
          var $radios = $currentFieldset.find("input:radio");
          var checked = true;
          if ($radios.length !== 0) {
            // Make groups
            checked = true;
            var names = [];
            $radios.each(function () {
              var radioName = $(this).attr("name");
              if ($.inArray(radioName, names) === -1) names.push(radioName);
            });

            // Do validation for each group
            $.each(names, function (i, name) {
              var $radio = $('input[name="' + name + '"]');
              var $radioGroup = $radio.closest(".form-group");
              var $radioChecked = $('input[name="' + name + '"]:checked');
              var classIsInvalid = "is-invalid";
              var invalidFeedback = '<span class="invalid-feedback d-block">Campo requerido</span>';

              $radioGroup.removeClass(classIsInvalid);
              $radioGroup.children("span.invalid-feedback").remove();

              if ($radioChecked.length === 0) {
                $radioGroup.addClass(classIsInvalid);
                $radioGroup.append(invalidFeedback);
                checked = false;
              }
            });
          }
          return checked;
        }
      }, {
        key: 'init',
        value: function init() {
          var _this = this;

          this.DOM.el.show();
          this.DOM.el.steps({
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
            onStepChanging: function onStepChanging(event, currentIndex, newIndex) {
              // Allways allow previous action even if the current form is not valid!
              var openModal = function openModal(event, currentIndex, newIndex) {
                if (currentIndex > newIndex) {
                  return true;
                }
                if (!_this.validateRadios(currentIndex)) {
                  return;
                }
                // Needed in some cases if the user went back (clean up)
                if (currentIndex < newIndex) {
                  // To remove error styles
                  _this.DOM.el.find(".body:eq(" + newIndex + ") label.error").remove();
                  _this.DOM.el.find(".body:eq(" + newIndex + ") .error").removeClass("error");
                }
                _this.DOM.el.validate().settings.ignore = ":disabled,:hidden";
                return _this.DOM.el.valid();
              };
              if (openModal(event, currentIndex, newIndex)) {
                return true;
              } else {
                $("#modalFormError").modal();
                return false;
              }
            },
            onStepChanged: function onStepChanged(event, currentIndex, priorIndex) {
              // Used to skip the "Warning" step if the user is old enough.
              if (currentIndex === 2 && Number($("#age-2").val()) >= 18) {
                _this.DOM.el.steps("next");
              }
              // Used to skip the "Warning" step if the user is old enough and wants to the previous step.
              if (currentIndex === 2 && priorIndex === 3) {
                _this.DOM.el.steps("previous");
              }
            },
            onFinishing: function onFinishing(event, currentIndex) {
              return _this.validateRadios(currentIndex);
              _this.DOM.el.validate().settings.ignore = ":disabled";
              return _this.DOM.el.valid();
            },
            onFinished: function onFinished(event, currentIndex) {
              alert("Submitted!");
            }
          }).validate({
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
      }]);

      return Form;
    }();

    /* harmony default export */

    __webpack_exports__["default"] = Form;

    /***/
  },

  /***/"./src/js/scripts.js":
  /*!***************************!*\
    !*** ./src/js/scripts.js ***!
    \***************************/
  /*! no exports provided */
  /***/function srcJsScriptsJs(module, __webpack_exports__, __webpack_require__) {

    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */var bs_custom_file_input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! bs-custom-file-input */"./node_modules/bs-custom-file-input/dist/bs-custom-file-input.js");
    /* harmony import */var bs_custom_file_input__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bs_custom_file_input__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */var _constructors_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ./constructors/form */"./src/js/constructors/form.js");

    $(document).ready(function () {
      jQuery.validator.setDefaults({
        lang: "es",
        errorElement: "span",
        errorPlacement: function errorPlacement(error, element) {
          error.addClass("invalid-feedback");
          element.closest(".form-group").append(error);
        },
        highlight: function highlight(element, errorClass, validClass) {
          $(element).addClass("is-invalid");
        },
        unhighlight: function unhighlight(element, errorClass, validClass) {
          $(element).removeClass("is-invalid");
        }
      });

      // Custom File Input
      bs_custom_file_input__WEBPACK_IMPORTED_MODULE_0___default.a.init();

      // Validate
      var $loginForm = $("#loginForm");
      var $diagnosticForm = $("#diagnostic-form");
      var $signupForm = $("#signup-form");

      $loginForm.validate({
        rules: {
          loginTerms: {
            required: true
          }
        },
        messages: {
          terms: {
            required: "check the checbox"
          }
        }
      });

      var forms = [$diagnosticForm, $signupForm];

      forms.forEach(function ($form) {
        var form = new _constructors_form__WEBPACK_IMPORTED_MODULE_1__["default"]($form);
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

    /***/
  }

  /******/ });
//# sourceMappingURL=scripts.js.map
