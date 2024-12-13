$(document).ready(function () {
	showBoxes(7)
	// Opcion incorrecta (A)
	$('.openModal').on('click', () => {
		errorSound();
		handleSaveCorrectQuestion(7, false)
		$(".mal1").css("display", "block");

		setTimeout(() => {
			$('.modal').fadeIn();
		}, 1000)
	})
	// Cerrar modal y redireccionar
	$('.closeModal').on('click', () => {
		handleChangeView(588);
	})

	// Opcion incorrecta (B)
	$('.openModal1').on('click', () => {
		errorSound();
		handleSaveCorrectQuestion(7, false)
		$(".mal1").css("display", "block");

		setTimeout(() => {
			$('.modal1').fadeIn();
		}, 1000)
	})
	// Cerrar modal y redireccionar
	$('.closeModal1').on('click', () => {
		handleChangeView(588);
	})

	// Opcion incorrecta (D)
	$('.openModal2').on('click', () => {
		errorSound();
		handleSaveCorrectQuestion(7, false)
		$(".mal1").css("display", "block");

		setTimeout(() => {
			$('.modal2').fadeIn();
		}, 1000)
	})
	// Cerrar modal y redireccionar
	$('.closeModal2').on('click', () => {
		handleChangeView(588);
	})

	// Cerrar modal y redireccionar
	$('.closeModal3').on('click', () => {
		handleChangeView(588);
	})

	// Seleccion de la respuesta correcta
	$(".opcion").on("click", () => {
		handleSaveCorrectQuestion(7, true)
		$(".chulo1").css("display", "block");
		boxSound();
		const responses = JSON.parse(localStorage.getItem("responses"))
		if (responses[6][6]) {
			$('.modal3').fadeIn()
			$('.modal3 img').attr('src', './imagenes/paso4.jpg')
		} else {
			$('.modal3').fadeIn()
		}
	})
})
