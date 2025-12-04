# Guía de Tipografía Estandarizada - Pipod

## Fuente Principal: Inter

✅ **Confirmado:** Todos los textos usan Inter
- Importada en: `src/main.jsx` con HeroUIProvider
- Configurada en: `tailwind.config.js`
- Pesos disponibles: 400, 600, 700, 900

---

## Jerarquía Tipográfica Estandarizada

### H1 - Títulos Principales
```
Responsive: text-5xl sm:text-6xl md:text-7xl lg:text-8xl
Peso: font-black (900)
Line-height: leading-tight (1.25)
Letter-spacing: -0.03em
Color: #1D1D1F (oscuro) o #FFFFFF (claro)
```
**Ejemplos:** "Renueva tu equipo", "Beneficios", "¿Listo para renovar?"

---

### H2 - Subtítulos
```
Responsive: text-4xl sm:text-5xl md:text-6xl lg:text-7xl
Peso: font-black (900)
Line-height: leading-tight (1.25)
Letter-spacing: -0.03em
Color: #1D1D1F o #FFFFFF
```
**Ejemplos:** "Tres pasos: Un nuevo equipo", "Preguntas Frecuentes"

---

### H3 - Encabezados de Cards
```
Responsive: text-xl sm:text-2xl
Peso: font-bold (700)
Line-height: leading-snug (1.375)
Color: #1F2937
```
**Ejemplos:** Títulos en cards de beneficios, pasos

---

### Body - Párrafos
```
Tamaño: text-base (16px)
Peso: font-normal (400)
Line-height: leading-relaxed (1.625)
Color: #4B5563
```
**Ejemplos:** Descripciones, párrafos largos

---

### Small - Texto Pequeño
```
Tamaño: text-sm (14px)
Peso: font-normal (400)
Line-height: leading-relaxed (1.625)
Color: #6E6E6E
```
**Ejemplos:** Labels, subtextos, descripciones cortas

---

### Botones
```
Tamaño: text-base o text-lg
Peso: font-bold (700)
Padding: py-4 px-8 sm:px-14 (CONSISTENTE)
Line-height: leading-none
```
**Ejemplos:** "Agendar Cita", "Suscribirse", "Ver proceso"

---

## Problemas Identificados y Solucionados

| Elemento | Problema | Solución |
|----------|----------|----------|
| FooterCTA H2 | `text-6xl` (48px) | Cambiar a `text-5xl md:text-6xl lg:text-7xl` |
| FooterCTA Button | `py-6` (24px) | Cambiar a `py-4` (16px) |
| H3 en cards | Inconsistente | Estandarizar a `text-xl sm:text-2xl` |
| Body paragraphs | `font-light` | Cambiar a `font-normal` |
| Títulos | Sin letter-spacing | Agregar `-0.03em` |
| Botones | Ancho variable | Estandarizar `py-4 px-8 sm:px-14` |

---

## Verificación de Consistencia

✅ Fuente Inter en toda la página
✅ Jerarquía clara (H1 > H2 > H3 > Body > Small)
✅ Pesos consistentes (900 para títulos, 700 para subtítulos, 400 para body)
✅ Line-height apropiado para cada nivel
✅ Letter-spacing en títulos para elegancia
✅ Botones uniformes en tamaño y peso

---

**Última actualización:** Enero 2025
**Estado:** Estandarizado y documentado
