(function(){
'use strict';
var root=document.getElementById('slider');
if(!root)return;
var track=root.querySelector('.slides'),n=track.children.length,i=0,timer;
var dots=document.getElementById('dots');
for(var k=0;k<n;k++){(function(k){
  var b=document.createElement('button');b.setAttribute('aria-label','Slide '+(k+1));
  b.addEventListener('click',function(){go(k);restart();});dots.appendChild(b);
})(k);}
function go(x){
  i=(x+n)%n;track.style.transform='translateX(-'+i*100+'%)';
  Array.prototype.forEach.call(dots.children,function(d,j){d.classList.toggle('on',j===i);});
}
function restart(){clearInterval(timer);timer=setInterval(function(){go(i+1);},5000);}
document.getElementById('prev').addEventListener('click',function(){go(i-1);restart();});
document.getElementById('next').addEventListener('click',function(){go(i+1);restart();});
root.addEventListener('mouseenter',function(){clearInterval(timer);});
root.addEventListener('mouseleave',restart);
go(0);restart();
})();
