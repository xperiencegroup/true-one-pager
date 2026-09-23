# Stack técnico — True One Pager

Este documento explica las librerías menos evidentes del proyecto: qué hacen, por qué se eligieron y en qué parte del código se usan. No cubre React, React DOM ni Tailwind CSS por ser dependencias base ya conocidas.

## Índice

- [Carrusel: Embla Carousel](#carrusel-embla-carousel)
- [Internacionalización: i18next](#internacionalización-i18next)
- [Animaciones: Motion](#animaciones-motion)
- [Formularios: React Hook Form](#formularios-react-hook-form)
- [Notificaciones: React Hot Toast](#notificaciones-react-hot-toast)
- [Ruteo: React Router](#ruteo-react-router)
- [Estado global: Zustand](#estado-global-zustand)

---

## Carrusel: Embla Carousel

```
embla-carousel-react      8.6.0
embla-carousel-autoplay   8.6.0
```

**Qué es:** una librería de carrusel headless (sin estilos propios) y ligera. A diferencia de librerías como Swiper, Embla no impone su propio CSS ni componentes visuales — expone un hook (`useEmblaCarousel`) que da control total del DOM y los estilos, mientras la librería se encarga solo de la física del scroll (drag, snap, inercia).

**Por qué se eligió:** el diseño del proyecto tiene carruseles muy custom (tarjetas que se expanden al seleccionarse, flechas que cambian de posición según el breakpoint, distinto comportamiento en mobile vs. desktop). Una librería con estilos propios habría requerido pelear contra su CSS constantemente. Embla da el control de bajo nivel necesario para eso.

**El plugin `embla-carousel-autoplay`** agrega scroll automático configurable (usado en el carrusel de "Avance de obra", con `stopOnMouseEnter` para pausar cuando el usuario interactúa).

**Dónde se usa:**

- `src/components/embla-carousel/carousel.jsx` — wrapper reutilizable del carrusel base, usado por Amenidades, Avance de obra, y los carruseles de imágenes dentro del modal de Modelos.

---

## Internacionalización: i18next

```
i18next                        26.4.2
react-i18next                  17.0.13
i18next-browser-languagedetector 8.2.1
```

**Qué es:** el estándar de facto para internacionalización en aplicaciones JS/React. `i18next` es el motor de traducción (carga de namespaces, interpolación, pluralización); `react-i18next` da los hooks (`useTranslation`) y componentes (`<Trans>`) para usarlo dentro de JSX; `i18next-browser-languagedetector` detecta automáticamente el idioma preferido del visitante (por URL, navegador, o almacenamiento) sin tener que preguntarle.

**Por qué se eligió:** el sitio maneja español e inglés con rutas por idioma (`/es`, `/en`, vía `useParams` con `lang`), y hay textos con formato mixto (negritas, saltos de línea) dentro de las traducciones — para eso sirve el componente `<Trans>`, que permite insertar JSX dentro de un string traducido sin romper la estructura:

```jsx
<Trans
  t={t}
  i18nKey="description"
  components={{ strong: <span className="font-semibold" /> }}
/>
```

**Organización de traducciones:** cada sección de la página tiene su propio namespace (`nav`, `faq`, `registro`, `modalPlataforma`, `hablemos`, `plataforma`, `dfc`, `footer`, etc.), cargado con `useTranslation("nombreDelNamespace")`. Esto evita un solo archivo gigante de traducciones y mantiene cada componente acoplado solo a las claves que necesita.

**Dónde se usa:** prácticamente en todos los componentes de contenido (`Navbar`, `Hero`, `Preguntas`, ambos popups, `Footer`, etc.) — cualquier texto visible al usuario pasa por `t("clave")`.

---

## Animaciones: Motion

```
motion   13.1.1
```

**Qué es:** la librería antes conocida como Framer Motion, ahora renombrada a `motion`. Da animaciones declarativas para React vía props (`initial`, `animate`, `exit`, `variants`) en vez de manipular CSS/JS manualmente.

**Por qué se eligió:** el proyecto necesita animaciones de entrada/salida condicionadas al montaje/desmontaje de componentes (el menú mobile, los popups), algo que CSS puro no resuelve limpio sin JS adicional (`AnimatePresence` mantiene el componente en el DOM hasta que termina su animación de salida). También se usa para animaciones "on scroll" (fade/slide al entrar en viewport, ver `useInView`) y para transiciones de tamaño animadas (las tarjetas de Amenidades que se expanden al seleccionarse).

**Patrones usados en el proyecto:**

- `AnimatePresence` + `variants` con `staggerChildren` — menú mobile del navbar, con entrada escalonada de cada botón.
- `motion.div` con `animate={{ width: ... }}` — expansión de tarjetas en Amenidades.
- `initial`/`animate`/`exit` en popups — fade + scale al abrir/cerrar.
- Combinado con un hook custom `useInView` — reveals al hacer scroll (clases `reveal`, `reveal-left`, `reveal-scale` en casi todas las secciones).

**Dónde se usa:** `Navbar`, `Amenidades`, `AvanceObra`, `PopupRegistro`, `PopupClickAndXperience`, y la mayoría de las secciones del home vía el hook `useInView`.

---

## Formularios: React Hook Form

```
react-hook-form   7.87.0
```

**Qué es:** manejo de formularios con validación, basado en refs en vez de re-renders por cada tecla presionada (a diferencia de manejar el estado del form con `useState` manual). Da mejor rendimiento en formularios con varios campos y validaciones complejas.

**Por qué se eligió:** los tres formularios del proyecto (Popup de Registro, Popup de Click & Xperience, formulario de contacto) tienen validaciones no triviales — regex para nombres con acentos, validación de teléfono con normalización en vivo, límites de caracteres — todo declarado directo en el `register()` de cada campo, sin lógica de validación manual dispersa por el componente.

```jsx
const {
  register,
  handleSubmit,
  reset,
  formState: { errors, isSubmitting },
} = useForm();

<input
  {...register("email", {
    required: t("form.errors.emailRequired"),
    pattern: {
      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: t("form.errors.emailInvalid"),
    },
  })}
/>;
```

`formState.isSubmitting` también se usa para deshabilitar el botón de envío y mostrar un estado de carga sin manejar un `useState` extra.

**Dónde se usa:** `PopupRegistro`, `PopupClickAndXperience`, `HablemosDeTuProyecto` (formulario de contacto).

---

## Notificaciones: React Hot Toast

```
react-hot-toast   2.6.0
```

**Qué es:** notificaciones tipo "toast" (mensajes flotantes temporales) ligeras y sin estilos forzados, fáciles de disparar desde cualquier parte del código con una función imperativa en vez de manejar estado de UI manualmente.

**Por qué se eligió:** se necesita feedback inmediato al usuario tras enviar un formulario (éxito o error), sin bloquear la interfaz con un modal ni requerir lógica de estado adicional en cada componente que envía un form.

**Implementación:** el proyecto envuelve la librería en un helper custom (`showToast`) para centralizar el estilo y la lógica de éxito/error, y renderiza un solo `<Toaster />` a nivel de la página home.

```jsx
await showToast(t("toast.success"), false); // éxito
showToast(t("toast.error"), true); // error
```

**Dónde se usa:** `Home` (renderiza `<Toaster />`), y se dispara desde `PopupRegistro`, `PopupClickAndXperience`, y el formulario de `HablemosDeTuProyecto` tras cada intento de envío.

---

## Ruteo: React Router

```
react-router   8.3.0
```

**Qué es:** el router estándar para SPAs en React. Nota: desde la v7, el paquete se instala como `react-router` (ya no `react-router-dom` por separado).

**Por qué se eligió:** aunque el sitio es mayormente un one-pager de scroll (secciones con anclas `#hero`, `#modelos`, etc.), sí necesita rutear por **idioma** (`/es`, `/en`) como parte de la URL, vía un parámetro dinámico (`useParams` con `lang`) y navegación programática (`useNavigate`) para el toggle de idioma.

**Dónde se usa:** `Navbar` (`useParams`, `useNavigate` para el toggle EN/ES), y la configuración de rutas base del proyecto (fuera del alcance de los componentes vistos hasta ahora).

---

## Estado global: Zustand

```
zustand   5.0.15
```

**Qué es:** manejo de estado global minimalista, alternativa a Redux o Context API sin el boilerplate de ninguno de los dos. Un store se define con una función y se consume con un hook, sin providers que envuelvan el árbol de componentes.

**Por qué se eligió:** hay estado que necesita compartirse entre componentes que no tienen relación padre-hijo directa — por ejemplo, qué popup está activo (`usePopupStore`), consumido tanto por el componente que lo abre (un botón en `Naves`, `Macrolotes`, `DesignedForCertainty`, etc.) como por el que lo renderiza (`Home`, donde viven `<PopupRegistro />` y `<PopupClickAndXperience />`). Zustand evita tener que pasar props o envolver la app en un Context solo para esto.

```jsx
// definición (aprox.)
export const usePopupStore = create((set) => ({
  activePopup: null,
  openPopup: (id) => set({ activePopup: id }),
  closePopup: () => set({ activePopup: null }),
}));

// consumo en cualquier componente
const openPopup = usePopupStore((state) => state.openPopup);
```

También se usa para estado de UI compartido como qué amenidad está seleccionada en el carrusel (`useUIStore`).

**Dónde se usa:** `usePopupStore` (control de popups, consumido por casi todas las secciones con CTA), `useUIStore` (estado de selección en Amenidades).

---

## Resumen rápido

| Librería                                          | Categoría      | Por qué en una frase                                              |
| ------------------------------------------------- | -------------- | ----------------------------------------------------------------- |
| `embla-carousel-react` / `-autoplay`              | Carrusel       | Control total del DOM/estilos para carruseles muy custom          |
| `i18next` / `react-i18next` / `-languagedetector` | i18n           | Sitio bilingüe ES/EN con texto mixto (JSX dentro de traducciones) |
| `motion`                                          | Animación      | Animaciones de entrada/salida en popups y menú, reveals on-scroll |
| `react-hook-form`                                 | Formularios    | Validación declarativa sin re-renders innecesarios                |
| `react-hot-toast`                                 | Notificaciones | Feedback inmediato tras enviar formularios                        |
| `react-router`                                    | Ruteo          | Rutas por idioma (`/es`, `/en`)                                   |
| `zustand`                                         | Estado global  | Compartir estado (popups, UI) sin prop drilling ni Context        |

# Sistema de Tracking

Este documento explica cómo funciona el sistema de tracking de eventos (Google Analytics 4) en este proyecto, para que cualquier persona o LLM pueda entenderlo y extenderlo de forma consistente.

## Stack de analytics

- **Google Analytics 4 (gtag.js)** — instalado directo en `index.html`, sin librerías npm.
- **Microsoft Clarity** — también instalado en `index.html`, para grabación de sesiones (no forma parte del sistema de `track()` custom).
- **Sin Google Tag Manager** — se usa `gtag.js` directo, no GTM.

## Arquitectura de archivos

```
src/
  analytics/
    track.js              # función helper que envía eventos a gtag
    track.constants.js     # catálogo central de nombres de eventos
```

### `track.js`

```js
export const track = (event, params = {}) => {
  if (typeof window === "undefined") return;

  if (typeof window.gtag === "function") {
    window.gtag("event", event, params);
  }
};
```

Wrapper mínimo sobre `window.gtag`. Verifica que exista `window` (SSR-safe) y que `gtag` esté disponible antes de llamarlo. No lanza errores si GA4 no cargó (por ejemplo, bloqueado por un ad blocker).

### `track.constants.js`

Catálogo centralizado de todos los nombres de eventos, organizado por sección de la página. Evita strings mágicos repetidos en los componentes y sirve como documentación viva de qué se está trackeando.

```js
const PROJECT = "trueonepager";

export const TRACK = {
  home: {
    menu: { ... },
    language: { ... },
    logo: { ... },
    social: { ... },
    whatsapp: { ... },
    popup: { registro: { ... }, clickAndXperience: { ... } },
    hero: { ... },
    infraestructura: { ... },
    faq: { ... },
    dfc: { ... },
    contacto: { ... },
    footer: { ... },
  },
};
```

## Patrón de nombrado de eventos

Formato: `proyecto:categoría:acción:click` (o `:open`, `:submit`, `:toggle`, etc. según el tipo de interacción).

```js
`${PROJECT}:menu:item:click``${PROJECT}:popup:registro:submit``${PROJECT}:faq:item:toggle`;
```

## Regla de oro: evento fijo + parámetro variable

**Nunca** se genera un nombre de evento distinto por cada variante de un mismo tipo de interacción (por ejemplo, un evento por cada botón del menú, o uno por cada red social). En su lugar:

- El **nombre del evento** describe la acción genérica (`menu:item:click`).
- El **detalle específico** (qué botón, qué red social, qué idioma) va como **parámetro**.

### ❌ Evitar

```js
menu: {
  amenidades: `${PROJECT}:menu:amenidades:click`,
  modelos: `${PROJECT}:menu:modelos:click`,
  contacto: `${PROJECT}:menu:contacto:click`,
}
```

Problema: GA4 trata cada uno como un evento completamente distinto. No se pueden agrupar ni comparar fácilmente en reportes, y cada botón nuevo requiere agregar una key nueva (además, GA4 tiene un límite de ~500 eventos custom distintos por propiedad).

### ✅ Preferir

```js
menu: {
  item: `${PROJECT}:menu:item:click`, // un solo nombre fijo
}
```

```jsx
track(TRACK.home.menu.item, { item_id: button.id });
```

En GA4, esto permite ver un solo evento `menu:item:click` con un desglose por el parámetro `item_id`, agrupable y comparable en un solo reporte (clic en el nombre del evento dentro de **Realtime** o **Events** para expandir sus parámetros).

## Parámetro `source` para componentes reutilizados

Varios botones/CTAs se repiten en distintas secciones de la página (ej. el botón que abre el popup "Click & Xperience" aparece en `DesignedForCertainty`, `Naves`, `Macrolotes`, y `HablemosDeTuProyecto`). En estos casos:

- Se reusa el **mismo evento**.
- Se agrega un parámetro `source` indicando desde qué sección se disparó.

```jsx
track(TRACK.home.popup.clickAndXperience.open, { source: "naves" });
track(TRACK.home.popup.clickAndXperience.open, { source: "macrolotes" });
```

Esto permite comparar qué sección de la página convierte más usuarios hacia una misma acción, sin duplicar eventos.

## Reglas de privacidad (PII)

**Nunca** se envían datos personales identificables (nombre, email, teléfono, empresa, mensaje) como parámetros de un evento. GA4 prohíbe explícitamente el envío de PII. Solo se trackea que la acción ocurrió (ej. `contacto:form:submit`), nunca el contenido de lo que el usuario escribió.

```js
// ✅ Correcto
track(TRACK.home.contacto.formSubmit);

// ❌ Incorrecto — nunca hacer esto
track(TRACK.home.contacto.formSubmit, { email: data.email, name: data.name });
```

## Catálogo de eventos actuales

| Sección                 | Evento                                         | Parámetros                                 | Dónde vive                                               |
| ----------------------- | ---------------------------------------------- | ------------------------------------------ | -------------------------------------------------------- |
| Navbar                  | `menu:toggle:click`                            | —                                          | abrir/cerrar menú mobile                                 |
| Navbar                  | `menu:item:click`                              | `item_id`, `source?`                       | clic a cualquier link del menú (desktop, mobile, footer) |
| Navbar                  | `language:toggle:click`                        | `language` (nuevo idioma)                  | botón EN/ES                                              |
| Navbar                  | `logo:hero:click`                              | —                                          | clic al logo, regresa al hero                            |
| Navbar/Popups           | `social:click`                                 | `network`, `source?`                       | clic a ícono de red social                               |
| Home                    | `whatsapp:float:click`                         | —                                          | botón flotante de WhatsApp                               |
| Popup Registro          | `popup:registro:open`                          | `source`                                   | apertura del popup (trigger en cada sección)             |
| Popup Registro          | `popup:registro:close`                         | `method` (`button`\|`backdrop`)            | cierre del popup                                         |
| Popup Registro          | `popup:registro:submit`                        | —                                          | envío exitoso del form                                   |
| Popup Registro          | `popup:registro:submit-error`                  | —                                          | error al enviar                                          |
| Popup Registro          | `popup:registro:social:click`                  | `network`                                  | redes dentro del popup                                   |
| Popup Click&Xperience   | `popup:click-xperience:open`                   | `source`                                   | apertura (Naves, Macrolotes, DFC, etc.)                  |
| Popup Click&Xperience   | `popup:click-xperience:close`                  | `method`                                   | cierre del popup                                         |
| Popup Click&Xperience   | `popup:click-xperience:submit`                 | —                                          | envío exitoso                                            |
| Popup Click&Xperience   | `popup:click-xperience:submit-error`           | —                                          | error al enviar                                          |
| Popup Click&Xperience   | `popup:click-xperience:redirect`               | —                                          | justo antes de redirigir al sitio externo                |
| Popup Click&Xperience   | `popup:click-xperience:social:click`           | `network`                                  | redes dentro del popup                                   |
| Hero / Eligenos         | `hero:cta:click` (o `cta:building-land:click`) | `target` (`naves`\|`macrolotes`), `source` | botones "Ver naves" / "Ver macrolotes"                   |
| Infraestructura         | `infraestructura:map:click`                    | —                                          | clic al mapa (abre Google Maps)                          |
| Preguntas (FAQ)         | `faq:item:toggle`                              | `question_id`                              | apertura de un acordeón                                  |
| Designed for Certainty  | `dfc:main-site:click`                          | —                                          | link al sitio principal (aún no construido)              |
| Hablemos de tu Proyecto | `contacto:metodo:click`                        | `method` (`whatsapp`\|`oficina`\|`correo`) | card de contacto directo                                 |
| Hablemos de tu Proyecto | `contacto:form:submit`                         | —                                          | envío exitoso del form de contacto                       |
| Hablemos de tu Proyecto | `contacto:form:submit-error`                   | —                                          | error al enviar                                          |
| Footer                  | `footer:back-to-top:click`                     | —                                          | botón de regreso al hero                                 |
| Footer                  | `footer:contact-info:click`                    | `method`                                   | datos de contacto en el footer                           |
