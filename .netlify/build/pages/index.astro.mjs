import { c as createComponent, r as renderTemplate, m as maybeRenderHead, f as addAttribute, d as createAstro, i as renderHead, j as renderComponent, k as renderSlot, l as renderScript, n as Fragment } from '../chunks/astro/server_BAz-nQsd.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$ContactForm = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", `<section id="contacto" class="py-6 mt-30"> <div class="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x text-white"> <div class="py-6 md:py-0 md:px-6"> <h1 class="text-4xl font-bold text-green-700">\xA1Comienza tu transformaci\xF3n!</h1> <p class="pt-2 pb-4">Completa el formulario y recibe tu plan de entrenamiento personalizado.</p> <div class="space-y-4"> <p class="flex items-center"> <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" class="w-5 h-5 mr-2 sm:mr-6"> <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" fill="none"></circle> <path d="M2 12h20M12 2a15 15 0 010 20M12 2a15 15 0 000 20" stroke="currentColor" stroke-width="2" fill="none"></path> </svg> <span>Argentina, San Juan</span> </p> <p class="flex items-center"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 mr-2 sm:mr-6"> <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path> </svg> <span>Comandante cabot, entre Hudson y Urquiza</span> </p> <p class="flex items-center"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 mr-2 sm:mr-6"> <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path> </svg> <span>+54 264 468-2403</span> </p> <p class="flex items-center"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 mr-2 sm:mr-6"> <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path> <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path> </svg> <span>javi44479821@gmail.com</span> </p> </div> </div> <form id="contactForm" novalidate="" class="flex flex-col py-6 space-y-6 md:py-0 md:px-6"> <label class="block"> <span class="mb-1">Nombre completo</span> <input type="text" name="nombre" placeholder="Leroy Jenkins" class="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-green-600 bg-gray-800"> </label> <label class="block"> <span class="mb-1">Correo electr\xF3nico</span> <input type="email" name="email" placeholder="leroy@jenkins.com" class="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-green-600 bg-gray-800"> </label> <label class="block"> <span class="mb-1">Mensaje</span> <textarea rows="3" name="mensaje" class="block w-full rounded-md focus:ring focus:ring-opacity-75 focus:dark:ring-green-600 bg-gray-800"></textarea> </label> <button type="submit" class="self-center px-8 py-2 text-lg rounded focus:ring hover:scale-110 transition-transform duration-300 focus:ring-opacity-75 dark:bg-[#40602F] dark:text-white cursor-pointer">Enviar</button> <p id="statusMessage"></p> </form> </div> </section> <script type="module">
  const form = document.getElementById('contactForm');
  const status = document.getElementById('statusMessage');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    status.textContent = 'Enviando...';

    const data = {
      nombre: form.nombre.value.trim(),
      email: form.email.value.trim(),
      mensaje: form.mensaje.value.trim()
    };

    try {
      const res = await fetch('/api/contacto', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      const result = await res.json();
      status.textContent = result.message || result.error;

      if (res.ok) form.reset();
    } catch (err) {
      status.textContent = 'Error al enviar el mensaje';
    }
  });
<\/script>`])), maybeRenderHead());
}, "C:/Users/Santi/Personal-Trainer/src/components/ContactForm.astro", void 0);

const LogoGym = new Proxy({"src":"/_astro/logo-gym.DWtYf4Y7.webp","width":525,"height":600,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Santi/Personal-Trainer/src/assets/logo-gym.webp";
							}
							
							return target[name];
						}
					});

const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<nav class="fixed w-full z-50 top-0 left-0 border-gray-200 bg-white/30 backdrop-blur-md dark:bg-gray-900/30 dark:border-gray-600"> <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"> <a href="#hero-section" class="flex items-center space-x-3 rtl:space-x-reverse"> <img${addAttribute(LogoGym.src, "src")} class="h-10 w-10 bg-white rounded-full" alt="Flowbite Logo"> <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Fitness</span> </a> <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse"> <a href="https://w.app/carlosaguileramusculacionyfitness" target="_blank" rel="noopener noreferrer"> <button type="button" class="text-white bg-[#40602F] hover:scale-105 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center cursor-pointer uppercase">Inicia tu cambio!</button> </a> <button data-collapse-toggle="navbar-cta" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false"> <span class="sr-only">Open main menu</span> <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"></path> </svg> </button> </div> <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta"> <ul class="flex flex-col font-medium p-4 md:p-0 mt-4  rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 "> <li> <a href="#" class="block py-2 px-3 md:p-0 text-white rounded-sm md:bg-transparent md:hover:text-[#679E57]" aria-current="page">Inicio</a> </li> <li> <a href="#about" class="block py-2 px-3 md:p-0 text-white rounded-sm hover:text-[#679E57]">Acerca de</a> </li> <li> <a href="#entrenamiento-personalizado" class="block py-2 px-3 md:p-0 text-white rounded-sm hover:text-[#679E57]">Entrenamientos</a> </li> <li> <a href="#contacto" class="block py-2 px-3 md:p-0 text-white rounded-sm hover:text-[#679E57]">Contacto</a> </li> </ul> </div> </div> </nav>`;
}, "C:/Users/Santi/Personal-Trainer/src/components/Navbar.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Entrenador Personal en San Juan | Carlos Aguilera</title><meta name="description" content="Entrenador personal en San Juan. Planes personalizados, clases grupales, asesoramiento en fitness y nutrición. ¡Comienza tu transformación con Carlos Aguilera!"><meta name="keywords" content="entrenador personal, fitness, San Juan, entrenamiento personalizado, clases grupales, nutrición, gym, Carlos Aguilera"><meta name="author" content="Carlos Aguilera"><meta property="og:title" content="Entrenador Personal en San Juan | Carlos Aguilera"><meta property="og:description" content="Entrenador personal en San Juan. Planes personalizados, clases grupales, asesoramiento en fitness y nutrición."><meta property="og:type" content="website"><meta property="og:url" content="https://tusitioweb.com"><meta property="og:image" content="/assets/Logo.webp"><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="Entrenador Personal en San Juan | Carlos Aguilera"><meta name="twitter:description" content="Entrenador personal en San Juan. Planes personalizados, clases grupales, asesoramiento en fitness y nutrición."><meta name="twitter:image" content="/assets/Logo.webp"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="preconnect" href="https://fonts.googleapis.com" crossorigin><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link rel="preconnect" href="https://cdn.jsdelivr.net" crossorigin><link href="https://fonts.googleapis.com/css2?family=Anton&family=Bebas+Neue&family=Bitcount+Grid+Double:wght@100..900&family=Bungee&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"><meta name="generator"${addAttribute(Astro2.generator, "content")}>${renderHead()}</head> <body> ${renderComponent($$result, "Navbar", $$Navbar, {})} ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "ContactForm", $$ContactForm, {})} </body></html>`;
}, "C:/Users/Santi/Personal-Trainer/src/layouts/Layout.astro", void 0);

const Entrenador = new Proxy({"src":"/_astro/Personas-entrenando.CLKlDicD.webp","width":6865,"height":4577,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Santi/Personal-Trainer/src/assets/Personas-entrenando.webp";
							}
							
							return target[name];
						}
					});

const Logo = new Proxy({"src":"/_astro/Logo.D16P_F1v.webp","width":600,"height":577,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Santi/Personal-Trainer/src/assets/Logo.webp";
							}
							
							return target[name];
						}
					});

const Pesas = new Proxy({"src":"/_astro/pesas-verdes.D8v8Rk9a.webp","width":1912,"height":1252,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Santi/Personal-Trainer/src/assets/pesas-verdes.webp";
							}
							
							return target[name];
						}
					});

const about1 = new Proxy({"src":"/_astro/img-about-us.BjgbM-x5.webp","width":4000,"height":6000,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Santi/Personal-Trainer/src/assets/img-about-us.webp";
							}
							
							return target[name];
						}
					});

const about2 = new Proxy({"src":"/_astro/img2-about-us.DPREOM2S.webp","width":1024,"height":1536,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Santi/Personal-Trainer/src/assets/img2-about-us.webp";
							}
							
							return target[name];
						}
					});

const Entrenamiento = new Proxy({"src":"/_astro/entrenamiento.D1vVsu5r.webp","width":2296,"height":3984,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Santi/Personal-Trainer/src/assets/entrenamiento.webp";
							}
							
							return target[name];
						}
					});

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const items = [{ label: "Training" }, { label: "Fitness Sports" }];
  const repeat = 7;
  const repeatedItems = Array.from({ length: repeat }).flatMap(() => items);
  return renderTemplate(_a || (_a = __template(["", ' <script type="module" src="/src/scripts/ui.js"><\/script> ', ""])), renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div id="hero-section" class="relative overflow-hidden"> <img${addAttribute(Entrenador.src, "src")} alt="Personas entrenando en gimnasio, fondo difuminado" title="Entrenador Personal Carlos Aguilera" width="1920" height="1080" class="h-[100svh] md:h-[100vh] w-full object-cover object-center opacity-25 mask-b-from-80% mask-b-to-100%" loading="lazy"> <div class="text-white flex justify-center items-center my-20 md:my-40 absolute inset-0"> <h1 class="relative w-full flex items-center justify-center overflow-visible"> <span class="absolute left-10 bottom-15 md:left-15 md:bottom-30 text-2xl md:text-3xl font-bold lg:bottom-50 lg:left-25 2xl:left-35 3xl:left-60">Entrenador</span> <span class="titulo-dos uppercase font-bold text-[3.3rem] md:text-[6rem] tracking-[0.18em] md:tracking-[35px] leading-[0.85] md:leading-[0.75] mx-auto text-center lg:text-[11rem] lg:tracking-[40px] 2xl:tracking-[70px]">PERSONAL</span> <span class="absolute right-10 top-15 md:right-25 md:top-30 text-2xl md:text-3xl font-bold lg:top-50 lg:right-35 2xl:right-50 3xl:right-75">Carlos Aguilera</span> </h1> <img id="logo"${addAttribute(Logo.src, "src")} alt="Logo Carlos Aguilera Personal Trainer" title="Logo Carlos Aguilera Personal Trainer" width="300" height="300" class="absolute left-0 bottom-20 h-40 w-40 opacity-0 md:opacity-0 md:bottom-50 md:left-50 lg:top-50 lg:left-100 2xl:top-85 2xl:left-110 md:h-[200px] md:w-[200px] lg:h-[200px] lg:w-[200px] 2xl:h-[300px] 2xl:w-[300px] 3xl:left-[610px] z-20 transition-all duration-700" loading="lazy"> </div> </div>  <section class="relative w-full md:mt-30"> <div class="absolute w-full top-0 rotate-[-10deg] md:rotate-[-10deg] flex items-center justify-center overflow-hidden"> <div class="flex flex-row items-center bg-white py-3 md:py-6 px-0 min-w-full gap-3 md:gap-6 shadow-lg mask-r-from-80% mask-r-to-100% mask-l-from-80% mask-l-to-100%"> <div class="flex animate-scroll-left items-center gap-3 md:gap-6 min-w-max"> ${repeatedItems.map((item, i) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate` <h2 class="text-gray-800 font-bold text-xl md:text-4xl"> ${item.label} </h2> <img${addAttribute(Pesas.src, "src")} alt="Icono pesas" title="Pesas" class="h-5 md:h-8" width="32" height="32" loading="lazy"> ` })}`)} </div> </div> </div> <div class="absolute w-full top-0 rotate-[10deg] md:rotate-[8deg] flex items-center justify-center overflow-hidden"> <div class="flex flex-row items-center bg-gray-800 py-3 md:py-6 px-0 min-w-full gap-3 md:gap-6 shadow-lg mask-r-from-80% mask-r-to-100% mask-l-from-80% mask-l-to-100%"> <div class="flex animate-scroll-left items-center gap-3 md:gap-6 min-w-max"> ${repeatedItems.map((item, i) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate` <h2 class="text-white font-bold text-xl md:text-4xl"> ${item.label} </h2> <img${addAttribute(Pesas.src, "src")} alt="Icono pesas" title="Pesas" class="h-5 md:h-8" width="32" height="32" loading="lazy"> ` })}`)} </div> </div> </div> </section>  <div id="controls-carousel" class="relative flex flex-col lg:flex-row w-full mt-40 md:mt-100 lg:mt-120 2xl:hidden" data-carousel="static"> <!-- Carousel wrapper (izquierda en lg+) --> <div class="relative w-full lg:w-1/2 h-100 md:h-200 lg:h-[570px] overflow-hidden rounded-lg"> <!-- Item 1 --> <div class="hidden duration-700 ease-in-out" data-carousel-item> <img${addAttribute(about1.src, "src")} class="absolute inset-0 w-full h-full object-cover object-top" alt="Entrenamiento - imagen superior 1" title="Entrenamiento imagen 1" width="800" height="600" loading="lazy"> </div> <!-- Item 2 --> <div class="hidden duration-700 ease-in-out" data-carousel-item="active"> <img${addAttribute(about2.src, "src")} class="absolute inset-0 w-full h-full object-cover object-top" alt="Entrenamiento - imagen superior 2" title="Entrenamiento imagen 2" width="800" height="600" loading="lazy"> </div> <!-- Slider controls (sobre el carousel) --> <button type="button" class="absolute left-2 top-1/2 z-30 transform -translate-y-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-white/30 hover:bg-white/50 focus:outline-none" data-carousel-prev aria-label="Previous slide"> <svg class="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"></path> </svg> </button> <button type="button" class="absolute right-2 top-1/2 z-30 transform -translate-y-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-white/30 hover:bg-white/50 focus:outline-none" data-carousel-next aria-label="Next slide"> <svg class="w-4 h-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"></path> </svg> </button> </div> <!-- Información (derecha en lg+) --> <div class="w-full lg:w-1/2 text-white pl-0 lg:pl-8 mt-6 lg:mt-0"> <span class="tipografia text-xl md:text-2xl font-bold uppercase text-green-600">Sobre mi</span> <h2 class="right-0 text-2xl md:text-[3rem] font-bold py-4 md:py-6">
Sobre Nosotros
</h2> <p class="text-base md:text-lg">
Entrenador personal certificado con más de años de experiencia ayudando
        a transformar vidas. Mi misión es guiarte a lograr tus objetivos de
        salud y bienestar con planes personalizados, motivación constante y
        resultados reales.
</p> <section class="w-full bg-gray-800 rounded-xl mt-6 md:mt-10 py-6 md:py-10 px-2 md:px-4 flex flex-wrap justify-center gap-4 md:gap-10"> <div class="flex flex-col items-center"> <span class="text-2xl md:text-4xl font-extrabold text-white">+200</span> <span class="text-gray-300 text-sm md:text-lg mt-2">Clientes Satisfechos</span> </div> <div class="flex flex-col items-center"> <span class="text-2xl md:text-4xl font-extrabold text-white">10+</span> <span class="text-gray-300 text-sm md:text-lg mt-2">Años de Experiencia</span> </div> <div class="flex flex-col items-center"> <span class="text-2xl md:text-4xl font-extrabold text-white">50+</span> <span class="text-gray-300 text-sm md:text-lg mt-2">Transformaciones</span> </div> <div class="flex flex-col items-center"> <span class="text-2xl md:text-4xl font-extrabold text-white">100%</span> <span class="text-gray-300 text-sm md:text-lg mt-2">Plan Personalizado</span> </div> <div class="flex flex-col items-center"> <span class="text-2xl md:text-4xl font-extrabold text-white">24/7</span> <span class="text-gray-300 text-sm md:text-lg mt-2">Soporte Online</span> </div> <div class="flex flex-col items-center"> <span class="text-2xl md:text-4xl font-extrabold text-white">+30</span> <span class="text-gray-300 text-sm md:text-lg mt-2">Clases Grupales</span> </div> </section> </div> </div>  <section id="about" class="flex flex-row justify-around items-center mt-110 py-10 gap-16 hidden 2xl:flex"> <picture class="relative flex flex-col w-1/2 max-w-[450px]"> <img${addAttribute(about2.src, "src")} alt="Entrenador personal guiando a cliente" title="Entrenador personal guiando a cliente" class="object-cover h-[600px] w-[400px] 3xl:h-[600px] 3xl:w-full rounded-xl shadow-lg" width="400" height="600" loading="lazy"> <img${addAttribute(about1.src, "src")} alt="Grupo de personas entrenando en gimnasio" title="Grupo de personas entrenando en gimnasio" class="absolute right-[-480px] top-10 object-cover h-[600px] w-[400px] 3xl:h-[600px] 3xl:w-full 3xl:right-[-700px] rounded-xl shadow-lg -translate-x-1/2" width="400" height="600" loading="lazy"> </picture> <div class="w-1/2 max-w-lg text-white text-start mt-0"> <span class="tipografia text-xl md:text-2xl font-bold uppercase text-green-600">Sobre mi</span> <h2 class="right-0 text-2xl md:text-[3rem] font-bold py-4 md:py-6">
Sobre Nosotros
</h2> <p class="text-base md:text-lg">
Entrenador personal certificado con más de años de experiencia ayudando
        a transformar vidas. Mi misión es guiarte a lograr tus objetivos de
        salud y bienestar con planes personalizados, motivación constante y
        resultados reales.
</p> <section class="w-full bg-gray-800 rounded-xl mt-6 md:mt-10 py-6 md:py-10 px-2 md:px-4 flex flex-wrap justify-center gap-4 md:gap-10"> <div class="flex flex-col items-center"> <span class="text-2xl md:text-4xl font-extrabold text-white">+200</span> <span class="text-gray-300 text-sm md:text-lg mt-2">Clientes Satisfechos</span> </div> <div class="flex flex-col items-center"> <span class="text-2xl md:text-4xl font-extrabold text-white">10+</span> <span class="text-gray-300 text-sm md:text-lg mt-2">Años de Experiencia</span> </div> <div class="flex flex-col items-center"> <span class="text-2xl md:text-4xl font-extrabold text-white">50+</span> <span class="text-gray-300 text-sm md:text-lg mt-2">Transformaciones</span> </div> <div class="flex flex-col items-center"> <span class="text-2xl md:text-4xl font-extrabold text-white">100%</span> <span class="text-gray-300 text-sm md:text-lg mt-2">Plan Personalizado</span> </div> <div class="flex flex-col items-center"> <span class="text-2xl md:text-4xl font-extrabold text-white">24/7</span> <span class="text-gray-300 text-sm md:text-lg mt-2">Soporte Online</span> </div> <div class="flex flex-col items-center"> <span class="text-2xl md:text-4xl font-extrabold text-white">+30</span> <span class="text-gray-300 text-sm md:text-lg mt-2">Clases Grupales</span> </div> </section> </div> </section>  <section id="entrenamiento-personalizado" class="mt-20 lg:py-16 text-white"> <div class="container mx-auto px-2 md:px-4 text-center"> <h2 class="tipografia text-2xl md:text-4xl font-bold mb-6 md:mb-12 opacity-0" id="entrenamiento-titulo">
Entrenamientos Personalizados
</h2> <div class="relative inline-block"> <img${addAttribute(Entrenamiento.src, "src")} alt="Modelos de fitness mostrando resultados de entrenamiento" title="Entrenamiento personalizado" class="object-cover h-[700px] w-[95vw] md:h-[600px] md:w-[350px] lg:h-[700px] lg:w-[400px] mx-auto rounded-lg opacity-0" id="entrenamiento-img" width="2228" height="3984" loading="lazy"> <div class="hidden md:block"> <!-- Hombros --> <div class="absolute left-10 md:left-55 top-[10%] lg:left-60 opacity-0" id="entrenamiento-hombros"> <div class="flex items-center space-x-2 md:space-x-4"> <div class="flex items-center"> <div class="w-20 md:w-25 lg:w-40 h-px bg-white border-t-2 border-dashed"></div> <div class="w-3 md:w-4 h-3 md:h-4 bg-lime-400 rounded-full border-2 border-white"></div> </div> <div class="bg-gray-800 bg-opacity-50 p-2 md:p-4 rounded-lg shadow-lg backdrop-blur-sm w-40 md:w-56 text-left"> <h3 class="font-bold text-base md:text-lg text-lime-400">
Hombros (Deltoides)
</h3> <p class="text-xs md:text-sm">
Para tonificar y dar forma: Press militar, elevaciones
                  laterales y pájaros con mancuernas.
</p> </div> </div> </div> <!-- Pectorales --> <div class="absolute right-10 md:right-55 top-[15%] lg:right-65 opacity-0" id="entrenamiento-pectorales"> <div class="flex items-center space-x-2 md:space-x-4 flex-row-reverse"> <div class="flex items-center"> <div class="w-3 md:w-4 h-3 md:h-4 bg-cyan-400 rounded-full border-2 border-white"></div> <div class="w-20 md:w-20 lg:w-40 h-px bg-white border-t-2 border-dashed"></div> </div> <div class="bg-gray-800 bg-opacity-50 p-2 md:p-4 rounded-lg shadow-lg backdrop-blur-sm w-40 md:w-56 text-left"> <h3 class="font-bold text-base md:text-lg text-cyan-400">
Pectorales
</h3> <p class="text-xs md:text-sm">
Ejercicios clave para volumen y definición: Press de banca,
                  aperturas con mancuernas y flexiones.
</p> </div> </div> </div> <!-- Glúteos --> <div class="absolute left-10 md:left-50 bottom-[42%] lg:left-60 lg:bottom-[45%] opacity-0" id="entrenamiento-gluteos"> <div class="flex items-center space-x-2 md:space-x-4"> <div class="flex items-center"> <div class="w-32 md:w-20 lg:w-50 h-px bg-white border-t-2 border-dashed"></div> <div class="w-3 md:w-4 h-3 md:h-4 bg-lime-400 rounded-full border-2 border-white"></div> </div> <div class="bg-gray-800 bg-opacity-50 p-2 md:p-4 rounded-lg shadow-lg backdrop-blur-sm w-40 md:w-56 text-left"> <h3 class="font-bold text-base md:text-lg text-lime-400">
Glúteos
</h3> <p class="text-xs md:text-sm">
Fortalece y levanta con: Sentadillas, hip thrust y zancadas
                  (lunges).
</p> </div> </div> </div> <!-- Pantorrillas --> <div class="absolute right-20 md:right-47 top-[70%] lg:right-55 opacity-0" id="entrenamiento-pantorrillas"> <div class="flex items-center space-x-2 md:space-x-4 flex-row-reverse"> <div class="flex items-center"> <div class="w-3 md:w-4 h-3 md:h-4 bg-cyan-400 rounded-full border-2 border-white"></div> <div class="w-32 md:w-25 lg:w-40 h-px bg-white border-t-2 border-dashed"></div> </div> <div class="bg-gray-800 bg-opacity-50 p-2 md:p-4 rounded-lg shadow-lg backdrop-blur-sm w-40 md:w-56 text-left"> <h3 class="font-bold text-base md:text-lg text-cyan-400">
Pantorrillas (Gemelos)
</h3> <p class="text-xs md:text-sm">
Para fuerza y definición en las piernas: Elevaciones de
                  talones (de pie o sentado) y saltos de caja (box jumps).
</p> </div> </div> </div> </div> <!-- Popover visible solo en movil para la seleccion de musculo --> <!-- Boton pectorales --> <button data-popover-target="popover-pectorales" data-popover-trigger="click" type="button" class="absolute top-40 left-25 w-6 h-6 bg-cyan-400 rounded-full border-2 border-white md:hidden inline-flex size-3"> <span class="inline-flex h-full w-full animate-ping rounded-full bg-sky-600 opacity-75"></span> </button> <div data-popover id="popover-pectorales" role="tooltip" class="absolute z-10 invisible inline-block w-64 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-xs opacity-0 dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800"> <div class="px-3 py-2 bg-gray-100 border-b border-gray-200 rounded-t-lg dark:border-gray-600 dark:bg-gray-700"> <h3 class="font-semibold text-gray-900 dark:text-white">
Pectorales
</h3> </div> <div class="px-3 py-2"> <p>
Ejercicios clave para volumen y definición: Press de banca,
              aperturas con mancuernas y flexiones.
</p> </div> <div data-popper-arrow></div> </div> <!-- Boton hombros --> <button data-popover-target="popover-hombros" data-popover-trigger="click" type="button" class="absolute top-36 right-34 w-6 h-6 bg-lime-400 rounded-full border-2 border-white md:hidden inline-flex size-3"> <span class="inline-flex h-full w-full animate-ping rounded-full bg-sky-600 opacity-75"></span> </button> <div data-popover id="popover-hombros" role="tooltip" class="absolute z-10 invisible inline-block w-64 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-xs opacity-0 dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800"> <div class="px-3 py-2 bg-gray-100 border-b border-gray-200 rounded-t-lg dark:border-gray-600 dark:bg-gray-700"> <h3 class="font-semibold text-gray-900 dark:text-white">
Hombros (Deltoides)
</h3> </div> <div class="px-3 py-2"> <p>
Para tonificar y dar forma: Press militar, elevaciones laterales y
              pájaros con mancuernas.
</p> </div> <div data-popper-arrow></div> </div> <!-- Boton gluteos --> <button data-popover-target="popover-gluteos" data-popover-trigger="click" type="button" class="absolute bottom-93 right-37 w-6 h-6 bg-lime-400 rounded-full border-2 border-white md:hidden inline-flex size-3"> <span class="inline-flex h-full w-full animate-ping rounded-full bg-sky-600 opacity-75"></span> </button> <div data-popover id="popover-gluteos" role="tooltip" class="absolute z-10 invisible inline-block w-64 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-xs opacity-0 dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800"> <div class="px-3 py-2 bg-gray-100 border-b border-gray-200 rounded-t-lg dark:border-gray-600 dark:bg-gray-700"> <h3 class="font-semibold text-gray-900 dark:text-white">Glúteos</h3> </div> <div class="px-3 py-2"> <p>
Fortalece y levanta con: Sentadillas, hip thrust y zancadas
              (lunges).
</p> </div> <div data-popper-arrow></div> </div> <!-- Boton pantorrillas --> <button data-popover-target="popover-pantorrillas" data-popover-trigger="click" type="button" class="absolute bottom-35 left-37 w-6 h-6 bg-cyan-400 rounded-full border-2 border-white md:hidden inline-flex size-3"> <span class="inline-flex h-full w-full animate-ping rounded-full bg-sky-600 opacity-75"></span> </button> <div data-popover id="popover-pantorrillas" role="tooltip" class="absolute z-10 invisible inline-block w-64 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-xs opacity-0 dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800"> <div class="px-3 py-2 bg-gray-100 border-b border-gray-200 rounded-t-lg dark:border-gray-600 dark:bg-gray-700"> <h3 class="font-semibold text-gray-900 dark:text-white">
Pantorrillas (Gemelos)
</h3> </div> <div class="px-3 py-2"> <p>
Para fuerza y definición en las piernas: Elevaciones de talones
              (de pie o sentado) y saltos de caja (box jumps).
</p> </div> <div data-popper-arrow></div> </div> </div> </div> </section>  <div data-dial-init class="fixed end-6 bottom-6 group z-50"> <div id="speed-dial-menu-default" class="flex flex-col items-center hidden mb-4 space-y-6"> <!-- Botón WhatsApp --> <a href="https://w.app/carlosaguileramusculacionyfitness" target="_blank" rel="noopener noreferrer" class="flex justify-center items-center w-[70px] h-[70px] text-green-500 hover:text-green-700 shadow-xs hover:hover:scale-125 transition-transform delay-100" aria-label="WhatsApp"> <!-- SVG WhatsApp desde iconos.min.svg --> <svg class="size-40"> <use xlink:href="/assets/iconos.min.svg#whatsapp"></use> </svg> </a> <!-- Botón Instagram --> <a href="https://www.instagram.com/carlos_sant_ag?igsh=MWpocGdiaHpwYmQ4OQ==" target="_blank" rel="noopener noreferrer" class="flex justify-center items-center w-[70px] h-[70px] text-pink-500 hover:text-pink-700 shadow-xs hover:hover:scale-125 transition-transform delay-100" aria-label="Instagram"> <!-- SVG Instagram desde iconos.min.svg --> <svg class="size-30"> <use xlink:href="/assets/iconos.min.svg#instagram"></use> </svg> </a> </div> <button type="button" data-dial-toggle="speed-dial-menu-default" aria-controls="speed-dial-menu-default" aria-expanded="false" class="flex items-center justify-center text-white bg-blue-700 rounded-full w-15 h-15 md:h-20 md:w-20 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-800"> <svg class="w-5 h-5 md:w-8 md:h-8 transition-transform group-hover:rotate-45" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"></path> </svg> <span class="sr-only">Open actions menu</span> </button> </div> ` }), renderScript($$result, "C:/Users/Santi/Personal-Trainer/src/pages/index.astro?astro&type=script&index=0&lang.ts"));
}, "C:/Users/Santi/Personal-Trainer/src/pages/index.astro", void 0);

const $$file = "C:/Users/Santi/Personal-Trainer/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
