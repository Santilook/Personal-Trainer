import 'dotenv/config';
import nodemailer from 'nodemailer';
export { renderers } from '../../renderers.mjs';

const prerender = false;
console.log("EMAIL_USER:", process.env.EMAIL_USER);
console.log("EMAIL_PASS:", process.env.EMAIL_PASS ? "Cargada" : "Falta");
const POST = async ({ request }) => {
  try {
    const { nombre, email, mensaje } = await request.json();
    if (!nombre?.trim() || !email?.trim() || !mensaje?.trim()) {
      return new Response(
        JSON.stringify({ error: "Todos los campos son obligatorios" }),
        { status: 400 }
      );
    }
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });
    await transporter.sendMail({
      from: `"${nombre}" <${email}>`,
      to: process.env.EMAIL_USER,
      subject: "Nuevo mensaje desde formulario de contacto",
      text: mensaje
    });
    return new Response(
      JSON.stringify({ message: "Mensaje enviado correctamente" }),
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ error: "Error al enviar el mensaje" }),
      { status: 500 }
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
