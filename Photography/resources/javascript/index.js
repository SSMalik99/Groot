//alert("hey i'm Groot");
var email_filter=/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9_\.\-])+\.)+([a-zA-Z0-9]{3,6})+$/;
function show_user(){
	var user=document.getElementById('name_taker_container').value;
	alert("welcome "+user);
}
function login_validate(){
	var user_name,user_password;
	user_name=document.getElementById("user_id").value;
	user_password=document.getElementById("user_key").value;
	if ((user_name=="" || user_name== null) && (user_password=="" || user_password==null)){
		alert("please filled the mandatory fields");
	}
	else {
		alert("we extremely apologies, but account login is still under process.\
		You can check other feachers of our website click on the logo");
	}
}
function register_form_validation(){
	var user_name,user_email,user_mobile;
	user_name=document.getElementById('register_form_user').value;
	user_email=document.getElementById("register_form_email").value;
	user_mobile=document.getElementById("register_form_mobile").value;
	if ((user_name==""|| user_name==null)&& (user_email==""||user_email==null)&&(user_mobile==""||user_mobile==null)) {
		alert("Enter detail carefully and remember all fields are mandatory ");
	}
	if (isNaN(user_mobile)){
		alert("Mobile number should be a number");
	}
	if (user_mobile.length===11) {
		alert("Mobile number should  be atleast ten digit");
	}
	if (!email_filter.test(user_email)) {
		alert("Please provide valid email id.");
	}
	else{
		alert('Applied successfully, please wait for our response');
	}
}
function feedback_validation(){
	var user_name=document.getElementById("feedback_user").value;
	if (user_name=="" || user_name==null) {
		alert("User name is mandatory to provide your feedback.");
	}
	else {
		alert("Your feedback is saved. Thanks for your feedback.");
	}
}
function newsletter_user() {
	var user_email=document.getElementById("newsletter_email").value;
	if (!email_filter.test(user_email)) {
		alert("Please provide valid email id.");
	} 
	else {
		alert('Thanks to subscribe our newsletter.')
	}
}

