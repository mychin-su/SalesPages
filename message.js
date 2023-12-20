function showSuccessToast() {
  toast({
    title: "Thank You Very Much!!!",
    message: "Wishing you a mouthwatering feast!",
    type: "success",
    duration: 1000
  });
}

function showErrorToast() {
  toast({
    title: "We are very sorry for not satisfying you",
    message: "Please accept my apologies for the lack of deliciousness in the food",
    type: "error",
    duration: 1000
  });
}

function toast({
  title = "",
  message = "",
  type = "success",
  duration = 1000,
}) {
  const main = document.querySelector("#toast");
  if (main) {
    const toast = document.createElement("div");

    // Auto remove toast
    const autoRemoveId = setTimeout(function () {
      main.removeChild(toast)
    }, 1000);

    toast.onclick = function (e) {
      if (e.target.closest(".toast__close")) {
        main.removeChild(toast);
        clearTimeout(autoRemoveId)
      }
    }

    const icons = {
      success: "fas fa-check-circle",
      info: "fas fa-info-circle",
      warning: "fas fa-exclamation-circle",
      error: "fas fa-exclamation-circle"
    }
    const icon = icons[type];
    const delay = (duration / 1000).toFixed(2);

    toast.classList.add("toast", `toast--${type}`);
    toast.style.animation = `slideInLeft ease .3s, fadeOut linear 1s ${delay}s forwards`;

    toast.innerHTML = `
                    <div class="toast__icon">
                        <i class="${icon}"></i>
                    </div>
                    <div class="toast__body">
                        <h3 class="toast__title">${title}</h3>
                        <p class="toast__msg">${message}</p>
                    </div>
                    <div class="toast__close">
                        <i class="fas fa-times"></i>
                    </div>
                `;
    // Add toast on main
    main.appendChild(toast);
  }
}

