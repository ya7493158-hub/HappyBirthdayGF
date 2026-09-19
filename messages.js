const messages=[
['يا حبي أقسم بالله انا معرف كيف اشرحلك انو انتي شي لو مو موجود بيومي والله العظيم اكون مهزوز وزعلان😭😭🤍🤍🤍','photo1.jpg'],
['انتي كل شي غيرتيني والله حتي في مواقفي مع الناس في تعاملي مع الأشخاص عموما بلجيم مع اهلي انتي عطيتيني ثقة انو انتي معاي وفيه واحدة تحبني زي هيك لازم ابدا ما اخون الثقة اللي حاطاها فيني مع اني حمار اوقات ال overthinking يوديني بعيد بس كله والله خوف اني اخسرك، يوميي','photo2.webp'],
['لو صارلك شي او سحبتي والله العظيم بيجيني اكتئاب انا مابيه يرجعلي🥺🥲','photo3.jpg'],
['الله يعينك يقلبي انا معك في أي وقت🤍','photo4.jpg']];
let n=0;const card=document.getElementById('card'),counter=document.getElementById('counter'),btn=document.getElementById('next');function show(){const [msg,img]=messages[n];card.innerHTML='<div class="message">'+msg+'</div><img class="memory" src="images/'+img+'">';counter.textContent=(n+1)+' / '+messages.length;gsap.from('#card',{opacity:0,y:35,duration:.55});if(n===messages.length-1)btn.textContent='كمل 🤍';n++}show();btn.onclick=()=>{if(n<messages.length)show();else location.href='memories.html'};
