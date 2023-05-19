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
let body = document.getElementById("body") as HTMLElement;
let sun = document.getElementById("sun") as HTMLImageElement;
let moon = document.getElementById("moon") as HTMLImageElement;
let addEvents = document.getElementById("add-events") as HTMLElement;
let background_img = document.getElementById("background_img") as HTMLElement;

input.addEventListener("keydown", (event: KeyboardEvent) => {
  if (
    event.key === "Enter" &&
    (event.target as HTMLInputElement).value !== ""
  ) {
    textArray.push((event.target as HTMLInputElement).value);
    //create div function
    const newDiv = document.createElement("div");
    newDiv.classList.add("box");
    newDiv.id = "divId";
    boxWrapper.prepend(newDiv);
    //its for forEach
    box = document.querySelectorAll(".box");
    //start drag and drop function
    newDiv.draggable = true; // if we want srtart drag, element is daggable
    let targetEllement: null | HTMLElement = null; //before drug element, its null
    newDiv.addEventListener("dragstart", () => {
      targetEllement = newDiv; // target = this element, which I touch and start drag
    });

    // function drag(event: DragEvent) {
    //   targetEllement = event.target as HTMLElement;
    //   if (event.dataTransfer) {
    //     event.dataTransfer.setData("div", targetEllement.id);
    //   }
    // }

    newDiv.addEventListener("dragend", () => {
      targetEllement = null; // we stop touching(dragging) and thats why targetelement is null
    });

    boxWrapper.addEventListener("dragover", dragOver); // gadatareba , moving of element
    function dragOver(event: DragEvent) {
      event.preventDefault(); // avoid refresh or something
    }

    boxWrapper.addEventListener("drop", drop);

    function drop(event: DragEvent) {
      event.preventDefault();

      if (!targetEllement) {
        return;
      }
      if ((event.target as HTMLElement).classList.contains("newDiv")) {
        boxWrapper.insertBefore(targetEllement, event.target as HTMLElement);
        console.log("rame");
      }
    }
    //created elements into div
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
    //delete function when clicke cross img
    img.addEventListener("click", () => {
      let counter = boxWrapper.children.length;
      newDiv.remove();
      counter--;
      items_left.innerHTML = counter + "items left";
      if (p.textContent !== null) {
        let index = textArray.indexOf(p.textContent);
        textArray.splice(index, 1);
      }
    });

    items_left.innerHTML = textArray.length + " items left";
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
//clear active and comptited functions
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
// moon and sun functions
let box: any; // box is null and after in input.addeventlistener is get quarysellector mnishvnelobas and after when we click onmoon it already is array and changing ackground
moon.addEventListener("click", () => {
  sun.style.display = "flex";
  moon.style.display = "none";
  body.style.backgroundColor = "black";
  addEvents.style.backgroundColor = "rgb(19, 20, 53";
  addEvents.style.color = "#ffffff";
  input.style.backgroundColor = " rgb(19, 20, 53";
  input.style.color = "#ffffff";
  div.style.backgroundColor = "rgb(19, 20, 53";
  div.style.color = "#ffffff";
  items.style.backgroundColor = "rgb(19, 20, 53";
  items.style.color = "#ffffff";
  background_img.style.backgroundImage = "url('./images/bg-desktop-dark.jpg')";
  if (box !== null) {
    box.forEach((element: any) => {
      element.style.backgroundColor = "rgb(19, 20, 53";
      element.style.color = "#ffffff";
    });
  }
});

sun.addEventListener("click", () => {
  sun.style.display = "none";
  moon.style.display = "flex";
  body.style.backgroundColor = "grey";
  addEvents.style.backgroundColor = "#ffffff";
  addEvents.style.color = "grey";
  input.style.backgroundColor = "#ffffff";
  input.style.color = "grey";
  div.style.backgroundColor = "#ffffff";
  div.style.color = "grey";
  items.style.backgroundColor = "#ffffff";
  items.style.color = "grey";
  background_img.style.backgroundImage = "url('./images/bg-desktop-light.jpg')";
  if (box !== null) {
    box.forEach((element: any) => {
      element.style.backgroundColor = "white";
      element.style.color = "#grey";
    });
  }
});
