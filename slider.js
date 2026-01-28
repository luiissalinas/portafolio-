// Slider testimonios
const testimonials = document.querySelectorAll('.testimonial');
let index = 0;

function show(i) {
  testimonials.forEach(t => t.classList.remove('active'));
  testimonials[i].classList.add('active');
}

document.getElementById('next').addEventListener('click', () => {
  index = (index + 1) % testimonials.length;
  show(index);
});

document.getElementById('prev').addEventListener('click', () => {
  index = (index - 1 + testimonials.length) % testimonials.length;
  show(index);
});

setInterval(() => {
  index = (index + 1) % testimonials.length;
  show(index);
}, 6000);

// Formulario a WhatsApp
document.getElementById('quoteForm').addEventListener('submit', e => {
  e.preventDefault();

  // Declarar las variables correctamente
  const nombre = document.getElementById('name').value;
  const correo = document.getElementById('email').value;
  const proyecto = document.getElementById('project').value;
  const detalles = document.getElementById('details').value;
  const presupuesto = document.getElementById('budget').value;

  const msg = `Hola, quiero una cotización:
Nombre: ${nombre}
Email: ${correo}
Proyecto: ${proyecto}
Detalles: ${detalles}
Presupuesto: ${presupuesto}`;

  window.open(
    `https://wa.me/529511271872?text=${encodeURIComponent(msg)}`, // Cambié el placeholder por tu número real que está en el HTML
    '_blank'
  );
});
