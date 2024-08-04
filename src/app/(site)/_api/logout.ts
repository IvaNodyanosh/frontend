export async function logout(setUser, token) {
  await fetch("http://localhost:3100/api/users/logout", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json; charset=utf-8",
    },
  });

  setUser({
    name: "",
    surname: "",
    statusUser: "",
    token: "",
    avatarUrl: "",
  });
  localStorage.removeItem("token");
}
