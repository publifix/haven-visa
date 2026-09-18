# Sala Haven × VISA Infinite — Guía Visual Base
**Documento de referencia para diseño y desarrollo (Claude Code + Impeccable + UI/UX Pro Max Skill)**
Fuente: *Visa Infinite Brand Guidelines*, Base Design para Visa, marzo 2026 (105 páginas). Extracción y traducción a lineamientos accionables para web.

> **Cómo usar este documento:** es la fuente única de verdad de marca para el rediseño de la landing page de Sala Haven. Cualquier decisión de color, tipografía, layout, fotografía o motion debe poder trazarse a una sección de este documento. Cuando haya ambigüedad entre "lo que se ve bien" y "lo que dice el brand guideline", gana el brand guideline — es la condición explícita del proyecto (apego al 100% al look and feel de VISA Infinite).

---

## 0. Resumen ejecutivo del sistema

| Elemento | Definición |
|---|---|
| **Paleta primaria** | Navy `#010D36`, Blanco `#FFFFFF`, Gradiente Copper Rose (`#FFB59C` → `#B46D40` → `#7C360A`) |
| **Paleta secundaria** (soporte, gráficos, data) | Cool Gray Light `#F5F5F7`, Cool Gray Medium `#828693`, Cool Gray Ink `#303A51` |
| **Tipografía** | Visa Sans (propietaria de Visa) — peso principal **Medium**, Semibold solo para eyebrows/acentos |
| **3 Modos de layout** | 1) Lifestyle-led (imagen + color a partes iguales) · 2) Lifestyle-led Full Bleed (imagen domina) · 3) Card-led (texto/lectura domina, fondo de color) |
| **Grid** | Márgenes = `(ancho + alto) / 60`. Alto interior dividido en 12 unidades para ubicar la "línea de horizonte" |
| **Tono fotográfico** | Restraint, autenticidad, "afluencia moderna" sin ostentación — 5 pilares: Travel, Dining, Sports, Arts & Entertainment, Wellness |
| **Movimiento** | Forward Movement (izquierda→derecha, momentum) y Elevated Progress (ascenso suave) — nunca rebotes ni overshoot |
| **Posicionamiento** | *"Momentum Without Friction"* — lo premium ya no es acumulación, es una vida fluida, en movimiento |

---

## 1. Estrategia de marca (contexto para copy y tono)

**Positioning:** La afluencia moderna no es tener más, es sentirse más vivo. Se define por *momentum* — energía, propósito y libertad de movimiento. VISA Infinite existe para impulsar ese momentum, quitando fricción en lugar de acumular símbolos de estatus.

**Brand Role:** *"The Amplifier of Energy and Importance"*. No es un producto premium más: es un ecosistema que reduce carga administrativa, elimina barreras y devuelve energía a través de experiencias significativas.

**Value Proposition:** *"Momentum Without Friction"*. Pagos fluidos + experiencias elevadas consistentes. El lujo se redefine como una vida extraordinaria en movimiento, no como acceso puntual.

**Los 5 pilares** (útiles para estructurar secciones/beneficios de Sala Haven):
1. **Travel & Exploration**
2. **Dining & Gastronomy**
3. **Sports & Athletics**
4. **Arts & Entertainment**
5. **Wellness & Renewal**

**Tono de copy sugerido:** frases cortas, seguras, sin exclamación. Evitar superlativos vacíos ("el mejor", "increíble"); preferir frases que describan sensación y fluidez ("Enjoy the journey as much as the destination", "Momentum without friction"). Sentence case en headlines (nunca Title Case ni ALL CAPS para textos largos).

---

## 2. Color

### 2.1 Paleta primaria (ancla del sistema)

| Nombre | HEX | RGB | CMYK | PMS |
|---|---|---|---|---|
| **Navy** | `#010D36` | 1, 13, 54 | 98, 90, 44, 60 | 282 C / 282 U |
| **White** | `#FFFFFF` | 255, 255, 255 | 0, 0, 0, 0 | — |
| **Copper Rose — Stop 1** | `#FFB59C` | 255, 181, 156 | 0, 35, 34, 0 | — |
| **Copper Rose — Stop 2** | `#B46D40` | 180, 109, 64 | 24, 62, 83, 9 | — |
| **Copper Rose — Stop 3** | `#7C360A` | 124, 54, 10 | 32, 81, 100, 37 | 876 C (con gloss aqueous coating) / 876 U |

El **Copper Rose es un gradiente diagonal** (stop1 → stop2 → stop3), no un color plano. Introduce calidez y riqueza material. En digital funciona como **acento**; en físico puede ser superficie primaria.

### 2.2 Paleta secundaria (soporte — gráficos, data, jerarquía interna)

| Nombre | HEX | RGB | CMYK |
|---|---|---|---|
| **Cool Gray Light** | `#F5F5F7` | 245, 245, 247 | 3, 2, 1, 0 |
| **Cool Gray Medium** | `#828693` | 130, 134, 147 | 52, 42, 33, 3 |
| **Cool Gray Ink** | `#303A51` | 48, 58, 81 | 84, 73, 45, 38 |

Uso: dashboards internos, charts, texto secundario, superficies de contraste bajo — **nunca compite con la paleta primaria**, es de soporte.

### 2.3 Reglas de despliegue de color (esto es lo más importante para no "verse VISA sin serlo")

El sistema tiene **3 modos de color**, cada uno atado a un modo de layout (ver sección 4):

- **Card-led & Lifestyle-led (Modos 1 y 3):**
  - **Ground (fondo dominante): Navy.** Es el color base del sistema en layouts con texto.
  - **Acentos: Copper Rose + White**, aplicados a tipografía y al lockup del logo para crear contraste y jerarquía.
  - Ratio visual aproximado: ~60% navy de fondo, con acentos puntuales copper rose/blanco en headline y CTA.

- **Lifestyle-led Full Bleed (Modo 2):**
  - No hay color de fondo — la fotografía ocupa el 100% del plano.
  - El color se concentra **solo** en tipografía y el lockup del logo.
  - Se usa **exclusivamente Navy o Blanco** (nunca ambos, nunca copper rose) — la regla es "single-hue": todo el texto/logo de esa composición va en un único color, el que dé mayor contraste contra la foto.

### 2.4 Interacciones de color básicas (para tokens de UI)

**Sobre Navy:**
- Logo lockup: blanco o copper rose
- Reglas/dividers: blanco o copper rose
- Type: blanco (primario), cool gray light (secundario)
- Superficies de acento sobre navy: white, cool gray medium, cool gray ink

**Sobre White:**
- Logo lockup: navy o copper rose
- Reglas/dividers: navy o copper rose
- Type: navy (primario), cool gray ink (secundario)
- Superficies de acento sobre blanco: navy, cool gray medium, cool gray light

### 2.5 Colorways que NUNCA deben pasar (Don'ts explícitos del manual)
- El logo **nunca** puede compartir el mismo color que el nombre del producto ("Infinite") en la misma composición.
- El logo copper rose **nunca** debe sangrar sobre un plano copper rose (pérdida de contraste).
- El logo navy **nunca** debe sangrar sobre un plano navy.
- En Modo 2 (full bleed), **nunca** usar colores únicos distintos para logo/regla/nombre de producto — deben ir en el mismo color (navy o blanco).

### 2.6 CSS Custom Properties — listas para el repo

```css
:root {
  /* Primary palette */
  --visa-navy: #010D36;
  --visa-white: #FFFFFF;
  --visa-copper-1: #FFB59C; /* gradient stop 1 */
  --visa-copper-2: #B46D40; /* gradient stop 2 */
  --visa-copper-3: #7C360A; /* gradient stop 3 */
  --visa-copper-gradient: linear-gradient(180deg, var(--visa-copper-1) 0%, var(--visa-copper-2) 50%, var(--visa-copper-3) 100%);

  /* Secondary / functional palette */
  --visa-gray-light: #F5F5F7;
  --visa-gray-medium: #828693;
  --visa-gray-ink: #303A51;

  /* Semantic tokens */
  --color-bg-primary: var(--visa-navy);
  --color-bg-surface: var(--visa-white);
  --color-accent: var(--visa-copper-2);
  --color-accent-gradient: var(--visa-copper-gradient);
  --color-text-on-navy: var(--visa-white);
  --color-text-on-navy-secondary: var(--visa-gray-light);
  --color-text-on-white: var(--visa-navy);
  --color-text-on-white-secondary: var(--visa-gray-ink);
}
```

---

## 3. Tipografía

### 3.1 Tipeface — RESUELTO ✅

El brand guideline nombra la tipografía del sistema como "Visa Sans" (nombre de marketing/interno). El archivo real entregado y avalado por Visa México para este proyecto es **Visa Dialect** — confirmado por inspección de metadata de los `.ttf` (`Visa Dialect Medium`, `Visa Dialect SemiBold`, `Visa Dialect Regular`) y por comparación visual directa: coincide al rasgo con el specimen de la página 25 del manual (terminales redondeadas, "a" de dos pisos, geometría cálida, misma proporción de trazo). Es la misma familia — úsala como fuente única del sistema, sin sustituto.

**Pesos entregados y su rol** (coincide exactamente con el uso que pide el manual — Medium como cuerpo principal, Semibold solo para acentos):

| Archivo | Nombre interno | `font-weight` CSS | Uso según el manual |
|---|---|---|---|
| `VisaDialect-Regular.ttf` | Visa Dialect Regular | `400` | Body largo / texto secundario donde Medium se sienta pesado |
| `VisaDialect-Medium.ttf` | Visa Dialect Medium | `500` | **Peso principal** — headlines, subheads, body de UI |
| `VisaDialect-Semibold.ttf` | Visa Dialect SemiBold | `600` | Solo eyebrows / headers de acento (small caps, tracking 12%) |

No se recibieron Light, Bold ni Heavy — no son necesarios para el uso que describe el manual (esos pesos son para otras piezas del sistema Visa, no para layouts de comunicación tipo landing). Si en algún punto se necesita un peso más pesado que Semibold para un CTA o número destacado, usar Semibold + tamaño mayor en vez de fake-bold del navegador (nunca `font-weight: bold` sintético sobre estos archivos).

**Cobertura de glifos verificada:** 746 glifos, cobertura completa de acentos y ñ en español (á é í ó ú ñ Á É Í Ó Ú Ñ ü Ü ¿ ¡) y de puntuación en inglés (em dash, comillas tipográficas, €). Como el sitio será español + inglés, esto ya está cubierto sin necesidad de fuente de respaldo para el copy — solo dejar un fallback genérico por robustez de carga (ver `@font-face` abajo).

**Métricas nativas de la fuente** (de `VisaDialect-Regular.ttf`, iguales en las 3 variantes): `unitsPerEm: 1000`, ascender `1003`, descender `-196` → line-height natural ≈ **1.2**. El manual usa un *leading* más ceñido que eso en tamaños grandes (ratio ~1.05 en headlines de 74pt) y más abierto en tamaños chicos (~1.23 en legal de 13pt) — por eso en la sec. 3.3 se define `line-height` explícito por nivel de escala en vez de dejar el valor por default del navegador.

Para scripts no latinos (árabe, chino, japonés, coreano, etc.) el manual especifica **Noto Sans** como familia global de soporte — no aplica a este proyecto (sitio 100% ES/EN).

### 3.1.1 Implementación — `@font-face` y hosting

Los `.ttf` deben convertirse a `.woff2` (más ligero, estándar web) y self-hostearse en el repo — **nunca** vía Google Fonts ni CDN público, es tipografía propietaria de Visa bajo el acuerdo de partnership.

```css
@font-face {
  font-family: 'Visa Dialect';
  src: url('/fonts/VisaDialect-Regular.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: 'Visa Dialect';
  src: url('/fonts/VisaDialect-Medium.woff2') format('woff2');
  font-weight: 500;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: 'Visa Dialect';
  src: url('/fonts/VisaDialect-Semibold.woff2') format('woff2');
  font-weight: 600;
  font-style: normal;
  font-display: swap;
}
```

- Precargar el peso Medium (el más usado, incluido el headline del hero) con `<link rel="preload" as="font" type="font/woff2" href="/fonts/VisaDialect-Medium.woff2" crossorigin>` en el `<head>`.
- `font-display: swap` evita FOIT; dado que la fuente tiene personalidad marcada (afecta el look inmediatamente), es preferible swap a optional para este proyecto de marca.
- Los 3 archivos `.woff2` ya convertidos están adjuntos en la respuesta de este turno, listos para copiar a `/public/fonts/` (Vercel) o el path estático que use el proyecto.

### 3.2 Escala tipográfica y reglas de proporción (Modo 1 — ejemplo de referencia)

El sistema define proporciones relativas, no solo tamaños fijos — esto es clave para que el diseño responsive se mantenga "en sistema" en cualquier viewport:

- **Headline → Subhead:** el tamaño de punto del subhead = **50% del tamaño del headline**.
- **X-height del headline = cap-height del nombre del producto** (relación logo↔texto).
- **Eyebrow (Semibold, small caps, tracking 12%):** cap-height del eyebrow = x-height del body secundario.
- **Espaciado eyebrow → body:** igual al 50% del tamaño de punto del headline.
- **Body/Legal copy:** 25% del tamaño de punto del headline.
- **Tracking:** 0% en headline y body (sentence/title case); **12% tracking en eyebrows** (small caps).
- **Casing:** Headlines y body → *Sentence case*. Eyebrows → *Small Caps* con tracking. Nunca ALL CAPS en headlines largos.

Ejemplo de referencia (headline grande, del manual): Point Size 74 / Leading 78, tracking 0%, sentence case.
Ejemplo body: Point Size 20 / Leading 24.

### 3.3 Escala sugerida para web (traducción responsive de las proporciones anteriores)

`line-height` calculado por nivel replicando el ratio leading/tamaño real del manual (más ceñido en tamaños grandes, más abierto en tamaños chicos — ver 3.1).

```css
:root {
  --font-display: 'Visa Dialect', system-ui, sans-serif;
  --font-body: 'Visa Dialect', system-ui, sans-serif;

  --fs-hero: clamp(2.75rem, 5vw + 1rem, 4.625rem);   /* ~74pt en desktop grande */
  --lh-hero: 1.05;                                     /* manual: 74/78 */

  --fs-h1:   clamp(2rem, 3vw + 1rem, 2.875rem);       /* ~46pt */
  --lh-h1:   1.04;                                     /* manual: 46/48 */

  --fs-h2:   clamp(1.5rem, 2vw + 0.5rem, 1.625rem);   /* ~26pt */
  --lh-h2:   1.15;                                     /* manual: 26/30 */

  --fs-h3:   1.25rem;                                  /* ~20pt */
  --lh-h3:   1.2;                                       /* manual: 20/24 */

  --fs-body: 1rem;                                     /* ~16pt */
  --lh-body: 1.125;                                     /* manual: 16/18 */

  --fs-eyebrow: 0.8125rem;                             /* ~13pt, small caps, tracking 12% */
  --lh-eyebrow: 1.0;

  --fs-legal: 0.75rem;                                 /* 25% del headline principal */
  --lh-legal: 1.23;                                     /* manual: 13/16 */

  --tracking-eyebrow: 0.12em;
  --tracking-default: 0em;

  --fw-body: 500;      /* Visa Dialect Medium — peso principal */
  --fw-light-body: 400; /* Visa Dialect Regular — body largo */
  --fw-accent: 600;     /* Visa Dialect Semibold — solo eyebrows/acentos */
}

.eyebrow {
  font-family: var(--font-display);
  font-weight: var(--fw-accent);
  font-size: var(--fs-eyebrow);
  letter-spacing: var(--tracking-eyebrow);
  text-transform: uppercase; /* small caps real vía font-variant si el navegador/fuente lo soporta mejor, si no, uppercase */
}
```

---

## 4. Marca / Logotipo (lockup "Visa Infinite")

- **Clearspace mínimo:** basado en la altura de la "V" del logotipo Visa — ningún texto, imagen o elemento gráfico puede invadir ese espacio en ningún lado.
- **Tamaño mínimo digital:** 26px altura de lockup (nombre de producto a 8pt). **Breaking point:** por debajo de 26px, cambiar al lockup de escala reducida (mínimo 14px digital / 16px si necesita legibilidad extra).
- **Variantes contextuales:**
  - *Chopped* — cuando el logo se apoya directo sobre un bloque de color (Modo 1/3).
  - *With extendable rule* — cuando el logo cruza una regla horizontal (Modo 2, full bleed).
  - *Unchopped* — cuando ningún elemento gráfico intersecta el logo (tarjetas, co-brand).
- **Cálculo de altura del logo en cualquier composición:** `V = (ancho + alto) / 24`.
- **Casos extremos (aspect ratios muy anchos/angostos):** el logotipo nunca debe ser menor al 20–30% del lado corto del layout.

### Don'ts del logo (aplican literal al header/footer del sitio):
- No alterar la relación de escala entre elementos del lockup.
- No alterar configuración/espaciado entre elementos.
- No recolorear el logo fuera de los valores aprobados (navy/blanco/copper rose).
- No agregar efectos (sombras, glow, bisel).
- No delinear/outline el logo.
- No contener el logo dentro de una forma (badge, círculo, etc.).
- No sobreponerlo sobre imagery muy "ruidosa" visualmente.
- No rotarlo.

---

## 5. Grid y sistema de márgenes (aplica a cualquier viewport/breakpoint)

Fórmula universal, aplicable a **cualquier resolución** (hero de landing, banner, card, etc.):

```
M (margen) = (ancho + alto) / 60
V (altura del logo) = (ancho + alto) / 24
```

- El área interior a los márgenes se divide en **12 unidades horizontales** de alto — estas guías determinan dónde puede caer la "línea de horizonte" de la composición (el punto donde se divide zona de imagen vs. zona de color/texto).
- La división entre **zona de imagen** y **zona de bloque de color** puede ocurrir en cualquiera de esos 12 incrementos — da flexibilidad de layout manteniendo el sistema.
- **Headline sizing derivado del margen:** x-height del headline = 90% del margen (`90% M = P x-height`), y desde ahí se derivan tamaños secundarios/terciarios.

### Traducción práctica a CSS (para hero sections, no como reemplazo del type scale de la sec. 3.3, sino como principio de espaciado):

```css
:root {
  /* margen ejemplo para un viewport de referencia 1920×1080 -> M ≈ 50px (2.6vw aprox) */
  --grid-margin: clamp(24px, 2.6vw, 50px);
  --grid-rows: 12; /* referencia conceptual para posicionar el "horizonte" de una sección hero */
}
```

En una landing responsive esto se traduce mejor como: **el margen lateral y el punto de "quiebre" horizonte-imagen/color en el hero deben escalar proporcionalmente al viewport**, no ser valores fijos en px. Es la razón de ser de la fórmula.

---

## 6. Los 3 Modos de Layout → traducción a secciones de Sala Haven

Este es el corazón del sistema y el criterio para decidir cómo construir **cada sección** de la landing.

### **Modo 1 — Lifestyle-led** (mensaje e imagen a peso igual)
- **Cuándo usarlo:** secciones donde el copy y la foto deben pesar igual — ideal para **Hero principal** y bloques de beneficios/pilares (Travel, Dining, Sports, Arts, Wellness).
- **Estructura:** el plano se divide en **Zona de Imagen** + **Zona de Bloque de Color** (navy), divididos en cualquiera de los 12 incrementos verticales. El logo "straddles" (atraviesa) la división entre ambas zonas.
- **Barra de horizonte:** ancla fuerte, orientada a la derecha, expresa "forward momentum".
- **Color:** navy como ground, copper rose + blanco como acentos en type/logo.
- **Tratamiento de card (si aplica):** stroke copper rose + highlight gradient diagonal suave para que la tarjeta "se despegue" del fondo.

### **Modo 2 — Lifestyle-led Full Bleed** (la foto lidera completamente)
- **Cuándo usarlo:** momentos de alto impacto visual — ideal para **hero alternativo / sección de apertura emocional** o transición entre secciones donde se quiere pura atmósfera fotográfica.
- **Estructura:** foto full-bleed sin fondo de color. Un rule horizontal extendible ancla el logo, puede ubicarse en cualquiera de los 11 incrementos superiores.
- **Color:** single-hue — **solo navy o solo blanco** en todo el texto+logo de esa composición (el que dé más contraste contra la foto). Nunca copper rose aquí.
- **Tipografía:** solo headline, generalmente **sin subhead**.

### **Modo 3 — Card-led** (claridad y lectura sostenida)
- **Cuándo usarlo:** secciones de **beneficios detallados, tabla de comparación, FAQ, "cómo funciona", textos legales/T&C** — cualquier bloque donde la comprensión importa más que el impacto visual.
- **Estructura:** fondos de color estables (navy o blanco), imagery usada con moderación, sin competir con el texto. Cuando hay una tarjeta VISA física en la composición, **la tarjeta actúa como el marcador de marca — no hace falta repetir el logo**.
- **Jerarquía tipográfica estricta:** Headline → Eyebrow (spacing 50% del headline) → Body secundario → Legal copy (25% del headline), con espaciados proporcionales definidos en sec. 3.2.

### Mapa sugerido de secciones de Sala Haven → Modo

| Sección de la landing | Modo recomendado | Razón |
|---|---|---|
| Hero principal | Modo 1 (o Modo 2 si se prioriza impacto emocional puro) | Mensaje + imagen a peso igual, con CTA claro |
| Pilares/beneficios (Travel, Dining, Sports, Arts, Wellness) | Modo 1, repetido por pilar | Estructura consistente imagen/color por card de beneficio |
| Sección de "experiencia inmersiva" o storytelling de marca | Modo 2 | Foto full-bleed, atmósfera, mínima interferencia gráfica |
| Beneficios detallados / cómo aplicar / requisitos | Modo 3 | Lectura sostenida, claridad ante todo |
| Footer legal / T&C / disclaimers | Modo 3 (fondo navy o blanco, legal copy 25%) | Consistente con jerarquía legal del sistema |

---

## 7. Dirección de arte / fotografía

### 7.1 Principios (aplican a selección de stock, generación de imágenes o brief de fotografía)

- **"Infinitely More" ethos:** vitalidad, apertura y riqueza de experiencia — nunca acumulación ni exceso.
- **Elegancia entendida (understated):** el refinamiento se nota, no se grita.
- **Momentos humanos auténticos:** nada de poses de stock genérico; gestos y expresiones reales.
- **La emoción lidera la imagen:** por encima de la descripción literal.
- **Interacciones cándidas, no coreografiadas.**
- **Encuadres gráficos e intencionales:** crops inesperados que dan foco e intimidad.

### 7.2 Señales de afluencia (cómo se ve "premium" sin ser ostentoso)
- Generosidad de espacio — composiciones despejadas, escala elevada (camas king, espacios amplios).
- Materiales elevados — telas de alta calidad, texturas naturales, acabados refinados.
- Elecciones consideradas — objetos que se sienten *seleccionados*, no abundantes.
- Realismo aspiracional — una versión elevada de la vida real, nunca espectáculo.
- Discreción — cuando hay comida/bebida, cristalería considerada (ej. copa Nick & Nora) en vez de genérica.

### 7.3 Consideraciones culturales (relevante por audiencia LATAM/MX)
- Sensibilidad al nivel de exposición de piel/lenguaje corporal según el mercado.
- Vestuario y contexto respetuosos y naturales para la audiencia local.
- En mercados con normas más conservadoras: transmitir afluencia vía mood/atmósfera/gesto, no vía imagen "skin-forward".

### 7.4 Las 6 categorías de fotografía del sistema
Travel & Exploration · Dining & Gastronomy · Sports & Athletics · Arts & Entertainment · Wellness & Renewal · Payment Moments — cada una con versión *con personas* y *sin personas*. Útil como taxonomía para organizar el banco de imágenes de Sala Haven.

**Payment Moments específicamente:** pagos mostrados como fluidos, confiados e integrados a la vida diaria — la tecnología nunca es protagonista, es invisible/natural. Nada de gestos exagerados ni "hero shots" de tarjeta forzados.

### 7.5 Retoque de color
- Balance de color cálido y natural, énfasis en tonos tierra y luz ambiental.
- Leve elevación de azules en cielo/reflejos para introducir contraste frío controlado.
- El objetivo es que la imagen se sienta natural y fotográfica, nunca "estilizada" u oversaturada.

---

## 8. Motion (para microinteracciones e hitos de scroll en la landing)

Dos comportamientos únicos, siempre con **soft ease-in/ease-out — nunca bounce, snap ni overshoot**:

1. **Forward Movement:** momentum direccional continuo, típicamente de izquierda a derecha. Activo pero controlado.
2. **Elevated Progress:** movimiento ascendente sutil — elementos que "resuelven" o avanzan con timing medido, sensación de ascenso suave.

**Aplicación práctica:** transiciones de sección, aparición de cards de beneficios, hover states de CTAs. Evitar animaciones dispersas o decorativas — un solo momento orquestado por sección es mejor que microanimaciones repetidas en cada elemento (esto además está alineado con buenas prácticas generales de diseño, no solo con el manual VISA).

---

## 9. Checklist de cumplimiento para QA de diseño

Antes de dar por bueno cualquier sección de la landing, verificar:

- [ ] ¿El fondo dominante de la sección es Navy (Modos 1/3) o full-bleed foto (Modo 2)? Nunca copper rose como fondo grande en digital.
- [ ] ¿Copper rose se usa solo como acento (texto/logo/CTA), nunca como superficie grande en pantalla?
- [ ] ¿El logo tiene su clearspace respetado y no está recoloreado, rotado, con efectos, ni contenido en una forma?
- [ ] ¿El logo nunca comparte color exacto con el texto "Infinite"/nombre de producto en la misma composición?
- [ ] En secciones full-bleed (Modo 2): ¿todo el texto + logo está en un único color (navy o blanco), nunca mixto ni copper rose?
- [ ] ¿Headlines en sentence case (no Title Case, no ALL CAPS)? ¿Eyebrows en small caps con tracking?
- [ ] ¿La proporción headline→subhead respeta ~50%?
- [ ] ¿La fotografía transmite restraint y autenticidad, no lujo ostentoso ni stock genérico sonriente?
- [ ] ¿El motion (si existe) es suave, sin bounce/overshoot, y orquestado (no disperso)?
- [ ] ¿Se está usando Visa Dialect self-hosteada (nunca un sustituto) con los pesos correctos por rol (Medium=body/headline, Semibold=solo eyebrows, Regular=body largo)?

---

## 10. Referencias cruzadas al documento original (para profundizar)

| Tema | Páginas del PDF |
|---|---|
| Estrategia de marca (positioning, role, value prop) | 6–9 |
| Brand marks / lockups / clearspace / minimum sizes | 12–21 |
| Paleta de color primaria y secundaria | 22 |
| Despliegue de color por modo | 23–24 |
| Tipografía y typesetting | 25–28 |
| Overview de los 3 Layout Modes | 31 |
| Modo 1 en detalle (grid, marca, tipo, color, cards) | 32–42 |
| Modo 2 en detalle | 43–49 |
| Modo 3 en detalle | 50–55 |
| Principios de dirección de arte | 58 |
| Categorías fotográficas | 59–69 |
| Retoque de color | 70 |
| Motion principles | 80–84 |
| Ejemplos de aplicación (banners, social, OOH, print) | 86–104 |

**Nota de gobernanza:** el documento original indica que la guía de tiers (Infinite Privilege / Infinite Private) llega en mayo 2026, y el hero card art oficial se finaliza en junio 2026 — hoy solo hay placeholders (FPO). Confirmar con el cliente si para el lanzamiento de Sala Haven ya existe arte de tarjeta oficial o si se debe seguir usando placeholder/producción propia respetando el tratamiento de card (stroke copper rose + highlight gradient) de la sección 6.
