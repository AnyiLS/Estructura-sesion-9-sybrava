$(document).ready(function () {
	showBoxes(9);
	$('.openModal').on('click', () => {
		errorSound();
		$(".mal1").css("display", "block");
		handleSaveCorrectQuestion(9, false)

		setTimeout(() => {
			$('.modal').fadeIn();
		}, 1000)
	})
	// cerra modal
	$('.closeModal').on('click', () => {
		setTimeout(() => {
			handleCheckResults()
		}, 2000)
	})

	// modal 1
	$('.openModal1').on('click', () => {
		errorSound();
		$(".mal").css("display", "block");

		setTimeout(() => {
			$('.modal1').fadeIn();
		}, 1000)
	})
	// cerra modal
	$('.closeModal1').on('click', () => {
		setTimeout(() => {
			handleCheckResults()
		}, 2000)
	})

	// modal 2
	$('.openModal2').on('click', () => {
		errorSound();
		$(".mal").css("display", "block");

		setTimeout(() => {
			$('.modal2').fadeIn();
		}, 1000)
	})
	// cerra modal
	$('.closeModal2').on('click', () => {
		setTimeout(() => {
			handleCheckResults()
		}, 2000)
	})

	// cerra modal
	$('.closeModal3').on('click', () => {
		setTimeout(() => {
			handleCheckResults()
		}, 2000)
	})
	
	// Seleccion de la respuesta correcta
	$(".opcion").on("click", () => {
		handleSaveCorrectQuestion(9, true)
		$(".chulo1").css("display", "block");
		boxSound();
		const responses = JSON.parse(localStorage.getItem("responses"))
		if (responses[8][8]) {
			$('.modal3').fadeIn()
			$('.modal3 img').attr('src', './imagenes/paso5.jpg')
		} else {
			$('.modal3').fadeIn()
		}
	})
})
