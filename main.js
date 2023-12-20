const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabs = $$(".menu__order");
const panes = $$(".tab-pane")

let tabActive = $(".menu__order.menu-active");

const line = $(".menu__list-order .line");

tabs.forEach((tab, index) => {
  const pane = panes[index];
  tab.onclick = function () {
    if (tabActive) {
      tabActive.classList.remove("menu-active");

    }
    $(".tab-pane.menu-active").classList.remove("menu-active")
    tabActive = this;

    line.style.left = tabActive.offsetLeft + "px";
    line.style.width = tabActive.offsetWidth + "px";


    tabActive.classList.add("menu-active");
    pane.classList.add("menu-active");
  };
});


function NumberBookTableGuest1() {
  const DecreaseBtn = document.querySelector(".book__decor2");
  const numberBook = document.querySelector('.book__stat2');

  DecreaseBtn.onclick = function () {
    let currentValue = Number(numberBook.innerText);
    numberBook.innerText = currentValue - 1;
    if (numberBook.innerText <= 1) {
      numberBook.innerText = 1;
    }
  };
}

function NumberBookTableGuest2() {
  const DecreaseBtn = document.querySelector(".book__decor3");
  const numberBook = document.querySelector('.book__stat2');

  DecreaseBtn.onclick = function () {
    let currentValue = Number(numberBook.innerText);
    numberBook.innerText = currentValue + 1;
  };
}



function popularStart() {

  const colorList = document.querySelectorAll(".fill-color");
  colorList.forEach((color, index) => {
    color.onclick = function () {
      for (let i = 0; i <= index; i++) {
        colorList[i].style.fill = "#fb8f2c";
      }
      if (index >= 3.) {
        showSuccessToast();
      } else {
        showErrorToast();
      }
    }
  });
}

popularStart();



