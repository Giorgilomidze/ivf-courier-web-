(function(){
  // sticky nav shadow
  var nav=document.getElementById('nav');
  var onScroll=function(){nav.classList.toggle('scrolled',window.scrollY>8);};
  onScroll();window.addEventListener('scroll',onScroll,{passive:true});

  // mobile menu
  var burger=document.getElementById('burger'),links=document.getElementById('navlinks');
  burger&&burger.addEventListener('click',function(){links.classList.toggle('mobile-open');});
  links&&links.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){links.classList.remove('mobile-open');});});

  // language switch (visual only)
  document.querySelectorAll('.lang button').forEach(function(b){
    b.addEventListener('click',function(){
      this.parentNode.querySelectorAll('button').forEach(function(x){x.classList.remove('on');});
      this.classList.add('on');
    });
  });

  // FAQ accordion
  document.querySelectorAll('.faq-q').forEach(function(q){
    q.addEventListener('click',function(){
      var item=q.parentNode,a=item.querySelector('.faq-a'),open=item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach(function(i){
        i.classList.remove('open');i.querySelector('.faq-a').style.maxHeight=null;i.querySelector('.faq-q').setAttribute('aria-expanded','false');
      });
      if(!open){item.classList.add('open');a.style.maxHeight=a.scrollHeight+'px';q.setAttribute('aria-expanded','true');}
    });
  });

  // form (demo — no real submit)
  var form=document.getElementById('leadForm');
  form&&form.addEventListener('submit',function(e){
    e.preventDefault();
    var name=form.name.value.trim(),email=form.email.value.trim();
    if(!name||!email){form.reportValidity&&form.reportValidity();return;}
    document.getElementById('formOk').style.display='block';
    form.querySelector('button[type=submit]').style.display='none';
  });

  // scroll reveal
  var io=new IntersectionObserver(function(entries){
    entries.forEach(function(en){if(en.isIntersecting){en.target.classList.add('in');io.unobserve(en.target);}});
  },{threshold:.12});
  document.querySelectorAll('.reveal').forEach(function(el){io.observe(el);});
})();
