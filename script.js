const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const checkbox = document.getElementById("checkbox");
const submitBtn = document.getElementById("submit");
const existingBtn = document.getElementById("existing");
const form = document.getElementById("loginForm");

window.addEventListener("load", () => {
  const savedUsername = localStorage.getItem("username");
  const savedPassword = localStorage.getItem("password");

  if (savedUsername && savedPassword) {
    existingBtn.style.display = "inline-block";
  } else {
    existingBtn.style.display = "none"; 
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();

  if (!username || !password) {
    alert("Please fill in both fields!");
    return;
  }

  alert(`Logged in as ${username}`);

  if (checkbox.checked) {
    
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
  } else {
    
    localStorage.removeItem("username");
    localStorage.removeItem("password");
  }

  
  window.location.reload();
});


existingBtn.addEventListener("click", () => {
  const savedUsername = localStorage.getItem("username");
  if (savedUsername) {
    alert(`Logged in as ${savedUsername}`);
  }
});