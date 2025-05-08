// Attendre que le document soit chargé
document.addEventListener('DOMContentLoaded', function() {
    // Menu mobile
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            
            // Change l'icône du menu
            const icon = menuToggle.querySelector('i');
            if (icon.classList.contains('fa-bars')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
        
        // Fermer le menu lors du clic sur un lien
        const navLinks = document.querySelectorAll('.nav-menu a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                const icon = menuToggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            });
        });
    }
    
    // Année actuelle pour le footer
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
    
    // Animation des sections au scroll
    function animateSections() {
        const sections = document.querySelectorAll('section');
        
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (sectionTop < windowHeight * 0.75) {
                section.classList.add('fade-in');
            }
        });
    }
    
    // Animer les sections au chargement initial
    animateSections();
    
    // Animer les sections au scroll
    window.addEventListener('scroll', animateSections);
    
    // Filtrage des projets (sur la page projets)
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    if (filterBtns.length > 0 && projectCards.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                // Reset active class
                filterBtns.forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                
                const filter = this.getAttribute('data-filter');
                
                projectCards.forEach(card => {
                    if (filter === 'all') {
                        card.style.display = 'block';
                    } else {
                        const category = card.getAttribute('data-category');
                        if (category === filter) {
                            card.style.display = 'block';
                        } else {
                            card.style.display = 'none';
                        }
                    }
                });
            });
        });
    }
    
    // Gérer le bouton "Load More" pour les projets
    const loadMoreBtn = document.getElementById('load-more-btn');
    if (loadMoreBtn) {
        // Cette fonction simule le chargement d'autres projets
        // Dans une vraie application, vous pourriez charger plus de projets depuis une API
        loadMoreBtn.addEventListener('click', function() {
            // Simulation d'un temps de chargement
            loadMoreBtn.textContent = 'Chargement...';
            
            setTimeout(() => {
                // Vous pourriez ajouter du code ici pour charger de nouveaux projets
                // Pour cette démonstration, nous allons juste changer le texte du bouton
                loadMoreBtn.textContent = 'Tous les projets sont chargés';
                loadMoreBtn.disabled = true;
            }, 1500);
        });
    }
    
    // Gestion du formulaire de contact
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Récupérer les données du formulaire
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Validation simple
            if (!name || !email || !subject || !message) {
                alert('Veuillez remplir tous les champs');
                return;
            }
            
            // Simuler l'envoi du formulaire
            const submitBtn = contactForm.querySelector('.submit-btn');
            const originalBtnText = submitBtn.innerHTML;
            
            submitBtn.innerHTML = '<span>Envoi en cours...</span>';
            
            setTimeout(() => {
                // Simuler la réussite de l'envoi
                alert('Merci pour votre message ! Je vous répondrai dans les plus brefs délais.');
                contactForm.reset();
                submitBtn.innerHTML = originalBtnText;
            }, 1500);
        });
    }
    
    // Ajouter une classe CSS pour animer les éléments au chargement
    document.body.classList.add('loaded');
});