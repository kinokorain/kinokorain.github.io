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
    answer.style.maxHeight = null; // Скрыть ответ
  } else {
    answer.style.maxHeight = answer.scrollHeight + "px"; // Установить максимальную высоту равной высоте содержимого
  }
  element.classList.toggle("open");
}

// price expand effect
function priceExpand(card) {
  const content = card.querySelector(".price-content");
  content.style.maxHeight = content.scrollHeight + "px"; // Установить максимальную высоту равной высоте содержимого
}
function priceHide(card) {
  const content = card.querySelector(".price-content");
  content.style.maxHeight = null; // Установить максимальную высоту равной высоте содержимого
}

function toggleDevStage(element) {
  const paragraphs = document.querySelectorAll(".dev-stage-p");
  const headings = document.querySelectorAll(".dev-stage-h3");
  const answer = element.nextElementSibling;
  if (answer.style.maxHeight) {
    console.log(answer);
    element.style.color = "#71727A";
    answer.style.maxHeight = null; // Скрыть ответ
  } else {
    console.log(element.nextElementSibling);
    paragraphs.forEach((paragraph) => {
      paragraph.style.maxHeight = null;
    });
    headings.forEach((heading) => {
      heading.style.color = "#71727A";
    });
    element.style.color = "#977AD2";
    answer.style.maxHeight = answer.scrollHeight + "px"; // Установить максимальную высоту равной высоте содержимого
  }
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

  // parallax statue effect
  const parallax = document.querySelector(".statue-parallax");
  const frontLayer = document.querySelector(".front-layer");
  const backLayer = document.querySelector(".back-layer");
  console.log(parallax, frontLayer, backLayer);
  // sensitivity for both layers
  const sFront = 250;
  const sBack = 400;
  var x = 0;
  var y = 0;

  parallax.addEventListener("mousemove", (e) => {
    x = e.clientX;
    y = e.clientY;

    frontLayer.style.transform = `
		translate(
			${-x / sFront}%,
			0
		)`;

    backLayer.style.transform = `
		translate(
			${-x / sBack}%,
			0
		)`;
  });
});
