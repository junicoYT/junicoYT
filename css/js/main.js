const noticias = [
    {
        id: 1,
        categoria: 'comunicado',
        titulo: 'Comunicado Oficial - Reinicio de Clases',
        descripcion: 'Las clases presenciales reanudan el próximo lunes. Se solicita puntualidad y uso obligatorio del uniforme.',
        fecha: '25 de Noviembre, 2025'
    },
    {
        id: 2,
        categoria: 'examenes',
        titulo: 'Fechas de Exámenes Finales',
        descripcion: 'Los exámenes finales se realizarán entre el 1 y 15 de Diciembre. Consulta tu horario en la plataforma.',
        fecha: '24 de Noviembre, 2025'
    },
    {
        id: 3,
        categoria: 'evento',
        titulo: 'Acto de Colacion',
        descripcion: 'El viernes 20 de Diciembre se realizará el acto de colacion de los estudiantes de 7to año.',
        fecha: '19 de Noviembre, 2025'
    },
    {
        id: 4,
        categoria: 'actividad',
        titulo: 'Jornada de Convivencia Escolar',
        descripcion: 'Se invita a toda la comunidad educativa a participar en las actividades deportivas y recreativas.',
        fecha: '22 de Noviembre, 2025'
    },
    {
        id: 5,
        categoria: 'congreso',
        titulo: 'Congreso Nacional de Tecnología e Innovación',
        descripcion: 'Participaremos como expositores en el congreso nacional. ¡Felicidades a nuestros estudiantes!',
        fecha: '21 de Noviembre, 2025'
    },
    {
        id: 6,
        categoria: 'comunicado',
        titulo: 'Recordatorio - Pago de Cuotas',
        descripcion: 'Se solicita regularizar el pago de cuotas educativas antes del 30 de Noviembre.',
        fecha: '20 de Noviembre, 2025'
    },
    {
        id: 7,
        categoria: 'actividad',
        titulo: 'Charla sobre Programación Web',
        descripcion: 'Especialista en desarrollo web dictará una charla gratuita el próximo viernes a las 15hs.',
        fecha: '19 de Noviembre, 2025'
    },
    {
        id: 8,
        categoria: 'congreso',
        titulo: 'Concurso de Electrónica 2025',
        descripcion: 'Invitamos a los estudiantes a participar del concurso provincial de electrónica. Inscripciones abiertas.',
        fecha: '18 de Noviembre, 2025'
    }
];

function renderNews(category = 'todos') {
    const newsGrid = document.getElementById('news-grid');
    newsGrid.innerHTML = '';

    const newsFiltradas = category === 'todos' ? noticias : noticias.filter(n => n.categoria === category);

    const categoriaIcons = {
        comunicado: 'fas fa-bullhorn',
        examenes: 'fas fa-pen',
        evento: 'fas fa-calendar-alt',
        actividad: 'fas fa-star',
        congreso: 'fas fa-trophy'
    };

    const categoriaNombres = {
        comunicado: 'Comunicado',
        examenes: 'Exámenes',
        evento: 'Evento',
        actividad: 'Actividad',
        congreso: 'Congreso/Charla'
    };

    newsFiltradas.forEach(noticia => {
        const card = document.createElement('div');
        card.className = 'news-card';
        card.innerHTML = `
            <span class="news-badge"><i class="${categoriaIcons[noticia.categoria]}"></i> ${categoriaNombres[noticia.categoria]}</span>
            <h3>${noticia.titulo}</h3>
            <p>${noticia.descripcion}</p>
            <p class="news-date"><i class="fas fa-calendar"></i> ${noticia.fecha}</p>
        `;
        newsGrid.appendChild(card);
    });
}

function filterNews(category) {
    const buttons = document.querySelectorAll('.news-filters button');
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    renderNews(category);
}

function showSection(sectionId, button) {
    
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => section.classList.remove('active'));

    
    document.getElementById(sectionId).classList.add('active');

    
    const buttons = document.querySelectorAll('.nav-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

   
    if (sectionId === 'noticias') {
        renderNews();
    }
}

function showHistory(section) {
    let text = "";

    if (section === "origen") {
        text = "El IPET N°247 fue fundado en 1919 como parte del proyecto nacional de expansión de la educación técnica en Argentina. Su objetivo era formar jóvenes con habilidades técnicas para acompañar el crecimiento industrial del país.";
    }
    else if (section === "fundador") {
        text = "El instituto lleva el nombre del Ingeniero Carlos A. Cassaffousth, un pionero de la ingeniería argentina, conocido por su labor en obras hidráulicas y su compromiso con el desarrollo regional.";
    }
    else if (section === "evolucion") {
        text = "A lo largo de las décadas, el colegio incorporó nuevas especialidades, talleres, laboratorios y programas educativos que se adaptaron a los cambios tecnológicos y a las necesidades del mercado laboral.";
    }
    else if (section === "actualidad") {
        text = "Hoy el IPET N°247 continúa formando técnicos competentes, con una fuerte orientación hacia la programación, electrónica, automatización y tecnología aplicada.";
    }

    document.getElementById("history-text").innerHTML = text;
}


function openLogin() {
    document.getElementById("loginModal").classList.add("active");
}

function closeLogin() {
    document.getElementById("loginModal").classList.remove("active");
}

function handleLogin(event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    
    if (email && password) {
        alert(`¡Bienvenido ${email}!\n\nNota: Este es un formulario de demostración.`);
        document.getElementById("email").value = "";
        document.getElementById("password").value = "";
        closeLogin();
    }
}


function toggleAccount(event) {
    event.stopPropagation();
    const panel = document.getElementById('accountPanel');
    if (!panel) return;
    const opening = !panel.classList.contains('active');
    panel.classList.toggle('active');
   
    if (opening) {
        
        const firstBtn = panel.querySelector('.panel-tabs button');
        if (firstBtn) {
            showAccountPanelTab({ currentTarget: firstBtn }, firstBtn.getAttribute('data-tab'));
        }
    }
}

function closeAccount() {
    const panel = document.getElementById('accountPanel');
    if (panel && panel.classList.contains('active')) panel.classList.remove('active');
}

function viewProfile() {
    alert('Abrir perfil (simulado)');
    closeAccount();
}

function logout() {
    alert('Cerrar sesión (simulado)');
    closeAccount();
}


window.onclick = function(event) {
    const modal = document.getElementById("loginModal");
    const panel = document.getElementById('accountPanel');


    if (modal && event.target == modal) {
        closeLogin();
    }


    if (panel && panel.classList.contains('active')) {
        const accountBtn = document.querySelector('.account-btn');
        if (!panel.contains(event.target) && !(accountBtn && accountBtn.contains(event.target))) {
            panel.classList.remove('active');
        }
    }
}


document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.download-link').forEach(a => {
        if (a.getAttribute('href') === '#') {
            a.addEventListener('click', (e) => {
                e.preventDefault();
                alert('Recurso no disponible localmente. Sube el archivo a la carpeta del sitio y actualiza el enlace.');
            });
        }
    });
});


let galleryImages = [];
let currentImageIndex = 0;

function buildGalleryIndex() {
    galleryImages = Array.from(document.querySelectorAll('.gallery-item img')).map(img => img.src);
}

function openImage(e) {
    let item = null;
    if (e && e.currentTarget && e.currentTarget.classList && e.currentTarget.classList.contains('gallery-item')) {
        item = e.currentTarget;
    } else if (e && e.target) {
        item = e.target.closest ? e.target.closest('.gallery-item') : null;
    }
    if (!item) return;
    buildGalleryIndex();
    const imgEl = item.querySelector('img');
    currentImageIndex = galleryImages.indexOf(imgEl.src);
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('imageModalImg');
    if (modal && modalImg) {
        modalImg.src = galleryImages[currentImageIndex] || imgEl.src;
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeImageModal(e) {

    if (e && e.type === 'keydown') {
        if (e.key === 'Escape') {
            const modal = document.getElementById('imageModal');
            if (modal) {
                modal.classList.remove('active');
                document.body.style.overflow = '';
            }
        }
        return;
    }
    if (e && e.target && e.target.id !== 'imageModal') return;
    const modal = document.getElementById('imageModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

function prevImage(e) {
    e.stopPropagation();
    if (!galleryImages.length) buildGalleryIndex();
    currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
    const modalImg = document.getElementById('imageModalImg');
    if (modalImg) modalImg.src = galleryImages[currentImageIndex];
}

function nextImage(e) {
    e.stopPropagation();
    if (!galleryImages.length) buildGalleryIndex();
    currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
    const modalImg = document.getElementById('imageModalImg');
    if (modalImg) modalImg.src = galleryImages[currentImageIndex];
}


function toggleFaq(el) {
    const ans = el.nextElementSibling;
    if (ans) ans.classList.toggle('active');
}


function showPanelTab(evt, tab) {

    const tabs = evt.currentTarget.parentNode.querySelectorAll('button');
    tabs.forEach(b => b.classList.remove('active'));
    evt.currentTarget.classList.add('active');


    document.querySelectorAll('#panelContent .panel-pane').forEach(p => p.style.display = 'none');
    const pane = document.getElementById('pane-' + tab);
    if (pane) pane.style.display = 'block';
}


function showAccountPanelTab(evt, tab) {

    const container = evt.currentTarget ? evt.currentTarget.parentNode : null;
    if (container) {
        const tabs = container.querySelectorAll('button');
        tabs.forEach(b => b.classList.remove('active'));
        if (evt.currentTarget) evt.currentTarget.classList.add('active');
    }


    document.querySelectorAll('#accountPanelContent .panel-pane').forEach(p => p.style.display = 'none');
    const pane = document.getElementById('account-pane-' + tab);
    if (pane) pane.style.display = 'block';
}


document.addEventListener('DOMContentLoaded', () => {

    document.querySelectorAll('.gallery-item').forEach(item => {
        item.addEventListener('click', openImage);
    });


    document.addEventListener('keydown', (e) => {
        const modal = document.getElementById('imageModal');
        if (!modal || !modal.classList.contains('active')) return;
        if (e.key === 'Escape') closeImageModal(e);
        if (e.key === 'ArrowLeft') prevImage(e);
        if (e.key === 'ArrowRight') nextImage(e);
    });
});

function toggleSpecialty(btn) {
    const card = btn.closest('.specialty-card');
    if (!card) return;
    const detail = card.querySelector('.specialty-detail');
    if (!detail) return;
    const open = detail.classList.toggle('open');
    btn.textContent = open ? 'Cerrar' : 'Más info';
}


window.addEventListener('load', () => {
    renderNews();
});
