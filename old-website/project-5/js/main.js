function toggleTheme() {
  if($('#switchCheckBox').is(':checked')) {
    $('head').append('<link href="css/theme.css" rel="stylesheet" type="text/css" id="themeCSS" />');
  }else {
    $('#themeCSS').remove();
  }
}

function toggleValidationForm() {
  let validationForm = document.getElementById('validationForm');
  let displaySettings = validationForm.style.display;

  if(displaySettings == 'block') {
    validationForm.style.display = 'none';
  } else {
    validationForm.style.display = 'block';
  }
}

function toggleValidationForm2() {
  let orderMenu = document.getElementById('pizzaMenu');
  let displaySettings = pizzaMenu.style.display;

  if(displaySettings == 'block') {
    pizzaMenu.style.display = 'none';
  } else {
    pizzaMenu.style.display = 'block';
  }
}

function toggleValidationForm3() {
  let welcomeScreen = document.getElementById('welcomeScreen');
  let displaySettings = welcomeScreen.style.display;

  if(displaySettings == 'block') {
    welcomeScreen.style.display = 'none';
  } else {
    welcomeScreen.style.display = 'block';
  }
}


