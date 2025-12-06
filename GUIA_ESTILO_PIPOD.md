# Guía de Estilo Pipod - Sistema de Diseño

## 1. Paleta de Colores

### Colores Primarios
- **Azul Primario**: `#0066CC` - Color principal de marca, botones, enlaces, acentos
- **Cyan Secundario**: `#06B6D4` - Gradientes, acentos secundarios

### Colores de Fondo

#### Fondos Oscuros (Importante: Variación de Negros)
**Nota importante**: Usamos diferentes tonos de negro/gris oscuro según el contexto:

- **Negro Puro**: `#000000` - Footer principal, secciones de máximo contraste
- **Negro Oscuro**: `#121212` - Secciones de contenido oscuro (ej: Checklist, recomendaciones)
- **Negro Más Oscuro**: `#1B1B1B` - Variante alternativa para fondos oscuros

**Cuándo usar cada uno:**
- `#000000` - Footer, secciones finales, máximo contraste
- `#121212` - Secciones de contenido con fondo oscuro (Checklist, recomendaciones)
- `#1B1B1B` - Alternativa cuando necesitas variación sutil

#### Fondos Claros
- **Blanco Puro**: `#FFFFFF` - Fondos principales, tarjetas
- **Blanco Casi Puro**: `#F9FAFB` - Fondos sutiles, alternativa a blanco
- **Gris Muy Claro**: `#F3F4F6` - Fondos de secciones, separación visual
- **Gris Claro**: `#F5F5F7` - Secciones alternas (Servicios, Valores, etc.)

### Colores de Texto

#### Texto Oscuro
- **Gris Oscuro Principal**: `#1F2937` - Títulos, texto principal
- **Gris Frío**: `#4B5563` - Texto secundario, descripciones
- **Gris Medio**: `#6E6E6E` - Texto terciario, menos importante

#### Texto Claro
- **Blanco**: `#FFFFFF` - Texto sobre fondos oscuros
- **Gris Claro**: `#D1D5DB` - Texto secundario sobre oscuro
- **Gris Muy Claro**: `#9CA3AF` - Texto terciario sobre oscuro

### Colores de Acentos
- **Verde Menta**: `#86EFAC` - Acentos positivos, éxito
- **Azul Primario**: `#3B82F6` - Botones, gradientes
- **Verde WhatsApp**: `#25D366` - Botón WhatsApp específico

---

## 2. Tipografía

### Fuente Principal
- **Font Family**: `Inter` - Aplicada globalmente con clase `font-inter`
- **Antialiasing**: `antialiased` - Para mejor legibilidad

### Jerarquía de Tamaños

#### Títulos
- **H1**: `text-6xl md:text-7xl` - Títulos principales de página
- **H2**: `text-5xl font-black` - Títulos de sección
- **H3**: `text-4xl font-black` - Subtítulos importantes
- **H4**: `text-2xl font-bold` - Títulos de tarjetas

#### Cuerpo
- **Texto Principal**: `text-base` - Párrafos, contenido
- **Texto Secundario**: `text-lg` - Descripciones, subtítulos
- **Texto Pequeño**: `text-sm` - Etiquetas, notas

### Pesos de Fuente
- **Bold**: `font-bold` - Énfasis, títulos
- **Semibold**: `font-semibold` - Descripciones destacadas
- **Black**: `font-black` - Títulos principales
- **Light**: `font-light` - Subtítulos elegantes

---

## 3. Fondos por Sección

### Patrón de Alternancia

La página alterna entre fondos claros y oscuros para crear ritmo visual:

| Sección | Fondo | Color | Uso |
|---------|-------|-------|-----|
| Hero | Gradiente | `#F5F5F7 → #FFFFFF` | Presentación principal |
| Productos | Blanco | `#FFFFFF` | Contenido principal |
| Beneficios | Blanco | `#FFFFFF` | Contenido principal |
| Pasos | Blanco | `#FFFFFF` | Contenido principal |
| Checklist | Negro Oscuro | `#121212` | Contraste, recomendaciones |
| FAQ | Blanco | `#FFFFFF` | Contenido principal |
| Newsletter | Negro Puro | `#000000` | Suscripción |
| Footer Redes | Negro Puro | `#000000` | Información final |

### Regla de Fondos Oscuros

**Importante**: Cuando usamos fondos oscuros, variamos entre:
- `#000000` - Para footer y secciones finales
- `#121212` - Para secciones de contenido (Checklist, recomendaciones)
- `#1B1B1B` - Alternativa cuando necesitamos variación sutil

**Esto crea profundidad y evita monotonía** mientras mantenemos coherencia visual.

---

## 4. Componentes y Estilos

### Botones
- **Primario**: Fondo `#0066CC`, texto blanco, `px-8 py-3`, `rounded-full`
- **Secundario**: Borde `2px #0066CC`, texto `#0066CC`, fondo transparente
- **Gradiente**: `linear-gradient(135deg, #3B82F6 0%, #06B6D4 100%)`

### Tarjetas
- Fondo: `#FFFFFF`
- Padding: `p-8`
- Sombra: `shadow-lg`
- Hover: `y: -10` (elevación con Framer Motion)

### Secciones
- Padding vertical: `py-32` (normal), `py-16` (compacto)
- Padding horizontal: `px-6` (móvil), `px-8` (desktop)
- Max-width: `max-w-7xl` (contenedor principal)

### Gradientes
- **Primario**: `linear-gradient(135deg, #0066CC 0%, #06B6D4 100%)`
- **Secundario**: `linear-gradient(135deg, #3B82F6 0%, #06B6D4 100%)`
- **Aplicación**: Títulos con `WebkitBackgroundClip: 'text'`, `WebkitTextFillColor: 'transparent'`

---

## 5. Animaciones

### Framer Motion - Patrones Estándar

#### Fade In Up
```javascript
initial={{ opacity: 0, y: 30 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.6 }}
```

#### Stagger Container
```javascript
variants={staggerContainer}
transition={{ staggerChildren: 0.15 }}
```

#### Hover Effects
- Tarjetas: `whileHover={{ y: -10 }}`
- Iconos: `whileHover={{ rotate: 12, scale: 1.2 }}`
- Números: `whileHover={{ scale: 1.15, rotate: 8 }}`

#### Animaciones Infinitas
```javascript
animate={{ y: [0, -5, 0] }}
transition={{ duration: 3, repeat: Infinity }}
```

---

## 6. Espaciado

### Padding Estándar
- **Secciones**: `py-32` (grande), `py-16` (normal), `py-8` (pequeño)
- **Contenedores**: `px-6` (móvil), `px-8` (desktop)
- **Elementos internos**: `p-8` (tarjetas), `p-4` (componentes)

### Gaps
- **Grid**: `gap-8` (normal), `gap-12` (grande)
- **Flex**: `gap-4` (normal), `gap-8` (grande)

### Márgenes
- **Entre secciones**: `mb-12` (grande), `mb-8` (normal), `mb-4` (pequeño)
- **Entre elementos**: `space-y-4`, `space-y-8`

---

## 7. Responsive Design

### Breakpoints (Tailwind)
- **Mobile**: Sin prefijo (base)
- **Tablet**: `sm:` (640px), `md:` (768px)
- **Desktop**: `lg:` (1024px), `xl:` (1280px)

### Patrón Mobile-First
```jsx
// Móvil primero
className="text-4xl md:text-5xl lg:text-6xl"
// Comienza pequeño, crece en tablets y desktop
```

---

## 8. Accesibilidad

### Focus Visible
```jsx
className="focus-visible:outline-2 focus-visible:outline-offset-2 rounded"
```

### Labels
- Todos los inputs tienen `<label>` con `className="sr-only"`
- Botones tienen `aria-label` descriptivos

### Contraste
- Texto sobre fondo oscuro: Blanco o gris claro
- Texto sobre fondo claro: Gris oscuro o negro

---

## 9. Estructura de Página

### Orden Estándar
1. **Header** - Navegación fija
2. **Hero** - Presentación principal
3. **Contenido** - Secciones alternas (claro/oscuro)
4. **CTA** - Call to action
5. **Footer** - Información final

### Alternancia de Fondos
```
Claro (#FFFFFF) → Oscuro (#121212) → Claro (#FFFFFF) → Oscuro (#000000)
```

---

## 10. Notas Importantes

### Variación de Negros
**Recuerda**: No usamos un solo negro. Variamos entre:
- `#000000` - Footer, máximo contraste
- `#121212` - Secciones de contenido oscuro
- `#1B1B1B` - Alternativa sutil

Esto crea **profundidad visual** y evita que todo se vea plano.

### Consistencia
- Siempre usar `font-inter` en el contenedor principal
- Siempre usar `antialiased` para mejor legibilidad
- Siempre usar Framer Motion para animaciones
- Siempre respetar la paleta de colores

### Excepciones
- WhatsApp button: `#25D366` (verde específico)
- Gradientes: Combinación de azul y cyan
- Hover states: Siempre usar transiciones suaves

---

## 11. Ejemplos de Uso

### Sección Claro
```jsx
<section className="py-32 px-6" style={{ backgroundColor: '#FFFFFF' }}>
  <h2 className="text-5xl font-black" style={{ color: '#1F2937' }}>
    Título
  </h2>
  <p style={{ color: '#4B5563' }}>Descripción</p>
</section>
```

### Sección Oscuro
```jsx
<section className="py-32 px-8" style={{ backgroundColor: '#121212' }}>
  <h2 className="text-6xl font-black" style={{ color: '#F9FAFB' }}>
    Título
  </h2>
  <p style={{ color: '#D1D5DB' }}>Descripción</p>
</section>
```

### Botón Primario
```jsx
<Button 
  className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold"
  style={{ backgroundColor: '#0066CC' }}
>
  Acción
</Button>
```

---

**Última actualización**: 2025
**Versión**: 1.0
**Aplicable a**: Pipod.co
