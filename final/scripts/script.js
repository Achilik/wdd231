document.addEventListener("DOMContentLoaded", () => {

const admissionForm = document.getElementById("admissionForm");

if(admissionForm){

admissionForm.addEventListener("submit", function(e){

e.preventDefault();

alert("Application submitted successfully!");

admissionForm.reset();

});

}

});