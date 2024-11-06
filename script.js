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

document.addEventListener("DOMContentLoaded", function () {
	const hamMenu = document.querySelector(".ham-menu");
	const offScreenMenu = document.querySelector(".off-screen-menu");
	hamMenu.addEventListener("click", () => {
		hamMenu.classList.toggle("active");
		offScreenMenu.classList.toggle("active");
		document.body.classList.toggle("active");
	});
});
