export async function registerUser(
  name,
  surname,
  email,
  phone,
  password,
  setLoading
) {
  const body = { name, surname, email, phone, password };

  const data = await fetch("http://localhost:3100/api/users/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify(body),
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => data);

  if (data.message === "Email in use") {
    setLoading("emailRegistered");
  } else if (data.user) {
    setLoading("success");
  } else {
    setLoading("error");
  }

  console.log(data);
}

export async function resetPassword(email, setLoading) {
  const body = { email };

  const data = await fetch("http://localhost:3100/api/users/password", {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify(body),
  })
    .then((res) => res.json())
    .then((data) => data);

  console.log(data.message);
  if (data.message === "Recovery email sended") {
    setLoading("success");
  } else if (data.message === "The user is blocked") {
    setLoading("userBlocked");
  } else if (data.message === "User not found") {
    setLoading("userNotFound");
  } else {
    setLoading("error");
  }
}