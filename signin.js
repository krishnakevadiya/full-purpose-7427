document.querySelector("form").addEventListener("submit",kk)
let userdata=JSON.parse(localStorage.getItem("datalist"))||{};
function kk(event){
    event.preventDefault();
    let obj={
        name:document.querySelector("#name").value,
        Email:document.querySelector("#email").value,
        Password:document.querySelector("#password").value
       
        }
        
        localStorage.setItem("datalist",JSON.stringify(obj));
    
    

}