document.getElementById("btnSingIn").addEventListener("click", () => {
  const userName = activeUser();
  localStorage.setItem("userName", userName);
  window.location.assign("./index.html");
});

export function activeUser() {
  return document.getElementById("userName_Input").value.toLowerCase();
}

let btnDirect = document.querySelector(".btn_direct_home");
btnDirect.addEventListener("click", () => {
  localStorage.clear();
  localStorage.setItem("userName", null);
  window.location.assign("./index.html");
});
