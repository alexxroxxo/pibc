# 📺 Cómo Configurar Transmisión en Vivo de Facebook

## 🎥 Opciones Disponibles

### **Opción 1: Embed Directo de Facebook (Recomendado)**

Esta es la forma más fácil y confiable de insertar tu transmisión en vivo de Facebook en tu página web.

#### **Pasos para Configurar:**

1. **Inicia tu transmisión en vivo en Facebook**
   - Ve a tu página de Facebook
   - Haz clic en "Crear" → "Transmisión en vivo"
   - Configura tu transmisión

2. **Obtén el código de embed**
   - Una vez que esté transmitiendo, haz clic en los 3 puntos (...)
   - Selecciona "Insertar"
   - Copia el código que aparece

3. **Reemplaza en tu página web**
   - Abre el archivo `live-stream.html`
   - Busca la línea que dice `<!-- REEMPLAZA ESTA URL CON TU TRANSMISIÓN DE FACEBOOK -->`
   - Reemplaza el iframe con tu código de Facebook

#### **Ejemplo de código de Facebook:**
```html
<iframe 
    src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Ftuiglesia%2Fvideos%2F123456789&show_text=false&width=734&height=413&appId"
    allowfullscreen="true"
    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share">
</iframe>
```

### **Opción 2: Página de Facebook Completa**

Si prefieres mostrar toda tu página de Facebook:

```html
<iframe 
    src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ftuiglesia&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
    width="340" 
    height="500" 
    style="border:none;overflow:hidden" 
    scrolling="no" 
    frameborder="0" 
    allowfullscreen="true" 
    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share">
</iframe>
```

### **Opción 3: Enlace Directo**

Si solo quieres un enlace que lleve a Facebook:

```html
<a href="https://facebook.com/tuiglesia" target="_blank" class="cta-button secondary">
    <i class="fab fa-facebook"></i> Ver en Facebook
</a>
```

## 🔧 Configuración Avanzada

### **Para Transmisiones Automáticas:**

Si quieres que la transmisión se inicie automáticamente cuando esté en vivo:

```html
<iframe 
    src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Ftuiglesia%2Fvideos%2Ftu-video-id&show_text=false&width=734&height=413&appId&autoplay=1"
    allowfullscreen="true"
    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share">
</iframe>
```

### **Para Múltiples Transmisiones:**

Si tienes diferentes transmisiones para diferentes servicios:

```html
<!-- Servicio Matutino -->
<div class="service-stream">
    <h3>Servicio Matutino - 9:00 AM</h3>
    <iframe src="URL-DEL-SERVICIO-MATUTINO"></iframe>
</div>

<!-- Servicio Vespertino -->
<div class="service-stream">
    <h3>Servicio Vespertino - 6:00 PM</h3>
    <iframe src="URL-DEL-SERVICIO-VESPERTINO"></iframe>
</div>
```

## 📱 Configuración para Móviles

### **Responsive Design:**

El código ya está configurado para ser responsive, pero puedes ajustar el tamaño:

```css
.facebook-embed {
    position: relative;
    width: 100%;
    height: 0;
    padding-bottom: 56.25%; /* 16:9 aspect ratio */
}

@media (max-width: 768px) {
    .facebook-embed {
        padding-bottom: 75%; /* Más alto en móviles */
    }
}
```

## 🎯 Funcionalidades Adicionales

### **Notificaciones de Transmisión:**

Puedes agregar un sistema de notificaciones:

```javascript
// Verificar si hay transmisión en vivo
function checkLiveStream() {
    // Aquí puedes hacer una llamada a la API de Facebook
    // para verificar si hay una transmisión activa
    fetch('https://graph.facebook.com/tuiglesia/videos?access_token=TU_TOKEN')
        .then(response => response.json())
        .then(data => {
            if (data.data[0].live_status === 'LIVE') {
                showLiveNotification();
            }
        });
}
```

### **Contador de Espectadores:**

```html
<div class="viewer-count">
    <i class="fas fa-eye"></i>
    <span id="viewer-count">0</span> espectadores en vivo
</div>
```

## 🚨 Consideraciones Importantes

### **Privacidad:**
- Asegúrate de que tu transmisión sea pública para que se pueda embeber
- Considera la privacidad de los asistentes

### **Rendimiento:**
- Las transmisiones en vivo consumen más ancho de banda
- Considera agregar una opción para reducir la calidad

### **Accesibilidad:**
- Agrega subtítulos si es posible
- Incluye descripciones para usuarios con discapacidades

## 📞 Soporte Técnico

### **Problemas Comunes:**

1. **La transmisión no se carga:**
   - Verifica que la URL sea correcta
   - Asegúrate de que la transmisión sea pública
   - Revisa la consola del navegador para errores

2. **No funciona en móviles:**
   - Verifica que el iframe sea responsive
   - Prueba en diferentes dispositivos

3. **Calidad de video baja:**
   - Ajusta la configuración de Facebook
   - Considera usar un CDN

### **Recursos Útiles:**
- [Documentación de Facebook Embed](https://developers.facebook.com/docs/plugins/embedded-video-player)
- [Guía de Transmisiones en Vivo](https://www.facebook.com/help/1636872026596731)

## 🎉 ¡Listo!

Una vez configurado, tu transmisión en vivo de Facebook aparecerá directamente en tu página web, manteniendo el diseño elegante en blanco y rojo vino.

**Recuerda:** Siempre prueba la transmisión antes del servicio para asegurarte de que todo funcione correctamente. 