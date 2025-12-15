// Category active state (UI only)
const buttons = document.querySelectorAll(".categories button");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    buttons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
  });
});

