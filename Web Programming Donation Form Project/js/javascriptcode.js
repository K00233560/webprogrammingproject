
function validateForm() {  
                                    var x = document.forms["myForm"]["fname"].value;
                                    if (x === null ||  x === "") {
                                        alert("First name must be filled out");
                                         document.getElementById('fname').style.borderColor = "red";
                                            $("#fname").focus();
                                                return false;
                                                }
                                        else {
                                            document.getElementById('fname').style.borderColor = "green";
                                        }
            
                                    var y = document.forms["myForm"]["surname"].value;
                                    if (y === null ||  y === "") {
                                        alert("Surname must be filled out");
                                        document.getElementById('surname').style.borderColor = "red";   
                                            $("#surname").focus();
                                            return false;
                                                }
                                        else {
                                            document.getElementById('surname').style.borderColor = "green";
                                        } 
                                        
                                        
                                    var z = document.forms["myForm"]["email"].value;
                                    var atpos=z.indexOf("@");
                                    var dotpos=z.lastIndexOf(".");
                                    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=z.length){
                                        alert("Not a valid e-mail address");
                                        document.getElementById('email').style.borderColor = "red";      
                                            $("#email").focus();
                                            return false;
                                                }
                                        else{
                                            document.getElementById('email').style.borderColor = "green";
                                        } 
                                        
                                                                               
                                    var creditCardNum=document.getElementById("creditCardNum").value
                                    var visaRegEx = /^(\d{4}[- ]){3}\d{4}|\d{16}$/;
                                        // /^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$/;
                                        // /^4\d{12}\d{3}?$/; 
                                        // /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
                                    if (visaRegEx.test(creditCardNum) === false ){ // Visa validation
                                                alert("Please provide a valid Visa number!"); 
                                                document.getElementById('creditCardNum').style.borderColor = "red";
                                                    $("#creditCardNum").focus();
                                                    return false;
                                                        }
                                                else {
                                                document.getElementById('creditCardNum').style.borderColor = "green";
                                                }
                                        
                                    if(creditCardNum.length<16){
                                                alert('Credit Card Numner is too Short');
                                                document.getElementById('creditCardNum').style.borderColor = "red";
                                                    $("#creditCardNum").focus();
                                                    return false;
                                                        }
                                                else {
                                                document.getElementById('creditCardNum').style.borderColor = "green";
                                                }
                                            
                                             if(creditCardNum.length>19){
                                                alert('Credit Card Numner is too Long');
                                                document.getElementById('creditCardNum').style.borderColor = "red";
                                                 $("#creditCardNum").focus();
                                                    return false;
                                                        }
                                                else {
                                                document.getElementById('creditCardNum').style.borderColor = "green";
                                                }
                 
                                    
                                    var amountvalue = document.forms["myForm"]["amount"].value;
                                    if (amountvalue === null ||  amountvalue === "") {
                                        alert("Please fill in donation amount");
                                        document.getElementById('amount').style.borderColor = "red";     
                                        $("#amount").focus();
                                            return false;
                                                }
                                        else {
                                            document.getElementById('amount').style.borderColor = "green";
                                        }    
                                       
                         
                                    var purchaseDate = document.forms["myForm"]["tbDate"].value;
                                    if (purchaseDate === null ||  purchaseDate === "") {
                                        alert("Please specify date of purchase");
                                        document.getElementById('tbDate').style.borderColor = "red"; 
                                         $("#tbDate").focus();
                                            return false;
                                                }
                                        else {
                                            document.getElementById('tbDate').style.borderColor = "green";
                                        } 
                                        
                                    var tofirstname = document.forms["myForm"]["firstname"].value;
                                    if (tofirstname === null ||  tofirstname === "") {
                                        alert("To: First name must be filled out");
                                        document.getElementById('firstname').style.borderColor = "red";  
                                        $("#firstname").focus();
                                            return false;
                                                }
                                        else {
                                            document.getElementById('firstname').style.borderColor = "green";
                                        } 
                                        
                                    var tosurname = document.forms["myForm"]["surname2"].value;
                                    if (tosurname === null ||  tosurname === "") {
                                        alert("To: Surname must be filled out");
                                        document.getElementById('surname2').style.borderColor = "red";  
                                          $("#surname2").focus();
                                            return false;
                                                }
                                        else {
                                            document.getElementById('surname2').style.borderColor = "green";
                                        } 
                                 
                                        
                                    var radios = document.getElementsByName('browser');
                                    for (var i = 0; i < radios.length;) {
                                            if ((radios[0].checked == false) && (radios[1].checked == false) && (radios[2].checked == false)){
                                            alert('Please choose Tree Type'+ "\n" + "(Select an Image)");
                                                document.getElementById('treeresult').style.borderColor = "red";  
                                                $("#treeresult").focus();
	                                           return false;
                                            }
                                        else  if ((radios[0].checked == true) || (radios[1].checked == true) || (radios[2].checked == true)) {
                                            document.getElementById('treeresult').style.borderColor = "green";
                                            return true;}
                                        }
    
                                                                                                  
                                    }
                                    
            
            //copy

            function copy() {
                            document.getElementById("firstname").value = document.getElementById("fname").value;
                            document.getElementById("surname2").value = document.getElementById("surname").value;
                            }

           function myFunction(browser) {
                            document.getElementById("treeresult").value = browser;
                                }


            function display() {
                            DispWin = window.open('','NewWin', 'toolbar=no,status=no,width=300,height=200')
                            message = "<ul><li><b>FirstName: </b>" + document.myForm.frstname.value;
                            message += "<li><b>Surname: </b>" + document.myForm.surname1.value;
                            message += "<li><b>Email: </b>" + document.myForm.emailaddress.value;
                            message += "<li><b>Donation Amount: € </b>" + document.myForm.donationamount.value;
                            message += "<li><b>Date of Payment: </b>" + document.myForm.PurchaseDate.value;
                            message += "<li><b>Tree Type: </b>" + document.myForm.treename.value;
                            message += "<li><b>Personalised Message: </b>" + document.myForm.message.value + "</ul>";
                            DispWin.document.write(message);
                            }

          
            
         
    
            