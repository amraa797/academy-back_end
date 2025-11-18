const addBtn = document.getElementById("submit");

const addBtnFunc = async () => {
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const emailss = email.value;
  const passsss = password.value;

  const response = await fetch("http://localhost:3000/user/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ emailss, passsss }),
  });

  console.log(response, "emailss");
};

addBtn.addEventListener("click", addBtnFunc);
