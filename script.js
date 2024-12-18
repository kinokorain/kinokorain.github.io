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

function setMailInput(element) {
  const biggerLabel = element.parentNode;
  const oldInput = document.querySelector("#lets-work-input");
  const input = document.querySelector("#lets-work-input-mail");
  const otherInput = document.querySelector("#lets-work-input-phone");
  input.value = "";
  input.style = "display:initial";
  oldInput.style = "display:none";
  otherInput.style = "display:none";
  const otherLabel = biggerLabel.querySelector(".input-select-num");
  element.classList.toggle("hidden");
  if (otherLabel.classList.contains("hidden")) {
    otherLabel.classList.toggle("hidden");
  }
  biggerLabel.classList.add("active");
  input.setAttribute("placeholder", "your@email.ru");
  input.setAttribute("type", "mail");
  input.focus();
}

function setNumInput(element) {
  const biggerLabel = element.parentNode;
  const oldInput = document.querySelector("#lets-work-input");
  const input = document.querySelector("#lets-work-input-phone");
  const otherInput = document.querySelector("#lets-work-input-mail");

  input.value = "";
  input.style = "display:initial";
  oldInput.style = "display:none";
  otherInput.style = "display:none";

  const otherLabel = biggerLabel.querySelector(".input-select-mail");
  element.classList.toggle("hidden");
  if (otherLabel.classList.contains("hidden")) {
    otherLabel.classList.toggle("hidden");
  }
  biggerLabel.classList.add("active");
  input.setAttribute("placeholder", "+_ (___) ___-__-__");
  input.setAttribute("type", "tel");
  input.focus();
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
    element.classList.toggle("accent-color");
    answer.style.maxHeight = null; // Скрыть ответ
  } else {
    console.log(element.nextElementSibling);
    paragraphs.forEach((paragraph) => {
      paragraph.style.maxHeight = null;
    });
    headings.forEach((heading) => {
      if (heading.classList.contains("accent-color")) {
        heading.classList.toggle("accent-color");
      }
    });
    element.classList.toggle("accent-color");
    answer.style.maxHeight = answer.scrollHeight + "px"; // Установить максимальную высоту равной высоте содержимого
  }
}

// phone input
// const phoneInput = document.querySelector("#lets-work-input");

// phoneInput.addEventListener("input", function (e) {
//   // Удаляем все нецифровые символы
//   let value = this.value.replace(/D/g, "");

//   // Форматируем номер
//   let formattedValue = "+7 ";
// });

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

  // brief modal
  const BriefModal = document.querySelector(".brief-modal");
  const openBriefModalBtn = document.querySelectorAll(".openBriefModal");
  const closeBriefModalBtn = document.querySelector(".closeBriefModal");
  openBriefModalBtn.forEach((element) => {
    element.addEventListener("click", () => {
      BriefModal.classList.add("open");
    });
  });
  closeBriefModalBtn.addEventListener("click", () => {
    BriefModal.classList.remove("open");
  });

  // parallax statue effect
  const parallax = document.querySelector(".track-mouse");
  const frontLayer = document.querySelector(".front-layer");
  const backLayer = document.querySelector(".back-layer");
  console.log(parallax, frontLayer, backLayer);
  // sensitivity for both layers
  const sFront = 250;
  const sBack = 400;
  var x = 0;
  var y = 0;

  parallax.addEventListener("mouseenter", (e) => {
    // alert("haiii");
  });

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
