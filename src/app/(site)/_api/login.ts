

export async function login(email, password, setLoading, setUser) {
  const body = { email, password };

  const data = await fetch("http://localhost:3100/api/users/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify(body),
  })
    .then((res) => res.json())
    .then((data) => data);

  if (data.token) {
    setUser(data);
    setLoading("success");

    localStorage.setItem("token", `${data.token}`);
  } else if (data.message === "The user is blocked") {
    setLoading("userBlocked");
  } else if (data.message === "Email or password is wrong") {
    setLoading("wrongInfo");
  } else if (data.message === "Email is not verify") {
    setLoading("notVerify");
  } else {
    setLoading("error");
  }
}
