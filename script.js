function toggleAnswer(element) {
	const answer = element.nextElementSibling;
	if (answer.style.maxHeight) {
		console.log(element.firstChild.nextElementSibling);
		element.firstChild.nextElementSibling.style.color = "#71727A";
		answer.style.maxHeight = null; // Скрыть ответ
	} else {
		element.firstChild.nextElementSibling.style.color = "#977AD2";
		console.log(element.firstChild.nextElementSibling);

		answer.style.maxHeight = answer.scrollHeight + "px"; // Установить максимальную высоту равной высоте содержимого
	}
	element.classList.toggle("open");
}

function toggleMenuMobile(element) {
	const answer = element.nextElementSibling;
	if (answer.style.maxHeight) {
		console.log(element.firstChild.nextElementSibling);
		answer.style.maxHeight = null; // Скрыть ответ
	} else {
		console.log(element.firstChild.nextElementSibling);

		answer.style.maxHeight = answer.scrollHeight + "px"; // Установить максимальную высоту равной высоте содержимого
	}
	element.classList.toggle("open");
}

document.addEventListener("DOMContentLoaded", function () {
	// ham menu
	const hamMenu = document.querySelector(".ham-menu");
	const offScreenMenu = document.querySelector(".off-screen-menu");
	hamMenu.addEventListener("click", () => {
		hamMenu.classList.toggle("active");
		offScreenMenu.classList.toggle("active");
		document.body.classList.toggle("active");
	});

	// form modal
	const Modal = document.querySelector(".modal");
	const openModalBtn = document.querySelectorAll(".openModal");
	const closeModalBtn = document.querySelector(".closeModal");
	openModalBtn.forEach((element) => {
		element.addEventListener("click", () => {
			Modal.classList.add("open");
		});
	});
	closeModalBtn.addEventListener("click", () => {
		Modal.classList.remove("open");
	});
});
