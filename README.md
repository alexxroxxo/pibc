# Primera Iglesia Bautista de Cúcuta - Sitio Web

Una página web elegante y moderna para la Primera Iglesia Bautista de Cúcuta, inspirada en el diseño de la Iglesia Bíblica del Señor Jesucristo pero con un estilo único en colores blanco y rojo vino.

## 🎨 Diseño y Colores

### Paleta de Colores:
- **Rojo Vino Principal**: `#8B0000`
- **Rojo Vino Claro**: `#A52A2A`
- **Rojo Vino Oscuro**: `#660000`
- **Blanco**: `#FFFFFF`
- **Gris Claro**: `#F8F9FA`
- **Gris**: `#6C757D`
- **Gris Oscuro**: `#343A40`

### Características del Diseño:
- ✅ Diseño elegante y profesional
- ✅ Colores blanco y rojo vino
- ✅ Fondo animado con gradientes elegantes
- ✅ Tipografía moderna (Playfair Display + Inter)
- ✅ Efectos de hover y animaciones suaves
- ✅ Diseño completamente responsive
- ✅ Navegación intuitiva

## 📁 Estructura del Proyecto

```
webpage1/
├── index.html          # Página principal
├── live-stream.html    # Página de transmisión en vivo
├── styles.css          # Estilos CSS elegantes
├── script.js           # JavaScript interactivo
├── INSTRUCCIONES-LIVE.md # Guía para transmisión en vivo
└── README.md           # Este archivo
```

## 🚀 Características Principales

### 1. **Header con Fondo Animado**
- Gradiente animado en colores rojo vino
- Efectos de luz y sombra elegantes
- Navegación transparente con efecto blur
- Contenido hero centrado

### 2. **Secciones Principales**
- **Características**: ¿Primera vez aquí?, Transmisión en Vivo, ¿Deseas Ofrendar?
- **Últimos Sermones**: Tarjetas interactivas con reproductor
- **Ministerios**: Escuela Bíblica, Jóvenes, Damas
- **Información de Contacto**: Dirección, teléfono, horarios

### 3. **Funcionalidades Interactivas**
- Navegación suave entre secciones
- Menú móvil responsive
- Animaciones de entrada
- Efectos de hover en tarjetas
- Botón "Volver arriba"
- Contador de visitantes

## 🎥 Transmisión en Vivo

### Página Dedicada:
- **`live-stream.html`** - Página especializada para transmisiones
- Diseño optimizado para video
- Instrucciones detalladas en `INSTRUCCIONES-LIVE.md`

### Configuración:
1. **Inicia tu transmisión en Facebook**
2. **Obtén el código de embed** (3 puntos → Insertar)
3. **Reemplaza en `live-stream.html`** el iframe de ejemplo

## 🎯 Personalización

### Cambiar Información de la Iglesia:

1. **Nombre de la Iglesia**: Edita en `index.html` línea 6
2. **Dirección**: Líneas 180-185
3. **Teléfono**: Líneas 186-191
4. **Email**: Líneas 192-197
5. **Horarios**: Líneas 200-215

### Cambiar Colores:

En `styles.css`, modifica las variables CSS:

```css
:root {
    --primary-color: #8B0000; /* Rojo vino principal */
    --primary-light: #A52A2A; /* Rojo vino claro */
    --primary-dark: #660000;  /* Rojo vino oscuro */
}
```

### Cambiar Contenido:

- **Sermones**: Edita las tarjetas en líneas 95-130
- **Ministerios**: Modifica las tarjetas en líneas 150-180
- **Texto del hero**: Líneas 45-50

## 📱 Responsive Design

La página está optimizada para:
- ✅ **Desktop**: 1200px+
- ✅ **Tablet**: 768px - 1199px
- ✅ **Móvil**: 320px - 767px

### Características móviles:
- Menú hamburguesa
- Texto redimensionado
- Botones apilados
- Fondo animado optimizado

## 🔧 Funcionalidades JavaScript

### Características implementadas:
- Navegación suave entre secciones
- Menú móvil interactivo
- Animaciones de entrada con Intersection Observer
- Efectos de parallax suaves
- Botón "Volver arriba" dinámico
- Contador de visitantes únicos
- Efectos de hover en tarjetas

### Para agregar funcionalidades:
- **Reproducción de sermones**: Edita líneas 95-105 en `script.js`
- **Formularios**: Agrega validación en líneas 150-160
- **Transmisión en vivo**: Implementa en líneas 120-130

## 🌐 Compatibilidad

### Navegadores Soportados:
- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+
- ✅ Opera 47+

### Dispositivos:
- ✅ Windows Desktop
- ✅ macOS
- ✅ iOS (iPhone/iPad)
- ✅ Android
- ✅ Linux

## ⚡ Optimización

### Rendimiento:
- CSS optimizado con variables
- JavaScript modular y eficiente
- Fondo animado con CSS puro (sin video)
- Lazy loading para elementos pesados

### SEO:
- Meta tags optimizados
- Estructura HTML semántica
- Títulos descriptivos
- Enlaces internos

## 🎨 Elementos de Diseño

### Tipografía:
- **Títulos**: Playfair Display (elegante)
- **Texto**: Inter (moderna y legible)

### Iconos:
- Font Awesome 6.0
- Iconos religiosos y de comunicación

### Efectos Visuales:
- Gradiente animado en el header
- Sombras suaves con color rojo vino
- Transiciones suaves
- Animaciones de entrada

## 📞 Información de Contacto

### Datos de la Iglesia:
- **Nombre**: Primera Iglesia Bautista de Cúcuta
- **Dirección**: Avenida 1#15-23, Barrio La Playa, Cúcuta, Norte de Santander, Colombia
- **Teléfono**: +57 7 123-4567
- **Email**: info@primeraiglesiabautistacucuta.org

### Horarios de Servicios:
- **Domingo**: Escuela Dominical 9:00 AM - 10:00 AM / Culto 10:30 AM - 12:30 PM
- **Miércoles**: 7:00 PM - 8:30 PM

## 🚀 Cómo Ejecutar

1. **Abrir el archivo**: `index.html`
2. **Ver en navegador**: Se abrirá automáticamente
3. **Probar responsive**: Cambia el tamaño de la ventana
4. **Ver transmisión en vivo**: Haz clic en "Transmisión en Vivo"

## 📝 Notas Importantes

- El diseño usa CSS puro para el fondo animado (más eficiente)
- Los colores están optimizados para accesibilidad
- El diseño es completamente responsive
- Incluye fallbacks para navegadores antiguos

## 🎯 Próximas Mejoras

Posibles funcionalidades a agregar:
- Sistema de donaciones online
- Calendario de eventos
- Blog de noticias
- Galería de fotos
- Formulario de contacto
- Integración con redes sociales

---

**Desarrollado con ❤️ para la Primera Iglesia Bautista de Cúcuta** 