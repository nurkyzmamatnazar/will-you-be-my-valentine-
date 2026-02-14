const yesBtn = document.getElementById("yesBtn");
const noBtn  = document.getElementById("noBtn");
const noPh   = document.getElementById("noPh");

function showPlaceholder(){
  const rect = noBtn.getBoundingClientRect();
  noPh.style.display = "inline-block";
  noPh.style.width = rect.width + "px";
  noPh.style.height = rect.height + "px";
}

function hidePlaceholder(){
  noPh.style.display = "none";
  noPh.style.width = "0";
  noPh.style.height = "0";
}

// “NO THANK YOU” убегает
function moveNoButton(){
  const padding = 12;
  const vw = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  const vh = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

  // ВАЖНО: сначала замерили размер, потом показали заглушку
  showPlaceholder();

  const rect = noBtn.getBoundingClientRect();

  noBtn.style.position = "fixed";
  noBtn.style.zIndex = 999;

  const maxX = vw - rect.width - padding;
  const maxY = vh - rect.height - padding;

  const x = Math.floor(Math.random() * (maxX - padding + 1)) + padding;
  const y = Math.floor(Math.random() * (maxY - padding + 1)) + padding;

  noBtn.style.left = x + "px";
  noBtn.style.top  = y + "px";
}

noBtn.addEventListener("mouseenter", moveNoButton);
noBtn.addEventListener("click", (e) => {
  e.preventDefault();
  moveNoButton();
});

// Нажали “YES OF COURSE”
yesBtn.addEventListener("click", () => {
  // вернуть кнопку “NO THANK YOU” на место
  noBtn.style.position = "";
  noBtn.style.left = "";
  noBtn.style.top  = "";
  noBtn.style.zIndex = "";

  hidePlaceholder();
});




  yesBtn.addEventListener("click", () => {
    window.location.href = "yes.html";
  });


  const modal = document.getElementById("letterModal");
const openLetter = document.getElementById("openLetter");
const closeLetter = document.getElementById("closeLetter");
const letterResult = document.getElementById("letterResult");

openLetter?.addEventListener("click", () => {
  modal.classList.add("show");
  modal.setAttribute("aria-hidden", "false");
});

closeLetter?.addEventListener("click", () => {
  modal.classList.remove("show");
  modal.setAttribute("aria-hidden", "true");
});

modal?.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("show");
    modal.setAttribute("aria-hidden", "true");
  }
});

document.querySelectorAll(".letter-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    letterResult.textContent = btn.dataset.msg;
  });
});

