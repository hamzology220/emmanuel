const teachersData={
    name:"hamza",
    password:"hamzology",
}
function teachers(){
    event.preventDefault();
    const teach=document.querySelector("#teach-log")
    const user=teach.user.value;
    const psd=teach.password.value;
    // console.log(user, psd)
    
    if(user=="" || psd==""){
        alert("Form Data cannot be empty");
        return
    }
    if(user !== teachersData.name || psd !== teachersData.password){
        alert("information does not match");
        return
    }
    localStorage.setItem("name", teachersData.name);
    localStorage.setItem("password", teachersData.password);
   
    window.location.replace("dashboard.html")
}

document.querySelector("#teach-log").addEventListener('submit',teachers)
