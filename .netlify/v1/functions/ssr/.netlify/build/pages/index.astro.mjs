import { c as createComponent, r as renderTemplate, m as maybeRenderHead, f as addAttribute, d as createAstro, i as renderComponent, j as renderSlot, k as renderHead, l as renderScript, n as Fragment } from '../chunks/astro/server_BwMlYeBJ.mjs';
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
  return renderTemplate`${maybeRenderHead()}<nav class="fixed absolute w-full z-20 top-0 left-0 border-gray-200 bg-white/30 backdrop-blur-md dark:bg-gray-900/30 dark:border-gray-600"> <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"> <a href="#hero-section" class="flex items-center space-x-3 rtl:space-x-reverse"> <img${addAttribute(LogoGym.src, "src")} class="h-10 w-10 bg-white rounded-full" alt="Flowbite Logo"> <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Fitness</span> </a> <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse"> <a href="https://w.app/carlosaguileramusculacionyfitness" target="_blank" rel="noopener noreferrer"> <button type="button" class="text-white bg-[#40602F] hover:scale-105 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center cursor-pointer uppercase">Inicia tu cambio!</button> </a> <button data-collapse-toggle="navbar-cta" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false"> <span class="sr-only">Open main menu</span> <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"></path> </svg> </button> </div> <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta"> <ul class="flex flex-col font-medium p-4 md:p-0 mt-4  rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 "> <li> <a href="#" class="block py-2 px-3 md:p-0 text-white rounded-sm md:bg-transparent md:hover:text-[#679E57]" aria-current="page">Inicio</a> </li> <li> <a href="#about" class="block py-2 px-3 md:p-0 text-white rounded-sm hover:text-[#679E57]">Acerca de</a> </li> <li> <a href="#entrenamiento-personalizado" class="block py-2 px-3 md:p-0 text-white rounded-sm hover:text-[#679E57]">Entrenamientos</a> </li> <li> <a href="#contacto" class="block py-2 px-3 md:p-0 text-white rounded-sm hover:text-[#679E57]">Contacto</a> </li> </ul> </div> </div> </nav>`;
}, "C:/Users/Santi/Personal-Trainer/src/components/Navbar.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link href="https://cdn.jsdelivr.net/npm/flowbite@3.1.2/dist/flowbite.min.css" rel="stylesheet"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Anton&family=Bebas+Neue&family=Bitcount+Grid+Double:wght@100..900&family=Bungee&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"><meta name="generator"', "><title>Astro Basics</title>", "</head> <body> ", " ", " ", ' <script src="https://cdn.jsdelivr.net/npm/flowbite@3.1.2/dist/flowbite.min.js"><\/script> </body> </html> '])), addAttribute(Astro2.generator, "content"), renderHead(), renderComponent($$result, "Navbar", $$Navbar, {}), renderSlot($$result, $$slots["default"]), renderComponent($$result, "ContactForm", $$ContactForm, {}));
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

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const items = [{ label: "Training" }, { label: "Fitness Sports" }];
  const repeat = 7;
  const repeatedItems = Array.from({ length: repeat }).flatMap(() => items);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div id="hero-section" class="relative"> <img${addAttribute(Entrenador.src, "src")} alt="asd" class="h-[100vh] w-full object-cover opacity-25 mask-b-from-80% mask-b-to-100%"> <div class="text-white flex justify-center items-center my-40 absolute inset-0"> <h1 class="flex flex-col"> <span class="text-3xl">Entrenador</span><span class="titulo-dos uppercase text-[12rem] tracking-[80px] ml-10 font-bold">Personal</span><span class="text-3xl text-end">Carlos Aguilera</span> </h1> <img id="logo"${addAttribute(Logo.src, "src")} alt="Logo" class="absolute left-[2000px] bottom-[40px] h-[250px] w-[250px] scale-112 opacity-0"> </div> </div>  <section class="relative w-full mt-30"> <div class="absolute w-full top-0 rotate-[-10deg] flex items-center justify-center overflow-hidden"> <div class="flex flex-row items-center bg-white py-6 px-0 min-w-full gap-6 shadow-lg mask-r-from-80% mask-r-to-100% mask-l-from-80% mask-l-to-100%"> <div class="flex animate-scroll-left items-center gap-6 min-w-max"> ${repeatedItems.map((item, i) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate` <h2 class="text-gray-800 font-bold text-4xl">${item.label}</h2> <img${addAttribute(Pesas.src, "src")} alt="Pesas" class="h-8"> ` })}`)} </div> </div> </div> <div class="absolute w-full top-0 rotate-[8deg] flex items-center justify-center overflow-hidden"> <div class="flex flex-row items-center bg-gray-800 py-6 px-0 min-w-full gap-6 shadow-lg mask-r-from-80% mask-r-to-100% mask-l-from-80% mask-l-to-100%"> <div class="flex animate-scroll-left items-center gap-6 min-w-max"> ${repeatedItems.map((item, i) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate` <h2 class="text-white font-bold text-4xl">${item.label}</h2> <img${addAttribute(Pesas.src, "src")} alt="Pesas" class="h-8"> ` })}`)} </div> </div> </div> </section>  <section id="about" class="flex justify-around mt-90 py-30"> <picture class="relative flex flex-col"> <img${addAttribute(about2.src, "src")} alt="About Us 1" class="object-cover h-[600px] w-[390px]"> <img${addAttribute(about1.src, "src")} alt="About Us 2" class="absolute left-[420px] top-20 object-cover h-[600px] w-[390px]"> </picture> <div class="max-w-lg text-white text-start"> <span class="tipografia text-2xl font-bold uppercase text-green-600">Sobre mi</span> <h2 class="right-0 text-[3rem] font-bold py-6">Sobre Nosotros</h2> <p class="text-lg">
Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
        maiores. Necessitatibus commodi, aspernatur libero doloremque illo amet,
        labore ad cum alias minus delectus. Voluptate debitis ducimus impedit
        aut neque odit aspernatur? Quibusdam voluptates eaque tenetur saepe
        ratione omnis perspiciatis vero?.
</p> <section class="w-full bg-gray-800 rounded-xl mt-10 py-10 px-4 flex flex-wrap justify-center gap-10"> <div class="flex flex-col items-center"> <span class="text-4xl font-extrabold text-white">+200</span> <span class="text-gray-300 text-lg mt-2">Clientes Satisfechos</span> </div> <div class="flex flex-col items-center"> <span class="text-4xl font-extrabold text-white">10+</span> <span class="text-gray-300 text-lg mt-2">Años de Experiencia</span> </div> <div class="flex flex-col items-center"> <span class="text-4xl font-extrabold text-white">50+</span> <span class="text-gray-300 text-lg mt-2">Transformaciones</span> </div> <div class="flex flex-col items-center"> <span class="text-4xl font-extrabold text-white">100%</span> <span class="text-gray-300 text-lg mt-2">Plan Personalizado</span> </div> <div class="flex flex-col items-center"> <span class="text-4xl font-extrabold text-white">24/7</span> <span class="text-gray-300 text-lg mt-2">Soporte Online</span> </div> <div class="flex flex-col items-center"> <span class="text-4xl font-extrabold text-white">+30</span> <span class="text-gray-300 text-lg mt-2">Clases Grupales</span> </div> </section> </div> </section>  <section id="entrenamiento-personalizado" class="py-16 text-white"> <div class="container mx-auto px-4 text-center"> <h2 class="tipografia text-3xl md:text-4xl font-bold mb-12 opacity-0" id="entrenamiento-titulo">
Entrenamiento Personalizado
</h2> <div class="relative inline-block"> <img${addAttribute(Entrenamiento.src, "src")} alt="Modelos de fitness" class="object-cover h-[680px] w-[390px] mx-auto rounded-lg opacity-0" id="entrenamiento-img"> <div class="hidden md:block"> <!-- Hombros --> <div class="absolute left-60 top-[10%] opacity-0" id="entrenamiento-hombros"> <div class="flex items-center space-x-4"> <div class="flex items-center"> <div class="w-50 h-px bg-white border-t-2 border-dashed"></div> <div class="w-4 h-4 bg-lime-400 rounded-full border-2 border-white"></div> </div> <div class="bg-gray-800 bg-opacity-50 p-4 rounded-lg shadow-lg backdrop-blur-sm w-56 text-left"> <h3 class="font-bold text-lg text-lime-400">Hombros (Deltoides)</h3> <p class="text-sm">Para tonificar y dar forma: Press militar, elevaciones laterales y pájaros con mancuernas.</p> </div> </div> </div> <!-- Pectorales --> <div class="absolute right-65 top-[15%] opacity-0" id="entrenamiento-pectorales"> <div class="flex items-center space-x-4 flex-row-reverse"> <div class="flex items-center"> <div class="w-4 h-4 bg-cyan-400 rounded-full border-2 border-white"></div> <div class="w-50 h-px bg-white border-t-2 border-dashed"></div> </div> <div class="bg-gray-800 bg-opacity-50 p-4 rounded-lg shadow-lg backdrop-blur-sm w-56 text-left"> <h3 class="font-bold text-lg text-cyan-400">Pectorales</h3> <p class="text-sm">Ejercicios clave para volumen y definición: Press de banca, aperturas con mancuernas y flexiones.</p> </div> </div> </div> <!-- Glúteos --> <div class="absolute left-55 bottom-[45%] opacity-0" id="entrenamiento-gluteos"> <div class="flex items-center space-x-4"> <div class="flex items-center"> <div class="w-80 h-px bg-white border-t-2 border-dashed"></div> <div class="w-4 h-4 bg-lime-400 rounded-full border-2 border-white"></div> </div> <div class="bg-gray-800 bg-opacity-50 p-4 rounded-lg shadow-lg backdrop-blur-sm w-56 text-left"> <h3 class="font-bold text-lg text-lime-400">Glúteos</h3> <p class="text-sm">Fortalece y levanta con: Sentadillas, hip thrust y zancadas (lunges).</p> </div> </div> </div> <!-- Pantorrillas --> <div class="absolute right-55 top-[70%] opacity-0" id="entrenamiento-pantorrillas"> <div class="flex items-center space-x-4 flex-row-reverse"> <div class="flex items-center"> <div class="w-4 h-4 bg-cyan-400 rounded-full border-2 border-white"></div> <div class="w-70 h-px bg-white border-t-2 border-dashed"></div> </div> <div class="bg-gray-800 bg-opacity-50 p-4 rounded-lg shadow-lg backdrop-blur-sm w-56 text-left"> <h3 class="font-bold text-lg text-cyan-400">Pantorrillas (Gemelos)</h3> <p class="text-sm">Para fuerza y definición en las piernas: Elevaciones de talones (de pie o sentado) y saltos de caja (box jumps).</p> </div> </div> </div> </div> </div> </div> </section> <a href="https://w.app/carlosaguileramusculacionyfitness" target="_blank"><svg class="fixed right-[-140px] bottom-[-140px] size-100 cursor-pointer hover:scale-110 transition-transform duration-300" viewBox="0 0 1440 320"> <use xlink:href="/assets/iconos.min.svg#whatsapp"></use> </svg></a> ${renderScript($$result2, "C:/Users/Santi/Personal-Trainer/src/pages/index.astro?astro&type=script&index=0&lang.ts")} ` })}`;
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
