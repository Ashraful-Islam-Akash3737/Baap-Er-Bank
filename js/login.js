// step 1: add click event handler with the submit button
document.getElementById('btn-submit').addEventListener('click', function(){


    // step 2: get the email address inside the email input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;


    // step 3: get password
    const passwordField = document.getElementById('user-password'); 
    const password = passwordField.value;
    console.log(email, password);


    // DENGER: DO NOT VERIFY EMAIL PASSWORD on the client side like this
    // step 4: verify email and password
    if(email === "akash@gmail.com" && password === "akash"){
        window.location.href = "bank.html";
    }
    else{
        alert("wrong information");
        // if(email !== "ashrafulislamakash@gmail.com"){
        //     alert("invalid email");
        // }
        // if(password !== "akash"){
        //     alert("invalid password");
        // }
        
    }

})