$(document).ready(function () {
	showBoxes(5)
	// Opcion incorrecta (A)
	$('.openModal').on('click', () => {
		errorSound()
		handleSaveCorrectQuestion(5, false)
		$(".mal1").css("display", "block");

		setTimeout(() => {
			$('.modal').fadeIn()
		}, 1000)
	})
	// Cerrar modal y redireccionar
	$('.closeModal').on('click', () => {
		handleChangeView(586)
	})

	// Opcion incorrecta (B)
	$('.openModal1').on('click', () => {
		errorSound()
		handleSaveCorrectQuestion(5, false)
		$(".mal1").css("display", "block");

		setTimeout(() => {
			$('.modal1').fadeIn()
		}, 1000)
	})
	// Cerrar modal y redireccionar
	$('.closeModal1').on('click', () => {
		handleChangeView(586)
	})

	// Opcion incorrecta (D)
	$('.openModal2').on('click', () => {
		errorSound()
		handleSaveCorrectQuestion(5, false)
		$(".mal1").css("display", "block");

		setTimeout(() => {
			$('.modal2').fadeIn()
		}, 1000)
	})
	// Cerrar modal y redireccionar
	$('.closeModal2').on('click', () => {
		handleChangeView(586)
	})

	// Cerrar modal y redireccionar
	$('.closeModal3').on('click', () => {
		handleChangeView(586)
	})

	// Seleccion de la respuesta correcta
	$('.opcion').on('click', () => {
		handleSaveCorrectQuestion(5, true)
		$(".chulo1").css("display", "block");
		boxSound();
		const responses = JSON.parse(localStorage.getItem("responses"))
		if (responses[4][4]) {
			$('.modal3').fadeIn()
			$('.modal3 img').attr('src', './imagenes/paso3.jpg')
		} else {
			$('.modal3').fadeIn()
		}
	})
})
