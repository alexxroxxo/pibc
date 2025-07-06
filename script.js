// Esperar a que el DOM esté cargado
document.addEventListener('DOMContentLoaded', function() {
    
    // Obtener elementos del DOM
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navbar = document.querySelector('.navbar');
    
    // Menú móvil
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
    }
    
    // Cerrar menú al hacer clic en un enlace
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });
    
    // Navegación suave para enlaces internos
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
    
    // Efecto de navbar al hacer scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 10px rgba(10, 41, 71, 0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    });
    
    // Animación de entrada para elementos
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observar elementos para animación
    const animateElements = document.querySelectorAll('.feature-card, .sermon-card, .ministry-card');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // Efecto parallax suave para el hero
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const heroContent = document.querySelector('.hero-content');
        
        if (heroContent && scrolled < window.innerHeight) {
            heroContent.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });
    
    // Animación de entrada para el hero
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.opacity = '0';
        heroContent.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            heroContent.style.transition = 'opacity 1s ease, transform 1s ease';
            heroContent.style.opacity = '1';
            heroContent.style.transform = 'translateY(0)';
        }, 500);
    }
    
    // Funcionalidad para botones de sermones
    const sermonCards = document.querySelectorAll('.sermon-card');
    sermonCards.forEach(card => {
        card.addEventListener('click', function() {
            // Aquí puedes agregar la lógica para reproducir el sermón
            console.log('Sermón clickeado:', this.querySelector('h3').textContent);
            
            // Ejemplo: mostrar un modal o redirigir
            alert('Funcionalidad de reproducción de sermón en desarrollo');
        });
    });
    
    // Funcionalidad para botones CTA
    const ctaButtons = document.querySelectorAll('.cta-button');
    ctaButtons.forEach(button => {
        button.addEventListener('click', function() {
            const buttonText = this.textContent;
            
            if (buttonText.includes('Sermones')) {
                document.querySelector('#sermones').scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
            // El botón de "Transmisión en Vivo" ahora es un enlace, no necesita JavaScript
        });
    });
    
    // Contador de visitantes (ejemplo)
    let visitorCount = localStorage.getItem('visitorCount') || 0;
    visitorCount = parseInt(visitorCount) + 1;
    localStorage.setItem('visitorCount', visitorCount);
    
    // Mostrar contador en consola (puedes mostrarlo en la página si quieres)
    console.log('Visitantes únicos:', visitorCount);
    
    // Validación de formularios (si los agregas)
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            // Aquí puedes agregar la lógica de validación y envío
            console.log('Formulario enviado');
        });
    });
    
    // Efecto de hover para las tarjetas
    const cards = document.querySelectorAll('.feature-card, .sermon-card, .ministry-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Botón de "volver arriba"
    const backToTop = document.createElement('button');
    backToTop.innerHTML = '<i class="fas fa-arrow-up"></i>';
    backToTop.className = 'back-to-top';
    backToTop.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background: var(--primary-color);
        color: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 1000;
        box-shadow: 0 4px 10px rgba(10, 41, 71, 0.3);
    `;
    
    document.body.appendChild(backToTop);
    
    // Mostrar/ocultar botón de volver arriba
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTop.style.opacity = '1';
            backToTop.style.visibility = 'visible';
        } else {
            backToTop.style.opacity = '0';
            backToTop.style.visibility = 'hidden';
        }
    });
    
    // Funcionalidad del botón volver arriba
    backToTop.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // ===== SISTEMA DE ADMINISTRACIÓN =====
    
    // Elementos del DOM para admin
    const adminFloat = document.getElementById('adminFloat');
    const adminModal = document.getElementById('adminModal');
    const closeModal = document.getElementById('closeModal');
    const adminLoginForm = document.getElementById('adminLoginForm');
    const loginForm = document.getElementById('loginForm');
    const adminPanel = document.getElementById('adminPanel');

    // Credenciales de administrador
    const ADMIN_USERNAME = 'admin';
    const ADMIN_PASSWORD = 'administrador';

    // Mostrar modal al hacer clic en el icono flotante
    if (adminFloat) {
        adminFloat.addEventListener('click', function() {
            adminModal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });
    }

    // Cerrar modal
    if (closeModal) {
        closeModal.addEventListener('click', function() {
            adminModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
    }

    // Cerrar modal al hacer clic fuera de él
    window.addEventListener('click', function(event) {
        if (event.target === adminModal) {
            adminModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    // Manejar login
    if (adminLoginForm) {
        adminLoginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const username = document.getElementById('username').value;

            if (username === ADMIN_USERNAME) {
                loginForm.style.display = 'none';
                adminPanel.style.display = 'block';
                loadCurrentImages();
            } else {
                alert('Usuario incorrecto. Usa "admin"');
            }
        });
    }

    // Función para cerrar sesión
    window.logout = function() {
        loginForm.style.display = 'block';
        adminPanel.style.display = 'none';
        document.getElementById('username').value = '';
        document.getElementById('password').value = '';
    };

    // Función para cargar imágenes actuales
    function loadCurrentImages() {
        const sections = ['header', 'features', 'sermons', 'ministries'];
        
        sections.forEach(section => {
            const storedImage = localStorage.getItem(`${section}Background`);
            if (storedImage) {
                const preview = document.getElementById(`${section}Preview`);
                const text = document.getElementById(`${section}Text`);
                
                if (preview && text) {
                    preview.src = storedImage;
                    preview.style.display = 'block';
                    text.style.display = 'none';
                }
            }
        });
        
        // Cargar contenido de "Nosotros" en el panel de administración
        updateNosotrosPreview();
    }

    // Función para subir imagen
    window.uploadImage = function(section) {
        console.log('Función uploadImage llamada para sección:', section);
        
        const fileInput = document.getElementById(`${section}Image`);
        const file = fileInput.files[0];
        
        if (!file) {
            alert('Por favor selecciona una imagen');
            return;
        }

        console.log('Archivo seleccionado:', file.name, 'Tamaño:', file.size);

        // Validar tipo de archivo
        if (!file.type.startsWith('image/')) {
            alert('Por favor selecciona un archivo de imagen válido');
            return;
        }

        // Validar tamaño (máximo 5MB)
        if (file.size > 5 * 1024 * 1024) {
            alert('La imagen debe ser menor a 5MB');
            return;
        }

        // Comprimir imagen antes de guardar
        compressImage(file, 1200, 0.8).then(compressedImageData => {
            console.log('Imagen comprimida exitosamente para sección:', section);
            
            // Guardar en localStorage usando función segura
            if (safeSetItem(`${section}Background`, compressedImageData)) {
                // Actualizar preview
                const preview = document.getElementById(`${section}Preview`);
                const text = document.getElementById(`${section}Text`);
                
                if (preview && text) {
                    preview.src = compressedImageData;
                    preview.style.display = 'block';
                    text.style.display = 'none';
                }
                
                // Aplicar imagen de fondo a la sección correspondiente
                applyBackgroundImage(section, compressedImageData);
                
                alert('Imagen subida exitosamente');
                fileInput.value = '';
            }
        }).catch((error) => {
            console.log('Error en compresión, usando imagen original:', error);
            
            // Si falla la compresión, usar la imagen original
            const reader = new FileReader();
            reader.onload = function(e) {
                const imageData = e.target.result;
                
                // Guardar en localStorage usando función segura
                if (safeSetItem(`${section}Background`, imageData)) {
                    // Actualizar preview
                    const preview = document.getElementById(`${section}Preview`);
                    const text = document.getElementById(`${section}Text`);
                    
                    if (preview && text) {
                        preview.src = imageData;
                        preview.style.display = 'block';
                        text.style.display = 'none';
                    }
                    
                    // Aplicar imagen de fondo a la sección correspondiente
                    applyBackgroundImage(section, imageData);
                    
                    alert('Imagen subida exitosamente');
                    fileInput.value = '';
                }
            };
            
            reader.readAsDataURL(file);
        });
    };

    // Función para aplicar imagen de fondo
    function applyBackgroundImage(section, imageData) {
        console.log('Aplicando imagen de fondo para sección:', section);
        
        let targetElement;
        
        switch(section) {
            case 'header':
                targetElement = document.querySelector('.header-background');
                if (targetElement) {
                    targetElement.style.background = `linear-gradient(rgba(10, 41, 71, 0.7), rgba(10, 41, 71, 0.7)), url('${imageData}')`;
                    targetElement.style.backgroundSize = 'cover';
                    targetElement.style.backgroundPosition = 'center';
                    console.log('Imagen aplicada al header');
                } else {
                    console.log('No se encontró elemento .header-background');
                }
                break;
            case 'features':
                targetElement = document.querySelector('.features');
                if (targetElement) {
                    targetElement.style.background = `linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url('${imageData}')`;
                    targetElement.style.backgroundSize = 'cover';
                    targetElement.style.backgroundPosition = 'center';
                    console.log('Imagen aplicada a features');
                } else {
                    console.log('No se encontró elemento .features');
                }
                break;
            case 'sermons':
                targetElement = document.querySelector('.sermons');
                if (targetElement) {
                    targetElement.style.background = `linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url('${imageData}')`;
                    targetElement.style.backgroundSize = 'cover';
                    targetElement.style.backgroundPosition = 'center';
                    console.log('Imagen aplicada a sermons');
                } else {
                    console.log('No se encontró elemento .sermons');
                }
                break;
            case 'ministries':
                targetElement = document.querySelector('.ministries');
                if (targetElement) {
                    targetElement.style.background = `linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url('${imageData}')`;
                    targetElement.style.backgroundSize = 'cover';
                    targetElement.style.backgroundPosition = 'center';
                    console.log('Imagen aplicada a ministries');
                } else {
                    console.log('No se encontró elemento .ministries');
                }
                break;
        }
    }

    // Cargar imágenes guardadas al cargar la página
    function loadSavedBackgrounds() {
        const sections = ['header', 'features', 'sermons', 'ministries'];
        
        sections.forEach(section => {
            const storedImage = localStorage.getItem(`${section}Background`);
            if (storedImage) {
                applyBackgroundImage(section, storedImage);
            }
        });
    }

    // Cargar fondos guardados al iniciar
    loadSavedBackgrounds();

    // ===== FUNCIONALIDAD DE CAMBIO DE CONTRASEÑA =====
    
    const changePasswordForm = document.getElementById('changePasswordForm');
    
    if (changePasswordForm) {
        changePasswordForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const currentPassword = document.getElementById('currentPassword').value;
            const newPassword = document.getElementById('newPassword').value;
            const confirmPassword = document.getElementById('confirmPassword').value;
            
            // Obtener la contraseña actual guardada (o usar la predeterminada)
            const storedPassword = localStorage.getItem('adminPassword') || ADMIN_PASSWORD;
            
            // Validar contraseña actual
            if (currentPassword !== storedPassword) {
                alert('La contraseña actual es incorrecta');
                return;
            }
            
            // Validar que las nuevas contraseñas coincidan
            if (newPassword !== confirmPassword) {
                alert('Las nuevas contraseñas no coinciden');
                return;
            }
            
            // Validar longitud mínima
            if (newPassword.length < 6) {
                alert('La nueva contraseña debe tener al menos 6 caracteres');
                return;
            }
            
            // Validar que no sea la misma contraseña
            if (newPassword === currentPassword) {
                alert('La nueva contraseña debe ser diferente a la actual');
                return;
            }
            
            // Guardar nueva contraseña
            localStorage.setItem('adminPassword', newPassword);
            
            // Limpiar formulario
            document.getElementById('currentPassword').value = '';
            document.getElementById('newPassword').value = '';
            document.getElementById('confirmPassword').value = '';
            
            alert('Contraseña cambiada exitosamente');
        });
    }
    
    // Función para obtener la contraseña actual (actualizada para usar localStorage)
    function getCurrentPassword() {
        return localStorage.getItem('adminPassword') || ADMIN_PASSWORD;
    }

    // ===== FUNCIONES DE COMPRESIÓN Y ALMACENAMIENTO =====
    
    // Función para comprimir imagen antes de guardar
    function compressImage(file, maxWidth = 800, quality = 0.7) {
        return new Promise((resolve) => {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            const img = new Image();
            
            img.onload = function() {
                // Calcular nuevas dimensiones manteniendo proporción
                let { width, height } = img;
                if (width > maxWidth) {
                    height = (height * maxWidth) / width;
                    width = maxWidth;
                }
                
                canvas.width = width;
                canvas.height = height;
                
                // Dibujar imagen comprimida
                ctx.drawImage(img, 0, 0, width, height);
                
                // Convertir a base64 con calidad reducida
                const compressedDataUrl = canvas.toDataURL('image/jpeg', quality);
                resolve(compressedDataUrl);
            };
            
            img.src = URL.createObjectURL(file);
        });
    }
    
    // Función para verificar espacio disponible en localStorage
    function checkStorageQuota() {
        try {
            const testKey = '__storage_test__';
            const testValue = 'x'.repeat(1024 * 1024); // 1MB de prueba
            
            localStorage.setItem(testKey, testValue);
            localStorage.removeItem(testKey);
            return true;
        } catch (e) {
            return false;
        }
    }
    
    // Función para limpiar localStorage si es necesario
    function cleanupStorage() {
        try {
            // PROTEGER DATOS CRÍTICOS - NO BORRAR RECURSOS NI SERMONES
            const protectedKeys = [
                'recursosData', 'ultimosSermones', 'allSermones'
            ];
            
            // Limpiar solo imágenes de fondo y datos no críticos
            const keysToCheck = [
                'headerBackground', 'featuresBackground', 'sermonsBackground', 'ministriesBackground',
                'heroSlides'
            ];
            
            let totalCleaned = 0;
            keysToCheck.forEach(key => {
                const data = localStorage.getItem(key);
                if (data && data.length > 500000) { // Solo si es mayor a 500KB
                    localStorage.removeItem(key);
                    totalCleaned += data.length;
                    console.log(`Removido ${key} por tamaño excesivo (${(data.length/1024).toFixed(1)}KB)`);
                }
            });
            
            // Si no se limpió nada, intentar limpiar elementos más pequeños (pero NO recursos)
            if (totalCleaned === 0) {
                const allKeys = Object.keys(localStorage);
                const imageKeys = allKeys.filter(key => 
                    (key.includes('Background') || 
                     key.includes('image_') || 
                     key.includes('background_') ||
                     key.includes('Imagen')) &&
                    !protectedKeys.includes(key) // NO tocar recursos ni sermones
                );
                
                imageKeys.forEach(key => {
                    const data = localStorage.getItem(key);
                    if (data && data.length > 300000) { // Solo archivos mayores a 300KB
                        localStorage.removeItem(key);
                        totalCleaned += data.length;
                        console.log(`Removido ${key} (${(data.length/1024).toFixed(1)}KB)`);
                    }
                });
            }
            
            // ÚLTIMO RECURSO: Solo si no hay espacio y es extremadamente necesario
            if (totalCleaned === 0) {
                // Verificar si realmente necesitamos limpiar algo crítico
                const sermonesData = localStorage.getItem('ultimosSermones');
                if (sermonesData && sermonesData.length > 10000000) { // Solo si es mayor a 10MB
                    console.log('⚠️ ADVERTENCIA: Sermones extremadamente grandes detectados, limpiando...');
                    localStorage.removeItem('ultimosSermones');
                    totalCleaned += sermonesData.length;
                }
            }
            
            if (totalCleaned > 0) {
                console.log(`Limpieza completada: ${(totalCleaned/1024/1024).toFixed(2)}MB liberados`);
            }
            
            return totalCleaned;
        } catch (e) {
            console.error('Error limpiando storage:', e);
            return 0;
        }
    }
    
    // Función segura para guardar en localStorage
    function safeSetItem(key, value) {
        try {
            // PROTEGER DATOS CRÍTICOS - recursos y sermones
            const isCriticalData = key === 'ultimosSermones' || key === 'allSermones' || key === 'recursosData';
            
            // Para datos críticos, NO limpiar automáticamente
            if (!isCriticalData) {
                // Limpiar storage si es necesario (solo para datos no críticos)
                const cleanedSize = cleanupStorage();
                
                // Si se limpió algo, intentar guardar de nuevo
                if (cleanedSize > 0) {
                    console.log(`Se liberaron ${(cleanedSize/1024/1024).toFixed(2)}MB antes de guardar`);
                }
            }
            
            // Verificar cuota antes de guardar
            if (!checkStorageQuota()) {
                // Para datos críticos, intentar limpiar solo imágenes de fondo
                if (isCriticalData) {
                    const imageKeys = ['headerBackground', 'featuresBackground', 'sermonsBackground', 'ministriesBackground'];
                    let cleanedSize = 0;
                    
                    imageKeys.forEach(imgKey => {
                        const data = localStorage.getItem(imgKey);
                        if (data && data.length > 200000) { // Solo imágenes grandes
                            localStorage.removeItem(imgKey);
                            cleanedSize += data.length;
                            console.log(`Removida imagen ${imgKey} para hacer espacio para datos críticos`);
                        }
                    });
                    
                    if (cleanedSize === 0) {
                        throw new Error('No hay espacio suficiente para guardar datos críticos. Por favor ejecuta cleanupLargeImages() en la consola.');
                    }
                } else {
                    // Para datos no críticos, intentar limpiar las imágenes más grandes
                    const largeCleaned = window.cleanupLargeImages();
                    if (largeCleaned === 0) {
                        throw new Error('No hay espacio suficiente en localStorage');
                    }
                }
            }
            
            localStorage.setItem(key, value);
            
            // Si es dato crítico, verificar que se guardó correctamente
            if (isCriticalData) {
                const savedData = localStorage.getItem(key);
                if (!savedData || savedData !== value) {
                    console.error('Error: Los datos críticos no se guardaron correctamente');
                    throw new Error('Error guardando datos críticos');
                }
            }
            
            return true;
        } catch (e) {
            console.error('Error guardando en localStorage:', e);
            
            // Si es un error de cuota, mostrar mensaje específico
            if (e.name === 'QuotaExceededError' || e.message.includes('quota') || e.message.includes('espacio')) {
                if (key === 'recursosData') {
                    alert('El almacenamiento está lleno y no se pueden guardar más recursos. Por favor:\n\n1. Ejecuta cleanupLargeImages() en la consola\n2. O elimina algunos recursos existentes\n3. Usa archivos más pequeños');
                } else {
                    alert('El almacenamiento está completamente lleno. Por favor:\n\n1. Ejecuta cleanupLargeImages() en la consola para eliminar las imágenes más grandes\n2. O ejecuta clearAllStorage() para limpiar todo\n3. Usa imágenes más pequeñas (máximo 2MB)');
                }
            } else {
                alert('Error al guardar los datos. Intenta de nuevo.');
            }
            return false;
        }
    }

    // ===== SISTEMA DE SERMONES CORREGIDO =====
    
    // Función para obtener todos los sermones
    function getAllSermones() {
        return JSON.parse(localStorage.getItem('allSermones') || '[]');
    }
    
    // Función para guardar todos los sermones
    function saveAllSermones(sermones) {
        localStorage.setItem('allSermones', JSON.stringify(sermones));
    }
    
    // Función para agregar un nuevo sermón
    function addSermon(sermon) {
        const sermones = getAllSermones();
        sermon.id = Date.now(); // ID único
        sermon.fecha = new Date().toISOString();
        sermones.unshift(sermon); // Agregar al inicio
        saveAllSermones(sermones);
        return sermon;
    }
    
    // Función para cargar datos de sermones en el admin
    function loadSermonesAdmin() {
        const data = JSON.parse(localStorage.getItem('ultimosSermones') || '[{"nombre":"","embed":"","imagen":"","pastor":""},{"nombre":"","embed":"","imagen":"","pastor":""},{"nombre":"","embed":"","imagen":"","pastor":""}]');
        for (let i = 1; i <= 3; i++) {
            document.getElementById(`sermon${i}Nombre`).value = data[i-1].nombre || '';
            document.getElementById(`sermon${i}Embed`).value = data[i-1].embed || '';
            document.getElementById(`sermon${i}Pastor`).value = data[i-1].pastor || '';
            // No se puede poner la imagen en el input file, pero se puede mostrar preview si se quiere
        }
    }
    
    // Función para guardar sermones CORREGIDA
    function saveSermonesAdmin(e) {
        e.preventDefault();
        const promises = [];
        
        // Obtener datos existentes para preservar imágenes
        const existingData = JSON.parse(localStorage.getItem('ultimosSermones') || '[{"nombre":"","embed":"","imagen":"","pastor":""},{"nombre":"","embed":"","imagen":"","pastor":""},{"nombre":"","embed":"","imagen":"","pastor":""}]');
        
        for (let i = 1; i <= 3; i++) {
            const nombre = document.getElementById(`sermon${i}Nombre`).value.trim();
            const embed = document.getElementById(`sermon${i}Embed`).value.trim();
            const pastor = document.getElementById(`sermon${i}Pastor`).value.trim();
            const fileInput = document.getElementById(`sermon${i}Imagen`);
            const file = fileInput.files[0];
            
            if (!nombre && !embed && !file && !pastor) {
                continue;
            }
            
            const sermonData = {
                nombre: nombre,
                embed: embed,
                pastor: pastor,
                imagen: existingData[i-1] ? existingData[i-1].imagen || '' : '' // Preservar imagen existente
            };
            
            if (file) {
                if (file.size > 2 * 1024 * 1024) {
                    alert(`La imagen del sermón ${i} es demasiado grande. Máximo 2MB.`);
                    return;
                }
                
                promises.push(new Promise((resolve) => {
                    compressImage(file, 600, 0.6).then(compressedImage => {
                        sermonData.imagen = compressedImage;
                        resolve(sermonData);
                    }).catch(() => {
                        const reader = new FileReader();
                        reader.onload = function(ev) {
                            sermonData.imagen = ev.target.result;
                            resolve(sermonData);
                        };
                        reader.readAsDataURL(file);
                    });
                }));
            } else {
                promises.push(Promise.resolve(sermonData));
            }
        }
        
        Promise.all(promises).then((sermonesData) => {
            // Guardar en el sistema completo SOLO si no existe (nombre y pastor)
            sermonesData.forEach(sermon => {
                if (sermon.nombre || sermon.embed || sermon.imagen || sermon.pastor) {
                    const allSermones = getAllSermones();
                    const exists = allSermones.some(s =>
                        s.nombre === sermon.nombre &&
                        s.pastor === sermon.pastor
                    );
                    if (!exists) {
                        addSermon(sermon);
                    }
                }
            });
            
            // Actualizar últimos sermones (mantener compatibilidad)
            const ultimosSermones = sermonesData.filter(s => s.nombre || s.embed || s.imagen || s.pastor);
            if (safeSetItem('ultimosSermones', JSON.stringify(ultimosSermones))) {
                alert('Sermones guardados correctamente');
                if (typeof renderUltimosSermones === 'function') renderUltimosSermones();
                
                // Sincronizar con la página de sermones
                if (typeof syncSermones === 'function') {
                    syncSermones();
                }
            }
        });
    }
    
    // Configurar el formulario de sermones si existe
    if (document.getElementById('sermonesAdminForm')) {
        loadSermonesAdmin();
        document.getElementById('sermonesAdminForm').onsubmit = function(e) {
            console.log('Intentando guardar sermones...');
            saveSermonesAdmin(e);
        };
    }

    // Mostrar últimos sermones en la página principal
    function renderUltimosSermones() {
        // Tomar los 3 más recientes de la lista completa
        const data = getAllSermones().slice(0, 3);
        const grid = document.querySelector('.sermons-grid');
        if (!grid) return;
        let html = '';
        let count = 0;
        data.forEach((sermon, i) => {
            if (!sermon.nombre && !sermon.embed && !sermon.imagen && !sermon.pastor) return;
            count++;
            html += `<div class="sermon-card">
                <div class="sermon-image" style="background:${sermon.imagen ? `url('${sermon.imagen}') center/cover no-repeat` : 'linear-gradient(135deg, var(--primary-color), var(--primary-light))'};">
                    <div class="play-button" onclick="document.getElementById('sermon-embed-${i}').style.display='block'">
                        <i class="fas fa-play"></i>
                    </div>
                    ${sermon.pastor ? `<div class='sermon-pastor-overlay'>${sermon.pastor}</div>` : ''}
                </div>
                <div class="sermon-content">
                    <h3>${sermon.nombre || 'Sermón'}</h3>
                    <div id="sermon-embed-${i}" style="display:none;margin-top:10px;">${sermon.embed || ''}</div>
                </div>
            </div>`;
        });
        if (count === 0) {
            html = `<div style="color:var(--gray);text-align:center;">No hay sermones cargados aún.</div>`;
        }
        grid.innerHTML = html;
    }

    // ===== FUNCIONES DE DIAGNÓSTICO =====
    
    // Función de diagnóstico para verificar el estado de los sermones
    window.diagnoseSermones = function() {
        console.log('=== DIAGNÓSTICO DE SERMONES ===');
        
        // Verificar datos en localStorage
        const ultimosSermones = localStorage.getItem('ultimosSermones');
        const allSermones = localStorage.getItem('allSermones');
        
        console.log('ultimosSermones en localStorage:', ultimosSermones);
        console.log('allSermones en localStorage:', allSermones);
        
        if (ultimosSermones) {
            try {
                const sermones = JSON.parse(ultimosSermones);
                console.log('Sermones parseados:', sermones);
                
                sermones.forEach((sermon, index) => {
                    console.log(`Sermón ${index + 1}:`, {
                        nombre: sermon.nombre,
                        pastor: sermon.pastor,
                        tieneImagen: !!sermon.imagen,
                        longitudImagen: sermon.imagen ? sermon.imagen.length : 0
                    });
                });
            } catch (e) {
                console.error('Error parseando sermones:', e);
            }
        }
        
        if (allSermones) {
            try {
                const sermones = JSON.parse(allSermones);
                console.log('Todos los sermones:', sermones);
            } catch (e) {
                console.error('Error parseando allSermones:', e);
            }
        }
        
        // Verificar si estamos en la página principal
        const grid = document.querySelector('.sermons-grid');
        if (grid) {
            console.log('Grid encontrado, contenido:', grid.innerHTML);
        }
        
        alert('Revisa la consola para ver el diagnóstico completo');
    };

    // Función para restaurar imágenes de sermones perdidas
    window.restoreSermonesImages = function() {
        console.log('=== RESTAURANDO IMÁGENES DE SERMONES ===');
        
        const ultimosSermones = JSON.parse(localStorage.getItem('ultimosSermones') || '[]');
        const allSermones = getAllSermones();
        
        let restoredCount = 0;
        
        // Buscar imágenes en allSermones para restaurar en ultimosSermones
        ultimosSermones.forEach((sermon, index) => {
            if (sermon.nombre && sermon.pastor && !sermon.imagen) {
                // Buscar en allSermones por nombre y pastor
                const matchingSermon = allSermones.find(s => 
                    s.nombre === sermon.nombre && 
                    s.pastor === sermon.pastor && 
                    s.imagen
                );
                
                if (matchingSermon) {
                    ultimosSermones[index].imagen = matchingSermon.imagen;
                    restoredCount++;
                    console.log(`Restaurada imagen para sermón: ${sermon.nombre}`);
                }
            }
        });
        
        if (restoredCount > 0) {
            localStorage.setItem('ultimosSermones', JSON.stringify(ultimosSermones));
            console.log(`Se restauraron ${restoredCount} imágenes`);
            
            // Re-renderizar si estamos en la página principal
            if (typeof renderUltimosSermones === 'function') {
                renderUltimosSermones();
            }
            
            alert(`Se restauraron ${restoredCount} imágenes de sermones`);
        } else {
            alert('No se encontraron imágenes para restaurar');
        }
    };

    // Función para verificar el estado del localStorage
    window.checkStorageStatus = function() {
        try {
            let totalSize = 0;
            const items = [];
            
            for (let i = 0; i < localStorage.length; i++) {
                const key = localStorage.key(i);
                const value = localStorage.getItem(key);
                const size = new Blob([value]).size;
                totalSize += size;
                items.push({ key, size });
            }
            
            const totalMB = (totalSize / (1024 * 1024)).toFixed(2);
            const maxSize = 5; // localStorage típicamente tiene 5-10MB
            
            let status = `Estado del almacenamiento:\n`;
            status += `Uso actual: ${totalMB}MB / ~${maxSize}MB\n`;
            status += `Porcentaje usado: ${((totalSize / (maxSize * 1024 * 1024)) * 100).toFixed(1)}%\n\n`;
            
            // Verificar datos críticos
            const criticalKeys = ['ultimosSermones', 'allSermones', 'recursosData'];
            criticalKeys.forEach(key => {
                const data = localStorage.getItem(key);
                if (data) {
                    const size = (data.length / 1024).toFixed(1);
                    status += `${key}: ${size}KB\n`;
                } else {
                    status += `${key}: No encontrado\n`;
                }
            });
            
            if (totalSize > (maxSize * 1024 * 1024 * 0.8)) { // 80% del límite
                status += `\n⚠️ ADVERTENCIA: El almacenamiento está casi lleno.`;
                status += `\nConsidera ejecutar cleanupLargeImages() o clearAllStorage()`;
            }
            
            alert(status);
            return totalSize;
        } catch (e) {
            alert('Error verificando almacenamiento: ' + e.message);
            return 0;
        }
    };

    // Función para limpiar específicamente las imágenes más grandes
    window.cleanupLargeImages = function() {
        try {
            const allKeys = Object.keys(localStorage);
            const imageKeys = allKeys.filter(key => 
                key.includes('Background') || 
                key.includes('image_') || 
                key.includes('background_') ||
                key.includes('Imagen') ||
                key.includes('ultimosSermones') ||
                key.includes('recursosData')
            );
            
            let totalSize = 0;
            const items = [];
            
            imageKeys.forEach(key => {
                const data = localStorage.getItem(key);
                if (data) {
                    const size = data.length;
                    totalSize += size;
                    items.push({ key, size, data });
                }
            });
            
            // Ordenar por tamaño (más grandes primero)
            items.sort((a, b) => b.size - a.size);
            
            let cleanedSize = 0;
            let cleanedCount = 0;
            
            // Eliminar los 3 archivos más grandes
            items.slice(0, 3).forEach(item => {
                localStorage.removeItem(item.key);
                cleanedSize += item.size;
                cleanedCount++;
                console.log(`Eliminado: ${item.key} (${(item.size/1024/1024).toFixed(2)}MB)`);
            });
            
            const message = `Limpieza completada:\n${cleanedCount} archivos eliminados\n${(cleanedSize/1024/1024).toFixed(2)}MB liberados`;
            alert(message);
            
            return cleanedSize;
        } catch (e) {
            console.error('Error en limpieza de imágenes:', e);
            alert('Error al limpiar imágenes: ' + e.message);
            return 0;
        }
    };

    // Función para limpiar todo el localStorage (función global)
    window.clearAllStorage = function() {
        if (confirm('¿Estás seguro de que quieres limpiar todo el almacenamiento? Esto eliminará todas las imágenes y configuraciones guardadas.')) {
            try {
                localStorage.clear();
                alert('Almacenamiento limpiado exitosamente. La página se recargará.');
                setTimeout(() => {
                    window.location.reload();
                }, 1000);
            } catch (e) {
                alert('Error al limpiar el almacenamiento: ' + e.message);
            }
        }
    };

    // Función para verificar y restaurar recursos perdidos
    window.checkAndRestoreRecursos = function() {
        console.log('=== VERIFICANDO RECURSOS ===');
        
        const recursosData = localStorage.getItem('recursosData');
        if (!recursosData) {
            alert('No se encontraron recursos guardados. Esto puede indicar que fueron eliminados por el sistema de limpieza automática.');
            return;
        }
        
        try {
            const recursos = JSON.parse(recursosData);
            let totalRecursos = 0;
            let recursosConArchivos = 0;
            
            ['audiolibros', 'textos', 'videos'].forEach(categoria => {
                if (recursos[categoria]) {
                    totalRecursos += recursos[categoria].length;
                    recursos[categoria].forEach(recurso => {
                        if (recurso.audio || recurso.pdf || recurso.embed) {
                            recursosConArchivos++;
                        }
                    });
                }
            });
            
            const message = `Estado de los recursos:\n\n` +
                          `Total de recursos: ${totalRecursos}\n` +
                          `Recursos con archivos: ${recursosConArchivos}\n\n` +
                          `Si los recursos se borran automáticamente:\n` +
                          `1. El sistema ahora protege los recursos\n` +
                          `2. Solo se borrarán en casos extremos\n` +
                          `3. Usa archivos más pequeños (máximo 2MB)`;
            
            alert(message);
            
        } catch (e) {
            console.error('Error verificando recursos:', e);
            alert('Error al verificar los recursos: ' + e.message);
        }
    };

    // Función para hacer backup de recursos
    window.backupRecursos = function() {
        try {
            const recursosData = localStorage.getItem('recursosData');
            if (!recursosData) {
                alert('No hay recursos para hacer backup');
                return;
            }
            
            const recursos = JSON.parse(recursosData);
            const backupData = {
                fecha: new Date().toISOString(),
                recursos: recursos
            };
            
            // Crear archivo de descarga
            const blob = new Blob([JSON.stringify(backupData, null, 2)], {type: 'application/json'});
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `recursos_backup_${new Date().toISOString().split('T')[0]}.json`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
            
            alert('Backup de recursos creado exitosamente');
            
        } catch (e) {
            console.error('Error creando backup:', e);
            alert('Error al crear el backup: ' + e.message);
        }
    };

    // Función para restaurar recursos desde backup
    window.restoreRecursos = function() {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = '.json';
        
        input.onchange = function(e) {
            const file = e.target.files[0];
            if (!file) return;
            
            const reader = new FileReader();
            reader.onload = function(ev) {
                try {
                    const backupData = JSON.parse(ev.target.result);
                    if (backupData.recursos) {
                        localStorage.setItem('recursosData', JSON.stringify(backupData.recursos));
                        alert('Recursos restaurados exitosamente desde el backup');
                        
                        // Recargar la página si estamos en el admin
                        if (document.getElementById('recursosPanel')) {
                            showRecursosCategoria('audiolibros');
                        }
                    } else {
                        alert('El archivo no contiene datos válidos de recursos');
                    }
                } catch (e) {
                    console.error('Error restaurando recursos:', e);
                    alert('Error al restaurar los recursos: ' + e.message);
                }
            };
            
            reader.readAsText(file);
        };
        
        input.click();
    };

    // Renderizar sermones al cargar si estamos en la página principal
    if (document.querySelector('.sermons-grid')) {
        console.log('Grid de sermones encontrado al cargar, renderizando...');
        renderUltimosSermones();
    } else {
        console.log('Grid de sermones NO encontrado al cargar');
    }

    // Verificar recursos al cargar la página
    function checkRecursosOnLoad() {
        const recursosData = localStorage.getItem('recursosData');
        if (recursosData) {
            try {
                const recursos = JSON.parse(recursosData);
                let totalRecursos = 0;
                
                ['audiolibros', 'textos', 'videos'].forEach(categoria => {
                    if (recursos[categoria]) {
                        totalRecursos += recursos[categoria].length;
                    }
                });
                
                if (totalRecursos > 0) {
                    console.log(`Recursos cargados correctamente: ${totalRecursos} elementos`);
                }
            } catch (e) {
                console.error('Error verificando recursos al cargar:', e);
            }
        } else {
            console.log('No se encontraron recursos guardados');
        }
    }
    
    // Ejecutar verificación de recursos
    checkRecursosOnLoad();

    // ===== EDITOR VISUAL =====
    
    let visualEditorActive = false;
    let currentEditingElement = null;
    let elementSelectionMode = false;
    let textEditingMode = false;
    
    // Activar editor visual
    window.activateVisualEditor = function() {
        visualEditorActive = true;
        document.getElementById('visualEditor').style.display = 'block';
        document.getElementById('adminModal').style.display = 'none';
        
        // Asegurar que el scroll funcione correctamente
        document.body.style.overflow = 'auto';
        document.documentElement.style.overflow = 'auto';
        
        // Hacer elementos editables
        makeElementsEditable();
    };
    
    // Salir del editor visual
    window.exitVisualEditor = function() {
        visualEditorActive = false;
        document.getElementById('visualEditor').style.display = 'none';
        document.body.style.paddingTop = '0';
        document.body.style.overflow = 'auto';
        document.documentElement.style.overflow = 'auto';
        
        // Remover elementos editables
        removeEditableElements();
        
        // Cerrar panel de edición
        closeEditPanel();
    };
    
    // Hacer elementos editables
    function makeElementsEditable() {
        const editableSelectors = [
            'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
            'p', 'span', 'div.hero-text p',
            'img', '.church-logo', '.footer-logo',
            '.feature-card', '.sermon-card', '.ministry-card',
            '.header-background', '.features', '.sermons', '.ministries', '.contact'
        ];
        
        editableSelectors.forEach(selector => {
            const elements = document.querySelectorAll(selector);
            elements.forEach(element => {
                if (element.textContent.trim() || element.tagName === 'IMG' || 
                    element.classList.contains('header-background') ||
                    element.classList.contains('features') ||
                    element.classList.contains('sermons') ||
                    element.classList.contains('ministries') ||
                    element.classList.contains('contact')) {
                    element.classList.add('editable-element');
                    element.addEventListener('click', handleElementClick);
                }
            });
        });
    }
    
    // Remover elementos editables
    function removeEditableElements() {
        const editableElements = document.querySelectorAll('.editable-element');
        editableElements.forEach(element => {
            element.classList.remove('editable-element');
            element.removeEventListener('click', handleElementClick);
        });
    }
    
    // Manejar clic en elemento
    function handleElementClick(event) {
        if (!visualEditorActive) return;
        
        currentEditingElement = event.target;
        showEditPanel(currentEditingElement);
    }
    
    // Mostrar panel de edición
    function showEditPanel(element) {
        const editPanel = document.getElementById('editPanel');
        const textEditSection = document.getElementById('textEditSection');
        const imageEditSection = document.getElementById('imageEditSection');
        const backgroundEditSection = document.getElementById('backgroundEditSection');
        
        editPanel.style.display = 'block';
        
        if (element.tagName === 'IMG') {
            // Editar imagen
            textEditSection.style.display = 'none';
            imageEditSection.style.display = 'block';
            backgroundEditSection.style.display = 'none';
            
            const currentImagePreview = document.getElementById('currentImagePreview');
            currentImagePreview.src = element.src;
            currentImagePreview.style.display = 'block';
            
        } else if (element.classList.contains('header-background') || 
                   element.classList.contains('features') ||
                   element.classList.contains('sermons') ||
                   element.classList.contains('ministries') ||
                   element.classList.contains('contact') ||
                   element.style.backgroundImage ||
                   element.style.background) {
            // Editar fondo
            textEditSection.style.display = 'none';
            imageEditSection.style.display = 'none';
            backgroundEditSection.style.display = 'block';
            
        } else {
            // Editar texto
            textEditSection.style.display = 'block';
            imageEditSection.style.display = 'none';
            backgroundEditSection.style.display = 'none';
            
            const textEditor = document.getElementById('textEditor');
            textEditor.value = element.textContent || element.innerText || '';
        }
    }
    
    // Cerrar panel de edición
    window.closeEditPanel = function() {
        document.getElementById('editPanel').style.display = 'none';
        currentEditingElement = null;
    };
    
    // Guardar edición de texto
    window.saveTextEdit = function() {
        if (!currentEditingElement) return;
        
        const textEditor = document.getElementById('textEditor');
        const newText = textEditor.value;
        
        if (currentEditingElement.tagName === 'INPUT' || currentEditingElement.tagName === 'TEXTAREA') {
            currentEditingElement.value = newText;
        } else {
            currentEditingElement.textContent = newText;
        }
        
        // Guardar en localStorage SOLO el texto, no el fondo
        const elementId = currentEditingElement.id || currentEditingElement.className;
        localStorage.setItem(`text_${elementId}`, newText);
        
        closeEditPanel();
        alert('Texto guardado exitosamente');
    };
    
    // Guardar edición de imagen
    window.saveImageEdit = function() {
        if (!currentEditingElement || currentEditingElement.tagName !== 'IMG') return;
        
        const imageSelector = document.getElementById('imageSelector');
        const file = imageSelector.files[0];
        
        if (!file) {
            alert('Por favor selecciona una imagen');
            return;
        }
        
        if (!file.type.startsWith('image/')) {
            alert('Por favor selecciona un archivo de imagen válido');
            return;
        }
        
        if (file.size > 5 * 1024 * 1024) {
            alert('La imagen debe ser menor a 5MB');
            return;
        }
        
        // Comprimir imagen antes de guardar
        compressImage(file, 800, 0.7).then(compressedImageData => {
            currentEditingElement.src = compressedImageData;
            
            // Guardar en localStorage usando función segura
            const elementId = currentEditingElement.id || currentEditingElement.className;
            if (safeSetItem(`image_${elementId}`, compressedImageData)) {
                closeEditPanel();
                alert('Imagen guardada exitosamente');
            }
        }).catch(() => {
            // Si falla la compresión, usar la imagen original
            const reader = new FileReader();
            reader.onload = function(e) {
                const imageData = e.target.result;
                currentEditingElement.src = imageData;
                
                // Guardar en localStorage usando función segura
                const elementId = currentEditingElement.id || currentEditingElement.className;
                if (safeSetItem(`image_${elementId}`, imageData)) {
                    closeEditPanel();
                    alert('Imagen guardada exitosamente');
                }
            };
            
            reader.readAsDataURL(file);
        });
    };
    
    // Guardar edición de fondo
    window.saveBackgroundEdit = function() {
        if (!currentEditingElement) return;
        
        const backgroundSelector = document.getElementById('backgroundSelector');
        const file = backgroundSelector.files[0];
        
        if (!file) {
            alert('Por favor selecciona una imagen');
            return;
        }
        
        if (!file.type.startsWith('image/')) {
            alert('Por favor selecciona un archivo de imagen válido');
            return;
        }
        
        if (file.size > 5 * 1024 * 1024) {
            alert('La imagen debe ser menor a 5MB');
            return;
        }
        
        // Comprimir imagen antes de guardar
        compressImage(file, 1200, 0.8).then(compressedImageData => {
            // Aplicar imagen de fondo
            if (currentEditingElement.classList.contains('header-background')) {
                currentEditingElement.style.background = `linear-gradient(rgba(10, 41, 71, 0.7), rgba(10, 41, 71, 0.7)), url('${compressedImageData}')`;
                currentEditingElement.style.backgroundSize = 'cover';
                currentEditingElement.style.backgroundPosition = 'center';
            } else {
                currentEditingElement.style.background = `linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url('${compressedImageData}')`;
                currentEditingElement.style.backgroundSize = 'cover';
                currentEditingElement.style.backgroundPosition = 'center';
            }
            
            // Guardar en localStorage usando función segura
            const elementId = currentEditingElement.id || currentEditingElement.className;
            if (safeSetItem(`background_${elementId}`, compressedImageData)) {
                closeEditPanel();
                alert('Fondo guardado exitosamente');
            }
        }).catch(() => {
            // Si falla la compresión, usar la imagen original
            const reader = new FileReader();
            reader.onload = function(e) {
                const imageData = e.target.result;
                
                // Aplicar imagen de fondo
                if (currentEditingElement.classList.contains('header-background')) {
                    currentEditingElement.style.background = `linear-gradient(rgba(10, 41, 71, 0.7), rgba(10, 41, 71, 0.7)), url('${imageData}')`;
                    currentEditingElement.style.backgroundSize = 'cover';
                    currentEditingElement.style.backgroundPosition = 'center';
                } else {
                    currentEditingElement.style.background = `linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url('${imageData}')`;
                    currentEditingElement.style.backgroundSize = 'cover';
                    currentEditingElement.style.backgroundPosition = 'center';
                }
                
                // Guardar en localStorage usando función segura
                const elementId = currentEditingElement.id || currentEditingElement.className;
                if (safeSetItem(`background_${elementId}`, imageData)) {
                    closeEditPanel();
                    alert('Fondo guardado exitosamente');
                }
            };
            
            reader.readAsDataURL(file);
        });
    };
    
    // Cambiar modo de selección de elementos
    window.toggleElementSelection = function() {
        elementSelectionMode = !elementSelectionMode;
        const overlay = document.getElementById('elementOverlay');
        
        if (elementSelectionMode) {
            overlay.style.display = 'block';
            overlay.style.pointerEvents = 'none';
            document.body.style.cursor = 'crosshair';
        } else {
            overlay.style.display = 'none';
            document.body.style.cursor = 'default';
        }
    };
    
    // Cambiar modo de edición de texto
    window.toggleTextEditing = function() {
        textEditingMode = !textEditingMode;
        
        if (textEditingMode) {
            document.body.style.cursor = 'text';
        } else {
            document.body.style.cursor = 'default';
        }
    };
    
    // Guardar todos los cambios
    window.saveAllChanges = function() {
        alert('Todos los cambios han sido guardados automáticamente en el navegador');
    };
    
    // Función para restaurar el fondo del header
    window.restoreHeaderBackground = function() {
        const headerBg = document.querySelector('.header-background');
        if (!headerBg) return;
        
        // Intentar restaurar desde diferentes fuentes
        const savedBg = localStorage.getItem('headerBackground');
        const savedBgKey = localStorage.getItem('background_header-background');
        
        if (savedBg) {
            headerBg.style.background = `linear-gradient(rgba(10, 41, 71, 0.7), rgba(10, 41, 71, 0.7)), url('${savedBg}')`;
            headerBg.style.backgroundSize = 'cover';
            headerBg.style.backgroundPosition = 'center';
            console.log('Fondo del header restaurado desde headerBackground');
        } else if (savedBgKey) {
            headerBg.style.backgroundImage = `url('${savedBgKey}')`;
            headerBg.style.backgroundSize = 'cover';
            headerBg.style.backgroundPosition = 'center';
            console.log('Fondo del header restaurado desde background_header-background');
        } else {
            // Restaurar fondo por defecto
            headerBg.style.background = 'radial-gradient(circle at 50% 50%, rgba(10,41,71,0.92) 0%, rgba(10,41,71,0.8) 50%, rgba(10,41,71,0.5) 80%, rgba(10,41,71,0.2) 100%)';
            console.log('Fondo del header restaurado al valor por defecto');
        }
    };
    
    // Función para verificar y corregir fondos al cargar la página
    function verifyAndFixBackgrounds() {
        const headerBg = document.querySelector('.header-background');
        if (headerBg && !headerBg.style.background && !headerBg.style.backgroundImage) {
            // Si el header no tiene fondo, restaurarlo
            window.restoreHeaderBackground();
        }
    }
    
    // Cargar cambios guardados al iniciar
    function loadSavedChanges() {
        // Cargar textos guardados
        const textElements = document.querySelectorAll('[id], [class]');
        textElements.forEach(element => {
            const elementId = element.id || element.className;
            const savedText = localStorage.getItem(`text_${elementId}`);
            if (savedText && element.textContent && !element.classList.contains('header-background')) {
                element.textContent = savedText;
            }
        });
        
        // Cargar imágenes guardadas
        const imageElements = document.querySelectorAll('img');
        imageElements.forEach(element => {
            const elementId = element.id || element.className;
            const savedImage = localStorage.getItem(`image_${elementId}`);
            if (savedImage) {
                element.src = savedImage;
            }
        });
        
        // Cargar fondos guardados SOLO si no hay fondos ya aplicados
        const backgroundElements = document.querySelectorAll('[id], [class]');
        backgroundElements.forEach(element => {
            const elementId = element.id || element.className;
            const savedBackground = localStorage.getItem(`background_${elementId}`);
            
            // Solo aplicar fondo guardado si el elemento no tiene fondo ya aplicado
            if (savedBackground && !element.style.backgroundImage && !element.style.background) {
                element.style.backgroundImage = `url('${savedBackground}')`;
                element.style.backgroundSize = 'cover';
                element.style.backgroundPosition = 'center';
            }
        });
        
        // Verificar y corregir fondos después de cargar cambios
        setTimeout(verifyAndFixBackgrounds, 100);
    }
    
    // Cargar cambios al iniciar
    loadSavedChanges();

    // Verificar formulario de agregar sermón al cargar
    setTimeout(() => {
        const addSermonForm = document.getElementById('addSermonForm');
        if (addSermonForm) {
            console.log('✅ Formulario de agregar sermón verificado al cargar');
        } else {
            console.log('❌ Formulario de agregar sermón NO encontrado al cargar');
        }
    }, 1000);

    // ===== CARGA AUTOMÁTICA DE SERMONES =====
    
    // Función para cargar automáticamente sermones en la página de sermones
    function cargarSermonesAutomaticamente() {
        if (document.getElementById('sermonesGrid')) {
            console.log('=== CARGA AUTOMÁTICA DE SERMONES ===');
            
            // Sincronizar primero
            if (typeof syncSermonesComplete === 'function') {
                syncSermonesComplete();
            }
            
            // Cargar sermones en la página
            if (typeof loadAllSermonesPage === 'function') {
                loadAllSermonesPage();
            }
            
            console.log('✅ Carga automática completada');
        }
    }
    
    // Ejecutar carga automática después de un breve delay
    setTimeout(cargarSermonesAutomaticamente, 1000);

    // ===== EDITOR VISUAL DE POSICIÓN DE TEXTOS =====
    let textPositionEditorActive = false;
    let currentTextElement = null;

    window.activateTextPositionEditor = function() {
        textPositionEditorActive = true;
        alert('Haz clic en cualquier texto principal para cambiar su alineación.');
        makeTextElementsPositionEditable();
    };
    window.deactivateTextPositionEditor = function() {
        textPositionEditorActive = false;
        removeTextPositionControls();
        currentTextElement = null;
    };

    function makeTextElementsPositionEditable() {
        const selectors = [
            '.feature-card h3', '.feature-card p',
            '.sermon-card h3', '.sermon-card .sermon-pastor-overlay',
            '.ministry-card h3', '.ministry-card p',
            '.hero-text h1', '.hero-text p'
        ];
        selectors.forEach(sel => {
            document.querySelectorAll(sel).forEach(el => {
                el.classList.add('text-position-editable');
                el.addEventListener('click', handleTextPositionClick);
                // Aplicar alineación guardada
                const key = 'textpos_' + (el.id || el.className || el.tagName);
                const align = localStorage.getItem(key);
                if (align) el.style.textAlign = align;
            });
        });
    }
    function removeTextPositionControls() {
        document.querySelectorAll('.text-position-editable').forEach(el => {
            el.classList.remove('text-position-editable');
            el.removeEventListener('click', handleTextPositionClick);
            const controls = el.parentNode.querySelector('.text-align-controls');
            if (controls) controls.remove();
        });
    }
    function handleTextPositionClick(e) {
        if (!textPositionEditorActive) return;
        e.stopPropagation();
        if (currentTextElement) {
            const prevControls = currentTextElement.parentNode.querySelector('.text-align-controls');
            if (prevControls) prevControls.remove();
        }
        currentTextElement = e.target;
        showTextAlignControls(currentTextElement);
    }
    function showTextAlignControls(el) {
        // Quitar controles previos
        const prev = el.parentNode.querySelector('.text-align-controls');
        if (prev) prev.remove();
        // Crear controles
        const controls = document.createElement('div');
        controls.className = 'text-align-controls';
        controls.style.display = 'flex';
        controls.style.gap = '6px';
        controls.style.margin = '6px 0';
        controls.innerHTML = `
            <button onclick="window.setTextAlign('left')" style="padding:2px 8px;">Izquierda</button>
            <button onclick="window.setTextAlign('center')" style="padding:2px 8px;">Centro</button>
            <button onclick="window.setTextAlign('right')" style="padding:2px 8px;">Derecha</button>
            <button onclick="window.deactivateTextPositionEditor()" style="padding:2px 8px;background:#dc3545;color:#fff;">Salir</button>
        `;
        el.parentNode.insertBefore(controls, el.nextSibling);
    }
    window.setTextAlign = function(align) {
        if (!currentTextElement) return;
        currentTextElement.style.textAlign = align;
        const key = 'textpos_' + (currentTextElement.id || currentTextElement.className || currentTextElement.tagName);
        localStorage.setItem(key, align);
    };
    // Aplicar alineación guardada al cargar
    document.addEventListener('DOMContentLoaded', function() {
        const selectors = [
            '.feature-card h3', '.feature-card p',
            '.sermon-card h3', '.sermon-card .sermon-pastor-overlay',
            '.ministry-card h3', '.ministry-card p',
            '.hero-text h1', '.hero-text p'
        ];
        selectors.forEach(sel => {
            document.querySelectorAll(sel).forEach(el => {
                const key = 'textpos_' + (el.id || el.className || el.tagName);
                const align = localStorage.getItem(key);
                if (align) el.style.textAlign = align;
            });
        });
    });

    // ===== FUNCIONES DE RECURSOS =====

    // Recursos: lógica de administración
    window.showRecursosCategoria = function(categoria) {
        // Marcar tab activa
        document.querySelectorAll('.recursos-tab').forEach(btn => btn.classList.remove('active'));
        const btn = Array.from(document.querySelectorAll('.recursos-tab')).find(b => b.textContent.toLowerCase().includes(categoria));
        if (btn) btn.classList.add('active');

        // Renderizar formulario y lista
        const panel = document.getElementById('recursosPanel');
        let html = '';
        if (categoria === 'audiolibros') {
            html += `<form id='formAudiolibro' class='recurso-form'>
                <label>Nombre:</label>
                <input type='text' id='nombreAudiolibro' required>
                <label>Archivo de audio (mp3, wav):</label>
                <input type='file' id='archivoAudiolibro' accept='audio/*'>
                <label>URL de audio:</label>
                <input type='url' id='urlAudiolibro' placeholder='https://'>
                <button type='submit' class='admin-btn'>Agregar Audiolibro</button>
            </form>`;
        } else if (categoria === 'textos') {
            html += `<form id='formTexto' class='recurso-form'>
                <label>Nombre:</label>
                <input type='text' id='nombreTexto' required>
                <label>Archivo PDF:</label>
                <input type='file' id='archivoTexto' accept='application/pdf' required>
                <button type='submit' class='admin-btn'>Agregar Texto</button>
            </form>`;
        } else if (categoria === 'videos') {
            html += `<form id='formVideo' class='recurso-form'>
                <label>Nombre:</label>
                <input type='text' id='nombreVideo' required>
                <label>Código embebido (iframe de YouTube, Vimeo, etc):</label>
                <textarea id='codigoVideo' required placeholder='<iframe ...'></textarea>
                <button type='submit' class='admin-btn'>Agregar Video</button>
            </form>`;
        }
        html += `<ul class='recursos-lista' id='listaRecursos'></ul>`;
        panel.innerHTML = html;
        renderRecursosLista(categoria);

        // Listeners para formularios
        if (categoria === 'audiolibros') {
            document.getElementById('formAudiolibro').onsubmit = function(e) {
                e.preventDefault();
                const nombre = document.getElementById('nombreAudiolibro').value;
                const archivo = document.getElementById('archivoAudiolibro').files[0];
                const url = document.getElementById('urlAudiolibro').value.trim();
                if (!archivo && !url) return alert('Selecciona un archivo de audio o ingresa una URL');
                if (url) {
                    if (!/^https?:\/\//.test(url)) return alert('La URL debe comenzar con http:// o https://');
                    addRecurso('audiolibros', {nombre, audio: url});
                    return;
                }
                if (archivo.size > 4 * 1024 * 1024) return alert('El archivo es demasiado grande (máx 4MB)');
                const reader = new FileReader();
                reader.onload = function(ev) {
                    const dataUrl = ev.target.result;
                    if (!/^data:audio\//.test(dataUrl)) {
                        alert('El archivo seleccionado no es un audio válido.');
                        return;
                    }
                    addRecurso('audiolibros', {nombre, audio: dataUrl});
                };
                reader.readAsDataURL(archivo);
            };
        } else if (categoria === 'textos') {
            document.getElementById('formTexto').onsubmit = function(e) {
                e.preventDefault();
                const nombre = document.getElementById('nombreTexto').value;
                const archivo = document.getElementById('archivoTexto').files[0];
                if (!archivo) return alert('Selecciona un PDF');
                const reader = new FileReader();
                reader.onload = function(ev) {
                    addRecurso('textos', {nombre, pdf: ev.target.result});
                };
                reader.readAsDataURL(archivo);
            };
        } else if (categoria === 'videos') {
            document.getElementById('formVideo').onsubmit = function(e) {
                e.preventDefault();
                const nombre = document.getElementById('nombreVideo').value;
                const codigo = document.getElementById('codigoVideo').value;
                addRecurso('videos', {nombre, embed: codigo});
            };
        }
    };

    function getRecursos() {
        return JSON.parse(localStorage.getItem('recursosData') || '{"audiolibros":[],"textos":[],"videos":[]}');
    }
    function setRecursos(data) {
        // Verificar si los datos contienen URLs simples (no archivos grandes)
        const hasLargeFiles = checkForLargeFiles(data);
        
        if (hasLargeFiles) {
            // Usar función segura para archivos grandes
            if (!safeSetItem('recursosData', JSON.stringify(data))) {
                throw new Error('No se pudo guardar los recursos debido a espacio insuficiente');
            }
        } else {
            // Para URLs simples, usar localStorage directamente
            try {
                localStorage.setItem('recursosData', JSON.stringify(data));
            } catch (e) {
                console.error('Error guardando recursos:', e);
                throw new Error('Error al guardar los recursos');
            }
        }
    }
    
    // Función para verificar si hay archivos grandes en los recursos
    function checkForLargeFiles(data) {
        let hasLargeFiles = false;
        
        ['audiolibros', 'textos', 'videos'].forEach(categoria => {
            if (data[categoria]) {
                data[categoria].forEach(recurso => {
                    // Verificar si es un data URL (archivo subido) vs URL externa
                    if (recurso.audio && recurso.audio.startsWith('data:')) {
                        if (recurso.audio.length > 100000) { // 100KB
                            hasLargeFiles = true;
                        }
                    }
                    if (recurso.pdf && recurso.pdf.startsWith('data:')) {
                        if (recurso.pdf.length > 100000) { // 100KB
                            hasLargeFiles = true;
                        }
                    }
                });
            }
        });
        
        return hasLargeFiles;
    }
    function addRecurso(cat, recurso) {
        try {
            console.log('Agregando recurso:', cat, recurso);
            
            // Verificar si es una URL simple (no un archivo subido)
            const isUrlSimple = (recurso.audio && recurso.audio.startsWith('http')) || 
                               (recurso.pdf && recurso.pdf.startsWith('http')) ||
                               (recurso.embed && recurso.embed.startsWith('http'));
            
            const data = getRecursos();
            data[cat].push(recurso);
            
            if (isUrlSimple) {
                // Para URLs simples, usar localStorage directamente
                console.log('Guardando URL simple directamente');
                localStorage.setItem('recursosData', JSON.stringify(data));
            } else {
                // Para archivos, usar la función segura
                console.log('Guardando archivo con función segura');
                setRecursos(data);
            }
            
            showRecursosCategoria(cat);
            console.log('✅ Recurso agregado exitosamente');
        } catch (e) {
            console.error('Error agregando recurso:', e);
            alert('Error al agregar el recurso. El almacenamiento está lleno. Por favor:\n\n1. Ejecuta cleanupLargeImages() en la consola\n2. O elimina algunos recursos existentes\n3. Usa archivos más pequeños');
        }
    }
    window.deleteRecurso = function(cat, idx) {
        console.log('Eliminando recurso:', cat, idx);
        try {
            const data = getRecursos();
            data[cat].splice(idx,1);
            setRecursos(data);
            showRecursosCategoria(cat);
            console.log('✅ Recurso eliminado exitosamente');
        } catch (e) {
            console.error('Error eliminando recurso:', e);
            alert('Error al eliminar el recurso. Intenta de nuevo.');
        }
    }
    function renderRecursosLista(cat) {
        const data = getRecursos();
        const lista = document.getElementById('listaRecursos');
        if (!lista) return;
        if (!data[cat] || !data[cat].length) {
            lista.innerHTML = '<li style="color:var(--gray);">No hay recursos aún.</li>';
            return;
        }
        let html = '';
        if (cat === 'audiolibros') {
            html = `<table class='recursos-table-admin'><thead><tr><th>Nombre</th><th>Escuchar</th><th>Descargar</th><th>Acciones</th></tr></thead><tbody>` +
                data[cat].map((r,i) => `
                    <tr id='recurso-${cat}-${i}'>
                        <td><span class='recurso-nombre' id='nombre-${cat}-${i}'>${r.nombre}</span></td>
                        <td><a href='#' onclick='event.preventDefault();let a=this.parentNode.parentNode.querySelector("audio");if(a)a.style.display="block";a.play();'><i class='fa fa-play'></i></a><audio src='${r.audio}' style='display:none;'></audio></td>
                        <td><a href='${r.audio}' download><i class='fa fa-download'></i></a></td>
                        <td><button onclick='editRecurso("${cat}",${i})'>Editar</button> <button onclick='deleteRecurso("${cat}",${i})'>Eliminar</button></td>
                    </tr>
                `).join('') + '</tbody></table>';
        } else if (cat === 'textos') {
            html = `<table class='recursos-table-admin'><thead><tr><th>Nombre</th><th>Ver</th><th>Descargar</th><th>Acciones</th></tr></thead><tbody>` +
                data[cat].map((r,i) => `
                    <tr id='recurso-${cat}-${i}'>
                        <td><span class='recurso-nombre' id='nombre-${cat}-${i}'>${r.nombre}</span></td>
                        <td><a href='${r.pdf}' target='_blank'><i class='fa fa-eye'></i></a></td>
                        <td><a href='${r.pdf}' download><i class='fa fa-download'></i></a></td>
                        <td><button onclick='editRecurso("${cat}",${i})'>Editar</button> <button onclick='deleteRecurso("${cat}",${i})'>Eliminar</button></td>
                    </tr>
                `).join('') + '</tbody></table>';
        } else if (cat === 'videos') {
            html = `<table class='recursos-table-admin'><thead><tr><th>Nombre</th><th>Ver</th><th>Acciones</th></tr></thead><tbody>` +
                data[cat].map((r,i) => `
                    <tr id='recurso-${cat}-${i}'>
                        <td><span class='recurso-nombre' id='nombre-${cat}-${i}'>${r.nombre}</span></td>
                        <td><a href='#' onclick='event.preventDefault();let d=this.parentNode.parentNode.querySelector(".video-embed");if(d)d.style.display="block";'><i class='fa fa-eye'></i></a><div class='video-embed' style='display:none;'>${r.embed}</div></td>
                        <td><button onclick='editRecurso("${cat}",${i})'>Editar</button> <button onclick='deleteRecurso("${cat}",${i})'>Eliminar</button></td>
                    </tr>
                `).join('') + '</tbody></table>';
        }
        lista.innerHTML = html;
    }
    window.editRecurso = function(cat, idx) {
        const data = getRecursos();
        const recurso = data[cat][idx];
        let editHtml = '';
        if(cat==='audiolibros') {
            editHtml = `<input type='text' id='editNombre' value='${recurso.nombre}' style='width:120px;'>`;
        }
        if(cat==='textos') {
            editHtml = `<input type='text' id='editNombre' value='${recurso.nombre}' style='width:120px;'>`;
        }
        if(cat==='videos') {
            editHtml = `<input type='text' id='editNombre' value='${recurso.nombre}' style='width:120px;'><br><textarea id='editCodigo' style='width:180px;height:40px;'>${recurso.embed}</textarea>`;
        }
        const li = document.getElementById(`recurso-${cat}-${idx}`);
        li.innerHTML = `
            <form onsubmit='saveEditRecurso("${cat}",${idx});return false;'>
                ${editHtml}
                <span class='recurso-actions'>
                    <button type='submit'>Guardar</button>
                    <button type='button' onclick='cancelEditRecurso()'>Cancelar</button>
                </span>
            </form>
        `;
    }
    window.saveEditRecurso = function(cat, idx) {
        console.log('Guardando edición de recurso:', cat, idx);
        try {
            const data = getRecursos();
            const recurso = data[cat][idx];
            
            const nombreInput = document.getElementById('editNombre');
            if (nombreInput) {
                recurso.nombre = nombreInput.value;
                console.log('Nombre actualizado:', recurso.nombre);
            }
            
            if(cat==='videos') {
                const codigoInput = document.getElementById('editCodigo');
                if (codigoInput) {
                    recurso.embed = codigoInput.value;
                    console.log('Código actualizado:', recurso.embed);
                }
            }
            
            setRecursos(data);
            showRecursosCategoria(cat);
            console.log('✅ Recurso editado exitosamente');
        } catch (e) {
            console.error('Error guardando edición de recurso:', e);
            alert('Error al guardar los cambios. El almacenamiento está lleno. Por favor:\n\n1. Ejecuta cleanupLargeImages() en la consola\n2. O elimina algunos recursos existentes');
        }
    }
    window.cancelEditRecurso = function() {
        // Simplemente recarga la categoría actual
        const active = document.querySelector('.recursos-tab.active');
        if(active) showRecursosCategoria(active.textContent.toLowerCase());
    }
    // Mostrar por defecto audiolibros
    if(document.getElementById('recursosPanel')) showRecursosCategoria('audiolibros');

    // ===== FUNCIONES PARA PÁGINA PÚBLICA DE RECURSOS =====
    
    // Función para mostrar recursos en la página pública
    window.showRecursosCategoriaPublic = function(categoria) {
        console.log('Mostrando categoría pública:', categoria);
        
        // Cerrar visor de PDF si está abierto
        const visorPDF = document.getElementById('visorPDFRecurso');
        if (visorPDF && visorPDF.style.display !== 'none') {
            visorPDF.style.display = 'none';
        }
        
        // Cerrar cualquier modal de video que esté abierto
        const videoModals = document.querySelectorAll('[style*="position: fixed"][style*="z-index: 10000"]');
        videoModals.forEach(modal => {
            if (modal.style.display === 'flex') {
                modal.remove();
            }
        });
        
        // Marcar tab activa
        document.querySelectorAll('.recursos-tab-public').forEach(btn => btn.classList.remove('active'));
        const btn = Array.from(document.querySelectorAll('.recursos-tab-public')).find(b => 
            b.textContent.toLowerCase().includes(categoria) || 
            (categoria === 'audiolibros' && b.textContent.toLowerCase().includes('audios'))
        );
        if (btn) btn.classList.add('active');

        // Renderizar lista de recursos
        renderRecursosListaPublic(categoria);
    };

    // Función para renderizar lista de recursos en la página pública
    function renderRecursosListaPublic(cat) {
        console.log('Renderizando recursos públicos para categoría:', cat);
        
        const data = getRecursos();
        const panel = document.getElementById('recursosPanelPublic');
        
        if (!panel) {
            console.error('No se encontró el panel de recursos públicos');
            return;
        }
        
        if (!data[cat] || !data[cat].length) {
            panel.innerHTML = '<div style="text-align: center; color: var(--gray); padding: 40px;">No hay recursos disponibles en esta categoría.</div>';
            return;
        }
        
        let html = '<div class="recursos-grid-public">';
        
        if (cat === 'audiolibros') {
            data[cat].forEach((recurso, i) => {
                html += `
                    <div class="recurso-card-public">
                        <div class="recurso-icon">
                            <i class="fas fa-headphones"></i>
                        </div>
                        <div class="recurso-content">
                            <h4>${recurso.nombre}</h4>
                            <div class="recurso-actions-public">
                                <button onclick="playAudio('${recurso.audio}')" class="btn-play">
                                    <i class="fas fa-play"></i> Escuchar
                                </button>
                                <a href="${recurso.audio}" download="${recurso.nombre}.mp3" class="btn-download">
                                    <i class="fas fa-download"></i> Descargar
                                </a>
                            </div>
                        </div>
                    </div>
                `;
            });
        } else if (cat === 'textos') {
            data[cat].forEach((recurso, i) => {
                html += `
                    <div class="recurso-card-public">
                        <div class="recurso-icon">
                            <i class="fas fa-file-pdf"></i>
                        </div>
                        <div class="recurso-content">
                            <h4>${recurso.nombre}</h4>
                            <div class="recurso-actions-public">
                                <button onclick="verPDF('${recurso.pdf}', '${recurso.nombre}')" class="btn-view">
                                    <i class="fas fa-eye"></i> Ver
                                </button>
                                <a href="${recurso.pdf}" download="${recurso.nombre}.pdf" class="btn-download">
                                    <i class="fas fa-download"></i> Descargar
                                </a>
                            </div>
                        </div>
                    </div>
                `;
            });
        } else if (cat === 'videos') {
            data[cat].forEach((recurso, i) => {
                html += `
                    <div class="recurso-card-public">
                        <div class="recurso-icon">
                            <i class="fas fa-video"></i>
                        </div>
                        <div class="recurso-content">
                            <h4>${recurso.nombre}</h4>
                            <div class="recurso-actions-public">
                                <button onclick="verVideo('${recurso.embed}', '${recurso.nombre}')" class="btn-view">
                                    <i class="fas fa-play"></i> Ver Video
                                </button>
                            </div>
                        </div>
                    </div>
                `;
            });
        }
        
        html += '</div>';
        panel.innerHTML = html;
        
        console.log(`Renderizados ${data[cat].length} recursos para categoría ${cat}`);
    }

    // Función para reproducir audio mejorada con soporte para Google Drive
    window.playAudio = function(audioUrl) {
        console.log('Intentando reproducir audio:', audioUrl);
        
        // Detectar si es una URL de Google Drive
        const isGoogleDrive = audioUrl.includes('drive.google.com');
        const isDropbox = audioUrl.includes('dropbox.com');
        
        // Crear modal de reproductor
        const modal = document.createElement('div');
        modal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.8);
            z-index: 10000;
            display: flex;
            align-items: center;
            justify-content: center;
        `;
        
        let playerContent = '';
        
        if (isGoogleDrive) {
            // Para Google Drive, usar iframe con el visor
            const fileId = audioUrl.match(/[-\w]{25,}/);
            if (fileId) {
                const embedUrl = `https://drive.google.com/file/d/${fileId[0]}/preview`;
                playerContent = `
                    <iframe src="${embedUrl}" width="600" height="400" frameborder="0" allowfullscreen></iframe>
                    <div style="margin-top: 15px;">
                        <a href="${audioUrl}" download style="background: #28a745; color: white; text-decoration: none; padding: 10px 20px; border-radius: 4px; display: inline-block;">Descargar</a>
                    </div>
                `;
            }
        } else if (isDropbox) {
            // Para Dropbox, usar iframe con el visor
            const dropboxUrl = audioUrl.replace('www.dropbox.com', 'dl.dropboxusercontent.com').replace('?dl=0', '');
            playerContent = `
                <audio controls style="width: 100%; max-width: 500px; margin: 20px 0;">
                    <source src="${dropboxUrl}" type="audio/mpeg">
                    <source src="${dropboxUrl}" type="audio/wav">
                    <source src="${dropboxUrl}" type="audio/ogg">
                    Tu navegador no soporta el elemento de audio.
                </audio>
                <div style="margin-top: 15px;">
                    <a href="${dropboxUrl}" download style="background: #28a745; color: white; text-decoration: none; padding: 10px 20px; border-radius: 4px; display: inline-block;">Descargar</a>
                </div>
            `;
        } else {
            // Para otros servicios, usar el reproductor de audio normal
            playerContent = `
                <audio controls style="width: 100%; max-width: 500px; margin: 20px 0;">
                    <source src="${audioUrl}" type="audio/mpeg">
                    <source src="${audioUrl}" type="audio/wav">
                    <source src="${audioUrl}" type="audio/ogg">
                    Tu navegador no soporta el elemento de audio.
                </audio>
                <div style="margin-top: 15px;">
                    <a href="${audioUrl}" download style="background: #28a745; color: white; text-decoration: none; padding: 10px 20px; border-radius: 4px; display: inline-block;">Descargar</a>
                </div>
            `;
        }
        
        modal.innerHTML = `
            <div style="background: white; padding: 30px; border-radius: 8px; max-width: 90%; max-height: 90%; overflow: auto; text-align: center;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
                    <h3 style="margin: 0; color: var(--primary-color);">Reproductor de Audio</h3>
                    <button onclick="this.parentElement.parentElement.parentElement.remove()" style="background: #dc3545; color: white; border: none; padding: 8px 16px; border-radius: 4px; cursor: pointer; font-size: 18px;">×</button>
                </div>
                ${playerContent}
                <div style="margin-top: 20px; font-size: 12px; color: #666;">
                    <p>💡 Tip: Si el audio no se reproduce, haz clic en "Abrir en Google Drive" para reproducirlo directamente.</p>
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
        
        // Si es Google Drive, mostrar instrucciones adicionales
        if (isGoogleDrive) {
            setTimeout(() => {
                const instructions = `
🎵 INSTRUCCIONES PARA GOOGLE DRIVE:

1. El reproductor de Google Drive aparecerá arriba
2. Haz clic en el botón de reproducción ▶️
3. Si no funciona, haz clic en "Abrir en Google Drive"
4. En Google Drive, haz clic en "Descargar" para escuchar

💡 Para mejor compatibilidad:
- Asegúrate de que el archivo esté configurado como "Cualquier persona con el enlace puede ver"
- Usa formatos como MP3, WAV o OGG
                `;
                console.log(instructions);
            }, 1000);
        }
    };

    // Función para ver PDF
    window.verPDF = function(pdfUrl, titulo) {
        const visor = document.getElementById('visorPDFRecurso');
        const tituloElement = document.getElementById('visorPDFTitulo');
        const container = document.getElementById('visorPDFContainer');
        const loading = document.getElementById('visorPDFLoading');
        const controls = document.getElementById('visorPDFControls');
        
        tituloElement.textContent = titulo;
        visor.style.display = 'block';
        loading.style.display = 'block';
        controls.style.display = 'none';
        
        // Cargar PDF con PDF.js
        pdfjsLib.getDocument(pdfUrl).promise.then(function(pdf) {
            loading.style.display = 'none';
            controls.style.display = 'block';
            
            let currentPage = 1;
            const canvas = document.getElementById('visorPDFCanvas');
            const ctx = canvas.getContext('2d');
            
            function renderPage(pageNum) {
                pdf.getPage(pageNum).then(function(page) {
                    const viewport = page.getViewport({scale: 1.5});
                    canvas.height = viewport.height;
                    canvas.width = viewport.width;
                    
                    const renderContext = {
                        canvasContext: ctx,
                        viewport: viewport
                    };
                    page.render(renderContext);
                    
                    document.getElementById('visorPDFPageInfo').textContent = `Página ${pageNum} de ${pdf.numPages}`;
                });
            }
            
            renderPage(currentPage);
            
            window.prevPage = function() {
                if (currentPage > 1) {
                    currentPage--;
                    renderPage(currentPage);
                }
            };
            
            window.nextPage = function() {
                if (currentPage < pdf.numPages) {
                    currentPage++;
                    renderPage(currentPage);
                }
            };
        }).catch(function(error) {
            loading.style.display = 'none';
            alert('Error al cargar el PDF: ' + error.message);
        });
    };

    // Función para ver video
    window.verVideo = function(embedCode, titulo) {
        const modal = document.createElement('div');
        modal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.8);
            z-index: 10000;
            display: flex;
            align-items: center;
            justify-content: center;
        `;
        
        modal.innerHTML = `
            <div style="background: white; padding: 20px; border-radius: 8px; max-width: 90%; max-height: 90%; overflow: auto;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px;">
                    <h3 style="margin: 0; color: var(--primary-color);">${titulo}</h3>
                    <button onclick="this.parentElement.parentElement.parentElement.remove()" style="background: var(--primary-color); color: white; border: none; padding: 8px 16px; border-radius: 4px; cursor: pointer;">Cerrar</button>
                </div>
                <div style="width: 100%; max-width: 800px;">
                    ${embedCode}
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
    };

    // Función para cerrar visor de PDF
    window.cerrarPDFRecurso = function() {
        document.getElementById('visorPDFRecurso').style.display = 'none';
    };

    // Cargar recursos por defecto en la página pública
    if (document.getElementById('recursosPanelPublic')) {
        console.log('Página de recursos pública detectada, cargando categoría por defecto...');
        showRecursosCategoriaPublic('textos');
    }

    // ===== FUNCIONES PARA PÁGINA "NOSOTROS" =====
    
    // Función para cargar contenido de la página "Nosotros"
    function loadNosotrosContent() {
        const content = localStorage.getItem('nosotrosContent');
        const container = document.getElementById('nosotrosContent');
        
        if (content && container) {
            // Crear una copia del contenido sin los controles de edición para la página pública
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = content;
            // Remover todos los controles de edición para mostrar solo el contenido
            const controls = tempDiv.querySelectorAll('.div-controls');
            controls.forEach(control => control.remove());
            container.innerHTML = tempDiv.innerHTML;
            console.log('Contenido de "Nosotros" cargado desde localStorage (sin controles)');
        } else if (container) {
            container.innerHTML = `
                <div style="text-align: center; color: var(--gray); padding: 40px;">
                    <i class="fas fa-info-circle" style="font-size: 3rem; margin-bottom: 20px;"></i>
                    <h3>Contenido en construcción</h3>
                    <p>El contenido de esta página se puede gestionar desde el panel de administración.</p>
                </div>
            `;
        }
    }
    
    // Función para guardar contenido de la página "Nosotros"
    function saveNosotrosContent(content) {
        localStorage.setItem('nosotrosContent', content);
        loadNosotrosContent();
        updateNosotrosPreview();
    }
    
    // Función para actualizar la vista previa en el panel de administración
    function updateNosotrosPreview() {
        const preview = document.getElementById('nosotrosPreview');
        if (preview) {
            const content = localStorage.getItem('nosotrosContent');
            if (content) {
                // En el panel de administración, mostrar el contenido CON controles de edición
                preview.innerHTML = content;
                console.log('Vista previa de "Nosotros" actualizada en el panel de administración');
            } else {
                preview.innerHTML = '<p style="color: var(--gray); text-align: center;">Vista previa del contenido de la página "Nosotros"</p>';
            }
        }
    }

    // ===== FUNCIONES DE SERMONES COMPLETAS =====

    // Función para mostrar todos los sermones en el panel de administración
    window.showAllSermones = function() {
        const panel = document.getElementById('allSermonesPanel');
        const list = document.getElementById('allSermonesList');
        
        if (panel.style.display === 'none') {
            panel.style.display = 'block';
            renderAllSermonesList();
        } else {
            panel.style.display = 'none';
        }
    };

    // Renderizar lista de todos los sermones
    function renderAllSermonesList() {
        const list = document.getElementById('allSermonesList');
        const sermones = getAllSermones();
        if (sermones.length === 0) {
            list.innerHTML = '<p style="text-align: center; color: var(--gray); padding: 20px;">No hay sermones guardados.</p>';
            return;
        }
        let html = '';
        sermones.forEach(sermon => {
            const fecha = new Date(sermon.fecha).toLocaleDateString('es-ES');
            html += `
                <div class="sermon-admin-item" style="margin-bottom: 15px; padding: 15px; border: 1px solid var(--light-gray); border-radius: 8px; background: white;">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                        <h5 style="margin: 0; color: var(--primary-color);">${sermon.nombre || 'Sin título'}</h5>
                        <div style="display: flex; gap: 5px;">
                            <button onclick="editSermon(${sermon.id})" style="padding: 5px 10px; background: var(--primary-color); color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 12px;">Editar</button>
                            <button onclick="editSermonImage(${sermon.id})" style="padding: 5px 10px; background: #ffc107; color: #222; border: none; border-radius: 4px; cursor: pointer; font-size: 12px;">Editar imagen</button>
                            <button onclick="deleteSermonConfirm(${sermon.id})" style="padding: 5px 10px; background: #dc3545; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 12px;">Eliminar</button>
                        </div>
                    </div>
                    <p style="margin: 5px 0; color: var(--gray);"><strong>Pastor:</strong> ${sermon.pastor || 'No especificado'}</p>
                    <p style="margin: 5px 0; color: var(--gray);"><strong>Fecha:</strong> ${fecha}</p>
                    ${sermon.imagen ? `<img src="${sermon.imagen}" alt="Imagen del sermón" style="max-width: 120px; max-height: 60px; border-radius: 6px; margin-bottom: 5px;">` : ''}
                    ${sermon.embed ? '<p style="margin: 5px 0; color: var(--gray);"><strong>Video:</strong> Disponible</p>' : ''}
                    <input type="file" id="sermon-image-input-${sermon.id}" accept="image/*" style="display:none" onchange="saveSermonImage(${sermon.id}, this)">
                </div>
            `;
        });
        list.innerHTML = html;
    }

    // Editar imagen de sermón
    window.editSermonImage = function(id) {
        const input = document.getElementById(`sermon-image-input-${id}`);
        if (input) input.click();
    };

    window.saveSermonImage = function(id, input) {
        const file = input.files[0];
        if (!file) return;
        if (!file.type.startsWith('image/')) {
            alert('Por favor selecciona un archivo de imagen válido');
            return;
        }
        if (file.size > 2 * 1024 * 1024) {
            alert('La imagen es demasiado grande. Máximo 2MB.');
            return;
        }
        compressImage(file, 600, 0.6).then(compressedImage => {
            const sermones = getAllSermones();
            const idx = sermones.findIndex(s => s.id === id);
            if (idx !== -1) {
                sermones[idx].imagen = compressedImage;
                saveAllSermones(sermones);
                alert('Imagen actualizada correctamente');
                renderAllSermonesList();
                if (typeof renderUltimosSermones === 'function') renderUltimosSermones();
            }
        }).catch(() => {
            const reader = new FileReader();
            reader.onload = function(ev) {
                const sermones = getAllSermones();
                const idx = sermones.findIndex(s => s.id === id);
                if (idx !== -1) {
                    sermones[idx].imagen = ev.target.result;
                    saveAllSermones(sermones);
                    alert('Imagen actualizada correctamente');
                    renderAllSermonesList();
                    if (typeof renderUltimosSermones === 'function') renderUltimosSermones();
                }
            };
            reader.readAsDataURL(file);
        });
    };

    // Función para editar un sermón
    window.editSermon = function(id) {
        const sermones = getAllSermones();
        const sermon = sermones.find(s => s.id === id);
        
        if (!sermon) return;
        
        const newNombre = prompt('Nuevo nombre del sermón:', sermon.nombre || '');
        if (newNombre === null) return;
        
        const newPastor = prompt('Nuevo nombre del pastor:', sermon.pastor || '');
        if (newPastor === null) return;
        
        const success = updateSermon(id, {
            nombre: newNombre,
            pastor: newPastor
        });
        
        if (success) {
            alert('Sermón actualizado correctamente');
            renderAllSermonesList();
        } else {
            alert('Error al actualizar el sermón');
        }
    };

    // Función para actualizar un sermón
    function updateSermon(id, updatedSermon) {
        const sermones = getAllSermones();
        const index = sermones.findIndex(s => s.id === id);
        if (index !== -1) {
            sermones[index] = { ...sermones[index], ...updatedSermon };
            saveAllSermones(sermones);
            return true;
        }
        return false;
    }

    // Función para confirmar eliminación de sermón
    window.deleteSermonConfirm = function(id) {
        if (confirm('¿Estás seguro de que quieres eliminar este sermón? Esta acción no se puede deshacer.')) {
            const success = deleteSermon(id);
            if (success) {
                alert('Sermón eliminado correctamente');
                renderAllSermonesList();
                
                // Sincronizar con todas las páginas
                syncSermonesAfterDelete();
            } else {
                alert('Error al eliminar el sermón');
            }
        }
    };

    // Función para eliminar un sermón
    function deleteSermon(id) {
        const sermones = getAllSermones();
        const sermonesToDelete = sermones.find(s => s.id === id);
        
        if (!sermonesToDelete) {
            console.log('Sermón no encontrado para eliminar');
            return false;
        }
        
        // Eliminar de allSermones
        const filteredSermones = sermones.filter(s => s.id !== id);
        saveAllSermones(filteredSermones);
        
        // También eliminar de ultimosSermones si existe
        const ultimosSermones = JSON.parse(localStorage.getItem('ultimosSermones') || '[]');
        const ultimosFiltrados = ultimosSermones.filter(s => 
            !(s.nombre === sermonesToDelete.nombre && s.pastor === sermonesToDelete.pastor)
        );
        localStorage.setItem('ultimosSermones', JSON.stringify(ultimosFiltrados));
        
        console.log(`Sermón eliminado: ${sermonesToDelete.nombre}`);
        return true;
    }

    // Función para sincronizar después de eliminar
    function syncSermonesAfterDelete() {
        console.log('=== SINCRONIZANDO DESPUÉS DE ELIMINAR ===');
        
        // Actualizar página de sermones si estamos en ella
        if (document.getElementById('sermonesGrid')) {
            loadAllSermonesPage();
            console.log('✅ Página de sermones actualizada');
        }
        
        // Actualizar página principal si estamos en ella
        if (document.querySelector('.sermons-grid')) {
            renderUltimosSermones();
            console.log('✅ Sección últimos sermones actualizada');
        }
        
        // Sincronizar completamente
        if (typeof syncSermonesComplete === 'function') {
            syncSermonesComplete();
            console.log('✅ Sincronización completa realizada');
        }
    }

    // ===== FUNCIONES DE LIMPIEZA ADICIONALES =====

    // Función para limpiar recursos grandes específicamente
    window.cleanupLargeResources = function() {
        try {
            const recursosData = localStorage.getItem('recursosData');
            if (!recursosData) {
                alert('No hay recursos para limpiar');
                return 0;
            }
            
            const recursos = JSON.parse(recursosData);
            let totalCleaned = 0;
            let cleanedCount = 0;
            
            ['audiolibros', 'textos'].forEach(cat => {
                if (recursos[cat]) {
                    const originalLength = recursos[cat].length;
                    recursos[cat] = recursos[cat].filter(recurso => {
                        if (recurso.audio && recurso.audio.length > 300000) { // 300KB
                            totalCleaned += recurso.audio.length;
                            cleanedCount++;
                            console.log(`Removido recurso ${recurso.nombre} (${(recurso.audio.length/1024).toFixed(1)}KB)`);
                            return false;
                        }
                        if (recurso.pdf && recurso.pdf.length > 300000) { // 300KB
                            totalCleaned += recurso.pdf.length;
                            cleanedCount++;
                            console.log(`Removido recurso ${recurso.nombre} (${(recurso.pdf.length/1024).toFixed(1)}KB)`);
                            return false;
                        }
                        return true;
                    });
                }
            });
            
            if (cleanedCount > 0) {
                localStorage.setItem('recursosData', JSON.stringify(recursos));
                const message = `Limpieza de recursos completada:\n${cleanedCount} recursos eliminados\n${(totalCleaned/1024/1024).toFixed(2)}MB liberados`;
                alert(message);
            } else {
                alert('No se encontraron recursos grandes para eliminar');
            }
            
            return totalCleaned;
        } catch (e) {
            console.error('Error limpiando recursos:', e);
            alert('Error al limpiar recursos: ' + e.message);
            return 0;
        }
    };

    // Función para mostrar información del almacenamiento
    window.showStorageInfo = function() {
        try {
            let totalSize = 0;
            const items = [];
            
            for (let i = 0; i < localStorage.length; i++) {
                const key = localStorage.key(i);
                const value = localStorage.getItem(key);
                const size = new Blob([value]).size;
                totalSize += size;
                items.push({ key, size });
            }
            
            const totalMB = (totalSize / (1024 * 1024)).toFixed(2);
            const maxSize = 5; // localStorage típicamente tiene 5-10MB
            
            let info = `Uso de almacenamiento: ${totalMB}MB / ~${maxSize}MB\n\n`;
            info += 'Elementos más grandes:\n';
            
            items.sort((a, b) => b.size - a.size);
            items.slice(0, 5).forEach(item => {
                const sizeKB = (item.size / 1024).toFixed(1);
                info += `• ${item.key}: ${sizeKB}KB\n`;
            });
            
            // Información específica sobre recursos
            const recursosData = localStorage.getItem('recursosData');
            if (recursosData) {
                try {
                    const recursos = JSON.parse(recursosData);
                    let recursosSize = 0;
                    let recursosCount = 0;
                    
                    ['audiolibros', 'textos', 'videos'].forEach(cat => {
                        if (recursos[cat]) {
                            recursosCount += recursos[cat].length;
                            recursos[cat].forEach(recurso => {
                                if (recurso.audio) recursosSize += recurso.audio.length;
                                if (recurso.pdf) recursosSize += recurso.pdf.length;
                            });
                        }
                    });
                    
                    if (recursosCount > 0) {
                        info += `\nRecursos: ${recursosCount} elementos (${(recursosSize/1024/1024).toFixed(2)}MB)\n`;
                    }
                } catch (e) {
                    console.error('Error analizando recursos:', e);
                }
            }
            
            info += '\nOpciones:\n';
            info += '1. Ejecuta cleanupLargeImages() para eliminar las 3 imágenes más grandes\n';
            info += '2. Ejecuta cleanupLargeResources() para eliminar recursos grandes\n';
            info += '3. Ejecuta clearAllStorage() para limpiar todo\n';
            
            alert(info);
        } catch (e) {
            alert('Error al obtener información del almacenamiento: ' + e.message);
        }
    };

    // ===== FUNCIONES DE ADMINISTRACIÓN =====

    // Función para agregar un nuevo div de texto
    window.addTextDiv = function() {
        console.log('Función addTextDiv llamada desde global');
        const divId = 'text-div-' + Date.now();
        const newDiv = `
            <div id="${divId}" class="nosotros-text-div" style="margin: 20px 0; padding: 20px; background: white; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
                <div class="div-controls" style="margin-bottom: 10px; padding: 10px; background: #f8f9fa; border-radius: 4px;">
                    <button onclick="editTextDiv('${divId}')" style="margin-right: 5px; padding: 5px 10px; background: var(--primary-color); color: white; border: none; border-radius: 4px; cursor: pointer;">Editar</button>
                    <button onclick="editTitleDiv('${divId}')" style="margin-right: 5px; padding: 5px 10px; background: #007bff; color: white; border: none; border-radius: 4px; cursor: pointer;">Editar Título</button>
                    <button onclick="deleteTextDiv('${divId}')" style="padding: 5px 10px; background: #dc3545; color: white; border: none; border-radius: 4px; cursor: pointer;">Eliminar</button>
                    <button onclick="moveTextDiv('${divId}', 'up')" style="margin-left: 5px; padding: 5px 10px; background: #6c757d; color: white; border: none; border-radius: 4px; cursor: pointer;">↑</button>
                    <button onclick="moveTextDiv('${divId}', 'down')" style="margin-left: 2px; padding: 5px 10px; background: #6c757d; color: white; border: none; border-radius: 4px; cursor: pointer;">↓</button>
                </div>
                <div class="div-content">
                    <h3>Nuevo Título</h3>
                    <p>Escribe aquí el contenido de tu div. Puedes usar HTML básico como <strong>negrita</strong>, <em>cursiva</em>, enlaces, etc.</p>
                </div>
            </div>
        `;
        
        // Obtener el contenido actual guardado
        const currentContent = localStorage.getItem('nosotrosContent') || '';
        
        // Agregar el nuevo div al contenido existente
        const updatedContent = currentContent + newDiv;
        
        // Guardar en localStorage
        localStorage.setItem('nosotrosContent', updatedContent);
        
        // Actualizar la vista previa en el panel de administración
        const preview = document.getElementById('nosotrosPreview');
        if (preview) {
            // En el panel de administración, mostrar el contenido CON controles de edición
            preview.innerHTML = updatedContent;
        }
        
        alert('Div de texto agregado. Haz clic en "Editar" para modificar el contenido.');
    };

    // Función global para editar div de texto con herramientas de formato
    window.editTextDiv = function(divId) {
        console.log('Editando div:', divId);
        // Obtener el contenido actual desde localStorage
        const currentContent = localStorage.getItem('nosotrosContent') || '';
        if (!currentContent) {
            alert('No hay contenido guardado para editar.');
            return;
        }
        // Crear un elemento temporal para buscar el div específico
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = currentContent;
        const div = tempDiv.querySelector(`#${divId}`);
        if (!div) {
            console.error('No se encontró el div con ID:', divId);
            alert('No se encontró el div a editar. Intenta recargar la página.');
            return;
        }
        const contentDiv = div.querySelector('.div-content');
        if (!contentDiv) {
            console.error('No se encontró el contenido del div');
            alert('Error: No se pudo encontrar el contenido del div.');
            return;
        }
        const h3 = contentDiv.querySelector('h3');
        const currentTitle = h3 ? h3.textContent : '';
        // El contenido es todo menos el h3
        let currentContentHtml = '';
        if (h3) {
            // Clonar el contenido y quitar el h3
            const clone = contentDiv.cloneNode(true);
            const h3Clone = clone.querySelector('h3');
            if (h3Clone) h3Clone.remove();
            currentContentHtml = clone.innerHTML.trim();
        } else {
            currentContentHtml = contentDiv.innerHTML.trim();
        }
        
        // Crear modal de edición mejorado con herramientas de formato
        const modal = document.createElement('div');
        modal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.7);
            z-index: 10000;
            display: flex;
            align-items: center;
            justify-content: center;
        `;
        modal.innerHTML = `
            <div style="background: white; padding: 30px; border-radius: 8px; max-width: 90%; max-height: 90%; overflow: auto; min-width: 600px;">
                <h3 style="margin: 0 0 20px 0; color: var(--primary-color);">Editor de Div de Texto</h3>
                
                <!-- Sección del título -->
                <div style="margin-bottom: 20px;">
                    <label style='font-weight:bold;'>Título:</label>
                    <input id="editDivTitle" type="text" value="${currentTitle.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')}" style="width:100%;margin-bottom:10px;padding:8px 10px;font-size:1.1em;font-weight:bold;color:#0a2947;border:1px solid #ddd;border-radius:4px;" />
                </div>
                
                <!-- Herramientas de formato -->
                <div style="margin-bottom: 15px; padding: 10px; background: #f8f9fa; border-radius: 4px;">
                    <label style='font-weight:bold; margin-bottom: 10px; display: block;'>Herramientas de Formato:</label>
                    <div style="display: flex; flex-wrap: wrap; gap: 10px; margin-bottom: 10px;">
                        <button onclick="applyFormat('bold')" style="padding: 5px 10px; background: #007bff; color: white; border: none; border-radius: 4px; cursor: pointer; font-weight: bold;">B</button>
                        <button onclick="applyFormat('italic')" style="padding: 5px 10px; background: #007bff; color: white; border: none; border-radius: 4px; cursor: pointer; font-style: italic;">I</button>
                        <button onclick="applyFormat('underline')" style="padding: 5px 10px; background: #007bff; color: white; border: none; border-radius: 4px; cursor: pointer; text-decoration: underline;">U</button>
                        <button onclick="applyFormat('link')" style="padding: 5px 10px; background: #28a745; color: white; border: none; border-radius: 4px; cursor: pointer;">🔗</button>
                    </div>
                    <div style="display: flex; flex-wrap: wrap; gap: 10px; margin-bottom: 10px;">
                        <select id="fontSize" onchange="applyFontSize()" style="padding: 5px; border: 1px solid #ddd; border-radius: 4px;">
                            <option value="">Tamaño</option>
                            <option value="12px">Pequeño</option>
                            <option value="16px">Normal</option>
                            <option value="18px">Mediano</option>
                            <option value="20px">Grande</option>
                            <option value="24px">Muy Grande</option>
                        </select>
                        <select id="textColor" onchange="applyTextColor()" style="padding: 5px; border: 1px solid #ddd; border-radius: 4px;">
                            <option value="">Color</option>
                            <option value="#000000">Negro</option>
                            <option value="#0a2947">Azul Oscuro</option>
                            <option value="#007bff">Azul</option>
                            <option value="#28a745">Verde</option>
                            <option value="#dc3545">Rojo</option>
                            <option value="#6c757d">Gris</option>
                        </select>
                        <select id="textAlign" onchange="applyTextAlign()" style="padding: 5px; border: 1px solid #ddd; border-radius: 4px;">
                            <option value="">Alineación</option>
                            <option value="left">Izquierda</option>
                            <option value="center">Centro</option>
                            <option value="right">Derecha</option>
                            <option value="justify">Justificado</option>
                        </select>
                    </div>
                    <div style="display: flex; flex-wrap: wrap; gap: 10px;">
                        <button onclick="applyFormat('list')" style="padding: 5px 10px; background: #ffc107; color: #222; border: none; border-radius: 4px; cursor: pointer;">📋 Lista</button>
                        <button onclick="applyFormat('quote')" style="padding: 5px 10px; background: #17a2b8; color: white; border: none; border-radius: 4px; cursor: pointer;">💬 Cita</button>
                        <button onclick="applyFormat('code')" style="padding: 5px 10px; background: #6f42c1; color: white; border: none; border-radius: 4px; cursor: pointer;">💻 Código</button>
                    </div>
                </div>
                
                <!-- Área de contenido -->
                <div style="margin-bottom: 20px;">
                    <label style='font-weight:bold;'>Contenido:</label>
                    <textarea id="editDivContent" style="width: 100%; height: 200px; padding: 10px; border: 1px solid #ddd; border-radius: 4px; font-family: Arial, sans-serif; resize: vertical; line-height: 1.5;">${currentContentHtml}</textarea>
                </div>
                
                <!-- Botones de acción -->
                <div style="margin-top: 20px; text-align: right;">
                    <button onclick="saveEditDivContent('${divId}')" style="padding: 10px 20px; background: var(--primary-color); color: white; border: none; border-radius: 4px; cursor: pointer; margin-right: 10px;">Guardar</button>
                    <button onclick="cancelEdit()" style="padding: 10px 20px; background: #6c757d; color: white; border: none; border-radius: 4px; cursor: pointer;">Cancelar</button>
                </div>
            </div>
        `;
        document.body.appendChild(modal);
        
        // Inicializar el editor
        setTimeout(() => {
            const titleInput = document.getElementById('editDivTitle');
            const contentTextarea = document.getElementById('editDivContent');
            if (titleInput) titleInput.focus();
            
            // Hacer el textarea editable con formato
            if (contentTextarea) {
                contentTextarea.addEventListener('keydown', function(e) {
                    if (e.ctrlKey || e.metaKey) {
                        switch(e.key) {
                            case 'b':
                                e.preventDefault();
                                applyFormat('bold');
                                break;
                            case 'i':
                                e.preventDefault();
                                applyFormat('italic');
                                break;
                            case 'u':
                                e.preventDefault();
                                applyFormat('underline');
                                break;
                        }
                    }
                });
            }
        }, 100);
    };

    // Función para guardar el contenido y título editados
    window.saveEditDivContent = function(divId) {
        console.log('=== GUARDANDO DIV ===');
        console.log('DivId:', divId);
        
        const titleInput = document.getElementById('editDivTitle');
        const contentTextarea = document.getElementById('editDivContent');
        
        if (!titleInput || !contentTextarea) {
            console.error('No se encontraron los elementos de entrada');
            alert('Error: No se encontraron los elementos de entrada. Intenta recargar la página.');
            return;
        }
        
        const newTitle = titleInput.value.trim();
        const newContent = contentTextarea.value.trim();
        
        console.log('Nuevo título:', newTitle);
        console.log('Nuevo contenido:', newContent);
        
        if (!newTitle) {
            alert('El título no puede estar vacío.');
            return;
        }
        
        // Obtener el contenido actual desde localStorage
        const currentContent = localStorage.getItem('nosotrosContent') || '';
        console.log('Contenido actual:', currentContent);
        
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = currentContent;
        const div = tempDiv.querySelector(`#${divId}`);
        
        if (!div) {
            console.error('No se encontró el div con ID:', divId);
            alert('No se encontró el div a editar. Intenta recargar la página.');
            return;
        }
        
        const contentDiv = div.querySelector('.div-content');
        if (!contentDiv) {
            console.error('No se encontró el contenido del div');
            alert('Error: No se pudo encontrar el contenido del div.');
            return;
        }
        
        // Actualizar el título y el contenido
        let h3 = contentDiv.querySelector('h3');
        if (!h3) {
            h3 = document.createElement('h3');
            contentDiv.insertBefore(h3, contentDiv.firstChild);
        }
        h3.textContent = newTitle;
        h3.style.color = '#0a2947';
        h3.style.fontWeight = 'bold';
        
        // Actualizar el resto del contenido
        // Eliminar todo menos el h3
        while (contentDiv.children.length > 1) contentDiv.removeChild(contentDiv.lastChild);
        
        // Insertar el nuevo contenido (puede contener HTML)
        if (newContent) {
            const tempContent = document.createElement('div');
            tempContent.innerHTML = newContent;
            while (tempContent.firstChild) {
                contentDiv.appendChild(tempContent.firstChild);
            }
        }
        
        // Guardar el contenido actualizado
        const updatedContent = tempDiv.innerHTML;
        console.log('Contenido actualizado:', updatedContent);
        
        localStorage.setItem('nosotrosContent', updatedContent);
        console.log('✅ Contenido guardado en localStorage');
        
        // Actualizar la vista previa en el panel de administración
        const preview = document.getElementById('nosotrosPreview');
        if (preview) {
            preview.innerHTML = updatedContent;
            console.log('✅ Vista previa actualizada en el panel de administración');
        } else {
            console.log('❌ No se encontró el elemento de vista previa');
        }
        
        // Actualizar la página "Nosotros" si estamos en ella (sin controles)
        const nosotrosContainer = document.getElementById('nosotrosContent');
        if (nosotrosContainer) {
            // Recargar el contenido como acordeón
            window.loadNosotrosContent();
            console.log('✅ Página "Nosotros" actualizada');
        }
        
        // Forzar actualización de la vista previa
        if (typeof window.updateNosotrosPreview === 'function') {
            window.updateNosotrosPreview();
            console.log('✅ Función updateNosotrosPreview ejecutada');
        } else {
            console.log('❌ Función updateNosotrosPreview no disponible');
        }
        
        cancelEdit();
        alert('✅ Div actualizado correctamente.');
    };

    // Función para cancelar la edición
    window.cancelEdit = function() {
        const modal = document.querySelector('div[style*="position: fixed"][style*="z-index: 10000"]');
        if (modal) {
            modal.remove();
        }
    };

    // Función global para eliminar div de texto
    window.deleteTextDiv = function(divId) {
        console.log('Eliminando div:', divId);
        
        if (confirm('¿Estás seguro de que quieres eliminar este div?')) {
            // Obtener el contenido actual desde localStorage
            const currentContent = localStorage.getItem('nosotrosContent') || '';
            
            if (!currentContent) {
                alert('No hay contenido guardado para eliminar.');
                return;
            }
            
            // Crear un elemento temporal para buscar el div específico
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = currentContent;
            
            const div = tempDiv.querySelector(`#${divId}`);
            if (div) {
                div.remove();
                
                // Guardar el contenido actualizado
                localStorage.setItem('nosotrosContent', tempDiv.innerHTML);
                console.log('Div eliminado y contenido guardado');
                
                // Actualizar la vista previa en el panel de administración
                const preview = document.getElementById('nosotrosPreview');
                if (preview) {
                    // En el panel de administración, mostrar el contenido CON controles de edición
                    preview.innerHTML = tempDiv.innerHTML;
                    console.log('Vista previa actualizada');
                }
                
                // Actualizar la página "Nosotros" si estamos en ella (sin controles)
                const nosotrosContainer = document.getElementById('nosotrosContent');
                if (nosotrosContainer) {
                    // Recargar el contenido como acordeón
                    window.loadNosotrosContent();
                    console.log('Página "Nosotros" actualizada como acordeón');
                }
                
                alert('Div eliminado correctamente.');
            } else {
                console.error('No se encontró el div con ID:', divId);
                alert('No se encontró el div a eliminar. Intenta recargar la página.');
            }
        }
    };

    // Función global para mover div de texto
    window.moveTextDiv = function(divId, direction) {
        console.log('Moviendo div:', divId, 'dirección:', direction);
        
        // Obtener el contenido actual desde localStorage
        const currentContent = localStorage.getItem('nosotrosContent') || '';
        
        if (!currentContent) {
            alert('No hay contenido guardado para mover.');
            return;
        }
        
        // Crear un elemento temporal para buscar el div específico
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = currentContent;
        
        const div = tempDiv.querySelector(`#${divId}`);
        if (!div) {
            console.error('No se encontró el div con ID:', divId);
            alert('No se encontró el div a mover. Intenta recargar la página.');
            return;
        }
        
        if (direction === 'up' && div.previousElementSibling) {
            tempDiv.insertBefore(div, div.previousElementSibling);
            console.log('Div movido hacia arriba');
        } else if (direction === 'down' && div.nextElementSibling) {
            tempDiv.insertBefore(div.nextElementSibling, div);
            console.log('Div movido hacia abajo');
        } else {
            alert('No se puede mover el div en esa dirección.');
            return;
        }
        
        // Guardar el contenido actualizado
        localStorage.setItem('nosotrosContent', tempDiv.innerHTML);
        console.log('Contenido guardado después de mover');
        
        // Actualizar la vista previa en el panel de administración
        const preview = document.getElementById('nosotrosPreview');
        if (preview) {
            // En el panel de administración, mostrar el contenido CON controles de edición
            preview.innerHTML = tempDiv.innerHTML;
            console.log('Vista previa actualizada');
        }
        
        // Actualizar la página "Nosotros" si estamos en ella (sin controles)
        const nosotrosContainer = document.getElementById('nosotrosContent');
        if (nosotrosContainer) {
            // Recargar el contenido como acordeón
            window.loadNosotrosContent();
            console.log('Página "Nosotros" actualizada como acordeón');
        }
        
        alert('Div movido correctamente.');
    };

    // Función global para limpiar contenido
    window.clearNosotrosContent = function() {
        if (confirm('¿Estás seguro de que quieres eliminar todo el contenido de la página "Nosotros"? Esta acción no se puede deshacer.')) {
            localStorage.removeItem('nosotrosContent');
            
            // Actualizar la vista previa
            const preview = document.getElementById('nosotrosPreview');
            if (preview) {
                preview.innerHTML = '<p style="color: var(--gray); text-align: center;">No hay contenido guardado</p>';
            }
            
            alert('Contenido de la página "Nosotros" limpiado correctamente.');
        }
    };

    // Función global para cargar contenido guardado
    window.loadNosotrosContent = function() {
        console.log('=== CARGANDO CONTENIDO NOSOTROS ===');
        const content = localStorage.getItem('nosotrosContent');
        const container = document.getElementById('nosotrosContent');
        
        console.log('Contenido encontrado:', content ? 'SÍ' : 'NO');
        console.log('Container encontrado:', container ? 'SÍ' : 'NO');
        
        if (content && container) {
            // Crear una copia del contenido sin los controles de edición para la página pública
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = content;
            
            // Remover todos los controles de edición para mostrar solo el contenido
            const controls = tempDiv.querySelectorAll('.div-controls');
            console.log('Controles encontrados:', controls.length);
            controls.forEach(control => control.remove());
            
            // Convertir cada div en un acordeón
            const divs = tempDiv.querySelectorAll('.nosotros-text-div');
            console.log('Divs encontrados:', divs.length);
            
            divs.forEach((div, index) => {
                console.log(`Procesando div ${index + 1}`);
                const contentDiv = div.querySelector('.div-content');
                if (contentDiv) {
                    const h3 = contentDiv.querySelector('h3');
                    const title = h3 ? h3.textContent : 'Sin título';
                    console.log(`Título encontrado: "${title}"`);
                    
                    // Crear estructura de acordeón
                    div.innerHTML = `
                        <div class="acordeon-header" onclick="toggleAcordeon(${index})" style="cursor: pointer; padding: 15px 20px; background: #f8f9fa; border-radius: 8px; margin-bottom: 10px; display: flex; justify-content: space-between; align-items: center; transition: all 0.3s ease;">
                            <h3 style="margin: 0; color: var(--primary-color); font-size: 1.2rem; font-weight: 600;">${title}</h3>
                            <i class="fas fa-plus acordeon-icon" style="color: var(--primary-color); font-size: 1.1rem; transition: transform 0.3s ease;"></i>
                        </div>
                        <div class="acordeon-content" style="display: none; padding: 20px; background: white; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); text-align: justify;">
                            ${contentDiv.innerHTML.replace(/<h3[^>]*>.*?<\/h3>/g, '')}
                        </div>
                    `;
                    console.log(`Acordeón creado para: "${title}"`);
                } else {
                    console.log(`No se encontró contentDiv en div ${index + 1}`);
                }
            });
            
            container.innerHTML = tempDiv.innerHTML;
            console.log('Contenido de "Nosotros" cargado como acordeón');
            
            // Verificar que se crearon los elementos
            const headers = container.querySelectorAll('.acordeon-header');
            const contents = container.querySelectorAll('.acordeon-content');
            console.log('Headers creados:', headers.length);
            console.log('Contents creados:', contents.length);
            
        } else if (!content) {
            // Si no hay contenido guardado, mostrar mensaje por defecto
            if (container) {
                container.innerHTML = `
                    <div style="text-align: center; color: var(--gray); padding: 40px;">
                        <i class="fas fa-info-circle" style="font-size: 3rem; margin-bottom: 20px;"></i>
                        <h3>Contenido en construcción</h3>
                        <p>El contenido de esta página se puede gestionar desde el panel de administración.</p>
                    </div>
                `;
                console.log('Mostrando mensaje por defecto');
            }
        }
    };

    // Cargar contenido al iniciar la página
    document.addEventListener('DOMContentLoaded', function() {
        if (document.getElementById('nosotrosContent')) {
            window.loadNosotrosContent();
        }
    });

    // Función global para editar solo el título de un div de texto
    window.editTitleDiv = function(divId) {
        // Obtener el contenido actual desde localStorage
        const currentContent = localStorage.getItem('nosotrosContent') || '';
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = currentContent;
        const div = tempDiv.querySelector(`#${divId}`);
        if (!div) {
            alert('No se encontró el div a editar.');
            return;
        }
        const h3 = div.querySelector('.div-content h3');
        if (!h3) {
            alert('No se encontró el título en el div.');
            return;
        }
        const nuevoTitulo = prompt('Editar título:', h3.textContent);
        if (nuevoTitulo !== null && nuevoTitulo.trim() !== '') {
            h3.textContent = nuevoTitulo.trim();
            // Guardar el contenido actualizado
            localStorage.setItem('nosotrosContent', tempDiv.innerHTML);
            // Actualizar la vista previa en el panel de administración
            const preview = document.getElementById('nosotrosPreview');
            if (preview) {
                preview.innerHTML = tempDiv.innerHTML;
            }
            // Actualizar la página "Nosotros" si estamos en ella (sin controles)
            const nosotrosContainer = document.getElementById('nosotrosContent');
            if (nosotrosContainer) {
                const publicDiv = document.createElement('div');
                publicDiv.innerHTML = tempDiv.innerHTML;
                const controls = publicDiv.querySelectorAll('.div-controls');
                controls.forEach(control => control.remove());
                nosotrosContainer.innerHTML = publicDiv.innerHTML;
            }
            alert('Título actualizado correctamente.');
        }
    };

    // Función para limpiar caché y recargar
    window.clearCacheAndReload = function() {
        if (confirm('¿Quieres limpiar el caché y recargar la página? Esto asegurará que se use la versión más reciente.')) {
            // Limpiar caché del navegador
            if ('caches' in window) {
                caches.keys().then(function(names) {
                    for (let name of names) caches.delete(name);
                });
            }
            // Recargar la página
            window.location.reload(true);
        }
    };

    // Función para verificar si estamos usando la versión correcta
    window.checkVersion = function() {
        console.log('Versión del script cargada:', new Date().toISOString());
        console.log('Función editTextDiv disponible:', typeof window.editTextDiv);
        console.log('Función saveEditDivContent disponible:', typeof window.saveEditDivContent);
    };

    // Función de depuración para verificar la versión de editTextDiv
    window.debugEditTextDiv = function(divId) {
        console.log('=== DEBUG: editTextDiv ===');
        console.log('DivId:', divId);
        console.log('Función editTextDiv:', window.editTextDiv);
        console.log('Función saveEditDivContent:', window.saveEditDivContent);
        
        // Forzar el uso de la versión correcta
        if (typeof window.editTextDiv === 'function') {
            window.editTextDiv(divId);
        } else {
            alert('Error: La función editTextDiv no está disponible. Intenta recargar la página.');
        }
    };

    // Función para forzar la recarga del script
    window.forceReload = function() {
        console.log('Forzando recarga del script...');
        const script = document.querySelector('script[src*="script.js"]');
        if (script) {
            script.remove();
            const newScript = document.createElement('script');
            newScript.src = script.src + '?v=' + Date.now();
            document.head.appendChild(newScript);
            alert('Script recargado. Intenta editar nuevamente.');
        } else {
            alert('No se encontró el script. Recarga la página manualmente.');
        }
    };

    // Función de prueba para verificar el modal de edición
    window.testEditModal = function(divId) {
        console.log('Probando modal de edición para div:', divId);
        
        const modal = document.createElement('div');
        modal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.7);
            z-index: 10000;
            display: flex;
            align-items: center;
            justify-content: center;
        `;
        
        modal.innerHTML = `
            <div style="background: white; padding: 30px; border-radius: 8px; max-width: 80%; max-height: 90%; overflow: auto; min-width: 400px;">
                <h3 style="margin: 0 0 20px 0; color: var(--primary-color);">PRUEBA - Editar Div de Texto</h3>
                <label style='font-weight:bold;'>Título (azul, negrita):</label>
                <input id="testTitle" type="text" value="Título de Prueba" style="width:100%;margin-bottom:15px;padding:8px 10px;font-size:1.1em;font-weight:bold;color:#0a2947;border:1px solid #ddd;border-radius:4px;" />
                <label style='font-weight:bold;'>Contenido:</label>
                <textarea id="testContent" style="width: 100%; height: 160px; padding: 10px; border: 1px solid #ddd; border-radius: 4px; font-family: Arial, sans-serif; resize: vertical;">Contenido de prueba</textarea>
                <div style="margin-top: 20px; text-align: right;">
                    <button onclick="this.parentElement.parentElement.parentElement.remove()" style="padding: 10px 20px; background: var(--primary-color); color: white; border: none; border-radius: 4px; cursor: pointer;">Cerrar</button>
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
        alert('Modal de prueba mostrado. Si ves ambos campos, el problema es de caché.');
    };

    // Función para manejar el acordeón
    window.toggleAcordeon = function(index) {
        const container = document.getElementById('nosotrosContent');
        const headers = container.querySelectorAll('.acordeon-header');
        const contents = container.querySelectorAll('.acordeon-content');
        const icons = container.querySelectorAll('.acordeon-icon');
        
        const clickedHeader = headers[index];
        const clickedContent = contents[index];
        const clickedIcon = icons[index];
        
        // Cerrar todos los demás acordeones
        contents.forEach((content, i) => {
            if (i !== index) {
                content.style.display = 'none';
                icons[i].classList.remove('fa-minus');
                icons[i].classList.add('fa-plus');
                headers[i].classList.remove('active');
            }
        });
        
        // Toggle del acordeón clickeado
        if (clickedContent.style.display === 'none' || clickedContent.style.display === '') {
            clickedContent.style.display = 'block';
            clickedIcon.classList.remove('fa-plus');
            clickedIcon.classList.add('fa-minus');
            clickedHeader.classList.add('active');
        } else {
            clickedContent.style.display = 'none';
            clickedIcon.classList.remove('fa-minus');
            clickedIcon.classList.add('fa-plus');
            clickedHeader.classList.remove('active');
        }
    };

    // Función para probar el acordeón
    window.testAcordeon = function() {
        console.log('=== PRUEBA DE ACORDEÓN ===');
        
        // Verificar si estamos en la página "Nosotros"
        const container = document.getElementById('nosotrosContent');
        if (!container) {
            alert('No estás en la página "Nosotros"');
            return;
        }
        
        // Verificar contenido guardado
        const content = localStorage.getItem('nosotrosContent');
        console.log('Contenido guardado:', content);
        
        if (!content) {
            alert('No hay contenido guardado. Primero agrega algunos divs desde el panel de administración.');
            return;
        }
        
        // Forzar la recarga como acordeón
        window.loadNosotrosContent();
        
        // Verificar si se crearon los elementos del acordeón
        const headers = container.querySelectorAll('.acordeon-header');
        const contents = container.querySelectorAll('.acordeon-content');
        
        console.log('Headers encontrados:', headers.length);
        console.log('Contents encontrados:', contents.length);
        
        if (headers.length > 0) {
            alert(`Acordeón implementado correctamente. Se encontraron ${headers.length} secciones.`);
        } else {
            alert('Error: No se crearon los elementos del acordeón. Revisa la consola para más detalles.');
        }
    };

    // Función para crear contenido de prueba
    window.createTestContent = function() {
        const testContent = `
            <div id="text-div-1" class="nosotros-text-div" style="margin: 20px 0; padding: 20px; background: white; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
                <div class="div-controls" style="margin-bottom: 10px; padding: 10px; background: #f8f9fa; border-radius: 4px;">
                    <button onclick="editTextDiv('text-div-1')" style="margin-right: 5px; padding: 5px 10px; background: var(--primary-color); color: white; border: none; border-radius: 4px; cursor: pointer;">Editar</button>
                    <button onclick="editTitleDiv('text-div-1')" style="margin-right: 5px; padding: 5px 10px; background: #007bff; color: white; border: none; border-radius: 4px; cursor: pointer;">Editar Título</button>
                    <button onclick="deleteTextDiv('text-div-1')" style="padding: 5px 10px; background: #dc3545; color: white; border: none; border-radius: 4px; cursor: pointer;">Eliminar</button>
                </div>
                <div class="div-content">
                    <h3>Nuestra Historia</h3>
                    <p>La Primera Iglesia Bautista de Cúcuta fue fundada en el año 1950 con el propósito de servir a la comunidad y compartir el mensaje del evangelio. Desde nuestros inicios, hemos estado comprometidos con la enseñanza bíblica y el servicio a los demás.</p>
                </div>
            </div>
            <div id="text-div-2" class="nosotros-text-div" style="margin: 20px 0; padding: 20px; background: white; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
                <div class="div-controls" style="margin-bottom: 10px; padding: 10px; background: #f8f9fa; border-radius: 4px;">
                    <button onclick="editTextDiv('text-div-2')" style="margin-right: 5px; padding: 5px 10px; background: var(--primary-color); color: white; border: none; border-radius: 4px; cursor: pointer;">Editar</button>
                    <button onclick="editTitleDiv('text-div-2')" style="margin-right: 5px; padding: 5px 10px; background: #007bff; color: white; border: none; border-radius: 4px; cursor: pointer;">Editar Título</button>
                    <button onclick="deleteTextDiv('text-div-2')" style="padding: 5px 10px; background: #dc3545; color: white; border: none; border-radius: 4px; cursor: pointer;">Eliminar</button>
                </div>
                <div class="div-content">
                    <h3>Nuestra Misión</h3>
                    <p>Nuestra misión es proclamar el evangelio de Jesucristo, hacer discípulos y servir a nuestra comunidad con amor y compasión. Buscamos ser un faro de esperanza en Cúcuta y sus alrededores.</p>
                </div>
            </div>
        `;
        
        localStorage.setItem('nosotrosContent', testContent);
        window.loadNosotrosContent();
        alert('Contenido de prueba creado. Ahora puedes probar el acordeón.');
    };

    // Función para optimizar la carga del favicon
    window.optimizeFavicon = function() {
        // Verificar si el favicon se está cargando correctamente
        const favicon = document.querySelector('link[rel="icon"]');
        if (favicon) {
            console.log('Favicon detectado:', favicon.href);
            
            // Crear un elemento de imagen para verificar la carga
            const img = new Image();
            img.onload = function() {
                console.log('Favicon cargado correctamente. Dimensiones:', this.width, 'x', this.height);
                
                // Verificar si la imagen es cuadrada
                if (this.width !== this.height) {
                    console.warn('El favicon no es cuadrado. Esto puede causar distorsión.');
                }
            };
            img.onerror = function() {
                console.error('Error al cargar el favicon');
            };
            img.src = favicon.href;
        }
        
        // Forzar la recarga del favicon en diferentes contextos
        const icons = document.querySelectorAll('link[rel*="icon"]');
        icons.forEach(icon => {
            if (icon.href.includes('favicon.png')) {
                // Agregar timestamp para evitar caché
                const url = new URL(icon.href);
                url.searchParams.set('t', Date.now());
                icon.href = url.toString();
            }
        });
    };
    
    // Ejecutar optimización del favicon al cargar la página
    document.addEventListener('DOMContentLoaded', function() {
        // Optimizar favicon después de un breve delay
        setTimeout(window.optimizeFavicon, 1000);
    });

    // ===== FUNCIONES PARA PÁGINA DE SERMONES =====
    
    // Función para cargar todos los sermones en la página de sermones
    window.loadAllSermonesPage = function() {
        console.log('=== CARGANDO PÁGINA DE SERMONES ===');
        
        const sermonesGrid = document.getElementById('sermonesGrid');
        const noSermones = document.getElementById('noSermones');
        
        if (!sermonesGrid) {
            console.log('No se encontró el grid de sermones');
            return;
        }
        
        // Obtener todos los sermones
        const allSermones = getAllSermones();
        console.log('Sermones encontrados:', allSermones.length);
        
        // También verificar últimos sermones
        const ultimosSermones = JSON.parse(localStorage.getItem('ultimosSermones') || '[]');
        console.log('Últimos sermones:', ultimosSermones.length);
        
        // Combinar todos los sermones únicos
        let todosLosSermones = [...allSermones];
        
        // Agregar últimos sermones que no estén en la lista completa
        ultimosSermones.forEach(ultimo => {
            if (ultimo.nombre && ultimo.pastor) {
                const existe = todosLosSermones.some(s => 
                    s.nombre === ultimo.nombre && s.pastor === ultimo.pastor
                );
                if (!existe) {
                    todosLosSermones.unshift(ultimo);
                }
            }
        });
        
        console.log('Total de sermones únicos:', todosLosSermones.length);
        
        if (todosLosSermones.length === 0) {
            // Mostrar mensaje de no hay sermones
            if (noSermones) {
                noSermones.style.display = 'block';
            }
            if (sermonesGrid) {
                sermonesGrid.innerHTML = '';
            }
            return;
        }
        
        // Ocultar mensaje de no hay sermones
        if (noSermones) {
            noSermones.style.display = 'none';
        }
        
        // Renderizar todos los sermones
        let html = '';
        todosLosSermones.forEach((sermon, index) => {
            html += `<div class="sermon-card">
                <div class="sermon-image" style="background:${sermon.imagen ? `url('${sermon.imagen}') center/cover no-repeat` : 'linear-gradient(135deg, var(--primary-color), var(--primary-light))'};">
                    <div class="play-button" onclick="document.getElementById('sermon-embed-${index}').style.display='block'">
                        <i class="fas fa-play"></i>
                    </div>
                    ${sermon.pastor ? `<div class='sermon-pastor-overlay'>${sermon.pastor}</div>` : ''}
                </div>
                <div class="sermon-content">
                    <h3>${sermon.nombre || 'Sermón'}</h3>
                    <div id="sermon-embed-${index}" style="display:none;margin-top:10px;">${sermon.embed || ''}</div>
                </div>
            </div>`;
        });
        
        sermonesGrid.innerHTML = html;
        console.log(`Renderizados ${todosLosSermones.length} sermones en la página de sermones`);
    };
    
    // Función para reproducir sermón
    window.playSermon = function(embed, title) {
        if (!embed) {
            alert('Este sermón no tiene video disponible');
            return;
        }
        
        // Crear modal para reproducir el video
        const modal = document.createElement('div');
        modal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.9);
            z-index: 10000;
            display: flex;
            align-items: center;
            justify-content: center;
        `;
        
        modal.innerHTML = `
            <div style="background: white; padding: 20px; border-radius: 8px; max-width: 90%; max-height: 90%; overflow: auto;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px;">
                    <h3 style="margin: 0; color: var(--primary-color);">${title}</h3>
                    <button onclick="this.parentElement.parentElement.parentElement.remove()" style="background: var(--primary-color); color: white; border: none; padding: 8px 16px; border-radius: 4px; cursor: pointer;">Cerrar</button>
                </div>
                <div style="width: 100%; max-width: 800px;">
                    ${embed}
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
    };
    
    // Función para compartir sermón
    window.shareSermon = function(title, url) {
        if (navigator.share) {
            navigator.share({
                title: title,
                url: url
            });
        } else {
            // Fallback para navegadores que no soportan Web Share API
            const textArea = document.createElement('textarea');
            textArea.value = `${title} - ${url}`;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
            alert('Enlace copiado al portapapeles');
        }
    };
    
    // Función para sincronizar sermones entre páginas
    window.syncSermones = function() {
        console.log('=== SINCRONIZANDO SERMONES ===');
        
        // Obtener todos los sermones
        const allSermones = getAllSermones();
        const ultimosSermones = JSON.parse(localStorage.getItem('ultimosSermones') || '[]');
        
        console.log('Todos los sermones:', allSermones.length);
        console.log('Últimos sermones:', ultimosSermones.length);
        
        // Verificar que los últimos sermones estén en la lista completa
        ultimosSermones.forEach((ultimoSermon, index) => {
            if (ultimoSermon.nombre && ultimoSermon.pastor) {
                const exists = allSermones.some(sermon => 
                    sermon.nombre === ultimoSermon.nombre && 
                    sermon.pastor === ultimoSermon.pastor
                );
                
                if (!exists) {
                    console.log(`Agregando sermón faltante: ${ultimoSermon.nombre}`);
                    addSermon(ultimoSermon);
                }
            }
        });
        
        // Verificar que los últimos 3 sermones de la lista completa estén en últimos sermones
        const primeros3 = allSermones.slice(0, 3);
        let ultimosActualizados = false;
        
        primeros3.forEach((sermon, index) => {
            if (sermon.nombre && sermon.pastor) {
                const ultimoExistente = ultimosSermones[index];
                if (!ultimoExistente || 
                    ultimoExistente.nombre !== sermon.nombre || 
                    ultimoExistente.pastor !== sermon.pastor) {
                    
                    console.log(`Actualizando último sermón ${index + 1}: ${sermon.nombre}`);
                    ultimosSermones[index] = sermon;
                    ultimosActualizados = true;
                }
            }
        });
        
        if (ultimosActualizados) {
            localStorage.setItem('ultimosSermones', JSON.stringify(ultimosSermones));
            console.log('Últimos sermones actualizados');
        }
        
        // Recargar las páginas si es necesario
        if (document.getElementById('sermonesGrid')) {
            loadAllSermonesPage();
        }
        
        if (document.querySelector('.sermons-grid')) {
            renderUltimosSermones();
        }
    };

    // Función completa de sincronización para la página de sermones
    window.syncSermonesComplete = function() {
        console.log('=== SINCRONIZACIÓN COMPLETA DE SERMONES ===');
        
        // Obtener datos actuales
        const allSermones = getAllSermones();
        const ultimosSermones = JSON.parse(localStorage.getItem('ultimosSermones') || '[]');
        
        console.log('Estado inicial - Todos los sermones:', allSermones.length);
        console.log('Estado inicial - Últimos sermones:', ultimosSermones.length);
        
        let cambiosRealizados = false;
        
        // PASO 1: Verificar que todos los últimos sermones estén en la lista completa
        ultimosSermones.forEach((ultimoSermon, index) => {
            if (ultimoSermon.nombre && ultimoSermon.pastor) {
                const exists = allSermones.some(sermon => 
                    sermon.nombre === ultimoSermon.nombre && 
                    sermon.pastor === ultimoSermon.pastor
                );
                
                if (!exists) {
                    console.log(`✅ Agregando sermón faltante a lista completa: ${ultimoSermon.nombre}`);
                    addSermon(ultimoSermon);
                    cambiosRealizados = true;
                }
            }
        });
        
        // PASO 2: Verificar que los primeros 3 de la lista completa estén en últimos sermones
        const primeros3 = getAllSermones().slice(0, 3);
        let ultimosActualizados = false;
        
        primeros3.forEach((sermon, index) => {
            if (sermon.nombre && sermon.pastor) {
                const ultimoExistente = ultimosSermones[index];
                if (!ultimoExistente || 
                    ultimoExistente.nombre !== sermon.nombre || 
                    ultimoExistente.pastor !== sermon.pastor) {
                    
                    console.log(`✅ Actualizando último sermón ${index + 1}: ${sermon.nombre}`);
                    ultimosSermones[index] = sermon;
                    ultimosActualizados = true;
                    cambiosRealizados = true;
                }
            }
        });
        
        // PASO 3: Guardar cambios si es necesario
        if (ultimosActualizados) {
            localStorage.setItem('ultimosSermones', JSON.stringify(ultimosSermones));
            console.log('✅ Últimos sermones actualizados');
        }
        
        // PASO 4: Reporte final
        const estadoFinal = getAllSermones();
        const ultimosFinales = JSON.parse(localStorage.getItem('ultimosSermones') || '[]');
        
        console.log('=== REPORTE DE SINCRONIZACIÓN ===');
        console.log(`📊 Total de sermones: ${estadoFinal.length}`);
        console.log(`📊 Últimos sermones: ${ultimosFinales.length}`);
        console.log(`🔄 Cambios realizados: ${cambiosRealizados ? 'SÍ' : 'NO'}`);
        
        if (cambiosRealizados) {
            console.log('✅ Sincronización completada con cambios');
        } else {
            console.log('✅ Sincronización completada sin cambios necesarios');
        }
        
        return {
            totalSermones: estadoFinal.length,
            ultimosSermones: ultimosFinales.length,
            cambiosRealizados: cambiosRealizados
        };
    };

    // Función de diagnóstico para verificar el estado de los sermones
    window.diagnoseSermonesPage = function() {
        console.log('=== DIAGNÓSTICO DE PÁGINA DE SERMONES ===');
        
        const allSermones = getAllSermones();
        const ultimosSermones = JSON.parse(localStorage.getItem('ultimosSermones') || '[]');
        
        console.log('📊 Estado actual:');
        console.log(`   - Total de sermones: ${allSermones.length}`);
        console.log(`   - Últimos sermones: ${ultimosSermones.length}`);
        
        // Verificar que todos los últimos sermones estén en la lista completa
        let faltantes = 0;
        ultimosSermones.forEach((ultimo, index) => {
            if (ultimo.nombre && ultimo.pastor) {
                const existe = allSermones.some(s => 
                    s.nombre === ultimo.nombre && s.pastor === ultimo.pastor
                );
                if (!existe) {
                    console.log(`❌ Sermón faltante en lista completa: ${ultimo.nombre}`);
                    faltantes++;
                }
            }
        });
        
        // Verificar que los primeros 3 estén en últimos sermones
        const primeros3 = allSermones.slice(0, 3);
        let desincronizados = 0;
        
        primeros3.forEach((sermon, index) => {
            if (sermon.nombre && sermon.pastor) {
                const ultimo = ultimosSermones[index];
                if (!ultimo || ultimo.nombre !== sermon.nombre || ultimo.pastor !== sermon.pastor) {
                    console.log(`❌ Último sermón ${index + 1} desincronizado: ${sermon.nombre}`);
                    desincronizados++;
                }
            }
        });
        
        // Verificar duplicados
        const duplicados = [];
        allSermones.forEach((sermon, index) => {
            const duplicado = allSermones.find((s, i) => 
                i !== index && s.nombre === sermon.nombre && s.pastor === sermon.pastor
            );
            if (duplicado) {
                duplicados.push(sermon);
            }
        });
        
        console.log('🔍 Problemas encontrados:');
        console.log(`   - Sermones faltantes: ${faltantes}`);
        console.log(`   - Últimos desincronizados: ${desincronizados}`);
        console.log(`   - Duplicados: ${duplicados.length}`);
        
        if (faltantes === 0 && desincronizados === 0 && duplicados.length === 0) {
            console.log('✅ Estado de sermones: PERFECTO');
        } else {
            console.log('⚠️ Estado de sermones: REQUIERE SINCRONIZACIÓN');
            console.log('💡 Ejecuta syncSermonesComplete() para corregir');
        }
        
        return {
            total: allSermones.length,
            ultimos: ultimosSermones.length,
            faltantes: faltantes,
            desincronizados: desincronizados,
            duplicados: duplicados.length
        };
    };

    // Función para forzar la recarga de sermones en todas las páginas
    window.forceReloadSermones = function() {
        console.log('=== FORZANDO RECARGA DE SERMONES ===');
        
        // Sincronizar primero
        syncSermonesComplete();
        
        // Recargar en la página de sermones
        if (document.getElementById('sermonesGrid')) {
            loadAllSermonesPage();
            console.log('✅ Página de sermones recargada');
        }
        
        // Recargar en la página principal
        if (document.querySelector('.sermons-grid')) {
            renderUltimosSermones();
            console.log('✅ Página principal recargada');
        }
        
        console.log('✅ Recarga de sermones completada');
    };

    // Función para asegurar que los sermones de "últimos sermones" estén en la página de sermones
    window.ensureSermonesInPage = function() {
        console.log('=== ASEGURANDO SERMONES EN PÁGINA ===');
        
        const ultimosSermones = JSON.parse(localStorage.getItem('ultimosSermones') || '[]');
        const allSermones = getAllSermones();
        
        console.log('Últimos sermones:', ultimosSermones.length);
        console.log('Todos los sermones:', allSermones.length);
        
        // Verificar que todos los últimos sermones estén en la lista completa
        ultimosSermones.forEach((ultimoSermon, index) => {
            if (ultimoSermon.nombre && ultimoSermon.pastor) {
                const exists = allSermones.some(sermon => 
                    sermon.nombre === ultimoSermon.nombre && 
                    sermon.pastor === ultimoSermon.pastor
                );
                
                if (!exists) {
                    console.log(`✅ Agregando sermón faltante: ${ultimoSermon.nombre}`);
                    addSermon(ultimoSermon);
                }
            }
        });
        
        console.log('✅ Verificación completada');
    };

    // Configurar formulario de agregar sermón
    const addSermonForm = document.getElementById('addSermonForm');
    if (addSermonForm) {
        console.log('Formulario de agregar sermón encontrado, configurando...');
        addSermonForm.addEventListener('submit', function(e) {
            e.preventDefault();
            console.log('Formulario de sermón enviado');
            
            const nombre = document.getElementById('addSermonNombre').value.trim();
            const embed = document.getElementById('addSermonEmbed').value.trim();
            const pastor = document.getElementById('addSermonPastor').value.trim();
            const imagenFile = document.getElementById('addSermonImagen').files[0];
            
            console.log('Datos del formulario:', { nombre, embed, pastor, tieneImagen: !!imagenFile });
            
            if (!nombre || !embed || !pastor) {
                alert('Por favor completa todos los campos obligatorios');
                return;
            }
            
            // Crear objeto del sermón
            const sermon = {
                nombre: nombre,
                embed: embed,
                pastor: pastor,
                imagen: '',
                fecha: new Date().toISOString()
            };
            
            // Procesar imagen si se proporcionó
            if (imagenFile) {
                if (imagenFile.size > 2 * 1024 * 1024) {
                    alert('La imagen debe ser menor a 2MB');
                    return;
                }
                
                const reader = new FileReader();
                reader.onload = function(e) {
                    sermon.imagen = e.target.result;
                    addSermonToSystem(sermon);
                };
                reader.readAsDataURL(imagenFile);
            } else {
                addSermonToSystem(sermon);
            }
        });
        console.log('Formulario de agregar sermón configurado correctamente');
    } else {
        console.log('Formulario de agregar sermón NO encontrado');
    }
    
    if (document.getElementById('sermonesGrid')) {
        console.log('Página de sermones detectada, cargando...');
        // Asegurar que los sermones de "últimos sermones" estén incluidos
        ensureSermonesInPage();
        loadAllSermonesPage();
    }
    
    // Sincronizar sermones en todas las páginas
    syncSermones();

    // Función para agregar sermón al sistema
    function addSermonToSystem(sermon) {
        try {
            // Agregar a la lista completa
            addSermon(sermon);
            
            // Actualizar últimos sermones
            const ultimosSermones = JSON.parse(localStorage.getItem('ultimosSermones') || '[]');
            ultimosSermones.unshift(sermon);
            
            // Mantener solo los primeros 3
            if (ultimosSermones.length > 3) {
                ultimosSermones.splice(3);
            }
            
            localStorage.setItem('ultimosSermones', JSON.stringify(ultimosSermones));
            
            // Limpiar formulario
            document.getElementById('addSermonNombre').value = '';
            document.getElementById('addSermonEmbed').value = '';
            document.getElementById('addSermonPastor').value = '';
            document.getElementById('addSermonImagen').value = '';
            
            alert('Sermón agregado exitosamente');
            
            // Recargar las páginas si es necesario
            if (document.getElementById('sermonesGrid')) {
                loadAllSermonesPage();
            }
            if (document.querySelector('.sermons-grid')) {
                renderUltimosSermones();
            }
            
        } catch (error) {
            console.error('Error agregando sermón:', error);
            alert('Error al agregar el sermón. Intenta de nuevo.');
        }
    }

    // Función completa de sincronización para la página de sermones
    window.syncSermonesComplete = function() {
        console.log('=== SINCRONIZACIÓN COMPLETA DE SERMONES ===');
        
        // Obtener datos actuales
        const allSermones = getAllSermones();
        const ultimosSermones = JSON.parse(localStorage.getItem('ultimosSermones') || '[]');
        
        console.log('Estado inicial - Todos los sermones:', allSermones.length);
        console.log('Estado inicial - Últimos sermones:', ultimosSermones.length);
        
        let cambiosRealizados = false;
        
        // PASO 1: Verificar que todos los últimos sermones estén en la lista completa
        ultimosSermones.forEach((ultimoSermon, index) => {
            if (ultimoSermon.nombre && ultimoSermon.pastor) {
                const exists = allSermones.some(sermon => 
                    sermon.nombre === ultimoSermon.nombre && 
                    sermon.pastor === ultimoSermon.pastor
                );
                
                if (!exists) {
                    console.log(`✅ Agregando sermón faltante a lista completa: ${ultimoSermon.nombre}`);
                    addSermon(ultimoSermon);
                    cambiosRealizados = true;
                }
            }
        });
        
        // PASO 2: Verificar que los primeros 3 de la lista completa estén en últimos sermones
        const primeros3 = getAllSermones().slice(0, 3);
        let ultimosActualizados = false;
        
        primeros3.forEach((sermon, index) => {
            if (sermon.nombre && sermon.pastor) {
                const ultimoExistente = ultimosSermones[index];
                if (!ultimoExistente || 
                    ultimoExistente.nombre !== sermon.nombre || 
                    ultimoExistente.pastor !== sermon.pastor) {
                    
                    console.log(`✅ Actualizando último sermón ${index + 1}: ${sermon.nombre}`);
                    ultimosSermones[index] = sermon;
                    ultimosActualizados = true;
                    cambiosRealizados = true;
                }
            }
        });
        
        // PASO 3: Guardar cambios si es necesario
        if (ultimosActualizados) {
            localStorage.setItem('ultimosSermones', JSON.stringify(ultimosSermones));
            console.log('✅ Últimos sermones actualizados');
        }
        
        // PASO 4: Reporte final
        const estadoFinal = getAllSermones();
        const ultimosFinales = JSON.parse(localStorage.getItem('ultimosSermones') || '[]');
        
        console.log('=== REPORTE DE SINCRONIZACIÓN ===');
        console.log(`📊 Total de sermones: ${estadoFinal.length}`);
        console.log(`📊 Últimos sermones: ${ultimosFinales.length}`);
        console.log(`🔄 Cambios realizados: ${cambiosRealizados ? 'SÍ' : 'NO'}`);
        
        if (cambiosRealizados) {
            console.log('✅ Sincronización completada con cambios');
        } else {
            console.log('✅ Sincronización completada sin cambios necesarios');
        }
        
        return {
            totalSermones: estadoFinal.length,
            ultimosSermones: ultimosFinales.length,
            cambiosRealizados: cambiosRealizados
        };
    };



    // Función para forzar la carga de sermones en la página de sermones
    window.forceLoadSermones = function() {
        console.log('=== FORZANDO CARGA DE SERMONES ===');
        
        // Verificar si estamos en la página de sermones
        const sermonesGrid = document.getElementById('sermonesGrid');
        if (!sermonesGrid) {
            alert('No estás en la página de sermones');
            return;
        }
        
        // Obtener todos los sermones
        const allSermones = getAllSermones();
        const ultimosSermones = JSON.parse(localStorage.getItem('ultimosSermones') || '[]');
        
        console.log('Sermones encontrados:', allSermones.length);
        console.log('Últimos sermones:', ultimosSermones.length);
        
        // Combinar todos los sermones únicos
        let todosLosSermones = [...allSermones];
        
        // Agregar últimos sermones que no estén en la lista completa
        ultimosSermones.forEach(ultimo => {
            if (ultimo.nombre && ultimo.pastor) {
                const existe = todosLosSermones.some(s => 
                    s.nombre === ultimo.nombre && s.pastor === ultimo.pastor
                );
                if (!existe) {
                    todosLosSermones.unshift(ultimo);
                }
            }
        });
        
        console.log('Total de sermones únicos:', todosLosSermones.length);
        
        if (todosLosSermones.length === 0) {
            alert('No se encontraron sermones para mostrar');
            return;
        }
        
        // Renderizar todos los sermones
        let html = '';
        todosLosSermones.forEach((sermon, index) => {
            html += `<div class="sermon-card">
                <div class="sermon-image" style="background:${sermon.imagen ? `url('${sermon.imagen}') center/cover no-repeat` : 'linear-gradient(135deg, var(--primary-color), var(--primary-light))'};">
                    <div class="play-button" onclick="document.getElementById('sermon-embed-${index}').style.display='block'">
                        <i class="fas fa-play"></i>
                    </div>
                    ${sermon.pastor ? `<div class='sermon-pastor-overlay'>${sermon.pastor}</div>` : ''}
                </div>
                <div class="sermon-content">
                    <h3>${sermon.nombre || 'Sermón'}</h3>
                    <div id="sermon-embed-${index}" style="display:none;margin-top:10px;">${sermon.embed || ''}</div>
                </div>
            </div>`;
        });
        
        sermonesGrid.innerHTML = html;
        console.log(`Renderizados ${todosLosSermones.length} sermones en la página de sermones`);
        alert(`Se cargaron ${todosLosSermones.length} sermones en la página`);
    };

    // Función para verificar y cargar sermones desde el panel de administración
    window.verificarSermonesAdmin = function() {
        console.log('=== VERIFICANDO SERMONES DESDE ADMIN ===');
        
        const allSermones = getAllSermones();
        const ultimosSermones = JSON.parse(localStorage.getItem('ultimosSermones') || '[]');
        
        console.log('📊 Estado actual:');
        console.log(`   - Total de sermones en admin: ${allSermones.length}`);
        console.log(`   - Últimos sermones: ${ultimosSermones.length}`);
        
        if (allSermones.length === 0) {
            alert('No hay sermones guardados en el panel de administración. Primero agrega algunos sermones desde la sección "Gestionar Todos los Sermones".');
            return;
        }
        
        // Mostrar los sermones que están en el admin
        let mensaje = `Sermones encontrados en el panel de administración:\n\n`;
        allSermones.forEach((sermon, index) => {
            mensaje += `${index + 1}. ${sermon.nombre || 'Sin título'} - ${sermon.pastor || 'Sin pastor'}\n`;
        });
        
        mensaje += `\nPara que estos sermones aparezcan en la página de sermones:\n`;
        mensaje += `1. Ve a la página de sermones\n`;
        mensaje += `2. Ejecuta forceReloadSermones() en la consola\n`;
        mensaje += `3. O ejecuta syncSermonesComplete() para sincronizar`;
        
        alert(mensaje);
        
        return allSermones.length;
    };

    // Función de prueba para la página de sermones
    window.testSermonesPage = function() {
        console.log('=== PRUEBA DE PÁGINA DE SERMONES ===');
        
        // Verificar si estamos en la página de sermones
        const sermonesGrid = document.getElementById('sermonesGrid');
        if (!sermonesGrid) {
            alert('No estás en la página de sermones');
            return;
        }
        
        // Verificar estilos CSS
        const computedStyle = window.getComputedStyle(sermonesGrid);
        console.log('Estilos del grid:', {
            display: computedStyle.display,
            gridTemplateColumns: computedStyle.gridTemplateColumns,
            gap: computedStyle.gap
        });
        
        // Verificar sermones disponibles
        const allSermones = getAllSermones();
        const ultimosSermones = JSON.parse(localStorage.getItem('ultimosSermones') || '[]');
        
        console.log('Sermones disponibles:', {
            total: allSermones.length,
            ultimos: ultimosSermones.length
        });
        
        // Forzar recarga
        loadAllSermonesPage();
        
        // Verificar elementos renderizados
        const sermonCards = sermonesGrid.querySelectorAll('.sermon-card');
        console.log('Tarjetas de sermones renderizadas:', sermonCards.length);
        
        if (sermonCards.length > 0) {
            alert(`✅ Página de sermones funcionando correctamente.\n\nSe encontraron ${sermonCards.length} sermones.\n\nLos sermones deberían aparecer uno al lado del otro en un diseño de grid.`);
        } else {
            alert('❌ No se encontraron sermones para mostrar.\n\nVerifica que haya sermones en el panel de administración.');
        }
    };

    // Función para limpiar sermones eliminados y sincronizar
    window.cleanupDeletedSermones = function() {
        console.log('=== LIMPIANDO SERMONES ELIMINADOS ===');
        
        const allSermones = getAllSermones();
        const ultimosSermones = JSON.parse(localStorage.getItem('ultimosSermones') || '[]');
        
        console.log('Estado inicial:', {
            allSermones: allSermones.length,
            ultimosSermones: ultimosSermones.length
        });
        
        // Verificar que todos los últimos sermones existan en allSermones
        const ultimosFiltrados = ultimosSermones.filter(ultimo => {
            const existe = allSermones.some(s => 
                s.nombre === ultimo.nombre && s.pastor === ultimo.pastor
            );
            if (!existe) {
                console.log(`❌ Sermón eliminado de últimos: ${ultimo.nombre}`);
            }
            return existe;
        });
        
        // Guardar últimos sermones filtrados
        localStorage.setItem('ultimosSermones', JSON.stringify(ultimosFiltrados));
        
        console.log('Estado final:', {
            allSermones: allSermones.length,
            ultimosSermones: ultimosFiltrados.length
        });
        
        // Sincronizar todas las páginas
        syncSermonesAfterDelete();
        
        alert(`Limpieza completada:\n\n- Sermones totales: ${allSermones.length}\n- Últimos sermones: ${ultimosFiltrados.length}\n\nSe han eliminado ${ultimosSermones.length - ultimosFiltrados.length} sermones huérfanos de la lista de últimos sermones.`);
    };

    // Función para probar el formulario de agregar sermón
    window.testAddSermonForm = function() {
        console.log('=== PRUEBA DEL FORMULARIO DE AGREGAR SERMÓN ===');
        
        // Verificar si estamos en el panel de administración
        const adminPanel = document.getElementById('adminPanel');
        if (!adminPanel || adminPanel.style.display === 'none') {
            alert('No estás en el panel de administración. Primero inicia sesión.');
            return;
        }
        
        // Verificar si el formulario existe
        const form = document.getElementById('addSermonForm');
        if (!form) {
            alert('❌ El formulario de agregar sermón no se encontró en el DOM');
            return;
        }
        
        console.log('✅ Formulario encontrado:', form);
        
        // Verificar los campos del formulario
        const campos = ['addSermonNombre', 'addSermonEmbed', 'addSermonPastor', 'addSermonImagen'];
        const camposEncontrados = {};
        
        campos.forEach(campo => {
            const elemento = document.getElementById(campo);
            if (elemento) {
                camposEncontrados[campo] = elemento.tagName;
                console.log(`✅ Campo ${campo} encontrado:`, elemento.tagName);
            } else {
                console.log(`❌ Campo ${campo} NO encontrado`);
            }
        });
        
        // Verificar si el formulario tiene el event listener
        const formEvents = form._events || form.onclick;
        console.log('Eventos del formulario:', formEvents);
        
        // Probar agregar un sermón de prueba
        if (Object.keys(camposEncontrados).length === campos.length) {
            console.log('✅ Todos los campos están presentes');
            
            // Llenar el formulario con datos de prueba
            document.getElementById('addSermonNombre').value = 'Sermón de Prueba';
            document.getElementById('addSermonEmbed').value = '<iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allowfullscreen></iframe>';
            document.getElementById('addSermonPastor').value = 'Pastor de Prueba';
            
            alert('✅ Formulario configurado correctamente.\n\nDatos de prueba agregados al formulario.\n\nAhora puedes hacer clic en "Agregar Sermón" para probar.');
        } else {
            alert('❌ Faltan algunos campos del formulario. Revisa la consola para más detalles.');
        }
    };

    // Función para forzar la configuración del formulario
    window.forceSetupAddSermonForm = function() {
        console.log('=== FORZANDO CONFIGURACIÓN DEL FORMULARIO ===');
        
        const form = document.getElementById('addSermonForm');
        if (!form) {
            alert('Formulario no encontrado');
            return;
        }
        
        // Remover event listeners existentes
        const newForm = form.cloneNode(true);
        form.parentNode.replaceChild(newForm, form);
        
        // Agregar nuevo event listener
        newForm.addEventListener('submit', function(e) {
            e.preventDefault();
            console.log('Formulario enviado (forzado)');
            
            const nombre = document.getElementById('addSermonNombre').value.trim();
            const embed = document.getElementById('addSermonEmbed').value.trim();
            const pastor = document.getElementById('addSermonPastor').value.trim();
            const imagenFile = document.getElementById('addSermonImagen').files[0];
            
            if (!nombre || !embed || !pastor) {
                alert('Por favor completa todos los campos obligatorios');
                return;
            }
            
            // Crear objeto del sermón
            const sermon = {
                nombre: nombre,
                embed: embed,
                pastor: pastor,
                imagen: '',
                fecha: new Date().toISOString()
            };
            
            // Procesar imagen si se proporcionó
            if (imagenFile) {
                if (imagenFile.size > 2 * 1024 * 1024) {
                    alert('La imagen debe ser menor a 2MB');
                    return;
                }
                
                const reader = new FileReader();
                reader.onload = function(e) {
                    sermon.imagen = e.target.result;
                    addSermonToSystem(sermon);
                };
                reader.readAsDataURL(imagenFile);
            } else {
                addSermonToSystem(sermon);
            }
        });
        
        console.log('✅ Formulario reconfigurado forzadamente');
        alert('Formulario reconfigurado. Intenta agregar un sermón ahora.');
    };

    // Función para probar el problema de URLs en recursos
    window.testUrlRecurso = function() {
        console.log('=== PRUEBA DE URL DE RECURSO ===');
        
        // Verificar si estamos en el panel de administración
        const adminPanel = document.getElementById('adminPanel');
        if (!adminPanel || adminPanel.style.display === 'none') {
            alert('No estás en el panel de administración. Primero inicia sesión.');
            return;
        }
        
        // Ir a la sección de audiolibros
        showRecursosCategoria('audiolibros');
        
        // Llenar el formulario con una URL de prueba
        setTimeout(() => {
            const nombreInput = document.getElementById('nombreAudiolibro');
            const urlInput = document.getElementById('urlAudiolibro');
            
            if (nombreInput && urlInput) {
                nombreInput.value = 'Audio de Prueba';
                urlInput.value = 'https://www.soundjay.com/misc/sounds/bell-ringing-05.wav';
                
                console.log('✅ Formulario llenado con URL de prueba');
                alert('Formulario llenado con URL de prueba.\n\nAhora haz clic en "Agregar Audiolibro" para probar.');
            } else {
                alert('❌ No se encontraron los campos del formulario');
            }
        }, 500);
    };

    // Función para verificar el estado del almacenamiento
    window.checkStorageForUrls = function() {
        console.log('=== VERIFICANDO ALMACENAMIENTO PARA URLS ===');
        
        try {
            // Verificar espacio disponible
            const testKey = '__storage_test__';
            const testValue = 'x'.repeat(1000); // 1KB de prueba
            
            localStorage.setItem(testKey, testValue);
            localStorage.removeItem(testKey);
            
            console.log('✅ Hay espacio disponible en localStorage');
            
            // Verificar recursos actuales
            const recursosData = localStorage.getItem('recursosData');
            if (recursosData) {
                const recursos = JSON.parse(recursosData);
                let totalRecursos = 0;
                let recursosConUrls = 0;
                let recursosConArchivos = 0;
                
                ['audiolibros', 'textos', 'videos'].forEach(categoria => {
                    if (recursos[categoria]) {
                        totalRecursos += recursos[categoria].length;
                        recursos[categoria].forEach(recurso => {
                            if (recurso.audio && recurso.audio.startsWith('http')) {
                                recursosConUrls++;
                            } else if (recurso.audio && recurso.audio.startsWith('data:')) {
                                recursosConArchivos++;
                            }
                            if (recurso.pdf && recurso.pdf.startsWith('http')) {
                                recursosConUrls++;
                            } else if (recurso.pdf && recurso.pdf.startsWith('data:')) {
                                recursosConArchivos++;
                            }
                        });
                    }
                });
                
                console.log(`📊 Estado actual:`);
                console.log(`   - Total recursos: ${totalRecursos}`);
                console.log(`   - Con URLs: ${recursosConUrls}`);
                console.log(`   - Con archivos: ${recursosConArchivos}`);
                
                alert(`Estado del almacenamiento:\n\n- Total recursos: ${totalRecursos}\n- Con URLs: ${recursosConUrls}\n- Con archivos: ${recursosConArchivos}\n\n✅ El sistema debería permitir agregar URLs sin problemas.`);
            } else {
                console.log('No hay recursos guardados');
                alert('✅ No hay recursos guardados. Puedes agregar URLs sin problemas.');
            }
            
        } catch (e) {
            console.error('Error verificando almacenamiento:', e);
            alert('❌ Error verificando el almacenamiento: ' + e.message);
        }
    };

    // Función para forzar la limpieza y probar URLs
    window.forceCleanAndTestUrl = function() {
        console.log('=== FORZANDO LIMPIEZA Y PRUEBA DE URL ===');
        
        try {
            // Limpiar imágenes grandes primero
            const cleanedImages = window.cleanupLargeImages();
            console.log('Imágenes limpiadas:', cleanedImages);
            
            // Verificar espacio disponible
            const testKey = '__storage_test__';
            const testValue = 'x'.repeat(5000); // 5KB de prueba
            
            localStorage.setItem(testKey, testValue);
            localStorage.removeItem(testKey);
            
            console.log('✅ Espacio disponible verificado');
            
            // Probar agregar una URL directamente
            const testRecurso = {
                nombre: 'Test URL',
                audio: 'https://www.soundjay.com/misc/sounds/bell-ringing-05.wav'
            };
            
            const data = getRecursos();
            data.audiolibros.push(testRecurso);
            
            // Guardar directamente sin usar safeSetItem
            localStorage.setItem('recursosData', JSON.stringify(data));
            
            console.log('✅ URL de prueba agregada exitosamente');
            alert('✅ Limpieza completada y URL de prueba agregada.\n\nAhora puedes probar agregar tu URL real.');
            
            // Recargar la vista
            showRecursosCategoria('audiolibros');
            
        } catch (e) {
            console.error('Error en limpieza forzada:', e);
            alert('❌ Error durante la limpieza: ' + e.message);
        }
    };

    // Función para agregar URL de prueba
    window.addTestUrl = function() {
        console.log('=== AGREGANDO URL DE PRUEBA ===');
        
        const testUrl = 'https://www.soundjay.com/misc/sounds/bell-ringing-05.wav';
        const testNombre = 'Audio de Prueba';
        
        try {
            addRecurso('audiolibros', {
                nombre: testNombre,
                audio: testUrl
            });
            
            alert('✅ URL de prueba agregada exitosamente.\n\nAhora puedes probar con tu URL real.');
            
        } catch (e) {
            console.error('Error agregando URL de prueba:', e);
            alert('❌ Error agregando URL de prueba: ' + e.message);
        }
    };

    // Función para convertir URL de Google Drive
    window.convertGoogleDriveUrl = function() {
        const originalUrl = prompt('Pega la URL de Google Drive:');
        if (!originalUrl) return;
        
        // Extraer ID del archivo
        const match = originalUrl.match(/\/file\/d\/([a-zA-Z0-9-_]+)/);
        if (match) {
            const fileId = match[1];
            const directUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;
            const previewUrl = `https://drive.google.com/file/d/${fileId}/preview`;
            
            console.log('URLs convertidas:');
            console.log('Directa:', directUrl);
            console.log('Preview:', previewUrl);
            
            alert(`URLs convertidas:\n\n📥 URL Directa (para descarga):\n${directUrl}\n\n🎵 URL Preview (para reproducción):\n${previewUrl}\n\n💡 Usa la URL Directa en el formulario para mejor compatibilidad.`);
        } else {
            alert('No se pudo extraer el ID del archivo. Verifica que la URL sea correcta.');
        }
    };

    // Función para probar reproducción de Google Drive
    window.testGoogleDriveAudio = function() {
        const testUrl = prompt('Pega la URL de Google Drive para probar:');
        if (!testUrl) return;
        
        console.log('Probando URL de Google Drive:', testUrl);
        
        // Extraer ID del archivo
        const match = testUrl.match(/\/file\/d\/([a-zA-Z0-9-_]+)/);
        if (match) {
            const fileId = match[1];
            const previewUrl = `https://drive.google.com/file/d/${fileId}/preview`;
            
            // Crear modal de prueba
            const modal = document.createElement('div');
            modal.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0,0,0,0.8);
                z-index: 10000;
                display: flex;
                align-items: center;
                justify-content: center;
            `;
            
            modal.innerHTML = `
                <div style="background: white; padding: 30px; border-radius: 8px; max-width: 90%; max-height: 90%; overflow: auto; text-align: center;">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
                        <h3 style="margin: 0; color: var(--primary-color);">Prueba de Google Drive</h3>
                        <button onclick="this.parentElement.parentElement.parentElement.remove()" style="background: #dc3545; color: white; border: none; padding: 8px 16px; border-radius: 4px; cursor: pointer; font-size: 18px;">×</button>
                    </div>
                    <iframe src="${previewUrl}" width="600" height="400" frameborder="0" allowfullscreen></iframe>
                    <div style="margin-top: 20px;">
                        <p>✅ Si puedes ver el reproductor arriba, la URL funciona correctamente.</p>
                        <p>💡 Haz clic en el botón de reproducción ▶️ para escuchar el audio.</p>
                    </div>
                </div>
            `;
            
            document.body.appendChild(modal);
            
        } else {
            alert('❌ No se pudo extraer el ID del archivo. Verifica que la URL sea correcta.');
        }
    };

    // Función para convertir URL de Dropbox
    window.convertDropboxUrl = function() {
        const originalUrl = prompt('Pega la URL de Dropbox:');
        if (!originalUrl) return;
        
        // Convertir a URL directa
        const directUrl = originalUrl.replace('www.dropbox.com', 'dl.dropboxusercontent.com').replace('?dl=0', '');
        
        console.log('URL convertida:', directUrl);
        alert(`URL convertida:\n\n${directUrl}\n\nCopia esta URL y úsala en el formulario.`);
    };

    // Función para mostrar instrucciones de almacenamiento
    window.showStorageInstructions = function() {
        const instructions = `
🌐 INSTRUCCIONES PARA ALMACENAMIENTO DE AUDIO

📁 GOOGLE DRIVE (Recomendado):
1. Sube tu archivo de audio a Google Drive
2. Haz clic derecho → "Obtener enlace compartible"
3. Copia la URL
4. Ejecuta: convertGoogleDriveUrl() en la consola
5. Pega la URL original cuando te pregunte
6. Usa la URL convertida en el formulario

📁 DROPBOX:
1. Sube tu archivo a Dropbox
2. Comparte → "Crear enlace"
3. Copia la URL
4. Ejecuta: convertDropboxUrl() en la consola
5. Pega la URL original cuando te pregunte
6. Usa la URL convertida en el formulario

📁 ONEDRIVE:
1. Sube tu archivo a OneDrive
2. Comparte → "Copiar enlace"
3. Usa la URL directamente

⚠️ NOTA: Algunos servidores web pueden bloquear la reproducción directa por restricciones CORS. En ese caso, el usuario tendrá que descargar el archivo.
        `;
        
        alert(instructions);
    };

    // Función para probar URL de audio
    window.testAudioUrl = function() {
        const testUrl = prompt('Pega la URL del audio para probar:');
        if (!testUrl) return;
        
        console.log('Probando URL de audio:', testUrl);
        
        // Crear elemento de audio temporal
        const audio = new Audio();
        audio.src = testUrl;
        
        audio.addEventListener('loadstart', () => {
            console.log('✅ Iniciando carga del audio');
        });
        
        audio.addEventListener('canplay', () => {
            console.log('✅ Audio listo para reproducir');
            alert('✅ La URL funciona correctamente. Puedes usarla en el formulario.');
        });
        
        audio.addEventListener('error', (e) => {
            console.error('❌ Error cargando audio:', e);
            alert('❌ Error cargando el audio. Verifica la URL o usa otro servicio de almacenamiento.');
        });
        
        // Intentar cargar
        audio.load();
    };

    // Función para probar los botones de recursos
    window.testRecursosButtons = function() {
        console.log('=== PRUEBA DE BOTONES DE RECURSOS ===');
        
        // Verificar si estamos en el panel de administración
        const adminPanel = document.getElementById('adminPanel');
        if (!adminPanel || adminPanel.style.display === 'none') {
            alert('No estás en el panel de administración. Primero inicia sesión.');
            return;
        }
        
        // Ir a la sección de audiolibros
        showRecursosCategoria('audiolibros');
        
        setTimeout(() => {
            // Verificar si las funciones están disponibles
            console.log('deleteRecurso disponible:', typeof window.deleteRecurso);
            console.log('editRecurso disponible:', typeof window.editRecurso);
            console.log('saveEditRecurso disponible:', typeof window.saveEditRecurso);
            
            // Verificar si hay recursos para probar
            const data = getRecursos();
            if (data.audiolibros && data.audiolibros.length > 0) {
                console.log('Recursos disponibles para probar:', data.audiolibros.length);
                alert('✅ Funciones disponibles. Puedes probar los botones de Editar y Eliminar.');
            } else {
                console.log('No hay recursos para probar');
                alert('❌ No hay recursos para probar. Primero agrega algunos audios.');
            }
        }, 500);
    };

    // Función para forzar la recarga de recursos
    window.forceReloadRecursos = function() {
        console.log('=== FORZANDO RECARGA DE RECURSOS ===');
        
        // Recargar la categoría actual
        const active = document.querySelector('.recursos-tab.active');
        if (active) {
            const categoria = active.textContent.toLowerCase();
            console.log('Recargando categoría:', categoria);
            showRecursosCategoria(categoria);
        } else {
            console.log('No se encontró categoría activa, recargando audiolibros');
            showRecursosCategoria('audiolibros');
        }
        
        console.log('✅ Recursos recargados');
    };

    // Función para agregar recurso de prueba
    window.addTestRecurso = function() {
        console.log('=== AGREGANDO RECURSO DE PRUEBA ===');
        
        const testRecurso = {
            nombre: 'Audio de Prueba',
            audio: 'https://www.soundjay.com/misc/sounds/bell-ringing-05.wav'
        };
        
        try {
            addRecurso('audiolibros', testRecurso);
            console.log('✅ Recurso de prueba agregado');
            alert('✅ Recurso de prueba agregado. Ahora puedes probar los botones de Editar y Eliminar.');
        } catch (e) {
            console.error('Error agregando recurso de prueba:', e);
            alert('❌ Error agregando recurso de prueba: ' + e.message);
        }
    };

    // ===== FUNCIONES GLOBALES PARA PÁGINA "NOSOTROS" =====

    // Funciones de formato para el editor de divs
    window.applyFormat = function(format) {
        const textarea = document.getElementById('editDivContent');
        if (!textarea) return;
        
        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;
        const selectedText = textarea.value.substring(start, end);
        
        let replacement = '';
        switch(format) {
            case 'bold':
                replacement = `<strong>${selectedText}</strong>`;
                break;
            case 'italic':
                replacement = `<em>${selectedText}</em>`;
                break;
            case 'underline':
                replacement = `<u>${selectedText}</u>`;
                break;
            case 'link':
                const url = prompt('Ingresa la URL del enlace:');
                if (url) {
                    replacement = `<a href="${url}" target="_blank">${selectedText}</a>`;
                } else {
                    return;
                }
                break;
            case 'list':
                replacement = `<ul>\n  <li>${selectedText}</li>\n</ul>`;
                break;
            case 'quote':
                replacement = `<blockquote style="border-left: 4px solid #0a2947; padding-left: 15px; margin: 10px 0; font-style: italic;">${selectedText}</blockquote>`;
                break;
            case 'code':
                replacement = `<code style="background: #f8f9fa; padding: 2px 4px; border-radius: 3px; font-family: monospace;">${selectedText}</code>`;
                break;
        }
        
        const newValue = textarea.value.substring(0, start) + replacement + textarea.value.substring(end);
        textarea.value = newValue;
        
        // Restaurar el foco
        textarea.focus();
        textarea.setSelectionRange(start + replacement.length, start + replacement.length);
    };

    window.applyFontSize = function() {
        const textarea = document.getElementById('editDivContent');
        const fontSize = document.getElementById('fontSize').value;
        if (!textarea || !fontSize) return;
        
        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;
        const selectedText = textarea.value.substring(start, end);
        
        if (selectedText) {
            const replacement = `<span style="font-size: ${fontSize};">${selectedText}</span>`;
            const newValue = textarea.value.substring(0, start) + replacement + textarea.value.substring(end);
            textarea.value = newValue;
            textarea.focus();
            textarea.setSelectionRange(start + replacement.length, start + replacement.length);
        }
    };

    window.applyTextColor = function() {
        const textarea = document.getElementById('editDivContent');
        const textColor = document.getElementById('textColor').value;
        if (!textarea || !textColor) return;
        
        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;
        const selectedText = textarea.value.substring(start, end);
        
        if (selectedText) {
            const replacement = `<span style="color: ${textColor};">${selectedText}</span>`;
            const newValue = textarea.value.substring(0, start) + replacement + textarea.value.substring(end);
            textarea.value = newValue;
            textarea.focus();
            textarea.setSelectionRange(start + replacement.length, start + replacement.length);
        }
    };

    window.applyTextAlign = function() {
        const textarea = document.getElementById('editDivContent');
        const textAlign = document.getElementById('textAlign').value;
        if (!textarea || !textAlign) return;
        
        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;
        const selectedText = textarea.value.substring(start, end);
        
        if (selectedText) {
            const replacement = `<div style="text-align: ${textAlign};">${selectedText}</div>`;
            const newValue = textarea.value.substring(0, start) + replacement + textarea.value.substring(end);
            textarea.value = newValue;
            textarea.focus();
            textarea.setSelectionRange(start + replacement.length, start + replacement.length);
        }
    };

    // Función de diagnóstico para verificar contenido de "Nosotros"
    window.diagnosticNosotros = function() {
        console.log('=== DIAGNÓSTICO PÁGINA "NOSOTROS" ===');
        
        const content = localStorage.getItem('nosotrosContent');
        console.log('Contenido guardado en localStorage:', content);
        
        const container = document.getElementById('nosotrosContent');
        console.log('Container encontrado:', !!container);
        
        if (container) {
            console.log('Contenido actual del container:', container.innerHTML);
        }
        
        if (content) {
            console.log('✅ Hay contenido guardado');
            alert('✅ Hay contenido guardado. El problema puede ser de caché. Intenta Ctrl+F5.');
        } else {
            console.log('❌ No hay contenido guardado');
            alert('❌ No hay contenido guardado. Primero agrega divs desde el panel de administración.');
        }
    };

    // Función de ayuda para el editor de formato
    window.showFormatHelp = function() {
        const help = `
🎨 AYUDA DEL EDITOR DE FORMATO

📝 CÓMO USAR:
1. Selecciona el texto que quieres formatear
2. Haz clic en el botón de formato deseado
3. Para enlaces, se te pedirá la URL

🔧 HERRAMIENTAS DISPONIBLES:
• B - Negrita (Ctrl+B)
• I - Cursiva (Ctrl+I) 
• U - Subrayado (Ctrl+U)
• 🔗 - Enlace
• 📋 - Lista con viñetas
• 💬 - Cita destacada
• 💻 - Código

🎨 FORMATO AVANZADO:
• Tamaño: Selecciona texto y elige tamaño
• Color: Selecciona texto y elige color
• Alineación: Selecciona texto y elige alineación

⌨️ ATAJOS DE TECLADO:
• Ctrl+B = Negrita
• Ctrl+I = Cursiva
• Ctrl+U = Subrayado

💡 CONSEJOS:
• Puedes combinar formatos
• Las listas se crean automáticamente
• Los enlaces se abren en nueva pestaña
        `;
        
        alert(help);
    };

    // Función de diagnóstico para verificar el estado de "Nosotros"
    window.diagnoseNosotros = function() {
        console.log('=== DIAGNÓSTICO NOSOTROS ===');
        
        // Verificar localStorage
        const content = localStorage.getItem('nosotrosContent');
        console.log('Contenido en localStorage:', content ? 'SÍ' : 'NO');
        if (content) {
            console.log('Longitud del contenido:', content.length);
            console.log('Primeros 200 caracteres:', content.substring(0, 200));
        }
        
        // Verificar elementos del DOM
        const preview = document.getElementById('nosotrosPreview');
        const nosotrosContainer = document.getElementById('nosotrosContent');
        
        console.log('Elemento preview encontrado:', preview ? 'SÍ' : 'NO');
        console.log('Elemento nosotrosContent encontrado:', nosotrosContainer ? 'SÍ' : 'NO');
        
        if (preview) {
            console.log('Contenido del preview:', preview.innerHTML.substring(0, 200));
        }
        
        if (nosotrosContainer) {
            console.log('Contenido del nosotrosContainer:', nosotrosContainer.innerHTML.substring(0, 200));
        }
        
        // Verificar funciones disponibles
        console.log('Función loadNosotrosContent disponible:', typeof window.loadNosotrosContent);
        console.log('Función updateNosotrosPreview disponible:', typeof window.updateNosotrosPreview);
        console.log('Función saveEditDivContent disponible:', typeof window.saveEditDivContent);
        
        alert('Revisa la consola para ver el diagnóstico completo');
    };

    // Función para limpiar y reinicializar "Nosotros"
    window.resetNosotros = function() {
        if (confirm('¿Estás seguro de que quieres reinicializar la página "Nosotros"? Se perderá todo el contenido.')) {
            localStorage.removeItem('nosotrosContent');
            
            // Actualizar vista previa
            const preview = document.getElementById('nosotrosPreview');
            if (preview) {
                preview.innerHTML = '<p style="color: var(--gray); text-align: center;">Vista previa del contenido de la página "Nosotros"</p>';
            }
            
            // Actualizar página pública
            const nosotrosContainer = document.getElementById('nosotrosContent');
            if (nosotrosContainer) {
                window.loadNosotrosContent();
            }
            
            alert('Página "Nosotros" reinicializada correctamente');
        }
    };

    // Función para actualizar automáticamente la imagen del header
    window.updateHeaderImage = function() {
        console.log('=== ACTUALIZANDO IMAGEN DEL HEADER ===');
        
        // Crear un elemento de imagen temporal para cargar foto_iglesia.jpg
        const img = new Image();
        img.crossOrigin = 'anonymous';
        
        img.onload = function() {
            // Crear un canvas para convertir la imagen a base64
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            
            canvas.width = img.width;
            canvas.height = img.height;
            
            // Dibujar la imagen en el canvas
            ctx.drawImage(img, 0, 0);
            
            // Convertir a base64
            const imageData = canvas.toDataURL('image/jpeg', 0.8);
            
            console.log('Imagen convertida a base64, tamaño:', imageData.length);
            
            // Guardar en localStorage
            if (safeSetItem('headerBackground', imageData)) {
                // Aplicar la imagen al header
                applyBackgroundImage('header', imageData);
                
                // Actualizar preview en el panel de administración
                const preview = document.getElementById('headerPreview');
                const text = document.getElementById('headerText');
                
                if (preview && text) {
                    preview.src = imageData;
                    preview.style.display = 'block';
                    text.style.display = 'none';
                }
                
                console.log('✅ Imagen del header actualizada correctamente');
                alert('✅ Imagen del header actualizada correctamente');
            } else {
                console.error('❌ Error al guardar la imagen en localStorage');
                alert('❌ Error al guardar la imagen en localStorage');
            }
        };
        
        img.onerror = function() {
            console.error('❌ Error al cargar la imagen foto_iglesia.jpg');
            alert('❌ Error al cargar la imagen foto_iglesia.jpg. Asegúrate de que el archivo existe.');
        };
        
        // Cargar la imagen
        img.src = 'foto_iglesia.jpg';
    };

    // Función para exportar todos los datos del sitio
    window.exportAllData = function() {
        console.log('=== EXPORTANDO TODOS LOS DATOS ===');
        
        const exportData = {
            sermones: getAllSermones(),
            recursos: getRecursos(),
            nosotrosContent: localStorage.getItem('nosotrosContent'),
            headerBackground: localStorage.getItem('headerBackground'),
            featuresBackground: localStorage.getItem('featuresBackground'),
            sermonsBackground: localStorage.getItem('sermonsBackground'),
            ministriesBackground: localStorage.getItem('ministriesBackground'),
            ultimosSermones: JSON.parse(localStorage.getItem('ultimosSermones') || '[]'),
            adminPassword: localStorage.getItem('adminPassword'),
            exportDate: new Date().toISOString()
        };
        
        const dataStr = JSON.stringify(exportData, null, 2);
        const dataBlob = new Blob([dataStr], {type: 'application/json'});
        
        const link = document.createElement('a');
        link.href = URL.createObjectURL(dataBlob);
        link.download = `iglesia-backup-${new Date().toISOString().split('T')[0]}.json`;
        link.click();
        
        console.log('✅ Datos exportados correctamente');
        alert('✅ Datos exportados correctamente. Guarda este archivo en un lugar seguro.');
    };

    // Función para importar todos los datos del sitio
    window.importAllData = function() {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = '.json';
        
        input.onchange = function(e) {
            const file = e.target.files[0];
            if (!file) return;
            
            const reader = new FileReader();
            reader.onload = function(event) {
                try {
                    const importData = JSON.parse(event.target.result);
                    console.log('=== IMPORTANDO DATOS ===', importData);
                    
                    // Importar sermones
                    if (importData.sermones && Array.isArray(importData.sermones)) {
                        saveAllSermones(importData.sermones);
                        console.log('✅ Sermones importados:', importData.sermones.length);
                    }
                    
                    // Importar recursos
                    if (importData.recursos) {
                        setRecursos(importData.recursos);
                        console.log('✅ Recursos importados');
                    }
                    
                    // Importar contenido de nosotros
                    if (importData.nosotrosContent) {
                        localStorage.setItem('nosotrosContent', importData.nosotrosContent);
                        console.log('✅ Contenido de nosotros importado');
                    }
                    
                    // Importar imágenes de fondo
                    if (importData.headerBackground) {
                        localStorage.setItem('headerBackground', importData.headerBackground);
                        applyBackgroundImage('header', importData.headerBackground);
                    }
                    if (importData.featuresBackground) {
                        localStorage.setItem('featuresBackground', importData.featuresBackground);
                        applyBackgroundImage('features', importData.featuresBackground);
                    }
                    if (importData.sermonsBackground) {
                        localStorage.setItem('sermonsBackground', importData.sermonsBackground);
                        applyBackgroundImage('sermons', importData.sermonsBackground);
                    }
                    if (importData.ministriesBackground) {
                        localStorage.setItem('ministriesBackground', importData.ministriesBackground);
                        applyBackgroundImage('ministries', importData.ministriesBackground);
                    }
                    
                    // Importar últimos sermones
                    if (importData.ultimosSermones) {
                        localStorage.setItem('ultimosSermones', JSON.stringify(importData.ultimosSermones));
                    }
                    
                    // Importar contraseña de admin
                    if (importData.adminPassword) {
                        localStorage.setItem('adminPassword', importData.adminPassword);
                    }
                    
                    // Actualizar todas las vistas
                    if (typeof renderUltimosSermones === 'function') {
                        renderUltimosSermones();
                    }
                    if (typeof updateNosotrosPreview === 'function') {
                        updateNosotrosPreview();
                    }
                    if (typeof loadNosotrosContent === 'function') {
                        loadNosotrosContent();
                    }
                    
                    console.log('✅ Todos los datos importados correctamente');
                    alert('✅ Todos los datos importados correctamente. Recarga la página para ver los cambios.');
                    
                } catch (error) {
                    console.error('❌ Error al importar datos:', error);
                    alert('❌ Error al importar datos. Verifica que el archivo sea válido.');
                }
            };
            
            reader.readAsText(file);
        };
        
        input.click();
    };

    // Función para crear un archivo de datos iniciales
    window.createInitialData = function() {
        console.log('=== CREANDO DATOS INICIALES ===');
        
        // Datos de ejemplo para el sitio
        const initialData = {
            sermones: [
                {
                    id: 1,
                    nombre: "La Gracia de Dios",
                    pastor: "Pastor Principal",
                    fecha: new Date().toISOString(),
                    embed: "<iframe width='560' height='315' src='https://www.youtube.com/embed/example' frameborder='0' allowfullscreen></iframe>"
                }
            ],
            recursos: {
                audiolibros: [
                    {
                        nombre: "Confesión de Fe Bautista de 1689",
                        descripcion: "Documento histórico de la fe bautista",
                        url: "Recursos/confesion1689.pdf",
                        tipo: "pdf"
                    }
                ],
                textos: [],
                videos: []
            },
            nosotrosContent: `
                <div id="div-1" class="nosotros-text-div" style="margin-bottom: 30px; padding: 20px; background: white; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
                    <div class="div-content">
                        <h3 style="color: #0a2947; font-weight: bold; margin-bottom: 15px;">Bienvenidos a Nuestra Iglesia</h3>
                        <p style="line-height: 1.6; color: #333;">Somos una comunidad cristiana comprometida con la enseñanza bíblica y el servicio a Dios. Nuestra misión es compartir el evangelio de Jesucristo y edificar a los creyentes en su fe.</p>
                    </div>
                    <div class="div-controls" style="margin-top: 15px; padding-top: 15px; border-top: 1px solid #eee; display: flex; gap: 10px; flex-wrap: wrap;">
                        <button onclick="editTextDiv('div-1')" style="padding: 5px 10px; background: var(--primary-color); color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 12px;">Editar</button>
                        <button onclick="deleteTextDiv('div-1')" style="padding: 5px 10px; background: #dc3545; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 12px;">Eliminar</button>
                        <button onclick="moveTextDiv('div-1', 'up')" style="padding: 5px 10px; background: #6c757d; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 12px;">↑</button>
                        <button onclick="moveTextDiv('div-1', 'down')" style="padding: 5px 10px; background: #6c757d; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 12px;">↓</button>
                    </div>
                </div>
            `,
            ultimosSermones: [],
            adminPassword: "admin123",
            exportDate: new Date().toISOString()
        };
        
        const dataStr = JSON.stringify(initialData, null, 2);
        const dataBlob = new Blob([dataStr], {type: 'application/json'});
        
        const link = document.createElement('a');
        link.href = URL.createObjectURL(dataBlob);
        link.download = 'iglesia-datos-iniciales.json';
        link.click();
        
        console.log('✅ Datos iniciales creados correctamente');
        alert('✅ Archivo de datos iniciales creado. Puedes importarlo en el sitio desplegado.');
    };

    // Función de diagnóstico completo del sitio
    window.diagnoseSite = function() {
        console.log('=== DIAGNÓSTICO COMPLETO DEL SITIO ===');
        
        // Verificar localStorage
        const keys = ['sermones', 'recursos', 'nosotrosContent', 'headerBackground', 'featuresBackground', 'sermonsBackground', 'ministriesBackground', 'ultimosSermones', 'adminPassword'];
        
        console.log('--- VERIFICANDO LOCALSTORAGE ---');
        keys.forEach(key => {
            const value = localStorage.getItem(key);
            console.log(`${key}:`, value ? 'SÍ' : 'NO', value ? `(${value.length} chars)` : '');
        });
        
        // Verificar funciones
        console.log('--- VERIFICANDO FUNCIONES ---');
        const functions = ['getAllSermones', 'getRecursos', 'renderUltimosSermones', 'loadNosotrosContent', 'updateNosotrosPreview'];
        functions.forEach(func => {
            console.log(`${func}:`, typeof window[func] === 'function' ? 'SÍ' : 'NO');
        });
        
        // Verificar elementos del DOM
        console.log('--- VERIFICANDO ELEMENTOS DEL DOM ---');
        const elements = ['nosotrosContent', 'nosotrosPreview', 'sermonesGrid', 'headerPreview'];
        elements.forEach(element => {
            const el = document.getElementById(element);
            console.log(`${element}:`, el ? 'SÍ' : 'NO');
        });
        
        // Verificar datos específicos
        console.log('--- VERIFICANDO DATOS ESPECÍFICOS ---');
        const sermones = getAllSermones();
        console.log('Sermones encontrados:', sermones.length);
        if (sermones.length > 0) {
            console.log('Primer sermón:', sermones[0]);
        }
        
        const recursos = getRecursos();
        console.log('Recursos encontrados:', recursos ? 'SÍ' : 'NO');
        if (recursos) {
            console.log('Categorías de recursos:', Object.keys(recursos));
        }
        
        const nosotrosContent = localStorage.getItem('nosotrosContent');
        console.log('Contenido de nosotros:', nosotrosContent ? 'SÍ' : 'NO');
        
        alert('Revisa la consola para ver el diagnóstico completo');
    };

    // Función para restaurar datos de ejemplo
    window.restoreSampleData = function() {
        if (confirm('¿Estás seguro de que quieres restaurar datos de ejemplo? Esto sobrescribirá cualquier dato existente.')) {
            console.log('=== RESTAURANDO DATOS DE EJEMPLO ===');
            
            // Sermones de ejemplo
            const sampleSermones = [
                {
                    id: 1,
                    nombre: "La Gracia de Dios",
                    pastor: "Pastor Principal",
                    fecha: new Date().toISOString(),
                    embed: "<iframe width='560' height='315' src='https://www.youtube.com/embed/dQw4w9WgXcQ' frameborder='0' allowfullscreen></iframe>",
                    imagen: null
                },
                {
                    id: 2,
                    nombre: "Viviendo en Fe",
                    pastor: "Pastor Principal",
                    fecha: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
                    embed: "<iframe width='560' height='315' src='https://www.youtube.com/embed/dQw4w9WgXcQ' frameborder='0' allowfullscreen></iframe>",
                    imagen: null
                }
            ];
            
            // Recursos de ejemplo
            const sampleRecursos = {
                audiolibros: [
                    {
                        nombre: "Confesión de Fe Bautista de 1689",
                        descripcion: "Documento histórico de la fe bautista",
                        url: "Recursos/confesion1689.pdf",
                        tipo: "pdf"
                    }
                ],
                textos: [
                    {
                        nombre: "Manual de Doctrina",
                        descripcion: "Guía básica de doctrina cristiana",
                        url: "Recursos/manual-doctrina.pdf",
                        tipo: "pdf"
                    }
                ],
                videos: []
            };
            
            // Contenido de nosotros de ejemplo
            const sampleNosotros = `
                <div id="div-1" class="nosotros-text-div" style="margin-bottom: 30px; padding: 20px; background: white; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
                    <div class="div-content">
                        <h3 style="color: #0a2947; font-weight: bold; margin-bottom: 15px;">Bienvenidos a Nuestra Iglesia</h3>
                        <p style="line-height: 1.6; color: #333;">Somos una comunidad cristiana comprometida con la enseñanza bíblica y el servicio a Dios. Nuestra misión es compartir el evangelio de Jesucristo y edificar a los creyentes en su fe.</p>
                    </div>
                    <div class="div-controls" style="margin-top: 15px; padding-top: 15px; border-top: 1px solid #eee; display: flex; gap: 10px; flex-wrap: wrap;">
                        <button onclick="editTextDiv('div-1')" style="padding: 5px 10px; background: var(--primary-color); color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 12px;">Editar</button>
                        <button onclick="deleteTextDiv('div-1')" style="padding: 5px 10px; background: #dc3545; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 12px;">Eliminar</button>
                        <button onclick="moveTextDiv('div-1', 'up')" style="padding: 5px 10px; background: #6c757d; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 12px;">↑</button>
                        <button onclick="moveTextDiv('div-1', 'down')" style="padding: 5px 10px; background: #6c757d; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 12px;">↓</button>
                    </div>
                </div>
                <div id="div-2" class="nosotros-text-div" style="margin-bottom: 30px; padding: 20px; background: white; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
                    <div class="div-content">
                        <h3 style="color: #0a2947; font-weight: bold; margin-bottom: 15px;">Nuestra Misión</h3>
                        <p style="line-height: 1.6; color: #333;">Proclamar el evangelio de Jesucristo, hacer discípulos y servir a nuestra comunidad con amor y compasión, siguiendo el ejemplo de nuestro Señor.</p>
                    </div>
                    <div class="div-controls" style="margin-top: 15px; padding-top: 15px; border-top: 1px solid #eee; display: flex; gap: 10px; flex-wrap: wrap;">
                        <button onclick="editTextDiv('div-2')" style="padding: 5px 10px; background: var(--primary-color); color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 12px;">Editar</button>
                        <button onclick="deleteTextDiv('div-2')" style="padding: 5px 10px; background: #dc3545; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 12px;">Eliminar</button>
                        <button onclick="moveTextDiv('div-2', 'up')" style="padding: 5px 10px; background: #6c757d; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 12px;">↑</button>
                        <button onclick="moveTextDiv('div-2', 'down')" style="padding: 5px 10px; background: #6c757d; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 12px;">↓</button>
                    </div>
                </div>
            `;
            
            // Guardar datos
            saveAllSermones(sampleSermones);
            setRecursos(sampleRecursos);
            localStorage.setItem('nosotrosContent', sampleNosotros);
            localStorage.setItem('ultimosSermones', JSON.stringify(sampleSermones.slice(0, 3)));
            
            // Actualizar vistas
            if (typeof renderUltimosSermones === 'function') {
                renderUltimosSermones();
            }
            if (typeof updateNosotrosPreview === 'function') {
                updateNosotrosPreview();
            }
            if (typeof loadNosotrosContent === 'function') {
                loadNosotrosContent();
            }
            
            console.log('✅ Datos de ejemplo restaurados correctamente');
            alert('✅ Datos de ejemplo restaurados correctamente. Recarga la página para ver los cambios.');
        }
    };

    // Función de inicialización automática
    window.initializeSite = function() {
        console.log('=== INICIALIZANDO SITIO ===');
        
        // Verificar que estamos en el contexto correcto
        console.log('URL actual:', window.location.href);
        console.log('Protocolo:', window.location.protocol);
        console.log('Host:', window.location.host);
        
        // Verificar que las funciones principales estén disponibles
        const requiredFunctions = [
            'getAllSermones', 'getRecursos', 'renderUltimosSermones', 
            'loadNosotrosContent', 'updateNosotrosPreview', 'loadSavedBackgrounds'
        ];
        
        console.log('--- VERIFICANDO FUNCIONES REQUERIDAS ---');
        requiredFunctions.forEach(func => {
            const available = typeof window[func] === 'function';
            console.log(`${func}: ${available ? '✅' : '❌'}`);
            if (!available) {
                console.error(`Función ${func} no está disponible`);
            }
        });
        
        // Verificar elementos del DOM
        console.log('--- VERIFICANDO ELEMENTOS DEL DOM ---');
        const requiredElements = [
            'nosotrosContent', 'nosotrosPreview', 'sermonesGrid', 
            'headerPreview', 'heroCarousel'
        ];
        
        requiredElements.forEach(elementId => {
            const element = document.getElementById(elementId);
            console.log(`${elementId}: ${element ? '✅' : '❌'}`);
        });
        
        // Intentar cargar datos automáticamente
        console.log('--- CARGANDO DATOS AUTOMÁTICAMENTE ---');
        
        // Cargar sermones
        if (typeof renderUltimosSermones === 'function') {
            try {
                renderUltimosSermones();
                console.log('✅ Sermones cargados');
            } catch (error) {
                console.error('❌ Error al cargar sermones:', error);
            }
        }
        
        // Cargar contenido de nosotros
        if (typeof loadNosotrosContent === 'function') {
            try {
                loadNosotrosContent();
                console.log('✅ Contenido de nosotros cargado');
            } catch (error) {
                console.error('❌ Error al cargar contenido de nosotros:', error);
            }
        }
        
        // Cargar fondos guardados
        if (typeof loadSavedBackgrounds === 'function') {
            try {
                loadSavedBackgrounds();
                console.log('✅ Fondos guardados cargados');
            } catch (error) {
                console.error('❌ Error al cargar fondos:', error);
            }
        }
        
        // Verificar si hay datos en localStorage
        console.log('--- VERIFICANDO LOCALSTORAGE ---');
        const dataKeys = ['sermones', 'recursos', 'nosotrosContent', 'headerBackground'];
        dataKeys.forEach(key => {
            const data = localStorage.getItem(key);
            console.log(`${key}: ${data ? '✅' : '❌'}`);
        });
        
        console.log('=== INICIALIZACIÓN COMPLETADA ===');
    };

    // Ejecutar inicialización cuando el DOM esté listo
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            setTimeout(initializeSite, 1000); // Esperar 1 segundo para asegurar que todo esté cargado
        });
    } else {
        setTimeout(initializeSite, 1000);
    }

    // Función para verificar archivos importantes
    window.checkFilesAccess = function() {
        console.log('=== VERIFICANDO ACCESO A ARCHIVOS ===');
        
        const filesToCheck = [
            'styles.css',
            'script.js',
            'favicon.png',
            'logo-iglesia png.png',
            'foto_iglesia.jpg',
            'nosotros.html',
            'sermones.html',
            'recursos.html',
            'live-stream.html'
        ];
        
        let checkedFiles = 0;
        let accessibleFiles = 0;
        
        filesToCheck.forEach(file => {
            const img = new Image();
            img.onload = function() {
                console.log(`✅ ${file} - ACCESIBLE`);
                accessibleFiles++;
                checkedFiles++;
                if (checkedFiles === filesToCheck.length) {
                    console.log(`=== RESULTADO: ${accessibleFiles}/${filesToCheck.length} archivos accesibles ===`);
                }
            };
            img.onerror = function() {
                console.log(`❌ ${file} - NO ACCESIBLE`);
                checkedFiles++;
                if (checkedFiles === filesToCheck.length) {
                    console.log(`=== RESULTADO: ${accessibleFiles}/${filesToCheck.length} archivos accesibles ===`);
                }
            };
            
            // Para archivos que no son imágenes, usar fetch
            if (!file.match(/\.(jpg|jpeg|png|gif|svg)$/i)) {
                fetch(file)
                    .then(response => {
                        if (response.ok) {
                            console.log(`✅ ${file} - ACCESIBLE`);
                            accessibleFiles++;
                        } else {
                            console.log(`❌ ${file} - NO ACCESIBLE (${response.status})`);
                        }
                        checkedFiles++;
                        if (checkedFiles === filesToCheck.length) {
                            console.log(`=== RESULTADO: ${accessibleFiles}/${filesToCheck.length} archivos accesibles ===`);
                        }
                    })
                    .catch(error => {
                        console.log(`❌ ${file} - NO ACCESIBLE (${error.message})`);
                        checkedFiles++;
                        if (checkedFiles === filesToCheck.length) {
                            console.log(`=== RESULTADO: ${accessibleFiles}/${filesToCheck.length} archivos accesibles ===`);
                        }
                    });
            } else {
                img.src = file;
            }
        });
    };
});

// Estilos adicionales para efectos
const additionalStyles = `
<style>
.nav-menu.active {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 80px;
    left: 0;
    right: 0;
    background: rgba(255, 255, 255, 0.98);
    backdrop-filter: blur(10px);
    padding: 20px;
    box-shadow: 0 4px 10px rgba(10, 41, 71, 0.1);
}

.nav-toggle.active span:nth-child(1) {
    transform: rotate(-45deg) translate(-5px, 6px);
}

.nav-toggle.active span:nth-child(2) {
    opacity: 0;
}

.nav-toggle.active span:nth-child(3) {
    transform: rotate(45deg) translate(-5px, -6px);
}

@media (max-width: 768px) {
    .nav-menu {
        display: none;
    }
    
    .nav-menu.active {
        display: flex;
    }
}
</style>
`;

document.head.insertAdjacentHTML('beforeend', additionalStyles);

// ===== FUNCIONES GLOBALES PARA PÁGINA "NOSOTROS" =====

// Cargar contenido de "Nosotros" automáticamente cuando se cargue la página
document.addEventListener('DOMContentLoaded', function() {
    // Verificar si estamos en la página "Nosotros"
    if (document.getElementById('nosotrosContent')) {
        console.log('Página "Nosotros" detectada, cargando contenido...');
        loadNosotrosContent();
    }
});

// Función de diagnóstico para verificar contenido de "Nosotros"
window.diagnosticNosotros = function() {
    console.log('=== DIAGNÓSTICO PÁGINA "NOSOTROS" ===');
    
    const content = localStorage.getItem('nosotrosContent');
    console.log('Contenido guardado en localStorage:', content);
    
    const container = document.getElementById('nosotrosContent');
    console.log('Container encontrado:', !!container);
    
    if (container) {
        console.log('Contenido actual del container:', container.innerHTML);
    }
    
    if (content) {
        console.log('✅ Hay contenido guardado');
        alert('✅ Hay contenido guardado. El problema puede ser de caché. Intenta Ctrl+F5.');
    } else {
        console.log('❌ No hay contenido guardado');
        alert('❌ No hay contenido guardado. Primero agrega divs desde el panel de administración.');
    }
};



 