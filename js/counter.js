(function(){
'use strict';
var items=document.querySelectorAll('.counter');
if(!items.length)return;
function run(el){
  var target=+el.dataset.target,suffix=el.dataset.suffix||'',dur=1600,start=null;
  function step(t){
    if(!start)start=t;
    var p=Math.min((t-start)/dur,1);
    el.textContent=Math.floor(p*target).toLocaleString()+(p===1?suffix:'');
    if(p<1)requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}
if('IntersectionObserver' in window){
  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){run(e.target);io.unobserve(e.target);}});},{threshold:.5});
  items.forEach(function(el){io.observe(el);});
}else{items.forEach(run);}
})();
