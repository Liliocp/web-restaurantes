import { buscador } from "./filtros.js";
import { obtenerRestaurantesAPI } from "./api.js";
import { crearCards } from "./card_modal.js";
import { filtrarCategoria } from "./filtros.js";

let restaurantes = [];

document.addEventListener("DOMContentLoaded", async () => {
  try {
    restaurantes = await obtenerRestaurantesAPI();
   
    crearCards(restaurantes);

    buscador(restaurantes);

    document.querySelectorAll("[data-category]").forEach((btn) => {
      btn.addEventListener("click", () => {
        // console.log("Total restaurantes:", restaurantes.length);

        const categoria = btn.dataset.category;

        console.log("categoria clikceada", categoria);
         console.log("categorias reales", restaurantes.map(r => r.categoria));

        if (categoria === "Todos") {
          crearCards(restaurantes);
          return;
        }

        
        const filtrados = restaurantes.filter(r => r.categoria === categoria);

        console.log("filtrados", filtrados)

        crearCards(filtrados);
    });
  });
  
  } catch (error) {
    console.error("error al iniciar la app:", error);
  }
  // todosLosRestaurantes = await obtenerRestaurantesAPI();
  // const recomendados = filtrarRecomendados(todosLosRestaurantes);
  // crearCards(recomendados);
  // buscador(todosLosRestaurantes);
});

document.addEventListener("buscar", (e) => {
  crearCards(e.detail);
});
