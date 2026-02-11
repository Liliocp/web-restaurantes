import { obtenerCategoria } from "./filtros.js";
import { API_KEY } from "./api_key.js";


const API_URL =
  "https://corsproxy.io/?https://places.googleapis.com/v1/places:searchNearby";

async function obtenerRestaurantes({
  types = ["restaurant"],
  lat = 21.5042,
  lng = -104.895,
  radius = 3000, 
} = {}) {

  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Goog-Api-Key": API_KEY,
      "X-Goog-FieldMask": "places.id,places.displayName,places.formattedAddress,places.types,places.location",
    },
    body: JSON.stringify({
      includedTypes: types,
      maxResultCount: 20,
      locationRestriction: {
        circle: {
          center: { latitude: lat, longitude: lng },
          radius,
        },
      },
    }),
  });
  
  if(!response.ok){
    throw new Error("Error al obtener los restaurantes")
  }

  const data = await response.json();

  return data.places || [];
}

function adaptarPlaces(places) {
  return places.map((p) => ({
    id: p.id,
    nombre: p.displayName?.text || "Sin nombre",
    direccion: p.formattedAddress || "dirección no disponible",
    categoria: obtenerCategoria(p.types) || "Restaurante",
    descripcion: "Información disponible en Google Maps",
    imagen: "/img/Tepic.png",
    horario: "ver en google maps",
    telefono: "no disponible",
    correo: "no disponible",
    lat: p.location?.latitude,
    lng: p.location?.longitude,
  }));
}

export async function obtenerRestaurantesAPI(config = {}) {
  const places = await obtenerRestaurantes(config);
  return adaptarPlaces(places);
  
}




