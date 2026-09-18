// Literal copy from brand-reference/SALA_HAVEN_COPY_DECK_ES_EN.md — do not
// paraphrase or invent text here except where that document explicitly
// allows it (the "Cómo funciona" steps, and the submission-closed notice,
// both marked inline below).
import type { Bi } from "./i18n";

export const hero = {
  headline: {
    es: "Disfrute Sala Haven como parte de sus beneficios VISA Infinite",
    en: "Enjoy Sala Haven as part of your VISA Infinite benefits",
  } satisfies Bi,
  subheadline: {
    es: "Acceso exclusivo para tarjetahabientes Visa Infinite en la Terminal 1 del Aeropuerto Internacional de la Ciudad de México.",
    en: "Exclusive access for Visa Infinite cardholders at Terminal 1 of Mexico City International Airport.",
  } satisfies Bi,
};

export const form = {
  accessMethodLabel: { es: "Método de acceso", en: "Access method" } satisfies Bi,
  accessMethodValue: {
    es: "Tarjeta Visa Infinite (acceso exclusivo)",
    en: "Visa Infinite Card (exclusive access)",
  } satisfies Bi,
  travelDateLabel: { es: "Fecha de viaje *", en: "Travel date *" } satisfies Bi,
  travelDatePlaceholder: { es: "Selecciona una fecha", en: "Select a date" } satisfies Bi,
  timeLabel: { es: "Hora de reservación *", en: "Reservation time *" } satisfies Bi,
  timePlaceholder: { es: "Selecciona horario", en: "Select a time" } satisfies Bi,
  guestsLabel: { es: "Número de huéspedes *", en: "Number of guests *" } satisfies Bi,
  guestsPlaceholder: { es: "Selecciona", en: "Select" } satisfies Bi,
  fullNameLabel: { es: "Nombre completo *", en: "Full name *" } satisfies Bi,
  phoneLabel: { es: "Teléfono *", en: "Phone number *" } satisfies Bi,
  emailLabel: { es: "Email *", en: "Email *" } satisfies Bi,
  confirmEmailLabel: { es: "Confirmar email *", en: "Confirm email *" } satisfies Bi,
  airlineLabel: { es: "Aerolínea *", en: "Airline *" } satisfies Bi,
  airlinePlaceholder: { es: "Selecciona aerolínea", en: "Select airline" } satisfies Bi,
  flightNumberLabel: { es: "Número de vuelo *", en: "Flight number *" } satisfies Bi,
  celebratingAccordion: {
    es: "¿Celebra algo en especial?",
    en: "Celebrating something special?",
  } satisfies Bi,
  hours: {
    es: "Horario de operación: Lunes a Domingo, 05:00 - 21:00 hrs",
    en: "Hours of operation: Monday to Sunday, 5:00 AM – 9:00 PM",
  } satisfies Bi,
  submit: { es: "Confirmar Reservación", en: "Confirm Reservation" } satisfies Bi,
  // Not from the copy deck (the deck assumes a live backend). Short,
  // utilitarian notice for the submit-disabled state until Supabase is
  // connected — kept in the same formal "usted" register as the rest of
  // the site.
  closedNotice: {
    es: "Las reservaciones en línea abren muy pronto.",
    en: "Online reservations open very soon.",
  } satisfies Bi,
};

export const howItWorks = {
  eyebrow: { es: "Cómo funciona", en: "How it works" } satisfies Bi,
  headline: {
    es: "Tres pasos, sin fricción",
    en: "Three steps, without friction",
  } satisfies Bi,
  steps: [
    {
      title: { es: "Reserve su espacio", en: "Reserve your space" } satisfies Bi,
      description: {
        es: "Complete el formulario con su fecha de viaje y hora de llegada.",
        en: "Complete the form with your travel date and arrival time.",
      } satisfies Bi,
    },
    {
      title: {
        es: "Preséntese con su tarjeta",
        en: "Check in with your card",
      } satisfies Bi,
      description: {
        es: "Muestre su tarjeta Visa Infinite vigente, una identificación oficial y su pase de abordar del mismo día.",
        en: "Show your valid Visa Infinite card, an official ID, and your same-day boarding pass.",
      } satisfies Bi,
    },
    {
      title: { es: "Disfrute Sala Haven", en: "Enjoy Sala Haven" } satisfies Bi,
      description: {
        es: "Relájese antes de su vuelo con servicio y comodidad excepcionales.",
        en: "Relax before your flight with exceptional service and comfort.",
      } satisfies Bi,
    },
  ],
};

export type ServiceIconName =
  | "UtensilsCrossed"
  | "Wine"
  | "Sparkles"
  | "Coffee"
  | "Beer"
  | "GlassWater"
  | "CarFront"
  | "ShowerHead"
  | "Footprints"
  | "Luggage"
  | "MonitorPlay"
  | "ConciergeBell"
  | "PlaneTakeoff";

export const services: { icon: ServiceIconName; title: Bi; description: Bi }[] = [
  {
    icon: "UtensilsCrossed",
    title: { es: "Alimentos a la Carta", en: "À la Carte Dining" },
    description: {
      es: "Disfrute de platillos preparados al momento, diseñados para satisfacer los paladares más exigentes.",
      en: "Enjoy freshly prepared dishes, designed to satisfy even the most discerning palates.",
    },
  },
  {
    icon: "Wine",
    title: { es: "Barra de alimentos y bebidas", en: "Food & Beverage Bar" },
    description: {
      es: "Explore una selección variada de bocadillos y bebidas premium para complementar su experiencia.",
      en: "Explore a varied selection of snacks and premium drinks to complement your experience.",
    },
  },
  {
    icon: "Sparkles",
    title: { es: "Spa", en: "Spa" },
    description: {
      es: "Relájese antes de su vuelo con tratamientos de spa diseñados para revitalizar cuerpo y mente.",
      en: "Relax before your flight with spa treatments designed to revitalize body and mind.",
    },
  },
  {
    icon: "Coffee",
    title: { es: "Café artesanal", en: "Artisanal Coffee" },
    description: {
      es: "Deguste café de origen cuidadosamente preparado, ideal para los amantes de los sabores auténticos.",
      en: "Savor carefully prepared single-origin coffee, ideal for lovers of authentic flavor.",
    },
  },
  {
    icon: "Beer",
    title: { es: "Cervezas artesanales", en: "Craft Beers" },
    description: {
      es: "Disfrute de una selección de cervezas artesanales especialmente elegidas para complementar su experiencia VIP.",
      en: "Enjoy a selection of craft beers specially chosen to complement your VIP experience.",
    },
  },
  {
    icon: "GlassWater",
    title: { es: "Bebidas Premium", en: "Premium Beverages" },
    description: {
      es: "Saboree una amplia variedad de bebidas premium, que incluyen licores exclusivos y cócteles preparados al momento.",
      en: "Savor a wide variety of premium beverages, including exclusive spirits and freshly made cocktails.",
    },
  },
  {
    icon: "CarFront",
    title: { es: "Carrito de golf", en: "Golf Cart Transfer" },
    description: {
      es: "Facilitamos su traslado dentro del aeropuerto con un carrito de golf, pensado para ofrecerle mayor comodidad y rapidez.",
      en: "We make getting around the airport easy with a golf cart service, designed for greater comfort and speed.",
    },
  },
  {
    icon: "ShowerHead",
    title: { es: "Ducha", en: "Shower Facilities" },
    description: {
      es: "Refresque su viaje en nuestras modernas duchas, equipadas con amenidades de lujo para su comodidad.",
      en: "Refresh yourself during your trip in our modern showers, equipped with luxury amenities for your comfort.",
    },
  },
  {
    icon: "Footprints",
    title: { es: "Lustrado de calzado", en: "Shoe Shine" },
    description: {
      es: "Mantenga sus zapatos impecables con nuestro servicio de lustrado profesional, ideal para viajeros exigentes.",
      en: "Keep your shoes impeccable with our professional shoe shine service, ideal for discerning travelers.",
    },
  },
  {
    icon: "Luggage",
    title: { es: "Guarda Equipaje", en: "Luggage Storage" },
    description: {
      es: "Deje su equipaje en nuestro servicio seguro, diseñado para que disfrute de su tiempo en el aeropuerto sin preocupaciones.",
      en: "Leave your luggage in our secure service, designed so you can enjoy your time at the airport worry-free.",
    },
  },
  {
    icon: "MonitorPlay",
    title: { es: "Entretenimiento e información", en: "Entertainment & Information" },
    description: {
      es: "Acceda a contenido multimedia, noticias y entretenimiento para hacer su espera más amena y productiva.",
      en: "Access multimedia content, news, and entertainment to make your wait more enjoyable and productive.",
    },
  },
  {
    icon: "ConciergeBell",
    title: { es: "Concierge", en: "Concierge" },
    description: {
      es: "Nuestro equipo de concierge está a su disposición para asistirle con cualquier solicitud o información que necesite.",
      en: "Our concierge team is available to assist you with any request or information you may need.",
    },
  },
  {
    icon: "PlaneTakeoff",
    title: { es: "Información de Vuelos", en: "Flight Information" },
    description: {
      es: "Consulte los horarios y actualizaciones de sus vuelos con nuestro servicio de información en tiempo real.",
      en: "Check your flight schedules and updates with our real-time information service.",
    },
  },
];

export const about = {
  headline: {
    es: "Sala HAVEN (VISA): elegancia y hospitalidad exclusiva para tarjetahabientes Visa Infinite",
    en: "Sala HAVEN (VISA): exclusive elegance and hospitality for Visa Infinite cardholders",
  } satisfies Bi,
  paragraphs: [
    {
      es: "Ubicada estratégicamente en la Terminal 1 del Aeropuerto Internacional de la Ciudad de México, frente al área de Duty Free en Sala H, Sala HAVEN (VISA) recibe de manera exclusiva a tarjetahabientes Visa Infinite en un entorno diseñado para brindar confort, privacidad y servicio excepcional antes de su vuelo.",
      en: "Strategically located at Terminal 1 of Mexico City International Airport, facing the Duty Free area in Gate H, Sala HAVEN (VISA) welcomes Visa Infinite cardholders exclusively in an environment designed to offer comfort, privacy, and exceptional service before their flight.",
    },
    {
      es: "El espacio combina una atmósfera sofisticada con un diseño cuidadosamente curado, ideal tanto para relajarse como para sostener reuniones en un ambiente reservado y elegante. Cada elemento está pensado para ofrecer tranquilidad, discreción y atención personalizada.",
      en: "The space combines a sophisticated atmosphere with a carefully curated design, ideal both for relaxing and for holding meetings in a private, elegant setting. Every element is designed to offer tranquility, discretion, and personalized attention.",
    },
    {
      es: "Los visitantes pueden disfrutar de un menú a la carta, bebidas premium y amenidades seleccionadas que reflejan los más altos estándares de The Grand Lounge Elite, transformando el tiempo de espera en una experiencia verdaderamente distinguida.",
      en: "Guests can enjoy an à la carte menu, premium beverages, and curated amenities that reflect the highest standards of The Grand Lounge Elite, turning waiting time into a truly distinguished experience.",
    },
  ] satisfies Bi[],
  button: { es: "Reservar Acceso", en: "Book Access" } satisfies Bi,
};

export const experiencias = {
  headline: {
    es: "Experiencias y celebraciones memorables",
    en: "Memorable experiences and celebrations",
  } satisfies Bi,
  paragraphs: [
    {
      es: "En Sala HAVEN (VISA), cada visita está pensada para convertirse en un momento memorable. Los tarjetahabientes Visa Infinite disfrutan de manera exclusiva experiencias que elevan su estancia antes de volar, como selectas catas de mezcal, espacios privados para relajarse con total confort, resguardo de equipaje para mayor tranquilidad, una cuidada selección de alimentos y bebidas premium, y traslado a la puerta de embarque en carrito de golf.",
      en: "At Sala HAVEN (VISA), every visit is designed to become a memorable moment. Visa Infinite cardholders exclusively enjoy experiences that elevate their time before flying, such as curated mezcal tastings, private spaces to relax in total comfort, luggage safekeeping for extra peace of mind, a thoughtfully selected menu of premium food and beverages, and golf cart transfer to the boarding gate.",
    },
    {
      es: "Además, Sala HAVEN (VISA) es el lugar ideal para celebrar ocasiones especiales. Cumpleaños, aniversarios, lunas de miel, Día de las Madres, Día del Padre, graduaciones, despedidas o compromisos pueden transformarse en momentos inolvidables gracias a un servicio personalizado y atención dedicada en cada detalle.",
      en: "Sala HAVEN (VISA) is also the ideal place to celebrate special occasions. Birthdays, anniversaries, honeymoons, Mother's Day, Father's Day, graduations, farewells, or engagements can become unforgettable moments thanks to personalized service and dedicated attention to every detail.",
    },
  ] satisfies Bi[],
  button: { es: "Reservar Acceso", en: "Book Access" } satisfies Bi,
};

export const faq: { question: Bi; answer: Bi }[] = [
  {
    question: { es: "¿Quién puede acceder a Sala HAVEN (VISA)?", en: "Who can access Sala HAVEN (VISA)?" },
    answer: {
      es: "El acceso es exclusivo para el tarjetahabiente que presente su tarjeta Visa Infinite vigente, junto con una identificación oficial y pase de abordar del mismo día.",
      en: "Access is exclusive to cardholders who present a valid Visa Infinite card, along with official identification and a same-day boarding pass.",
    },
  },
  {
    question: {
      es: "¿Se realiza algún cargo al ingresar a la sala?",
      en: "Is there a charge to enter the lounge?",
    },
    answer: {
      es: "Sí. Al momento del ingreso se realiza un cargo de $1 peso mexicano para validar que la tarjeta esté activa, vigente y con el beneficio disponible. Este cargo no es reembolsable.",
      en: "Yes. Upon entry, a charge of $1 Mexican peso is applied to validate that the card is active, valid, and has the benefit available. This charge is non-refundable.",
    },
  },
  {
    question: {
      es: "¿Cuántos accesos de cortesía incluye la tarjeta Visa Infinite?",
      en: "How many complimentary visits does the Visa Infinite card include?",
    },
    answer: {
      es: "Visa Infinite ofrece accesos ilimitados sin costo e incluye hasta dos acompañantes por visita.",
      en: "Visa Infinite offers unlimited complimentary access and includes up to two guests per visit.",
    },
  },
  {
    question: { es: "¿Los menores de edad pagan acceso?", en: "Do minors pay for access?" },
    answer: {
      es: "En cada acceso de cortesía se permite la entrada sin costo de hasta dos menores de 12 años.",
      en: "Each complimentary visit allows free entry for up to two children under 12 years old.",
    },
  },
  {
    question: {
      es: "¿El acceso está sujeto a disponibilidad?",
      en: "Is access subject to availability?",
    },
    answer: {
      es: "Sí. El ingreso está sujeto a disponibilidad y puede existir tiempo de espera conforme a la ocupación de la sala y a las disposiciones aplicables del aeropuerto.",
      en: "Yes. Entry is subject to availability and there may be wait times depending on lounge occupancy and applicable airport regulations.",
    },
  },
  {
    question: {
      es: "¿Qué sucede si requiero ingresar con más de dos acompañantes?",
      en: "What happens if I need to bring more than two guests?",
    },
    answer: {
      es: "Los acompañantes adicionales podrán ingresar pagando la tarifa vigente publicada por The Grand Lounge Elite.",
      en: "Additional guests may enter by paying the current rate published by The Grand Lounge Elite.",
    },
  },
  {
    question: { es: "¿Dónde se ubica Sala HAVEN (VISA)?", en: "Where is Sala HAVEN (VISA) located?" },
    answer: {
      es: "Sala HAVEN (VISA) se encuentra en la Terminal 1 del Aeropuerto Internacional de la Ciudad de México, después de los filtros de seguridad y migración.",
      en: "Sala HAVEN (VISA) is located at Terminal 1 of Mexico City International Airport, past the security and immigration checkpoints.",
    },
  },
  {
    question: { es: "¿Cuál es el horario de operación?", en: "What are the hours of operation?" },
    answer: {
      es: "Sala HAVEN (VISA) opera de lunes a domingo, en un horario de 05:00 hrs a 21:00 hrs.",
      en: "Sala HAVEN (VISA) operates Monday through Sunday, from 5:00 AM to 9:00 PM.",
    },
  },
  {
    question: { es: "¿Existe un límite de permanencia?", en: "Is there a maximum stay limit?" },
    answer: {
      es: "La estancia máxima es de hasta 2 horas por ingreso. Si el pasajero desea permanecer más tiempo, cada periodo adicional de 2 horas se considerará como un nuevo acceso y se descontará de los accesos disponibles.",
      en: "The maximum stay is up to 2 hours per visit. If the passenger wishes to stay longer, each additional 2-hour period will count as a new visit and will be deducted from the available visits.",
    },
  },
  {
    // Proposed answer from the copy deck's [A CONFIRMAR] #2 — inferred from
    // the footer's legal line. Flag to the client for final sign-off.
    question: { es: "¿Quién opera Sala HAVEN (VISA)?", en: "Who operates Sala HAVEN (VISA)?" },
    answer: {
      es: "Sala HAVEN (VISA) es operada por The Grand Lounge Elite, empresa especializada en la operación de salas premium en aeropuertos.",
      en: "Sala HAVEN (VISA) is operated by The Grand Lounge Elite, a company specialized in operating premium airport lounges.",
    },
  },
];

export const gallery = {
  hoursHeadline: { es: "Horarios de atención", en: "Hours of operation" } satisfies Bi,
  hoursText: {
    es: "Servicio disponible 5:00 a 21:00 horas, de Lunes a Domingo",
    en: "Service available 5:00 AM to 9:00 PM, Monday through Sunday",
  } satisfies Bi,
  button: { es: "Reservar Acceso", en: "Book Access" } satisfies Bi,
  // 5 alt-texts are the copy deck's own suggestion (sec. 3.8); the rest are
  // plain, restrained descriptive captions for the additional real photos
  // uploaded, matching the brand's "restraint over sell" tone (sec. 7.1).
  photos: [
    { src: "/photos/gallery/mosaic-haven.webp", alt: { es: "Detalle del mosaico “HAVEN”", en: "“HAVEN” mosaic detail" } },
    { src: "/photos/gallery/dining-tables.webp", alt: { es: "Mesas de comedor de la sala", en: "Lounge dining tables" } },
    { src: "/photos/gallery/blue-velvet-lounge.webp", alt: { es: "Sillones azules de terciopelo", en: "Blue velvet armchairs" } },
    { src: "/photos/gallery/beverage-bar.webp", alt: { es: "Barra de bebidas", en: "Beverage bar" } },
    { src: "/photos/gallery/lounge-screens.webp", alt: { es: "Sala de estar con sillones", en: "Lounge seating area" } },
    { src: "/photos/gallery/reading-nook.webp", alt: { es: "Rincón de lectura", en: "Reading nook" } },
    { src: "/photos/gallery/desk-detail.webp", alt: { es: "Detalle de escritorio", en: "Desk detail" } },
    { src: "/photos/gallery/art-lounge.webp", alt: { es: "Instalación de arte en la sala", en: "Lounge art installation" } },
    { src: "/photos/gallery/art-spiral.webp", alt: { es: "Detalle de iluminación artística", en: "Artistic lighting detail" } },
    { src: "/photos/gallery/spa-room.webp", alt: { es: "Sala de spa", en: "Spa room" } },
  ] satisfies { src: string; alt: Bi }[],
};

export const footer = {
  followUs: { es: "SÍGUENOS", en: "FOLLOW US" } satisfies Bi,
  legal: {
    es: "Sala HAVEN (VISA) es operada por The Grand Lounge Elite.",
    en: "Sala HAVEN (VISA) is operated by The Grand Lounge Elite.",
  } satisfies Bi,
  privacy: { es: "Aviso de Privacidad", en: "Privacy Notice" } satisfies Bi,
  terms: { es: "Términos y Condiciones", en: "Terms and Conditions" } satisfies Bi,
  copyright: {
    es: "© 2026 The Grand Lounge Elite. Todos los derechos reservados.",
    en: "© 2026 The Grand Lounge Elite. All rights reserved.",
  } satisfies Bi,
};

export const bookAccessLabel = { es: "Reservar Acceso", en: "Book Access" } satisfies Bi;
export const langSwitchLabel = { es: "English", en: "Español" } satisfies Bi;
export const networkLabel = { es: "The Grand Lounge Elite", en: "The Grand Lounge Elite" } satisfies Bi;

// Airline names are proper nouns — not translated between ES/EN. Alphabetical order.
export const airlines = [
  "Air Canada",
  "Air France",
  "All Nippon Airways",
  "American Airlines",
  "Avianca",
  "British Airways",
  "China Southern Airlines",
  "Copa Airlines",
  "Delta Air Lines",
  "Emirates",
  "Hainan Airlines",
  "Iberia",
  "KLM",
  "LATAM Airlines",
  "Lufthansa",
  "Magnicharters",
  "Turkish Airlines",
  "United Airlines",
  "Viva Aerobus",
  "Volaris",
] as const;
