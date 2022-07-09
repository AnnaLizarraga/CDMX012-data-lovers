document.getElementById("btnSingIn").addEventListener("click", () => {
  const userName = inputPokemonName2();
  console.log(userName);
  localStorage.setItem("userName", userName);
  window.location.assign("./index.html");
});

export function inputPokemonName2() {
  return document.getElementById("userName_Input").value.toLowerCase();
}

let btnDirect = document.querySelector(".btn_direct_home");
btnDirect.addEventListener("click", () => {
  localStorage.clear();
  window.location.assign("./index.html");
});
