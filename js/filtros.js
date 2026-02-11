export const categoriasPag = {
  bar: "Bar",
  cafe: "Cafetería",
  coffee_shop: "Cafetería",
  japanese_restaurant: "Japonés",
  mexican_restaurant: "Mexicana",
  italian_restaurant: "Italiana",
  fast_food_restaurant: "Comida Rápida",
  seafood_restaurant: "Mariscos",
  steak_house: "Cortes",
  breakfast_restaurant: "Desayunos",
  bakery: "Postres",
  dessert_shop: "Postres",
};

export function obtenerCategoria(types = []) {
  for (const tipo of types) {
    if (categoriasPag[tipo]) {
      return categoriasPag[tipo];
    }
  }
  return null;
}

export function filtrarCategoria(restaurantes, categoria) {
  return restaurantes.filter((r) => {
    const categoriaRestaurante = obtenerCategoria(r.types);
    return categoriaRestaurante === categoria;
  });
}

// export function filtrarRecomendados() {
//   return todosLosRestaurantes.filter((r) => r.recomendado === true);
// }

export function filtrarBusqueda(restaurantes, texto) {
  return restaurantes.filter(
    (r) =>
      r.nombre.toLowerCase().includes(texto.toLowerCase()) ||
      r.categoria.toLowerCase().includes(texto.toLowerCase()) ||
      r.direccion.toLowerCase().includes(texto.toLowerCase()),
  );
}

// function mostrarRecomendados(restaurantes) {
//   crearCards(restaurantes);
// }

// mostrarRecomendados();

export function buscador(restaurantes) {
  const input = document.getElementById("search");

  if (!input) return;

  input.addEventListener("input", (e) => {
    const texto = e.target.value.trim();

    if (texto === "") {
      document.dispatchEvent(
        new CustomEvent("buscar", { detail: restaurantes }),
      );
    } else {
      document.dispatchEvent(
        new CustomEvent("buscar", {
          detail: filtrarBusqueda(restaurantes, texto),
        }),
      );
    }
  });
}
