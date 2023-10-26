let display = document.getElementById("display");
display.innerText = "";

let buttons = Array.from(document.querySelectorAll(".button"));

buttons.map((button) => {
  button.addEventListener("click", (e) => {
    switch (e.target.innerText) {
      case "C":
        display.innerText = "";
        break;

      case "=":
        display.innerText = eval(display.innerText);
        break;

      case "←":
        try {
          display.innerText = display.innerText.slice(0, -1);
        } catch (error) {
          display.innerText = "Error";
        }
        break;

      default:
        display.innerText += e.target.innerText;
        break;
    }
  });
});
