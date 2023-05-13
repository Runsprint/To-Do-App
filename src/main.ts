let input = document.getElementById("add_text") as HTMLInputElement;
let div = document.getElementById("ul") as HTMLElement;
let all = document.getElementById("all") as HTMLButtonElement;
let active = document.getElementById("active") as HTMLButtonElement;
let complited = document.getElementById("complited") as HTMLButtonElement;
let boxWrapper = document.getElementById("box-wrapper") as HTMLElement;

input.addEventListener("keydown", (event: any) => {
  if (event.key == "Enter" && event.target.value != "") {
    let image = document.createElement("img") as HTMLImageElement;
    image.src = ".././images/icon-cross.svg";

    let checkBox = document.createElement("input") as HTMLInputElement;
    let custom_checkbox = document.createElement("span") as HTMLSpanElement;
    checkBox.type = "checkbox";

    let value = event.target.value;
    const box = document.createElement("div");
    box.classList.add("box");
    boxWrapper.appendChild(box);
    box.appendChild(checkBox);
    box.appendChild(custom_checkbox);
    const pTag = document.createElement("p");
    pTag.innerText = value;
    box.appendChild(pTag);
    event.target.value = "";
    box.appendChild(image);
    box.style.marginTop = "20px";
  }
});
