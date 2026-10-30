(function(){
'use strict';
var form=document.getElementById('contactForm');
if(!form)return;
var status=document.getElementById('formStatus');
function err(id,msg){var s=form.querySelector('.err[data-for="'+id+'"]');if(s)s.textContent=msg;}
form.addEventListener('submit',function(e){
  e.preventDefault();
  var name=form.name.value.trim(),email=form.email.value.trim(),msg=form.message.value.trim(),ok=true;
  err('name','');err('email','');err('message','');
  if(name.length<2){err('name','Please enter your name.');ok=false;}
  if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){err('email','Please enter a valid email.');ok=false;}
  if(msg.length<10){err('message','Message should be at least 10 characters.');ok=false;}
  if(!ok){status.textContent='';return;}
  // Static-site fallback: opens the visitor's email app. Replace with a form service (Formspree, Netlify Forms) for production.
  var body='Name: '+name+'\nEmail: '+email+'\nPhone: '+form.phone.value.trim()+'\nCourse: '+form.course.value+'\n\n'+msg;
  window.location.href='mailto:info@alihaideracademy.com?subject='+encodeURIComponent('Enquiry from '+name)+'&body='+encodeURIComponent(body);
  status.textContent='Thank you! Your email app should open to send the message.';
  form.reset();
});
})();
