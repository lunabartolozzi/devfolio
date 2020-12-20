$(document).ready(function () {
  const checkboxes = document.getElementsByName("checkbox");
  const arrayCheckboxes = Array.from(checkboxes);
  const isTrue = arrayCheckboxes.some(
    (element) => localStorage.getItem(element.id) == "true"
  );
  if (isTrue) {
    Swal.fire({
      title: "Queres continuar con tu presupuesto anterior?",
      showDenyButton: true,
      confirmButtonText: `Si`,
      denyButtonText: `No`,
      customClass: {
        confirmButton: "order-2",
        denyButton: "order-3",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        for (var checkbox of checkboxes) {
          let obtenerValor = localStorage.getItem(checkbox.id);
          if (obtenerValor == "true") {
            checkbox.checked = true;
          }
        }
      } else if (result.isDenied) {
        localStorage.clear();
      }
    });
  }

  // $.getJSON(
  //   "https://raw.githubusercontent.com/lunabartolozzi/devfolio/master/archivo.json",
  //   function (data) {
  //     // var arrayDatos = data.filter((objeto) => objeto.checkbox == checkbox);

  //     $.each(data, function (id, objeto) {
  //       $("#checkbox-container").prepend(
  //         `<div class="checkbox-wrapper">
  //         <input
  //             class="checkbox"
  //             type="checkbox"
  //             id="checkbox` +
  //           id +
  //           `"
  //           name="checkbox"
  //           /> <label class="label" for="checkbox` +
  //           id +
  //           `">
  //             ` +
  //           objeto.checkbox +
  //           `
  //           </label>
  //         </div>`
  //       );
  //     });
  //   }
  // );
  $(".checkbox").change(function () {
    let idCheckbox = $(this).attr("id");
    let valorCheckbox = $(this).is(":checked");
    localStorage.setItem(idCheckbox, valorCheckbox);
  });
});
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
  presupuesto.precioTotal = 0;

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
  if ($(".content-text-info").css("display") === "none") {
    $(".content-text-info").show();
  } else {
    $(".content-text-info").hide();
  }
});
