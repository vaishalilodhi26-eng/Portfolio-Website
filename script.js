
function handleSubmit() {
                            let name = document.getElementById("name").value;
                            let email = document.getElementById("email").value;
                            let message = document.getElementById("message").value;

                            alert("Thank you " + name + "! Your message has been sent.");

                            return false; 
                        }
                               
            var typed = new Typed('#element', {
                strings: ['Web Developer', 'Wed Designer', 'Data Analyst'],
                typeSpeed: 55,
            }
        );
 function validateForm() {
        let name = document.getElementById("name").value.trim();
         let mobile = document.getElementById("mobile").value.trim();
         let email= document.getElementById("email").value.trim();
          let message = document.getElementById("message").value.trim();
          console.log(mobile);

           if(mobile.length !== 10){
              alert("Mobile number should be at exactly 10 digits!");
              return false;
             }

          if(name ==="" || email==="" || message==="" || mobile===""){
            alert("Please fill all fields!");
            return false;
          }
       
    return true;
    }       