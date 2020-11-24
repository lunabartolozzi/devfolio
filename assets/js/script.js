const precios = [
  100,
  200,
  300,
  400,
  500,
  600,
  700,
  800,
  100,
  100,
  100,
  100,
  100,
  100,
  100,
  100,
  100,
  100,
];

const presupuesto = {
  precioTotal: 0,
};

function obtenerPresupuesto() {
  var checkboxes = document.getElementsByName("checkbox");
  var posicion = 0;
  for (var checkbox of checkboxes) {
    if (checkbox.checked) {
      presupuesto.precioTotal = presupuesto.precioTotal + precios[posicion];
    }
    posicion++;
  }
  document.getElementById("precio").innerHTML = presupuesto.precioTotal;

  if (sessionStorage.email != undefined) {
    document.getElementById("datos").innerHTML =
      "Email: " + sessionStorage.email;
  } else {
    document.getElementById("datos").innerHTML = "No has introducido tu email";
  }
}

function guardarDatos() {
  sessionStorage.email = document.getElementById("email").value;
}


$("#boton").click(function () {
  nombreProyecto = prompt("Ingresa el nombre de tu proyecto");
  alert("Muchas gracias por su pedido " + nombreProyecto);
  localStorage.setItem("#boton", nombreProyecto);
  console.log(nombreProyecto);
});

$(".button-info").click(function () {
if ($('.content-text-info').css('display') === "none") {
    $('.content-text-info').show()
  } else {
    $('.content-text-info').hide()
  }
});

