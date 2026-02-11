export function crearCards(restaurantes) {
  const container = document.querySelector(".cards");
  container.innerHTML = "";

  restaurantes.forEach((r) => {
    // console.log("Pintando:", r.nombre);
    const card = document.createElement("article");
    card.className = "card";

    card.innerHTML = `
      <figure class = "card-img">
      <img src="${r.imagen}" alt="${r.nombre}">
      </figure>
      
      <div class="card-content">
          <h3 class="card-title">${r.nombre}</h3>
          <span class="card-category">${r.categoria}</span>
          <p class="card-description">
            ${r.descripcion}
          </p>
        </div>

        <div class="line"></div>

        <div class="card-location">
          
          <span class="location">
            <i class="fa-solid fa-location-dot fa-1x" aria-hidden="true"></i>${r.direccion}</span>
          <span class="horario"><i class="fa-solid fa-clock fa-1x"></i>${r.horario}</span>
        </div>`;

    card.addEventListener("click", () => abrirModal(r));

    container.appendChild(card);
  });
}

const modal = document.getElementById("modal");
console.log("modal:", modal);


export function abrirModal(r) {
  document.getElementById("modalImg").src = r.imagen;
  document.getElementById("modalNombre").textContent = r.nombre;
  document.getElementById("modalCategoria").textContent = r.categoria;
  document.getElementById("modalDescripcion").textContent = r.descripcion;
  document.getElementById("modalDireccion").textContent = r.direccion;
  document.getElementById("modalHorario").textContent = r.horario;
  document.getElementById("modalTelefono").textContent = r.telefono;
  document.getElementById("modalCorreo").textContent = r.correo;

  modal.classList.add("active");
}

function cerrarModal() {
  modal.classList.remove("active");
}

 document.getElementById("cerrarModal").addEventListener("click", cerrarModal);


 modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      cerrarModal();
    }
  });

  document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        cerrarModal();
      }
    });