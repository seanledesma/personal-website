/* Form Validation Example */
/* Personal Web Site-Visitor Form Validation */
/* See comments with TODO for code you need to implement */
const stateAbbreviations = [
    'AL','AK','AS','AZ','AR','CA','CO','CT','DE','DC','FM','FL','GA',
    'GU','HI','ID','IL','IN','IA','KS','KY','LA','ME','MH','MD','MA',
    'MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND',
    'MP','OH','OK','OR','PW','PA','PR','RI','SC','SD','TN','TX','UT',
    'VT','VI','VA','WA','WV','WI','WY'
   ];
           
  function initValidation(formName) {
  
    let $form = $(formName);
  
    $('form :input').change(function(ev){
      validateForm();
      if(!this.checkValidity())
        $(this).addClass("was-validated")
  
      //NOTE: we use 'was-validated' class so that you show the error indications only for the single field rather
      //than the whole form at once
    });
    
    $form.submit(function(event){
      $form = $(this);
      formEl=$form.get(0);
  
      event.preventDefault();  //prevent default browser submit
      event.stopPropagation(); //stop event bubbling
  
      validateForm();
  
      if (!formEl.checkValidity()){
        $(":input").addClass("was-validated")
      }
      else{
        //TODO
        // $form.();
        // $("#thankyou").show();
        //hide form
        //show thank you message
        //NEEDS TESTING
        $form.hide();
        $("#thankyou").show();
      }
     
  
    });
  }
  
  function validateForm() {
    
    validateState("#state", "You must enter a valid two character state code, e.g., UT");
    
    /*note, to validate the group, just passing in id of one of them ("#newspaper"), we will use groupName to check status of group.  Just call setElementValidity on the '#newspaper' element to show the error message*/
   
    validateCheckboxGroup("#newspaper", ".find-page", "you must select at least one!");
    
  }
  function validateState(id, msg){
    $el = $(id);
    let valid=false;
    //TODO
    //get value from $el, and convert to upper case
    //check whether the value is in the stateAbbreviations array
    //NEEDS TESTING
    let state = $el.val().toUpperCase();
    for(let i = 0; i < stateAbbreviations.length; i++) {
        if(state == stateAbbreviations[i]) {
            valid = true;
            break;
        } else {
            valid = false;
        }
    }

    setElementValidity(id, valid, msg);
  }
  
  function validateCheckboxGroup(fieldName, groupName, message) {
    let valid=false;
  
    //TODO
    //Validate whether any of the checkboxes are checked. set 'valid' to true if checked
    //NEEDS TESTING, IN PROGRESS
 
    if ( $(groupName).is(":checked") ){
        valid = true;
        setElementValidity(fieldName, valid, message);
    } else {
        valid = false;
        setElementValidity(fieldName, valid, message);
    }

      
    
    
    return valid;
  }
  
  function setElementValidity(fieldName, valid, message){
    let $field=$(fieldName);
    let el = $field.get(0);
    if (valid) {  //it has a value
  
      el.setCustomValidity('');  //sets to no error message and field is valid
      console.log("valid!!");
    } else {
  
      el.setCustomValidity(message);   //sets error message and field gets 'invalid' stat
      console.log("not valid!!");
    }
    //TODO  insert or remove message in error div for element
  }