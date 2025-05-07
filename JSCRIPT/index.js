function indexpage(){

    classes=document.getElementById('class').value;
    session=document.getElementById('session').value;
    term=document.getElementById('term').value;
    type=document.getElementById('type').value;
    subject=document.getElementById('subject').value;
    adm=document.getElementById('adm').value;
    console.log(classes);
    console.log(session);
    console.log(term);
    console.log(type);
    console.log(subject);
    console.log(adm);
}
  document.addEventListener('click',indexpage)