function section1(){
    let a=document.getElementById('sect1');
    a.style.display="none";
    
    let b=document.getElementById('sect2');
    b.style.display="block";
   
    let c=document.getElementById('sect3');
    c.style.display="none";
}

function section2(){
    let a=document.getElementById('sect1');
    a.style.display="block";
    let b=document.getElementById('sect2');
    b.style.display="none";
    let c=document.getElementById('sect3');
    c.style.display="none";
}

function section3(){
    let c=document.getElementById('sect3');
    c.style.display="block";
    let b=document.getElementById('sect2');
    b.style.display="none";
    let a=document.getElementById('sect1');
    a.style.display="none";
}
function section4(){
    let d=document.getElementById('sect4');
    d.style.display="block";
    let c=document.getElementById('sect3');
    c.style.display="none";
    let b=document.getElementById('sect2');
    b.style.display="none";
    let a=document.getElementById('sect1');
    a.style.display="none";
}
function section6(){
    let g=document.getElementById('sect6');
    g.style.display="block";
    let d=document.getElementById('sect4');
    d.style.display="none";
    let c=document.getElementById('sect3');
    c.style.display="none";
    let b=document.getElementById('sect2');
    b.style.display="none";
    let a=document.getElementById('sect1');
    a.style.display="none";
}

let name=localStorage.getItem("name");
let password=localStorage.getItem("password");


if(!name || !password){
    // redirect to login page
        window.location.replace("teacher.html");
    }
   
    
    // function to logout user
    function logout(){
        // localStorage.removeItem("name")
        // localStorage.removeItem("email")
        // localStorage.removeItem("phone")
        localStorage.clear()
        window.location="teacher.html"
    }
    document.querySelector("#but").addEventListener("click",logout)




