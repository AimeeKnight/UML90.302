  //attach a click handler to the element with the id of 'contact' with the DOM is loaded
  $(document).ready(function(){
  	//create a variable 'vRules' to hold all options passed to validate()
    var vRules = {
    		//prevent validation of elements on each keyup event
        onkeyup:false,
        //set name, subject, message and email fields to be required
        rules: {
			"name": "required",
      "subject": "required",
      "message": "required",
			"email": "required"
		},
		//set an error message for each required field
		"messages": {
			"name": "Enter your name",
			"subject": "Enter a topic",
			"message":"Enter a message",
			"email": "Please enter a valid email address"
		},
				//define a message display callback, passing in the object of errors and array of errors
        "showErrors": function(errorMap,errorList) {
            //remove the error class in case this is a second submission and it's been applied before
            $("#contact div").removeClass("error");
            //if the array of errors is empty, return from the function
            if(errorList.length == 0) return;
            //if the array of errors isn't empty, show the element with the 'error-message' id
            $("#error-message").show();
            //grap the first element within the parent array of elements with the id of 'contact'
            var frm = $("#contact")[0];
            //loop through the array of errors objects
            for(var i = 0, len = errorList.length; i < len; i++) {
            		//for each error object, get the element property and then add the 'error' class to it's parent
                $(errorList[i].element).parent().addClass("error");
            }
        }
    };
    //call the validate method on the element with the id of 'contact', passing in the rules object defined above
    var validator = $("#contact").validate(vRules);
  });