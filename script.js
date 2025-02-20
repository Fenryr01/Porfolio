document.addEventListener("DOMContentLoaded", () => {
    // Botón de menú móvil
    document.querySelector('.mobile-menu-btn')?.addEventListener('click', () => {
        const sidebar = document.querySelector('.sidebar');
        const menuBtn = document.querySelector('.mobile-menu-btn');
        sidebar?.classList.toggle('active');
        menuBtn?.classList.toggle('active'); 
    });

    // Navegación suave
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            document.querySelector(targetId)?.scrollIntoView({
                behavior: 'smooth'
            });

            if (window.innerWidth < 768) {
                document.querySelector('.sidebar')?.classList.remove('active');
                document.querySelector('.mobile-menu-btn')?.classList.remove('active');
            }
        });
    });

    // Intersection Observer para animaciones
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });

    // Cerrar sidebar al hacer clic fuera
    document.addEventListener('click', (event) => {
        const sidebar = document.querySelector('.sidebar');
        const mobileMenuBtn = document.querySelector('.mobile-menu-btn');

        if (sidebar && mobileMenuBtn && !sidebar.contains(event.target) && !mobileMenuBtn.contains(event.target)) {
            sidebar.classList.remove('active');
            mobileMenuBtn.classList.remove('active'); 
        }
    });


    const text = "Bienvenido a mi porfolio como desarrollador";
    let i = 0;
    let isDeleting = false; 

    function typeWriter() {
        let element = document.getElementById("typing");

        if (!isDeleting) {
            element.innerHTML = text.substring(0, i);
            i++;
            if (i > text.length) {
                isDeleting = true;
                setTimeout(typeWriter, 1000); 
                return;
            }
        } else {
            element.innerHTML = text.substring(0, i);
            i--;
            if (i < 0) {
                isDeleting = false;
            }
        }

        setTimeout(typeWriter, isDeleting ? 50 : 100);
    }

    window.onload = typeWriter;
});
