// main.js - interactividad del sitio
document.addEventListener('DOMContentLoaded', () => {

  // datos de ejemplo (noticias, especialidades, galería)
  const noticias = [
    { id:1, cat:'comunicado', title:'Comunicado: reinicio de clases', desc:'Las clases presenciales se reanudan el lunes.', date:'25 Nov 2025' },
    { id:2, cat:'examenes', title:'Fechas de exámenes finales', desc:'Exámenes entre 1 y 15 de diciembre.', date:'24 Nov 2025' },
    { id:3, cat:'evento', title:'Acto de colación', desc:'Acto de colación el 20 de diciembre.', date:'19 Nov 2025' }
  ];

  const specialties = [
    { icon:'fas fa-code', title:'Programación', text:'Lógica, algoritmos, bases de datos y desarrollo.'},
    { icon:'fas fa-microchip', title:'Electrónica', text:'Circuitos, microcontroladores y laboratorios.'},
    { icon:'fas fa-car', title:'Automotores', text:'Mecánica y diagnóstico automotriz.'},
    { icon:'fas fa-tools', title:'Mecánica', text:'Mantenimiento y operación de maquinaria.'}
  ];

  const galleryImgs = [
    'img/gallery-1.jpg','img/gallery-2.jpg','img/gallery-3.jpg','img/gallery-4.jpg'
  ];

  const newsGrid = document.getElementById('newsGrid');
  const specialtiesContainer = document.getElementById('specialties');
  const gallery = document.getElementById('gallery');

  // render noticias
  function renderNews(cat='todos'){
    newsGrid.innerHTML = '';
    const items = cat === 'todos' ? noticias : noticias.filter(n=>n.cat===cat);
    items.forEach(n=>{
      const div = document.createElement('article');
      div.className = 'news-card';
      div.innerHTML = `
        <span class="news-badge">${n.cat.toUpperCase()}</span>
        <h3>${n.title}</h3>
        <p>${n.desc}</p>
        <small class="muted">${n.date}</small>
      `;
      newsGrid.appendChild(div);
    });
  }

  // filtros noticias
  document.querySelectorAll('.filter').forEach(btn=>{
    btn.addEventListener('click', (e)=>{
      document.querySelectorAll('.filter').forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      renderNews(btn.dataset.cat);
      document.querySelectorAll('.nav-btn').forEach(nb=>nb.classList.remove('active'));
      document.querySelector('[data-section="noticias"]').classList.add('active');
      togglePanel('noticias');
    });
  });

  // render especialidades
  specialties.forEach(s=>{
    const el = document.createElement('div');
    el.className = 'specialty';
    el.innerHTML = `<i class="${s.icon} fa-2x" aria-hidden="true"></i><h4>${s.title}</h4><p>${s.text}</p>`;
    specialtiesContainer.appendChild(el);
  });

  // gallery
  galleryImgs.forEach(src=>{
    const div = document.createElement('div');
    div.innerHTML = `<img src="${src}" alt="Galería">`;
    gallery.appendChild(div);
  });

  // navigation entre secciones
  document.querySelectorAll('.nav-btn').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      document.querySelectorAll('.nav-btn').forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      togglePanel(btn.dataset.section);
    });
  });

  // hero CTAs
  document.querySelectorAll('[data-section]').forEach(b=>{
    b.addEventListener('click', ()=> {
      const s = b.dataset.section;
      // activar pestaña correcta
      document.querySelectorAll('.nav-btn').forEach(nb=>nb.classList.remove('active'));
      const navTarget = document.querySelector(`[data-section="${s}"]`);
      if(navTarget) navTarget.classList.add('active');
      togglePanel(s);
      window.scrollTo({top:120,behavior:'smooth'});
    });
  });

  // toggle panel visible
  function togglePanel(id){
    document.querySelectorAll('.panel').forEach(p=>p.classList.remove('active'));
    const el = document.getElementById(id);
    if(el) el.classList.add('active');
  }

  // history tabs
  document.querySelectorAll('.tab').forEach(t=>{
    t.addEventListener('click', (e)=>{
      document.querySelectorAll('.tab').forEach(tb=>tb.classList.remove('active'));
      t.classList.add('active');
      const key = t.dataset.tab;
      const contents = {
        origen: 'El IPET N°247 fue fundado en 1919 como parte del proyecto nacional de expansión de la educación técnica.',
        fundador: 'Lleva el nombre del Ing. Carlos A. Cassaffousth, destacado profesional regional.',
        evolucion: 'A lo largo de los años se incluyeron nuevas especialidades y laboratorios.',
        actualidad: 'Actualmente se destaca por formación en programación, electrónica y mecánica.'
      };
      document.getElementById('historyText').innerText = contents[key] || '';
    });
  });

  // modal account
  const accountBtn = document.getElementById('accountBtn');
  const accountPanel = document.getElementById('accountPanel');
  const closeAccount = document.getElementById('closeAccount');
  accountBtn.addEventListener('click', ()=> accountPanel.classList.add('active'));
  closeAccount.addEventListener('click', ()=> accountPanel.classList.remove('active'));
  accountPanel.addEventListener('click', (e)=> { if(e.target===accountPanel) accountPanel.classList.remove('active') });

  // dark mode
  const darkToggle = document.getElementById('darkToggle');
  const root = document.documentElement;
  const saved = localStorage.getItem('site-dark');
  if(saved === '1') root.classList.add('dark');
  darkToggle.addEventListener('click', ()=> {
    root.classList.toggle('dark');
    localStorage.setItem('site-dark', root.classList.contains('dark') ? '1' : '0');
  });

  // inicializar
  renderNews();
  // cargar placeholders si no hay imágenes reales
  // (dejá las rutas en img/ para que GitHub Pages las sirva)
});
