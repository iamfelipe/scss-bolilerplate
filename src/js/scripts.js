import bsCustomFileInput from 'bs-custom-file-input'

$(document).ready(function () {
  bsCustomFileInput.init()
  $('select').selectpicker({
    style: '',
    styleBase: 'form-control',
    // liveSearch: true
  })
})
