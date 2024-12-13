$(document).ready(function () {
	localStorage.setItem("responses", JSON.stringify([]))
	showBoxes()
	// Opcion incorrecta (A)
	$('.openModal').on('click', () => {
		errorSound();
		$(".mal").css("display", "block");
		handleSaveCorrectQuestion(0, false)

		setTimeout(() => {
			$('.modal').fadeIn();
		}, 1000)
	})
	// Cerrar modal y redireccionar
	$('.closeModal').on('click', () => {
		handleChangeView(581);
	})

	// Opcion incorrecta (B)
	$('.openModal1').on('click', () => {
		errorSound();
		$(".mal").css("display", "block");
		handleSaveCorrectQuestion(0, false)

		setTimeout(() => {
			$('.modal1').fadeIn();
		}, 1000)
	})
	// Cerrar modal y redireccionar
	$('.closeModal1').on('click', () => {
		handleChangeView(581);
	})

	// Opcion incorrecta (D)
	$('.openModal2').on('click', () => {
		errorSound();
		$(".mal").css("display", "block");
		handleSaveCorrectQuestion(0, false)

		setTimeout(() => {
			$('.modal2').fadeIn();
		}, 1000)
	})
	// Cerrar modal y redireccionar
	$('.closeModal2').on('click', () => {
		handleChangeView(581);
	})

	// Opcion incorrecta (D)
	$('.openModal3').on('click', () => {
		boxSound()
		$(".mal").css("display", "block");
		handleSaveCorrectQuestion(0, false)

		setTimeout(() => {
			$('.modal3').fadeIn();
		}, 1000)
	})
	// Cerrar modal y redireccionar
	$('.closeModal3').on('click', () => {
		handleChangeView(581);
	})

	// Seleccion de la respuesta correcta
	$(".opcion").on("click", () => {
		boxSound();
		handleSaveCorrectQuestion(0, true)
		$(".chulo").css("display", "block");

		$(".modal3").fadeIn()
	})
})
