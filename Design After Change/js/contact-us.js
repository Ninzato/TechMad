var form = document.getElementById('contactForm');

form.onsubmit = function(e) {
  var frstName  = document.getElementById('fname');
  if (!frstName.value){
    alert('fill the input first name');
    frstName.focus();
    return false;
  }
  var lstName  = document.getElementById('lname');
  if (!lstName.value){
    alert('fill the input last name');
    lstname.focus();
    return false;
  }
  var userEmail  = document.getElementById('mail');
  if (!userEmail.value){
    alert('fill the input Email');
    userEmail.focus();
    return false;
  }
  var userSubject  = document.getElementById('subj');
  if (!userSubject.value){
    alert('fill the input Subject');
    userSubject.focus();
    return false;
  }
  var userMessage  = document.getElementById('msg');
  if (!userMessage.value){
    alert('fill the input Message');
    userMessage.focus();
    return false;
  }
  else {
    e.preventDefault();
      console.log(form.firstName.value);
      console.log(form.lastName.value);
      console.log(form.Email.value);
      console.log(form.subject.value);
      console.log(form.messages.value);
      form.reset();
      alert("submitted !");
      return true;
    }
  }
