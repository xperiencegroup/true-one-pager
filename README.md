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
- [Popup Click & Xperience: estado en URL y registro en localStorage](#popup-click--xperience-estado-en-url-y-registro-en-localstorage)

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

**Por qué se eligió:** aunque el sitio es mayormente un one-pager de scroll (secciones con anclas `#hero`, `#modelos`, etc.), sí necesita rutear por **idioma** (`/es`, `/en`) como parte de la URL, vía un parámetro dinámico (`useParams` con `lang`) y navegación programática (`useNavigate`) para el toggle de idioma. También se usa `useSearchParams` para controlar la apertura del popup de Click & Xperience desde la URL (ver [la sección correspondiente](#popup-click--xperience-estado-en-url-y-registro-en-localstorage)).

**Dónde se usa:** `Navbar` (`useParams`, `useNavigate` para el toggle EN/ES), `useXperiencePopup` (`useSearchParams`), y la configuración de rutas base del proyecto.

---

## Estado global: Zustand

```
zustand   5.0.15
```

**Qué es:** manejo de estado global minimalista, alternativa a Redux o Context API sin el boilerplate de ninguno de los dos. Un store se define con una función y se consume con un hook, sin providers que envuelvan el árbol de componentes.

**Por qué se eligió:** hay estado que necesita compartirse entre componentes que no tienen relación padre-hijo directa — por ejemplo, qué popup está activo (`usePopupStore`), consumido tanto por el componente que lo abre como por el que lo renderiza (`Home`). Zustand evita tener que pasar props o envolver la app en un Context solo para esto.

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

> **Nota:** el popup de Click & Xperience ya no se controla con este store, sino con un parámetro en la URL. Ver [Popup Click & Xperience](#popup-click--xperience-estado-en-url-y-registro-en-localstorage).

**Dónde se usa:** `usePopupStore` (control de popups), `useUIStore` (estado de selección en Amenidades).

---

## Popup Click & Xperience: estado en URL y registro en localStorage

El popup que da acceso a la Maqueta Digital Interactiva funciona como un "muro de registro": la primera vez que el usuario quiere entrar, se le piden sus datos; si ya se registró recientemente, se le lleva directo a la maqueta sin volver a mostrarle el formulario.

### Archivos

```
src/
  hooks/
    useXperiencePopup.js   # abre/cierra el popup y decide si mostrarlo o redirigir
  lib/
    leadStorage.js         # guarda y valida el registro en localStorage
  components/
    popup-registro/
      pop-up-click-xperience.jsx   # formulario; llama a saveLead() al enviar
```

### Estado de apertura en la URL (`useXperiencePopup`)

El popup está abierto cuando la URL tiene el parámetro `?form=maqueta`. En lugar de un `useState` o un store, el estado vive en la URL, lo que permite:

- **Enlaces directos:** `https://.../es?form=maqueta` abre el popup al cargar, útil para campañas o correos.
- **Botón "atrás" del navegador:** cierra el popup en lugar de salir del sitio, porque abrirlo agrega una entrada al historial.
- **Sin prop drilling:** cualquier componente puede abrirlo importando el hook.

```js
const { isOpen, openXperiencePopup, closeXperiencePopup } = useXperiencePopup();
```

- `isOpen`: `true` si la URL tiene `?form=maqueta`.
- `openXperiencePopup()`: si el usuario ya tiene un registro vigente, abre la maqueta directo en otra pestaña; si no, agrega el parámetro a la URL y se muestra el popup.
- `closeXperiencePopup()`: quita el parámetro con `replace: true` (no deja entrada extra en el historial) y conserva cualquier otro parámetro de la URL, como los `utm_` de campañas.

**Uso en un botón:**

```jsx
const { openXperiencePopup } = useXperiencePopup();

<button
  type="button"
  onClick={() => {
    track(TRACK.home.hero.cta, { target: "maqueta" });
    openXperiencePopup();
  }}
>
  {t("cta.explore")}
</button>;
```

**Uso en `Home`** (donde se renderiza el popup):

```jsx
const { isOpen, closeXperiencePopup } = useXperiencePopup();

<PopupClickAndXperience isOpen={isOpen} onClose={closeXperiencePopup} />;
```

Los botones que ejecutan esta acción son `<button>`, no `<a href="#">`: el enlace haría que el navegador intentara saltar al inicio de la página.

### Registro del lead en localStorage (`leadStorage`)

Cuando el formulario se envía correctamente a Supabase, se guarda en `localStorage` una marca con la fecha del registro:

```json
{ "at": 1793346223388 }
```

- **Clave:** `true_lead_registered`
- **Duración:** `DAYS = 7` (configurable en `leadStorage.js`)

Expone dos funciones:

- `saveLead()`: guarda la marca con `Date.now()`. Se llama en el `onSubmit` del popup **después** de que Supabase confirma el guardado (`if (error) throw error`), para que un envío fallido no marque al usuario como registrado.
- `hasValidLead()`: devuelve `true` si existe la marca y no ha vencido. Si ya venció, la borra y devuelve `false`.

**Decisiones de diseño:**

- **`localStorage` y no `sessionStorage`:** `sessionStorage` se borra al cerrar la pestaña, así que no sirve para recordar el registro durante varios días.
- **Solo se guarda la fecha, nunca datos personales.** Nombre, correo y teléfono se envían únicamente a Supabase. Guardarlos en el navegador los dejaría expuestos a cualquier script de la página y no aporta nada a esta lógica (misma regla de PII que en el [sistema de tracking](#reglas-de-privacidad-pii)).
- **Caducidad "perezosa":** `localStorage` no tiene expiración automática. La marca vencida se elimina la próxima vez que se llama a `hasValidLead()`, es decir, cuando el usuario da clic en un botón de la maqueta.
- **Tolerante a fallos:** ambas funciones usan `try/catch`. En navegadores donde `localStorage` está bloqueado (algunos modos incógnito), simplemente se muestra el formulario cada vez.

### Flujo completo

1. El usuario da clic en cualquier botón de la maqueta → `openXperiencePopup()`.
2. `hasValidLead()` revisa `localStorage`:
   - **Registro vigente:** se dispara `popup:click-xperience:redirect` y se abre la maqueta en otra pestaña. Como el `window.open` ocurre directamente dentro del clic, el navegador no lo bloquea.
   - **Sin registro o vencido:** se agrega `?form=maqueta` a la URL y se muestra el popup.
3. El usuario envía el formulario → se guarda en Supabase → `saveLead()` → redirección a la maqueta.
4. Durante los siguientes 7 días, ese navegador va directo a la maqueta.

### Cómo probarlo en local

Para ver el formulario de nuevo, abre DevTools → **Application → Local Storage**, selecciona el dominio y borra la clave `true_lead_registered`.

Para probar la caducidad sin esperar 7 días, simula un registro antiguo desde la consola:

```js
localStorage.setItem(
  "true_lead_registered",
  JSON.stringify({ at: Date.now() - 8 * 24 * 60 * 60 * 1000 }),
);
```

Al dar clic en un botón de la maqueta debe aparecer el formulario y la clave debe desaparecer de Local Storage.

También se puede bajar el plazo temporalmente en `leadStorage.js` (por ejemplo `const DAYS = 1 / 1440;` para un minuto). **Regresar el valor a `7` antes de hacer deploy.**

### Limitaciones

- **Funciona por navegador:** si la misma persona entra desde otro dispositivo o navegador, verá el formulario de nuevo.
- **No es una medida de seguridad:** cualquiera puede crear la clave manualmente desde DevTools. El objetivo es evitar pedir los datos repetidamente, no restringir el acceso a la maqueta.
- **Primer registro:** el `window.open` del `onSubmit` ocurre después de varios `await` (Supabase y el toast), por lo que algunos navegadores, sobre todo Safari en iOS, pueden bloquear la nueva pestaña. Las visitas posteriores no tienen este problema porque abren la maqueta directo desde el clic.

---

## Resumen rápido

| Librería                                          | Categoría      | Por qué en una frase                                              |
| ------------------------------------------------- | -------------- | ----------------------------------------------------------------- |
| `embla-carousel-react` / `-autoplay`              | Carrusel       | Control total del DOM/estilos para carruseles muy custom          |
| `i18next` / `react-i18next` / `-languagedetector` | i18n           | Sitio bilingüe ES/EN con texto mixto (JSX dentro de traducciones) |
| `motion`                                          | Animación      | Animaciones de entrada/salida en popups y menú, reveals on-scroll |
| `react-hook-form`                                 | Formularios    | Validación declarativa sin re-renders innecesarios                |
| `react-hot-toast`                                 | Notificaciones | Feedback inmediato tras enviar formularios                        |
| `react-router`                                    | Ruteo          | Rutas por idioma (`/es`, `/en`) y popup controlado por URL        |
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
    track.constants.js    # catálogo central de nombres de eventos
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
export const TRACK = {
  home: {
    menu: { toggle: "menu_toggle", item: "menu_select" },
    language: { ... },
    logo: { ... },
    social: { ... },
    whatsapp: { ... },
    clickAndXperience: { ... },
    popup: { registro: { ... }, clickAndXperience: { ... } },
    hero: { ... },
    eligenos: { ... },
    infraestructura: { ... },
    faq: { ... },
    dfc: { ... },
    contacto: { ... },
    footer: { ... },
  },
};
```

Las **keys** del objeto (`menu.item`, `popup.registro.open`, etc.) son las que se usan en el código y no cambian. Los **strings** son los nombres que llegan a GA4.

## Patrón de nombrado de eventos

Formato: `seccion_accion` en `snake_case`.

```js
"menu_select";
"popup_registro_submit";
"faq_toggle";
```

### Reglas de GA4

- Empezar con una letra.
- Usar solo letras minúsculas, números y guiones bajos (`_`). Sin espacios, dos puntos ni guiones medios.
- Máximo **40 caracteres**.
- No empezar con los prefijos reservados `ga_`, `google_` ni `firebase_`.

### Convenciones del proyecto

- **Sección primero, acción después.** Así los eventos de una misma sección aparecen juntos al ordenarlos alfabéticamente en GA4 (`popup_registro_open`, `popup_registro_close`, `popup_registro_submit`...).
- **Sin prefijo de proyecto.** El nombre solo describe qué pasó. Si la propiedad de GA4 se comparte con otros sitios, se distinguen por flujo de datos o por parámetro, no en el nombre del evento.
- **Verbos que describen el resultado**, no el gesto:

| Verbo      | Cuándo se usa                                                      | Ejemplo                    |
| ---------- | ------------------------------------------------------------------ | -------------------------- |
| `open`     | Se abre algo: un popup, un enlace externo, una red social, un mapa | `popup_xperience_open`     |
| `close`    | Se cierra un popup                                                 | `popup_registro_close`     |
| `submit`   | Un formulario se envió correctamente                               | `contacto_submit`          |
| `error`    | Falló el envío de un formulario                                    | `popup_xperience_error`    |
| `toggle`   | Algo se abre o cierra con el mismo control (menú, acordeón)        | `faq_toggle`               |
| `select`   | Se elige una opción de un grupo (un link del menú)                 | `menu_select`              |
| `change`   | Cambia una preferencia (idioma)                                    | `language_change`          |
| `redirect` | Se envía al usuario a un sitio externo como resultado de un flujo  | `popup_xperience_redirect` |

- **Sin `click` en el nombre.** En los botones que no tienen un resultado más específico, como los CTAs, el nombre de la sección basta (`hero_cta`, `footer_back_to_top`); el clic está implícito.

## Regla de oro: evento fijo + parámetro variable

**Nunca** se genera un nombre de evento distinto por cada variante de un mismo tipo de interacción (por ejemplo, un evento por cada botón del menú, o uno por cada red social). En su lugar:

- El **nombre del evento** describe la acción genérica (`menu_select`).
- El **detalle específico** (qué botón, qué red social, qué idioma) va como **parámetro**.

### ❌ Evitar

```js
menu: {
  amenidades: "menu_amenidades",
  modelos: "menu_modelos",
  contacto: "menu_contacto",
}
```

Problema: GA4 trata cada uno como un evento completamente distinto. No se pueden agrupar ni comparar fácilmente en reportes, y cada botón nuevo requiere agregar una key nueva (además, GA4 tiene un límite de ~500 eventos custom distintos por propiedad).

### ✅ Preferir

```js
menu: {
  item: "menu_select", // un solo nombre fijo
}
```

```jsx
track(TRACK.home.menu.item, { item_id: button.id });
```

En GA4, esto permite ver un solo evento `menu_select` con un desglose por el parámetro `item_id`, agrupable y comparable en un solo reporte (clic en el nombre del evento dentro de **Realtime** o **Events** para expandir sus parámetros).

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

**Nunca** se envían datos personales identificables (nombre, email, teléfono, empresa, mensaje) como parámetros de un evento. GA4 prohíbe explícitamente el envío de PII. Solo se trackea que la acción ocurrió (ej. `contacto_submit`), nunca el contenido de lo que el usuario escribió.

```js
// ✅ Correcto
track(TRACK.home.contacto.formSubmit);

// ❌ Incorrecto — nunca hacer esto
track(TRACK.home.contacto.formSubmit, { email: data.email, name: data.name });
```

La misma regla aplica al almacenamiento local: `localStorage` solo guarda la fecha del registro del lead, nunca sus datos (ver [Registro del lead en localStorage](#registro-del-lead-en-localstorage-leadstorage)).

## Catálogo de eventos actuales

| Sección                 | Key en `TRACK.home`                   | Evento en GA4              | Parámetros                                      | Cuándo se dispara                                                                                                                 |
| ----------------------- | ------------------------------------- | -------------------------- | ----------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| Navbar                  | `menu.toggle`                         | `menu_toggle`              | `item_id` (`open`\|`close`)                     | abrir/cerrar menú mobile                                                                                                          |
| Navbar                  | `menu.item`                           | `menu_select`              | `item_id`, `source?`                            | clic a cualquier link del menú (desktop, mobile, footer)                                                                          |
| Navbar                  | `language.toggle`                     | `language_change`          | `language` (nuevo idioma)                       | botón EN/ES                                                                                                                       |
| Navbar                  | `logo.home`                           | `logo_home`                | —                                               | clic al logo, regresa al hero                                                                                                     |
| Navbar/Popups           | `social.click`                        | `social_open`              | `network`, `source?`                            | clic a ícono de red social                                                                                                        |
| Home                    | `whatsapp.float`                      | `whatsapp_float_open`      | —                                               | botón flotante de WhatsApp                                                                                                        |
| Home                    | `clickAndXperience.float`             | `xperience_float_open`     | —                                               | botón flotante de Click & Xperience                                                                                               |
| Popup Registro          | `popup.registro.open`                 | `popup_registro_open`      | `source`                                        | apertura del popup (trigger en cada sección)                                                                                      |
| Popup Registro          | `popup.registro.close`                | `popup_registro_close`     | `method` (`button`\|`backdrop`)                 | cierre del popup                                                                                                                  |
| Popup Registro          | `popup.registro.submit`               | `popup_registro_submit`    | —                                               | envío exitoso del form                                                                                                            |
| Popup Registro          | `popup.registro.submitError`          | `popup_registro_error`     | —                                               | error al enviar                                                                                                                   |
| Popup Registro          | `popup.registro.social`               | `popup_registro_social`    | `network`                                       | redes dentro del popup                                                                                                            |
| Popup Click&Xperience   | `popup.clickAndXperience.open`        | `popup_xperience_open`     | `source`                                        | apertura (Naves, Macrolotes, DFC, etc.)                                                                                           |
| Popup Click&Xperience   | `popup.clickAndXperience.close`       | `popup_xperience_close`    | `method`                                        | cierre del popup                                                                                                                  |
| Popup Click&Xperience   | `popup.clickAndXperience.submit`      | `popup_xperience_submit`   | —                                               | envío exitoso                                                                                                                     |
| Popup Click&Xperience   | `popup.clickAndXperience.submitError` | `popup_xperience_error`    | —                                               | error al enviar                                                                                                                   |
| Popup Click&Xperience   | `popup.clickAndXperience.redirect`    | `popup_xperience_redirect` | —                                               | antes de abrir la maqueta: tras el envío del form, o directo desde `useXperiencePopup` si el usuario ya tiene un registro vigente |
| Popup Click&Xperience   | `popup.clickAndXperience.social`      | `popup_xperience_social`   | `network`                                       | redes dentro del popup                                                                                                            |
| Hero                    | `hero.cta`                            | `hero_cta`                 | `target` (`naves`\|`macrolotes`\|`maqueta`)     | botones del hero                                                                                                                  |
| Elígenos                | `eligenos.cta`                        | `eligenos_cta`             | `target` (`naves`\|`macrolotes`\|`maqueta`)     | botones de la sección Elígenos                                                                                                    |
| Infraestructura         | `infraestructura.mapClick`            | `infra_map_open`           | —                                               | clic al mapa (abre Google Maps)                                                                                                   |
| Preguntas (FAQ)         | `faq.toggle`                          | `faq_toggle`               | `question_id`                                   | apertura de un acordeón                                                                                                           |
| Designed for Certainty  | `dfc.mainSiteClick`                   | `dfc_main_site_open`       | —                                               | link al sitio principal (aún no construido)                                                                                       |
| Hablemos de tu Proyecto | `contacto.contactMethodClick`         | `contacto_method`          | `item_id` (`whatsapp`\|`tel-oficina`\|`correo`) | botones de contacto directo                                                                                                       |
| Hablemos de tu Proyecto | `contacto.formSubmit`                 | `contacto_submit`          | —                                               | envío exitoso del form de contacto                                                                                                |
| Hablemos de tu Proyecto | `contacto.formSubmitError`            | `contacto_error`           | —                                               | error al enviar                                                                                                                   |
| Footer                  | `footer.backToTop`                    | `footer_back_to_top`       | —                                               | botón de regreso al hero                                                                                                          |
| Footer                  | `footer.contactInfoClick`             | `footer_contact`           | `method`                                        | datos de contacto en el footer                                                                                                    |

> **Nota sobre `redirect`:** como se dispara tanto desde el popup como desde el hook, el número de eventos `popup_xperience_redirect` es mayor que el de `popup_xperience_submit`. La diferencia entre ambos equivale aproximadamente a las visitas de usuarios que regresaron con un registro vigente.

## Historial de nombres

Versiones anteriores del proyecto usaban el formato `trueonepager:seccion:accion:click` (por ejemplo, `trueonepager:menu:item:click`). Se cambió a `snake_case` corto para cumplir las reglas de nombres de GA4 y el límite de 40 caracteres.

GA4 trata los nombres nuevos como eventos distintos: el historial de los anteriores no se combina con ellos. Al comparar periodos que abarcan el cambio hay que sumar ambos nombres, y cualquier evento clave (conversión), audiencia o reporte personalizado que usara un nombre anterior debe volver a configurarse con el nuevo.
