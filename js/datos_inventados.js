let todosLosRestaurantes = [
  {
    id: 1,
    nombre: "Miel cafetería",
    recomendado: true,
    direccion: "Calle 1",
    ciudad: "MiCiudad",
    lat: 19.43,
    lng: -99.13,
    categoria: "Cafeterias",
    descripcion: "Café artesanal con pan recién horneado.",
    horario: "08:00 am",
    imagen: "/img/miel-coffe.jpg",
    telefono: 3112223344,
    correo: "mielcoffe@gmail.com",
  },
  {
    id: 2,
    nombre: "Bar Azteca",
    direccion: "Calle 2",
    ciudad: "MiCiudad",
    lat: 19.44,
    lng: -99.12,
    recomendado: false,
    categoria: "Bar",
    descripcion: "Bebidas tradicionales y música en vivo.",
    horario: "06:00 pm",
    imagen: "/img/bar-azteca.jpg",
    telefono: 3112223344,
    correo: "aztecabar@gmail.com",
  },
  {
    id: 3,
    nombre: "Desayunitos Mexicanos",
    direccion: "Calle 3",
    ciudad: "MiCiudad",
    lat: 19.45,
    lng: -99.11,
    recomendado: true,
    categoria: "Desayunos",
    descripcion: "Chilaquiles, café de olla y pan dulce.",
    horario: "07:00 am",
    imagen: "/img/desayunos-mexicanos.jpg",
    telefono: 3112223344,
    correo: "desayunosmexicanos@gmail.com",
  },
  {
    id: 4,
    nombre: "Mariscos super tuna",
    direccion: "Calle 4",
    ciudad: "MiCiudad",
    lat: 19.46,
    lng: -99.1,
    recomendado: false,
    categoria: "Mariscos",
    descripcion: "Mariscos frescos del día y bebidas refrescantes",
    horario: "12:00 pm",
    imagen: "/img/super-tuna.jpg",
    telefono: 3112223344,
    correo: "supertuna@gmail.com",
  },
  {
    id: 5,
    nombre: "Super tacos",
    direccion: "Calle 5",
    ciudad: "MiCiudad",
    lat: 19.47,
    lng: -99.09,
    recomendado: false,
    categoria: "Tacos",
    descripcion: "Recomendados para una cena express.",
    horario: "08:00 am",
    imagen: "/img/miel-coffe.jpg",
    telefono: 3112223344,
    correo: "supertacos@gmail.com",
  },
  {
    id: 6,
    nombre: "Hyōgo",
    categoria: "Japonés",
    descripcion: "Comida japonesa excelente.",
    recomendado: true,
    direccion: "Cd. Del Valle",
    horario: "01:30pm",
    ciudad: "MiCiudad",
    lat: 19,
    lng: -23,
    imagen: "/img/hyogo.jpg",
    telefono: 3112223344,
    correo: "hyogorestaurant@gmail.com",
  },
  {
    id: 7,
    nombre: "Loma 42",
    categoria: "Mexicana italiana",
    descripcion: "Opción apta para veganos.",
    recomendado: true,
    direccion: "Loma",
    horario: "01:30pm",
    ciudad: "MiCiudad",
    lat: 17,
    lng: -13,
    imagen: "/img/loma-42-tepic.jpg",
    telefono: 3112223344,
    correo: "loma42restaurant@gmail.com",
  },
  {
    id: 8,
    nombre: "La Gloria",
    categoria: "Bar",
    descripcion: "Lindo ambiente con vista al centro de Tepic.",
    recomendado: true,
    direccion: "Av. México Norte 212",
    horario: "07:30am",
    ciudad: "MiCiudad",
    lat: 25,
    lng: -23,
    imagen: "/img/la-gloria.jpg",
    telefono: 3112223344,
    correo: "barlagloria@gmail.com",
  },
];

const USAR_API = true; 

async function cargarRestaurantes() {
  let data;

  if(USAR_API){
    data = await obtenerRestaurantesAPI();
  }else{
    data = filtrarRecomendados();
  }

  crearCards(data);
}

function mostrarTodos() {
  return todosLosRestaurantes;
}

function conectarBotones() {
  const botones = document.querySelectorAll(".category");

  botones.forEach((btn) => {
    btn.addEventListener("click", () => {
      const categoria = btn.dataset.category;

      console.log("categoria clickeada:", categoria);
      if (categoria === "Todos") {
        crearCards(mostrarTodos());
      } else {
        crearCards(filtrarCategoria(categoria));
      }
    });
  });
}