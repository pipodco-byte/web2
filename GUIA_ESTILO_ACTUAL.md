# Guía de Estilo - Pipod Plan Retoma

## Identidad Visual: Efecto Halo de Apple

Pipod adopta la identidad visual de Apple para generar confianza inmediata en usuarios de dispositivos Apple.

---

## Tipografía

**Fuente Principal:** Inter (Google Fonts)
- Pesos: 400 (Regular), 500 (Medium), 600 (SemiBold), 700 (Bold), 800 (ExtraBold), 900 (Black)
- Uso: Todos los textos, títulos, botones

**Jerarquía:**
- H1: 80px, Bold (800), color #1D1D1F
- H2: 56px, Bold (800), color #1D1D1F
- H3: 32px, Bold (700), color #1D1D1F
- Body: 16px, Regular (400), color #4B5563
- Small: 14px, Regular (400), color #6E6E6E

---

## Paleta de Colores

### Fondos
- Blanco puro: `#FFFFFF`
- Gris muy claro: `#F5F5F7`
- Gris claro: `#F3F4F6`

### Textos
- Negro elegante (Apple): `#1D1D1F`
- Gris oscuro: `#4B5563`
- Gris medio: `#6E6E6E`

### Acentos
- Azul primario (Apple): `#0066CC`
- Azul secundario: `#3B82F6`
- Cyan: `#06B6D4`
- Verde menta: `#86EFAC`

### Bordes y Divisores
- Gris muy claro: `#E5E5E7`

---

## Espaciado (Whitespace)

- Padding secciones: 40px (py-40)
- Padding cards: 32px (p-8)
- Gap entre elementos: 16-24px
- Margen inferior secciones: 128px (mb-32)

**Principio:** El espacio vacío denota calidad. No temer al whitespace.

---

## Componentes HeroUI

- **Navbar:** Fondo transparente/blanco según scroll
- **Buttons:** Azul primario (#0066CC) o blanco con borde
- **Cards:** Fondo blanco, sombra suave, bordes redondeados (rounded-3xl)
- **Input:** Fondo transparente, borde gris claro
- **Accordion:** Fondo blanco, sin bordes pesados
- **Image:** Lazy loading, zoom effect al hover
- **Badge:** Color primario, placement top-right

---

## Animaciones

- **Fade In Up:** 0.6s, ease-out
- **Stagger:** 0.15s entre elementos
- **Hover:** Scale 1.05-1.08, y offset -5 a -15px
- **Spring Physics:** stiffness 300, damping 30
- **Parallax:** Mouse tracking en Hero

---

## Responsive Design

- Mobile: 1 columna, font-size reducido
- Tablet (sm): 2 columnas, font-size medio
- Desktop (md/lg): 3+ columnas, font-size completo

Breakpoints: `sm:`, `md:`, `lg:`

---

## Accesibilidad

- aria-labels en botones
- aria-hidden en elementos decorativos
- role attributes en componentes
- Alt text en imágenes
- Contraste mínimo WCAG AA

---

## SEO

- Meta tags dinámicos (useSEO hook)
- Open Graph tags
- Twitter Card
- Schema.org JSON-LD (LocalBusiness)
- Canonical URL
- Semantic HTML (h1, h2, section IDs)

---

**Última actualización:** Enero 2025
**Versión:** 2.0 (Apple-inspired redesign)
