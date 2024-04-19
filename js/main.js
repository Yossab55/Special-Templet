let getName = document.getElementById("get-name");
let buttonNameClicked = false;
// get name section
getName.onclick = function () {
  if (!buttonNameClicked) {
    buttonNameClicked = true;
    let takeNameOverlay = document.createElement("div"),
      takeNameDiv = document.createElement("div"),
      takeNameH2 = document.createElement("h2"),
      takeNameInput = document.createElement("input"),
      takeNameButton = document.createElement("button");

    getName.style.cursor = "default";
    takeNameOverlay.classList = "overlay";
    takeNameOverlay.addEventListener("click", function () {
      getName.innerText = takeNameInput.value || "Unknown";
      takeNameOverlay.remove();
      takeNameDiv.remove();
    });
    document.body.prepend(takeNameOverlay);

    takeNameDiv.classList = "box-get-name";

    takeNameH2.append("Enter Your Name");
    takeNameDiv.append(takeNameH2);

    takeNameInput.classList = "get-name";
    takeNameInput.setAttribute("type", "text");
    takeNameInput.setAttribute("placeholder", "Unknown");
    takeNameDiv.append(takeNameInput);

    takeNameButton.append("Send");
    takeNameButton.addEventListener("click", function () {
      getName.innerText = takeNameInput.value || "Unknown";

      getName.removeEventListener("click", function () {});
      takeNameOverlay.remove();
      takeNameDiv.remove();
    });
    takeNameDiv.append(takeNameButton);
    takeNameOverlay.after(takeNameDiv);
  }
};
// three dots for menu
let threeDots = document.getElementById("menu-list");
threeDots.remove();
if (document.documentElement.clientWidth <= 767) {
  let menuUL = document.getElementById("normal");
  let menuPhoneOpen = false;
  menuUL.remove();
  document.querySelector(".landing .container header h2").after(threeDots);
  threeDots.addEventListener("click", function makeList() {
    if (!menuPhoneOpen) {
      menuPhoneOpen = true;
      let menuPhone = document.createElement("ul");
      let menuText = ["Home", "About us", "Work", "info"];
      menuPhone.setAttribute("id", "menu_continer");
      menuPhone.style.cssText = `
      display: flex;
      flex-direction: column;
      padding: 10px 10px 10px 5px;
      position: absolute;
      top: 0px;
      right: 0px;
      z-index: 1004;
      background: #f0f3fc;
      border-radius: 25px;
      margin-bottom: 5px;
      box-shadow: rgba(22, 21, 21, 0.46) -5px 5px 10px;
      `;
      for (let i = 0; i < 4; i++) {
        let li = document.createElement("li");
        let link = document.createElement("a");
        link.append(`${menuText[i]}`);
        link.setAttribute("href", `#${menuText[i]}`);
        li.append(link);
        menuPhone.append(li);
      }
      threeDots.after(menuPhone);
    }
  });
  document.body.addEventListener("click", (e) => {
    let menu = document.getElementById("menu_continer");
    if (
      e.target !== menu &&
      e.target !== threeDots &&
      !menu.contains(e.target)
    ) {
      menu.remove();
      menuPhoneOpen = false;
    }
  });
}

// make random background
if (document.documentElement.clientWidth > 767) {
  let landingImages = document.querySelectorAll(".landing .content img"),
    imageCounter = 0,
    landingContentDiv = document.querySelector(".landing .content"),
    landingImageSize = landingImages.length;
  console.log("ssss")
  landingImages.forEach((ele) => ele.remove());
  landingContentDiv.append(landingImages[imageCounter]);
  let chose = setInterval(function () {
    landingImages[imageCounter].remove();
    imageCounter++;
    if (!(imageCounter < landingImageSize)) imageCounter = 0;
    landingContentDiv.append(landingImages[imageCounter]);
  }, 10000);
}
