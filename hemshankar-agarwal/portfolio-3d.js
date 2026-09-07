const heroShell = document.querySelector('.hero-shell');
const root = document.documentElement;
const revealEls = document.querySelectorAll('.reveal');

function clamp(value,min,max){return Math.min(max,Math.max(min,value));}

function updateHero(){
  const rect = heroShell.getBoundingClientRect();
  const total = heroShell.offsetHeight - window.innerHeight;
  const passed = clamp(-rect.top,0,total);
  const p = total > 0 ? passed / total : 0;
  root.style.setProperty('--hero-progress', p.toFixed(4));
  root.style.setProperty('--hero-rx', `${-10 + p * 18}deg`);
  root.style.setProperty('--hero-ry', `${22 - p * 44}deg`);
  root.style.setProperty('--hero-y', `${p * 36 - 8}px`);
  root.style.setProperty('--hero-z', `${p * 90}px`);
}

updateHero();
window.addEventListener('scroll', updateHero, {passive:true});
window.addEventListener('resize', updateHero);

const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){entry.target.classList.add('in');}
  })
},{threshold:.14});
revealEls.forEach(el=>observer.observe(el));
