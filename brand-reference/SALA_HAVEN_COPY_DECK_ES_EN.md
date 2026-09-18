# Sala Haven (VISA) — Copy Deck Bilingüe ES/EN + Estructura
**Extraído de la landing actual en Lovable (20 capturas, texto aprobado por Visa y The Grand Lounge Elite — TGLE).**
Este documento es el paso previo al prompt para Claude Code: aquí quedan fijados **todos los textos, en ambos idiomas, sección por sección**, más una propuesta de estructura mapeada contra los Modos de layout del brand guideline de Visa Infinite.

> ⚠️ Antes de mandar el prompt a Claude Code, resolver los 2 puntos marcados **[A CONFIRMAR]** abajo — son los únicos huecos/ambigüedades reales que encontré en el copy fuente.

---

## 1. Estructura actual (tal como está en Lovable)

1. **Header** — Logo Visa + badge Grand Lounge Elite + selector de idioma
2. **Hero + Formulario de reservación** (todo en un solo bloque, fondo navy a la izquierda / foto a la derecha)
3. **Carrusel de servicios** — 13 tarjetas con ícono, título y descripción
4. **Sección "About"** — texto + foto del lounge (recepción)
5. **Sección "Experiencias y celebraciones"** — texto + foto (viajera con maleta)
6. **FAQ** — acordeón de 10 preguntas, fondo navy
7. **Galería de fotos** (carrusel) + CTA final "Reservar Acceso"
8. **Footer** — logos, redes sociales, aviso de privacidad, T&C, copyright

## 2. Estructura propuesta (mapeada a los Modos del Brand Guideline VISA Infinite)

La estructura actual ya es sólida y no requiere una reescritura — es un flujo de conversión razonable para una página que combina *marketing* + *utilidad transaccional* (reservar acceso). Las mejoras son de **refuerzo**, no de reemplazo:

| # | Sección | Modo VISA aplicable | Cambio propuesto |
|---|---|---|---|
| 1 | Header | — | Sin cambios. |
| 2 | Hero + Form | **Modo 1** (imagen+color a peso igual; el form es el "Color Block Zone", la foto es la "Imagery Zone"; el logo straddlea la división) | Corregir registro a "usted" en el headline. Considerar mover el formulario largo a un segundo paso ("Reservar Acceso" en el hero abre/despliega el form) para que el hero se sienta menos denso al primer scroll — **opcional**, no bloqueante. |
| 3 | Servicios (13 cards) | **Modo 3** (card-led, claridad, lectura sostenida, fondo estable) | Agregar **una tarjeta de cierre tipo "+X servicios más"** solo si en el futuro crece la lista; por ahora 13 está bien. Mantener consistencia de íconos (ver Anexo A). |
| 4 | About | **Modo 1** (foto + bloque de texto a peso igual) | Sin cambios de estructura; ya sigue el patrón. |
| 5 | Experiencias | **Modo 1** | Sin cambios de estructura. Es la sección más "aspiracional" (catas de mezcal, celebraciones) — buen lugar para reforzar los 5 pilares de marca si se quiere ampliar a futuro. |
| — | **Nueva sección sugerida: "Cómo funciona"** (3 pasos) | **Modo 3** (claridad ante todo) | No existe hoy. Sugerido **entre Hero y Servicios** para reducir fricción/dudas antes de que el usuario llene el formulario largo: *1. Reserva tu espacio → 2. Preséntate con tu tarjeta Visa Infinite y pase de abordar → 3. Disfruta Sala Haven*. Resuelve visualmente lo que hoy solo cubre el FAQ en texto largo. |
| 6 | FAQ | **Modo 3** | Completar la respuesta de la pregunta 10 (ver [A CONFIRMAR] #2). |
| 7 | Galería + CTA | **Modo 2** (full-bleed, mínima interferencia gráfica, la foto lidera) | Sin cambios — es exactamente el uso correcto de Modo 2 dentro del sistema. |
| 8 | Footer | — | Sin cambios. |

**Nota sobre jerarquía de CTAs:** hoy existen 3 botones "Reservar Acceso" (About, Experiencias, Galería) + 1 "Confirmar Reservación" (form). Está bien tener múltiples puntos de entrada al form — es buena práctica en páginas largas — pero todos deben apuntar exactamente al mismo `#reservar` (scroll-to-form), nunca a una ruta distinta, para no fragmentar la conversión.

---

## 3. Copy Deck — Español / English

### 3.1 Header / Navegación

| ES | EN |
|---|---|
| (Logo Visa) | (Visa logo — no localiza) |
| (Badge The Grand Lounge Elite) | (TGLE badge — no localiza) |
| Selector de idioma: EN / ES | Language switch: EN / ES |

### 3.2 Hero

| Campo | ES (según copy actual) | ES (sugerido — registro corregido a "usted") | EN |
|---|---|---|---|
| Headline | Disfruta Sala Haven (VISA) como parte de tus beneficios | **Disfrute Sala Haven (VISA) como parte de sus beneficios** | Enjoy Sala Haven (VISA) as part of your benefits |
| Subheadline | Acceso exclusivo para tarjetahabientes Visa Infinite en la Terminal 1 del Aeropuerto Internacional de la Ciudad de México. | (sin cambio, ya está en tono neutro) | Exclusive access for Visa Infinite cardholders at Terminal 1 of Mexico City International Airport. |

### 3.3 Formulario de reservación

| Campo | ES | EN |
|---|---|---|
| Label | Método de acceso | Access method |
| Valor fijo | Tarjeta Visa Infinite (acceso exclusivo) | Visa Infinite Card (exclusive access) |
| Label | Fecha de viaje * | Travel date * |
| Placeholder | Selecciona una fecha | Select a date |
| Label | Hora de reservación * | Reservation time * |
| Placeholder | Selecciona horario | Select a time |
| Label | Número de huéspedes * | Number of guests * |
| Placeholder | Selecciona | Select |
| Label | Nombre completo * | Full name * |
| Label | Teléfono * | Phone number * |
| Label | Email * | Email * |
| Label | Confirmar email * | Confirm email * |
| Label | Aerolínea * | Airline * |
| Placeholder | Aerolínea | Airline |
| Label | Número de vuelo * | Flight number * |
| Acordeón | Añadir Experiencia a tu Reservación | Add an Experience to your Reservation |
| Acordeón | ¿Celebras algo en Especial? | Celebrating something special? |
| Texto informativo | Horario de operación: Lunes a Domingo, 05:00 - 21:00 hrs | Hours of operation: Monday to Sunday, 5:00 AM – 9:00 PM |
| Botón (submit) | Confirmar Reservación | Confirm Reservation |

> **Nota de consistencia con el hallazgo anterior:** "¿Celebras algo en Especial?" también está en "tú" — si se corrige el hero a "usted", este campo debería quedar como "¿Celebra algo en especial?" para mantener un solo registro en todo el sitio.

### 3.4 Sección de Servicios (13 tarjetas — carrusel)

| # | ES — Título | ES — Descripción | EN — Título | EN — Descripción |
|---|---|---|---|---|
| 1 | Alimentos a la Carta | Disfrute de platillos preparados al momento, diseñados para satisfacer los paladares más exigentes. | À la Carte Dining | Enjoy freshly prepared dishes, designed to satisfy even the most discerning palates. |
| 2 | Barra de alimentos y bebidas | Explore una selección variada de bocadillos y bebidas premium para complementar su experiencia. | Food & Beverage Bar | Explore a varied selection of snacks and premium drinks to complement your experience. |
| 3 | Spa | Relájese antes de su vuelo con tratamientos de spa diseñados para revitalizar cuerpo y mente. | Spa | Relax before your flight with spa treatments designed to revitalize body and mind. |
| 4 | Café artesanal | Deguste café de origen cuidadosamente preparado, ideal para los amantes de los sabores auténticos. | Artisanal Coffee | Savor carefully prepared single-origin coffee, ideal for lovers of authentic flavor. |
| 5 | Cervezas artesanales | Disfrute de una selección de cervezas artesanales especialmente elegidas para complementar su experiencia VIP. | Craft Beers | Enjoy a selection of craft beers specially chosen to complement your VIP experience. |
| 6 | Bebidas Premium | Saboree una amplia variedad de bebidas premium, que incluyen licores exclusivos y cócteles preparados al momento. | Premium Beverages | Savor a wide variety of premium beverages, including exclusive spirits and freshly made cocktails. |
| 7 | Carrito de golf | Facilitamos su traslado dentro del aeropuerto con un carrito de golf, pensado para ofrecerle mayor comodidad y rapidez. | Golf Cart Transfer | We make getting around the airport easy with a golf cart service, designed for greater comfort and speed. |
| 8 | Ducha | Refresque su viaje en nuestras modernas duchas, equipadas con amenidades de lujo para su comodidad. | Shower Facilities | Refresh yourself during your trip in our modern showers, equipped with luxury amenities for your comfort. |
| 9 | Lustrado de calzado | Mantenga sus zapatos impecables con nuestro servicio de lustrado profesional, ideal para viajeros exigentes. | Shoe Shine | Keep your shoes impeccable with our professional shoe shine service, ideal for discerning travelers. |
| 10 | Guarda Equipaje | Deje su equipaje en nuestro servicio seguro, diseñado para que disfrute de su tiempo en el aeropuerto sin preocupaciones. | Luggage Storage | Leave your luggage in our secure service, designed so you can enjoy your time at the airport worry-free. |
| 11 | Entretenimiento e información | Acceda a contenido multimedia, noticias y entretenimiento para hacer su espera más amena y productiva. | Entertainment & Information | Access multimedia content, news, and entertainment to make your wait more enjoyable and productive. |
| 12 | Concierge | Nuestro equipo de concierge está a su disposición para asistirle con cualquier solicitud o información que necesite. | Concierge | Our concierge team is available to assist you with any request or information you may need. |
| 13 | Información de Vuelos | Consulte los horarios y actualizaciones de sus vuelos con nuestro servicio de información en tiempo real. | Flight Information | Check your flight schedules and updates with our real-time information service. |

### 3.5 Sección "About" (elegancia y hospitalidad)

| Elemento | ES | EN |
|---|---|---|
| Headline | Sala HAVEN (VISA): elegancia y hospitalidad exclusiva para tarjetahabientes Visa Infinite | Sala HAVEN (VISA): exclusive elegance and hospitality for Visa Infinite cardholders |
| Párrafo 1 | Ubicada estratégicamente en la **Terminal 1 del Aeropuerto Internacional de la Ciudad de México**, frente al área de Duty Free en Sala H, Sala HAVEN (VISA) recibe de manera **exclusiva a tarjetahabientes Visa Infinite** en un entorno diseñado para brindar confort, privacidad y servicio excepcional antes de su vuelo. | Strategically located at **Terminal 1 of Mexico City International Airport**, facing the Duty Free area in Gate H, Sala HAVEN (VISA) welcomes **Visa Infinite cardholders exclusively** in an environment designed to offer comfort, privacy, and exceptional service before their flight. |
| Párrafo 2 | El espacio combina una atmósfera sofisticada con un diseño cuidadosamente curado, ideal tanto para relajarse como para sostener reuniones en un ambiente reservado y elegante. Cada elemento está pensado para ofrecer tranquilidad, discreción y atención personalizada. | The space combines a sophisticated atmosphere with a carefully curated design, ideal both for relaxing and for holding meetings in a private, elegant setting. Every element is designed to offer tranquility, discretion, and personalized attention. |
| Párrafo 3 | Los visitantes pueden disfrutar de un menú a la carta, bebidas premium y amenidades seleccionadas que reflejan los más altos estándares de **The Grand Lounge Elite**, transformando el tiempo de espera en una experiencia verdaderamente distinguida. | Guests can enjoy an à la carte menu, premium beverages, and curated amenities that reflect the highest standards of **The Grand Lounge Elite**, turning waiting time into a truly distinguished experience. |
| Botón | Reservar Acceso | Book Access |

### 3.6 Sección "Experiencias y celebraciones memorables"

| Elemento | ES | EN |
|---|---|---|
| Headline | Experiencias y celebraciones memorables | Memorable experiences and celebrations |
| Párrafo 1 | En Sala HAVEN (VISA), cada visita está pensada para convertirse en un momento memorable. Los **tarjetahabientes Visa Infinite** disfrutan de manera exclusiva experiencias que elevan su estancia antes de volar, como **selectas catas de mezcal**, espacios privados para relajarse con total confort, resguardo de equipaje para mayor tranquilidad, una cuidada selección de alimentos y bebidas premium, y **traslado a la puerta de embarque en carrito de golf**. | At Sala HAVEN (VISA), every visit is designed to become a memorable moment. **Visa Infinite cardholders** exclusively enjoy experiences that elevate their time before flying, such as **curated mezcal tastings**, private spaces to relax in total comfort, luggage safekeeping for extra peace of mind, a thoughtfully selected menu of premium food and beverages, and **golf cart transfer to the boarding gate**. |
| Párrafo 2 | Además, Sala HAVEN (VISA) es el lugar ideal para celebrar ocasiones especiales. Cumpleaños, aniversarios, lunas de miel, Día de las Madres, Día del Padre, graduaciones, despedidas o compromisos pueden transformarse en momentos inolvidables gracias a un servicio personalizado y atención dedicada en cada detalle. | Sala HAVEN (VISA) is also the ideal place to celebrate special occasions. Birthdays, anniversaries, honeymoons, Mother's Day, Father's Day, graduations, farewells, or engagements can become unforgettable moments thanks to personalized service and dedicated attention to every detail. |
| Botón | Reservar Acceso | Book Access |

### 3.7 FAQ — 10 preguntas

| # | ES — Pregunta | ES — Respuesta | EN — Question | EN — Answer |
|---|---|---|---|---|
| 1 | ¿Quién puede acceder a Sala HAVEN (VISA)? | El acceso es exclusivo para el tarjetahabiente que presente su tarjeta Visa Infinite vigente, junto con una identificación oficial y pase de abordar del mismo día. | Who can access Sala HAVEN (VISA)? | Access is exclusive to cardholders who present a valid Visa Infinite card, along with official identification and a same-day boarding pass. |
| 2 | ¿Se realiza algún cargo al ingresar a la sala? | Sí. Al momento del ingreso se realiza un cargo de $1 peso mexicano para validar que la tarjeta esté activa, vigente y con el beneficio disponible. Este cargo no es reembolsable. | Is there a charge to enter the lounge? | Yes. Upon entry, a charge of $1 Mexican peso is applied to validate that the card is active, valid, and has the benefit available. This charge is non-refundable. |
| 3 | ¿Cuántos accesos de cortesía incluye la tarjeta Visa Infinite? | Visa Infinite ofrece accesos ilimitados sin costo e incluye hasta dos acompañantes por visita. | How many complimentary visits does the Visa Infinite card include? | Visa Infinite offers unlimited complimentary access and includes up to two guests per visit. |
| 4 | ¿Los menores de edad pagan acceso? | En cada acceso de cortesía se permite la entrada sin costo de hasta dos menores de 12 años. | Do minors pay for access? | Each complimentary visit allows free entry for up to two children under 12 years old. |
| 5 | ¿El acceso está sujeto a disponibilidad? | Sí. El ingreso está sujeto a disponibilidad y puede existir tiempo de espera conforme a la ocupación de la sala y a las disposiciones aplicables del aeropuerto. | Is access subject to availability? | Yes. Entry is subject to availability and there may be wait times depending on lounge occupancy and applicable airport regulations. |
| 6 | ¿Qué sucede si requiero ingresar con más de dos acompañantes? | Los acompañantes adicionales podrán ingresar pagando la tarifa vigente publicada por The Grand Lounge Elite. | What happens if I need to bring more than two guests? | Additional guests may enter by paying the current rate published by The Grand Lounge Elite. |
| 7 | ¿Dónde se ubica Sala HAVEN (VISA)? | Sala HAVEN (VISA) se encuentra en la Terminal 1 del Aeropuerto Internacional de la Ciudad de México, después de los filtros de seguridad y migración. | Where is Sala HAVEN (VISA) located? | Sala HAVEN (VISA) is located at Terminal 1 of Mexico City International Airport, past the security and immigration checkpoints. |
| 8 | ¿Cuál es el horario de operación? | Sala HAVEN (VISA) opera de lunes a domingo, en un horario de 05:00 hrs a 21:00 hrs. | What are the hours of operation? | Sala HAVEN (VISA) operates Monday through Sunday, from 5:00 AM to 9:00 PM. |
| 9 | ¿Existe un límite de permanencia? | La estancia máxima es de hasta 2 horas por ingreso. Si el pasajero desea permanecer más tiempo, cada periodo adicional de 2 horas se considerará como un nuevo acceso y se descontará de los accesos disponibles. | Is there a maximum stay limit? | The maximum stay is up to 2 hours per visit. If the passenger wishes to stay longer, each additional 2-hour period will count as a new visit and will be deducted from the available visits. |
| 10 | ¿Quién opera Sala HAVEN (VISA)? **[A CONFIRMAR]** | *(No capturada en pantalla — inferida del footer, que declara textualmente: "Sala HAVEN (VISA) es operada por The Grand Lounge Elite.")* Propuesta: Sala HAVEN (VISA) es operada por The Grand Lounge Elite, empresa especializada en la operación de salas premium en aeropuertos. | Who operates Sala HAVEN (VISA)? **[TO CONFIRM]** | *(Not captured on screen — inferred from the footer, which states verbatim: "Sala HAVEN (VISA) is operated by The Grand Lounge Elite.")* Proposed: Sala HAVEN (VISA) is operated by The Grand Lounge Elite, a company specialized in operating premium airport lounges. |

### 3.8 Galería + CTA final

| Elemento | ES | EN |
|---|---|---|
| Headline (sección horarios) | Horarios de atención | Hours of operation |
| Texto | Servicio disponible 5:00 a 21:00 horas, de Lunes a Domingo | Service available 5:00 AM to 9:00 PM, Monday through Sunday |
| Botón | Reservar Acceso | Book Access |
| Alt-text sugerido para fotos del carrusel | Mosaico "HAVEN" · Mesas de comedor de la sala · Sala de estar con sillones · Sillones azules de terciopelo · Barra de bebidas | "HAVEN" mosaic detail · Lounge dining tables · Lounge seating area · Blue velvet armchairs · Beverage bar |

### 3.9 Footer

| Elemento | ES | EN |
|---|---|---|
| Encabezado redes | SÍGUENOS | FOLLOW US |
| Íconos redes | Instagram, Facebook, X, LinkedIn, TikTok | (mismos, sin localizar) |
| Texto legal | Sala HAVEN (VISA) es operada por The Grand Lounge Elite. | Sala HAVEN (VISA) is operated by The Grand Lounge Elite. |
| Link | Aviso de Privacidad | Privacy Notice |
| Link | Términos y Condiciones | Terms and Conditions |
| Copyright | © 2026 The Grand Lounge Elite. Todos los derechos reservados. | © 2026 The Grand Lounge Elite. All rights reserved. |

---

## Anexo A — Iconografía sugerida por servicio (referencia para el prompt de Claude Code)

Basado en los íconos línea/outline en copper rose que ya se ven en las capturas (estilo consistente, trazo fino, dentro de un círculo con fondo cool-gray-light/copper claro). Mapeo sugerido a `lucide-react` (ya está en las librerías disponibles del proyecto) para mantener el mismo lenguaje visual:

| Servicio | Ícono lucide-react sugerido |
|---|---|
| Alimentos a la Carta | `UtensilsCrossed` |
| Barra de alimentos y bebidas | `Wine` |
| Spa | `Sparkles` |
| Café artesanal | `Coffee` |
| Cervezas artesanales | `Beer` |
| Bebidas Premium | `GlassWater` |
| Carrito de golf | `CarFront` |
| Ducha | `ShowerHead` |
| Lustrado de calzado | `Footprints` |
| Guarda Equipaje | `Luggage` |
| Entretenimiento e información | `MonitorPlay` |
| Concierge | `ConciergeBell` |
| Información de Vuelos | `PlaneTakeoff` |

Todos los íconos deben respetar el contenedor circular ya visto en las capturas (fondo `--visa-copper-1` al 15-20% de opacidad o `--visa-gray-light`, ícono en `--visa-copper-2`), consistente con la sec. 2.4 del documento base de marca.

---

## 4. Siguiente paso

Con este copy deck fijado, el prompt a Claude Code debería referenciar **tres documentos como fuente de verdad**, sin repetir su contenido dentro del prompt:
1. `VISA_INFINITE_GUIA_VISUAL.md` — sistema de diseño (color, tipografía, grid, modos de layout).
2. Este documento (`SALA_HAVEN_COPY_DECK_ES_EN.md`) — todo el copy en ambos idiomas + estructura de secciones.
3. Los archivos de fuente ya en `/public/fonts/`.

El prompt en sí debe instruir a Claude Code a: (a) construir el i18n con estos textos exactos —nunca inventar copy nuevo—, (b) seguir la paleta/tipografía/grid del doc de marca al pie de la letra, (c) implementar la sección "Cómo funciona" nueva si se aprueba, y (d) dejar resuelto el FAQ #10 con el texto confirmado.
