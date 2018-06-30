
// Close your function here

// Register your form to "click" event.

let ui = document.querySelector("#email");
let fullname = document.getElementById("fname")
let msg = document.getElementById("message");
let btn = document.querySelector("#button");
let form = document.querySelector("form");
let emailFormat = /^\w+[\w-\.]*\@\w+((-\w+)|(\w*))\.[a-z]{2,3}$/;
function handleForm() {
    
    // clear the console
    console.clear();
    
    // collect your error messages in the array
    let errors = [];
    
    // collect user input into object
    let data = {};
    
    
    // Validate full name

     if (fullname.value) {
        data.fnameValue = fullname.value;
         } else {
             errors.push("Enter your full name");
         }
        
    
    // Email validation
    if (ui.value) {
        
        if (emailFormat.test(ui.value)) {
            data.emailValue = ui.value;
        } else {
            errors.push("Email is invalid!");
        }
        
    } else {
        errors.push("Email is empty!");
    }
    
    
     // Message full name

     if (msg.value) {
         data.messageValue = msg.value;
     } else {
         errors.push("Enter your message");
     }
    

    
    
    
    // create feedback
    if (errors.length > 0) {
        console.log(errors);
    } else {
        console.log(data);
        form.reset();
    }
}

btn.addEventListener("click", handleForm);
