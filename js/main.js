(function(){
'use strict';
document.documentElement.classList.add('js');
var btn=document.getElementById('menuBtn'),nav=document.getElementById('navLinks');
if(btn&&nav){
  btn.addEventListener('click',function(){var o=nav.classList.toggle('open');btn.setAttribute('aria-expanded',o);});
  nav.addEventListener('click',function(e){if(e.target.tagName==='A'){nav.classList.remove('open');btn.setAttribute('aria-expanded',false);}});
}
var y=document.getElementById('year');if(y)y.textContent=new Date().getFullYear();
var top=document.getElementById('toTop');
if(top){
  window.addEventListener('scroll',function(){top.classList.toggle('show',window.scrollY>400);},{passive:true});
  top.addEventListener('click',function(){window.scrollTo({top:0,behavior:'smooth'});});
}
var els=document.querySelectorAll('.reveal');
if('IntersectionObserver' in window){
  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target);}});},{threshold:.12});
  els.forEach(function(el){io.observe(el);});
}else{els.forEach(function(el){el.classList.add('visible');});}
// Gallery lightbox
var g=document.getElementById('gallery'),lb=document.getElementById('lightbox');
if(g&&lb){
  var img=document.getElementById('lbImg');
  var close=function(){lb.hidden=true;};
  g.addEventListener('click',function(e){var i=e.target.closest('img');if(i){img.src=i.src;img.alt=i.alt;lb.hidden=false;}});
  lb.addEventListener('click',function(e){if(e.target!==img)close();});
  document.addEventListener('keydown',function(e){if(e.key==='Escape')close();});
}
})();
