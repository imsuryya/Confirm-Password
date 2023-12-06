let container=document.querySelector(".container");
let pwd=document.querySelector("#password-box"); 
let cpwd=document.querySelector("#confirm-box"); 
let message=document.querySelector(".message");
let submitbutton=document.querySelector(".submit-button");

submitbutton.addEventListener("click",()=>{
    let password=pwd.value;
    let cpassword=cpwd.value;
    if(password!=0)
    {
        if(cpassword!=0)
        {
            if(password==cpassword)
            {
                message.innerHTML="Done!";
            }
            if(password!=cpassword)
            {
                message.innerHTML="The Password Is Incorrect";
                message.style.color="red";
            }

        }
        else
        {
            message.innerHTML="Enter Confirm Password";
            message.style.color="green";
        }


    }
    else{
        message.innerHTML="Enter Your Password";
        message.style.color="green";
    }
    if(password.length>=6)
    {

    }
    else{
        message.innerHTML="Password should contain 6 characters";
    }

});
