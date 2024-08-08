export async function reset(password: string, token: string, setLoading: Function) {
  const body = { password };

  const data = await fetch(
    `http://localhost:3100/api/users/password/${token}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(body),
    }
  )
    .then((res) => res.json())
    .then((data) => data);

  console.log(data.message);
  if (data.message === "Reset password successful") {
    setLoading("success");
  } else if (data.message === "The user is blocked") {
    setLoading("userBlocked");
  } else if (data.message === "User not found") {
    setLoading("userNotFound");
  } else {
    setLoading("error");
  }
}
