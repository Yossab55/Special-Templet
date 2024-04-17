let getName = document.getElementById("get-name");
let getNameClick = false

getName.onclick = function () {
  if (getNameClick) {
    getName.removeEventListener("click", function() {});
    return;
  }
  getName.style.cursor = "default";
  getNameClick = true
  let takeNameOverlay = document.createElement("div")
  takeNameOverlay.classList = "overlay";
  document.body.prepend(takeNameOverlay);

  let takeNameDiv = document.createElement("div");
  takeNameDiv.classList = "box-get-name";

  let takeNameH2 = document.createElement("h2");
  takeNameH2.append("Enter Your Name");
  takeNameDiv.append(takeNameH2);

  let takeNameInput = document.createElement("input");
  takeNameInput.classList = "get-name";
  takeNameInput.setAttribute("type", "text");
  takeNameInput.setAttribute("placeholder", "Unknown");
  takeNameDiv.append(takeNameInput);
  
  let takeNameButton = document.createElement("button");
  takeNameButton.append("Send")
  takeNameButton.onclick = function () {
    getName.innerText = takeNameInput.value || "Unknown";
    takeNameOverlay.remove();
    takeNameButton.parentElement.remove();
  }
  takeNameDiv.append(takeNameButton);
  takeNameOverlay.after(takeNameDiv);
}