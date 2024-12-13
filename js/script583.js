$(document).ready(function () {
	showBoxes(3)
	// Opcion incorrecta (A)
	$('.openModal').on('click', () => {
		errorSound();
		$(".mal1").css("display", "block");
		handleSaveCorrectQuestion(3, false)

		setTimeout(() => {
			$('.modal').fadeIn();
		}, 1000)
	})
	// Cerrar modal y redireccionar
	$('.closeModal').on('click', () => {
		handleChangeView(584);
	})

	// Opcion incorrecta (B)
	$('.openModal1').on('click', () => {
		errorSound();
		$(".mal1").css("display", "block");
		handleSaveCorrectQuestion(3, false)

		setTimeout(() => {
			$('.modal1').fadeIn();
		}, 1000)
	})
	// Cerrar modal y redireccionar
	$('.closeModal1').on('click', () => {
		handleChangeView(584);
	})

	// Opcion incorrecta (D)
	$('.openModal2').on('click', () => {
		errorSound();
		$(".mal1").css("display", "block");
		handleSaveCorrectQuestion(3, false)

		setTimeout(() => {
			$('.modal2').fadeIn();
		}, 1000)
	})
	// Cerrar modal y redireccionar
	$('.closeModal2').on('click', () => {
		handleChangeView(584);
	})

	// Cerrar modal y redireccionar
	$('.closeModal3').on('click', () => {
		handleChangeView(584);
	})

	// Seleccion de la respuesta correcta
	$(".opcion").on("click", () => {
		handleSaveCorrectQuestion(3, true)
		$(".chulo1").css("display", "block");
		boxSound();
		const responses = JSON.parse(localStorage.getItem("responses"))
		if (responses[2][2]) {
			$('.modal3').fadeIn()
			$('.modal3 img').attr('src', './imagenes/paso2.jpg')
		} else {
			$('.modal3').fadeIn()
		}
	})
})
