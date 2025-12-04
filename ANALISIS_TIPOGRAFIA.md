# Análisis de Tipografía - Pipod

## 🔍 PROBLEMAS IDENTIFICADOS

### 1. **Inconsistencias de Tamaño de Fuente**
- H1 en Hero: `text-8xl` (96px) ✅
- H1 en FooterCTA: `text-6xl` (48px) ❌ (Debería ser 80px)
- H2 en secciones: `text-7xl` (64px) ✅
- H3 en cards: `text-xl` (20px) ❌ (Debería ser 24px)
- Body: `text-base` (16px) ✅
- Small: `text-sm` (14px) ✅

### 2. **Inconsistencias de Peso (Font Weight)**
- Títulos: Mix de `font-black` (900) y `font-bold` (700)
- Labels: `font-semibold` (600) vs `font-bold` (700)
- Body: `font-light` (300) en algunos párrafos ❌

### 3. **Botones Desiguales**
- Hero buttons: `py-4 sm:py-5` (16-20px)
- FooterCTA button: `py-6` (24px) ❌ (Demasiado grande)
- Newsletter button: `py-4` (16px)
- Ancho: `w-full` en FooterCTA vs `px-8 sm:px-14` en Hero

### 4. **Fuente Inter - Verificación**
✅ Sí, todos los textos usan Inter
✅ Importada en `main.jsx` con HeroUIProvider
✅ Configurada en `tailwind.config.js`

### 5. **Line-Height Inconsistente**
- Títulos: `leading-tight` (1.25) ✅
- Body: `leading-relaxed` (1.625) ✅
- Algunos párrafos: Sin especificar (default 1.5) ❌

### 6. **Letter-Spacing Inconsistente**
- Algunos títulos: `letterSpacing: '-0.03em'` ✅
- Otros: Sin especificar ❌
- Labels: `tracking-[0.4em]` ✅

---

## ✅ SOLUCIÓN PROPUESTA

### Estandarización de Tipografía

**H1 (Títulos principales):**
- Tamaño: `text-5xl sm:text-6xl md:text-7xl lg:text-8xl`
- Peso: `font-black` (900)
- Line-height: `leading-tight`
- Letter-spacing: `-0.03em`
- Color: `#1D1D1F` o `#FFFFFF`

**H2 (Subtítulos):**
- Tamaño: `text-4xl sm:text-5xl md:text-6xl lg:text-7xl`
- Peso: `font-black` (900)
- Line-height: `leading-tight`
- Color: `#1D1D1F` o `#FFFFFF`

**H3 (Encabezados de cards):**
- Tamaño: `text-xl sm:text-2xl`
- Peso: `font-bold` (700)
- Line-height: `leading-snug`
- Color: `#1F2937`

**Body (Párrafos):**
- Tamaño: `text-base`
- Peso: `font-normal` (400)
- Line-height: `leading-relaxed`
- Color: `#4B5563`

**Small (Texto pequeño):**
- Tamaño: `text-sm`
- Peso: `font-normal` (400)
- Line-height: `leading-relaxed`
- Color: `#6E6E6E`

**Botones:**
- Tamaño: `text-base` o `text-lg`
- Peso: `font-bold` (700)
- Padding: `py-4 px-8` (consistente)
- Line-height: `leading-none`

---

## 📋 CAMBIOS A REALIZAR

1. **FooterCTA H2:** Cambiar `text-6xl` → `text-5xl md:text-6xl lg:text-7xl`
2. **FooterCTA Button:** Cambiar `py-6` → `py-4`, `text-lg` → `text-base`
3. **Todos los H3:** Estandarizar a `text-xl sm:text-2xl`
4. **Body paragraphs:** Cambiar `font-light` → `font-normal`
5. **Agregar letter-spacing:** `-0.03em` en todos los H1/H2
6. **Botones:** Estandarizar padding a `py-4 px-8 sm:px-14`

---

## 🎯 RESULTADO ESPERADO

- ✅ Tipografía consistente en toda la página
- ✅ Jerarquía clara y predecible
- ✅ Botones uniformes en tamaño
- ✅ Mejor legibilidad
- ✅ Profesionalismo mejorado
