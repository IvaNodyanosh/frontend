

export async function login(
  email: string,
  password: string,
  setLoading: Function,
  setUser: Function
) {
  const body = { email, password };

  const data: {
    avatarUrl: string;
    name: string;
    statusUser: string;
    surname: string;
    token: string;
    message?: string;
  } = await fetch("http://localhost:3100/api/users/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify(body),
  })
    .then((res) => res.json())
    .then((data) => data);

  if (
    data.token &&
    data.name &&
    data.surname &&
    data.avatarUrl &&
    data.statusUser
  ) {
    setUser({
      name: data.name,
      surname: data.surname,
      avatarUrl: data.avatarUrl,
      statusUser: data.statusUser,
      token: data.token,
    });

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
