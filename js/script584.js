$(document).ready(function () {
	showBoxes()
	// Opcion incorrecta (A)
	$('.openModal').on('click', () => {
		errorSound();
		handleSaveCorrectQuestion(4, false)
		$(".mal").css("display", "block");

		setTimeout(() => {
			$('.modal').fadeIn();
		}, 1000)
	})
	// Cerrar modal y redireccionar
	$('.closeModal').on('click', () => {
		handleChangeView(585);
	})

	// Opcion incorrecta (B)
	$('.openModal1').on('click', () => {
		errorSound();
		handleSaveCorrectQuestion(4, false)
		$(".mal").css("display", "block");

		setTimeout(() => {
			$('.modal1').fadeIn();
		}, 1000)
	})
	// Cerrar modal y redireccionar
	$('.closeModal1').on('click', () => {
		handleChangeView(585);
	})

	// Opcion incorrecta (D)
	$('.openModal2').on('click', () => {
		errorSound();
		handleSaveCorrectQuestion(4, false)
		$(".mal").css("display", "block");

		setTimeout(() => {
			$('.modal2').fadeIn();
		}, 1000)
	})
	// Cerrar modal y redireccionar
	$('.closeModal2').on('click', () => {
		handleChangeView(585);
	})
	
	// Cerrar modal y redireccionar
	$('.closeModal3').on('click', () => {
		handleChangeView(585);
	})

	// Seleccion de la respuesta correcta
	$(".opcion").on("click", () => {
		boxSound();
		handleSaveCorrectQuestion(4, true)
		$(".chulo").css("display", "block");

		$(".modal3").fadeIn()
	})
})
