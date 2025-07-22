function mostrarDato() {
  const datos = [
    "¡Puedes estar con un pie en el hemisferio norte y otro en el sur al mismo tiempo!",
    "La línea equinoccial no pasa exactamente por el monumento, sino a unos 240 metros.",
    "En este lugar, los antiguos pueblos indígenas ya sabían del equinoccio antes de la llegada de los europeos.",
    "Aquí puedes ver cómo el agua gira en sentidos opuestos dependiendo del lado de la línea."
  ];

  const indice = Math.floor(Math.random() * datos.length);
  document.getElementById("dato").innerText = datos[indice];
}
