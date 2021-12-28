const changeCount = document.querySelector(".count-box h2");
const prevBtn = document.querySelector(".decrease-btn");
const nextBtn = document.querySelector(".increase-btn");
const resetBtn = document.querySelector(".reset-btn");

let count = 0;

prevBtn.onclick = () => {
  if (count > 0) count--;
  changeCount.textContent = count;
};

nextBtn.onclick = () => {
  count++;
  changeCount.textContent = count;
};

resetBtn.onclick = () => {
  count = 0;
  changeCount.textContent = 0;
};
