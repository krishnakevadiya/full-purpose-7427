document.querySelector("form").addEventListener("submit",check);
function check(event){
 event.preventDefault();
 let email =document.querySelector("#email").value;
 let password =document.querySelector("#password").value;
 let userdata=JSON.parse(localStorage.getItem("datalist"));
 
 if(userdata.Email==email&&userdata.Password==password){
   alert("login successful")
 

 }else{
   alert("details not match")
 }

}