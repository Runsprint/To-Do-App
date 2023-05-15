let input = document.getElementById("add_text") as HTMLInputElement;
let div = document.getElementById("ul") as HTMLElement;
let all = document.getElementById("all") as HTMLButtonElement;
let active = document.getElementById("active") as HTMLButtonElement;
let complited = document.getElementById("complited") as HTMLButtonElement;
let boxWrapper = document.getElementById("box-wrapper") as HTMLElement;
let checkBox = document.getElementsByClassName("checkbox") as HTMLCollection;

input.addEventListener("keydown", (event: any) => {
  if (event.key == "Enter" && event.target.value != "") {
    boxWrapper.innerHTML += `
      <div class="box"> 
        <input type="checkbox" class="checkbox" id="checkbox" />
        <span class="custom_checkbox" id="custom_checkbox"></span>
        <p>${event.target.value}</p>
        <img src=".././images/icon-cross.svg">
      </div>
    `;

    for (let element of boxWrapper.children) {
      element.firstElementChild?.addEventListener("click", () => {
        element.classList.add("check");
      });
    }
  }
});
