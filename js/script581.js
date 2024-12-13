$(document).ready(function () {

	showBoxes(1)
	// Opcion incorrecta (A)
	$('.openModal').on('click', () => {
		errorSound();
		handleSaveCorrectQuestion(1, false)
		$(".mal1").css("display", "block");
		

		setTimeout(() => {
			$('.modal').fadeIn();
		}, 1000)
	})
	// Cerrar modal y redireccionar
	$('.closeModal').on('click', () => {
		handleChangeView(582);
	})

	// Opcion incorrecta (B)
	$('.openModal1').on('click', () => {
		errorSound();
		$(".mal1").css("display", "block");
		handleSaveCorrectQuestion(1, false)

		setTimeout(() => {
			$('.modal1').fadeIn();
		}, 1000)
	})
	// Cerrar modal y redireccionar
	$('.closeModal1').on('click', () => {
		handleChangeView(582);
	})

	// Opcion incorrecta (D)
	$('.openModal2').on('click', () => {
		errorSound();
		$(".mal1").css("display", "block");
		handleSaveCorrectQuestion(1, false)

		setTimeout(() => {
			$('.modal2').fadeIn();
		}, 1000)
	})
	// Cerrar modal y redireccionar
	$('.closeModal2').on('click', () => {
		handleChangeView(582);
	})

	// Opcion incorrecta (D)
	$('.openModal3').on('click', () => {
		boxSound()
		$(".mal").css("display", "block");
		handleSaveCorrectQuestion(1, false)

		setTimeout(() => {
			$('.modal3').fadeIn();
		}, 1000)
	})
	// Cerrar modal y redireccionar
	$('.closeModal3').on('click', () => {
		handleChangeView(582);
	})

	// Seleccion de la respuesta correcta
	$(".opcion").on("click", () => {
		handleSaveCorrectQuestion(1, true)
		$(".chulo1").css("display", "block");
		boxSound();
		const responses = JSON.parse(localStorage.getItem("responses"))
		if (responses[0][0]) {
			$('.modal3').fadeIn()
			$('.modal3 img').attr('src', './imagenes/paso1.jpg')
		} else {
			$('.modal3').fadeIn()
		}
	})
})
