const counterValue = document.querySelector('.counter--js');
const addButton = document.querySelector('.add--js');
const subtractButton = document.querySelector('.subtract--js');
const historyPage = document.querySelector('.historyPage--js');
const historyButton = document.querySelector('.history--js')

let glasses = 0;

const key = new Date().toISOString().slice(0,10);



if (localStorage.getItem(key)){
    glasses = parseInt(localStorage.getItem(key))
}
function iterateLocalStorage() {
  if (!historyPage) return; 
  historyPage.innerHTML = '';

  const sortedKeys = Object.keys(localStorage).sort().reverse();

  sortedKeys.forEach(key => {
      const value = localStorage.getItem(key);
      const element = `<div class="text-xl border-b-2 border-white">${key} : Wypito ${value}</div>`;
      historyPage.insertAdjacentHTML("beforeend", element);
  });}

const setCounterValue = (value)=>{
    counterValue.innerHTML= value;
    localStorage.setItem(key, value);
    iterateLocalStorage();
}
setCounterValue(glasses)

addButton.addEventListener('click',()=>{
    glasses = glasses + 1;
    setCounterValue(glasses);
})

subtractButton.addEventListener('click',()=>{
    if (glasses>= 1){
    glasses = glasses - 1;
    setCounterValue(glasses);
    }
})

historyButton.addEventListener('click', () => {
    historyPage.classList.toggle("hidden");
  });