let input = document.getElementById("add_text") as HTMLInputElement;
let div = document.getElementById("ul") as HTMLElement;
let all = document.getElementById("all") as HTMLButtonElement;
let active = document.getElementById("active") as HTMLButtonElement;
let completed = document.querySelector("#completed") as HTMLElement;
let boxWrapper = document.getElementById("box-wrapper") as HTMLElement;
let items = document.getElementById("items") as HTMLElement;
let items_left = document.getElementById("items_left") as HTMLElement;
let clear = document.getElementById("clear") as HTMLElement;
let textArray: string[] = []; //local storage, set and get items. json.stringify, tringad gadavakcev json.parse.

let sun = document.getElementById("sun");
let moon = document.getElementById("moon");

if (moon !== null && sun !== null) {
  moon.addEventListener("click", () => {
    sun.style.display = "flex";
    moon.style.display = "none";
  });

  sun.addEventListener("click", () => {
    sun.style.display = "none";
    moon.style.display = "flex";
  });
}

input.addEventListener("keydown", (event: KeyboardEvent) => {
  if (
    event.key === "Enter" &&
    (event.target as HTMLInputElement).value !== ""
  ) {
    textArray.push((event.target as HTMLInputElement).value);

    const newDiv = document.createElement("div");
    newDiv.classList.add("box");
    newDiv.id = "divId";
    boxWrapper.prepend(newDiv);

    // newDiv.draggable = true;
    // newDiv.addEventListener("dragstart", drag);
    // newDiv.addEventListener("dragend", drag);
    // boxWrapper.addEventListener("dragover", allowDrop);
    // boxWrapper.addEventListener("drop", drop);

    // let targetEllement: null | HTMLElement = null;
    // function drag(event: DragEvent) {
    //   targetEllement = event.target as HTMLElement;
    //   if (event.dataTransfer) {
    //     event.dataTransfer.setData("div", targetEllement.id);
    //   }
    // }

    // function allowDrop(event: DragEvent) {
    //   event.preventDefault();
    // }

    // function drop(event: DragEvent) {
    //   event.preventDefault();
    //   const data = event.dataTransfer?.getData("div");
    //   const draggedElement = document.getElementById(data!);

    //   if (draggedElement && boxWrapper) {
    //     boxWrapper.appendChild(draggedElement);
    //   }
    // }

    let checkBox = document.createElement("input");
    checkBox.classList.add("checkbox");
    checkBox.type = "checkbox";
    newDiv.append(checkBox);
    newDiv.classList.add("newDiv");

    let custom_checkbox = document.createElement("span");
    checkBox.classList.add("custom_checkbox");
    newDiv.append(custom_checkbox);

    let p = document.createElement("p");
    p.innerHTML = (event.target as HTMLInputElement).value;
    newDiv.append(p);
    p.classList.add("p");

    var img = new Image();
    img.src = "./images/icon-cross.svg";
    newDiv.append(img);
    img.classList.add("img");

    img.addEventListener("click", () => {
      let counter = boxWrapper.children.length;
      newDiv.remove();
      counter--;
      items_left.innerHTML = counter + "ragac warwera";
      if (p.textContent !== null) {
        let index = textArray.indexOf(p.textContent);
        textArray.splice(index, 1);
      }
    });

    items_left.innerHTML = textArray.length + "ragac warwera";
    if (textArray.length > 0) {
      items.style.display = "flex";
    } else {
      items.style.display = "none";
    }

    let cross_img = document.getElementById("cross_img");
    cross_img?.addEventListener("click", () => {});

    for (let element of boxWrapper.children) {
      element.firstElementChild?.addEventListener("click", () => {
        element.classList.add("check");
      });
    }
  }
});

completed.addEventListener("click", () => {
  let counter = 0;
  for (let element of boxWrapper.children) {
    if (element.classList[1] !== "check") {
      element.classList.add("hide");
    } else if (element.classList[1] === "check") {
      element.classList.remove("hide");
      counter++;
    }
  }
  items_left.innerHTML = counter + "ragac warwera";
});

active.addEventListener("click", () => {
  let counter = 0;
  for (let element of boxWrapper.children) {
    if (element.classList[1] === "check") {
      element.classList.add("hide");
    } else {
      element.classList.remove("hide");
      counter++;
    }
  }
  items_left.innerHTML = counter + "ragac warwera";
});

all.addEventListener("click", () => {
  for (let element of boxWrapper.children) {
    if (element.classList[1] !== null) {
      element.classList.remove("hide");
    }
  }
  items_left.innerHTML = textArray.length + "ragac warwera";
});

clear.addEventListener("click", () => {
  let counter = boxWrapper.children.length;
  for (let element of boxWrapper.children) {
    if (element.classList[1] === "check") {
      let removeElement = element.children[2].textContent;
      if (removeElement !== null) {
        let index = textArray.indexOf(removeElement); // find index in textarray of removeelement
        textArray.splice(index, 1); // splice, is delete function and have index, from -till (which elements delete)
      }
      element.remove();
      counter--;
    }
  }

  items_left.innerHTML = counter + "ragac warwera";
});
