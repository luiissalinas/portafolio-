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

  const msg = `
Hola, quiero una cotización:
Nombre: ${name.value}
Email: ${email.value}
Proyecto: ${project.value}
Detalles: ${details.value}
Presupuesto: ${budget.value}
`;

  window.open(
    `https://wa.me/521XXXXXXXXXX?text=${encodeURIComponent(msg)}`,
    '_blank'
  );
});
